// @vitest-environment node
import { beforeEach, describe, expect, it, vi } from "vitest"

const resendMocks = vi.hoisted(() => ({
    send: vi.fn(),
    constructor: vi.fn(),
    Resend: vi.fn(),
}))

vi.mock("resend", () => ({
    Resend: resendMocks.Resend,
}))

import { POST } from "./route"

const validPayload = {
    name: "Nikola",
    email: "nikola@example.com",
    phone: "0888123456",
    subject: "Consultation",
    company: "Example Ltd",
    message: "I need accounting consultation.",
    website: "",
}

function makeRequest(body: unknown) {
    return new Request("http://localhost/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })
}

async function responseBody(response: Response) {
    return response.json() as Promise<{ code: string }>
}

describe("POST /api/contact", () => {
    beforeEach(() => {
        vi.clearAllMocks()
        resendMocks.Resend.mockImplementation((apiKey: string) => {
            resendMocks.constructor(apiKey)
            return { emails: { send: resendMocks.send } }
        })
        process.env.RESEND_API_KEY = "test-key"
        process.env.CONTACT_FROM_EMAIL = "from@example.com"
        process.env.CONTACT_EMAIL = "contact@example.com"
        vi.spyOn(console, "error").mockImplementation(() => undefined)
    })

    it("returns 400 for invalid input", async () => {
        const response = await POST(makeRequest({ ...validPayload, email: "invalid" }))

        expect(response.status).toBe(400)
        await expect(responseBody(response)).resolves.toEqual({ code: "invalid" })
        expect(resendMocks.send).not.toHaveBeenCalled()
    })

    it("treats a filled honeypot as a successful bot submission without sending email", async () => {
        const response = await POST(makeRequest({ ...validPayload, website: "bot-value" }))

        expect(response.status).toBe(200)
        await expect(responseBody(response)).resolves.toEqual({ code: "success" })
        expect(resendMocks.send).not.toHaveBeenCalled()
    })

    it.each([
        ["RESEND_API_KEY"],
        ["CONTACT_FROM_EMAIL"],
        ["CONTACT_EMAIL"],
    ])("returns 503 when %s is missing", async (key) => {
        delete process.env[key]

        const response = await POST(makeRequest(validPayload))

        expect(response.status).toBe(503)
        await expect(responseBody(response)).resolves.toEqual({ code: "not_configured" })
        expect(resendMocks.send).not.toHaveBeenCalled()
    })

    it("sends a sanitized HTML email and returns success", async () => {
        resendMocks.send.mockResolvedValue({ data: { id: "mail-1" }, error: null })

        const payload = {
            ...validPayload,
            name: "<Nik & \"O'\">",
            phone: "<123>",
            subject: "<Help>",
            company: "A&B",
            message: "<script>alert(\"x\")</script> ' &",
        }

        const response = await POST(makeRequest(payload))

        expect(response.status).toBe(200)
        await expect(responseBody(response)).resolves.toEqual({ code: "success" })
        expect(resendMocks.constructor).toHaveBeenCalledWith("test-key")
        expect(resendMocks.send).toHaveBeenCalledTimes(1)

        const mail = resendMocks.send.mock.calls[0][0]
        expect(mail).toMatchObject({
            from: "Halachev <from@example.com>",
            to: ["contact@example.com"],
            replyTo: payload.email,
            subject: payload.subject,
        })
        expect(mail.text).toContain(payload.message)
        expect(mail.html).toContain("&lt;Nik &amp; &quot;O&#39;&quot;&gt;")
        expect(mail.html).toContain("&lt;123&gt;")
        expect(mail.html).toContain("&lt;Help&gt;")
        expect(mail.html).toContain("A&amp;B")
        expect(mail.html).toContain("&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt; &#39; &amp;")
    })

    it("uses fallback optional values and returns 500 when Resend returns an error", async () => {
        resendMocks.send.mockResolvedValue({ data: null, error: { message: "send failed" } })

        const response = await POST(
            makeRequest({ ...validPayload, phone: "", company: "" })
        )

        expect(response.status).toBe(500)
        await expect(responseBody(response)).resolves.toEqual({ code: "error" })

        const mail = resendMocks.send.mock.calls[0][0]
        expect(mail.text).toContain("Phone: Not provided")
        expect(mail.text).toContain("Company / context: Not provided")
        expect(mail.html).toContain("Phone:</strong> Not provided")
        expect(mail.html).toContain("Company / context:</strong> Not provided")
    })

    it("returns 500 when request parsing throws", async () => {
        const request = {
            json: vi.fn().mockRejectedValue(new Error("invalid json")),
        } as unknown as Request

        const response = await POST(request)

        expect(response.status).toBe(500)
        await expect(responseBody(response)).resolves.toEqual({ code: "error" })
    })

    it("returns 500 when the email provider throws", async () => {
        resendMocks.send.mockRejectedValue(new Error("network failure"))

        const response = await POST(makeRequest(validPayload))

        expect(response.status).toBe(500)
        await expect(responseBody(response)).resolves.toEqual({ code: "error" })
    })
})
