import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
    name: z.string().trim().min(2).max(80),
    email: z.string().trim().email().max(120),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    subject: z.string().trim().min(2).max(200),
    company: z.string().trim().max(120).optional().or(z.literal("")),
    message: z.string().trim().min(2).max(2400),
    website: z.string().max(0).optional().or(z.literal("")),
})

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
    try {
        const payload: unknown = await request.json()
        const result = contactSchema.safeParse(payload)

        if (!result.success) {
            console.error(result.error.flatten())
            return NextResponse.json({ code: "invalid" }, { status: 400 })
        }

        if (result.data.website) {
            return NextResponse.json({ code: "success" }, { status: 200 })
        }

        const resendApiKey = process.env.RESEND_API_KEY
        const fromEmail = process.env.CONTACT_FROM_EMAIL
        const contactEmail = process.env.CONTACT_EMAIL

        if (!resendApiKey || !fromEmail || !contactEmail) {
            return NextResponse.json({ code: "not_configured" }, { status: 503 })
        }

        const resend = new Resend(resendApiKey)

        const safeName = escapeHtml(result.data.name)
        const safeEmail = escapeHtml(result.data.email)
        const safePhone = escapeHtml(result.data.phone || "Not provided")
        const safeCompany = escapeHtml(result.data.company || "Not provided")
        const safeSubject = escapeHtml(result.data.subject)
        const safeMessage = escapeHtml(result.data.message)

        const { error } = await resend.emails.send({
            from: `Halachev <${fromEmail}>`,
            to: [contactEmail],
            replyTo: result.data.email,
            subject: result.data.subject,
            text: [
                `Name: ${result.data.name}`,
                `Email: ${result.data.email}`,
                `Phone: ${result.data.phone || "Not provided"}`,
                `Company / context: ${result.data.company || "Not provided"}`,
                `Subject: ${result.data.subject}`,
                "",
                result.data.message,
            ].join("\n"),
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #0f172a;">
                  <h1 style="font-size: 20px; margin-bottom: 16px;">New contact inquiry</h1>
                  <p><strong>Name:</strong> ${safeName}</p>
                  <p><strong>Email:</strong> ${safeEmail}</p>
                  <p><strong>Phone:</strong> ${safePhone}</p>
                  <p><strong>Company / context:</strong> ${safeCompany}</p>
                  <p><strong>Subject:</strong> ${safeSubject}</p>
                  <div style="margin-top: 24px; padding: 16px; border-radius: 16px; background: #f8fafc;">
                    <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
                  </div>
                </div>
            `,
        })

        if (error) {
            console.error(error)
            return NextResponse.json({ code: "error" }, { status: 500 })
        }

        return NextResponse.json({ code: "success" }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ code: "error" }, { status: 500 })
    }
}