import { beforeEach, describe, expect, it, vi } from "vitest"

describe("api service", () => {
    beforeEach(() => {
        vi.resetModules()
        vi.stubGlobal("fetch", vi.fn())
    })

    it("normalizes paths, applies the API base URL and default JSON headers", async () => {
        vi.stubEnv("NEXT_PUBLIC_API_URL", "https://api.example.com")
        const fetchMock = vi.mocked(fetch)
        fetchMock.mockResolvedValue(new Response("{}", { status: 200 }))

        const { apiFetch } = await import("./api")
        await apiFetch("users", { method: "POST", body: "{}" })

        expect(fetchMock).toHaveBeenCalledTimes(1)
        const [url, options] = fetchMock.mock.calls[0]
        expect(url).toBe("https://api.example.com/api/users")
        expect(options).toMatchObject({
            credentials: "include",
            method: "POST",
            body: "{}",
        })
        expect(new Headers(options?.headers).get("Content-Type")).toBe("application/json")
    })

    it("preserves an explicit content type", async () => {
        vi.stubEnv("NEXT_PUBLIC_API_URL", "https://api.example.com")
        const fetchMock = vi.mocked(fetch)
        fetchMock.mockResolvedValue(new Response("{}", { status: 200 }))

        const { apiFetch } = await import("./api")
        await apiFetch("/upload", {
            headers: { "Content-Type": "text/plain", "X-Test": "yes" },
        })

        const [, options] = fetchMock.mock.calls[0]
        const headers = new Headers(options?.headers)
        expect(headers.get("Content-Type")).toBe("text/plain")
        expect(headers.get("X-Test")).toBe("yes")
    })

    it("can skip the JSON content type", async () => {
        vi.stubEnv("NEXT_PUBLIC_API_URL", "https://api.example.com")
        const fetchMock = vi.mocked(fetch)
        fetchMock.mockResolvedValue(new Response("{}", { status: 200 }))

        const { apiFetch } = await import("./api")
        await apiFetch("/health", { skipJsonContentType: true })

        const [, options] = fetchMock.mock.calls[0]
        expect(new Headers(options?.headers).has("Content-Type")).toBe(false)
    })

    it("uses a relative /api URL and parses addNumbers response", async () => {
        vi.stubEnv("NEXT_PUBLIC_API_URL", "")
        const json = vi.fn().mockResolvedValue({ result: 7 })
        const fetchMock = vi.mocked(fetch)
        fetchMock.mockResolvedValue({ json } as unknown as Response)

        const { addNumbers } = await import("./api")
        await expect(addNumbers(3, 4)).resolves.toEqual({ result: 7 })

        expect(fetchMock).toHaveBeenCalledWith("/api/test/add?a=3&b=4", {
            credentials: "include",
            headers: expect.any(Headers),
            method: "GET",
        })
        const [, options] = fetchMock.mock.calls[0]
        expect(new Headers(options?.headers).has("Content-Type")).toBe(false)
        expect(json).toHaveBeenCalledTimes(1)
    })
})
