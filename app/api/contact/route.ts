import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { sendContactEmail } from "@/backend/auth/nodemailer"

// Check if we're in a preview environment
const isPreviewEnvironment = process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json()

    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 },
      )
    }

    // In preview mode, we'll simulate success without actually sending emails
    if (isPreviewEnvironment) {
      console.log("PREVIEW MODE: Contact form submission received:", formData)

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully. (Preview Mode - No actual email sent)",
      })
    }

    // Send email
    const emailSent = await sendContactEmail(formData)

    if (!emailSent) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email. Please try again later.",
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. We'll get back to you shortly.",
    })
  } catch (error) {
    console.error("Contact form error:", error)

    // In preview mode, we'll simulate success even if there's an error
    if (isPreviewEnvironment) {
      console.log("PREVIEW MODE: Simulating successful submission despite error")
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully. (Preview Mode - No actual email sent)",
      })
    }

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred. Please try again later.",
      },
      { status: 500 },
    )
  }
}
