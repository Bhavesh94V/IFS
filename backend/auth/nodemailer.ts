import nodemailer from "nodemailer"

// Check if we're in a preview environment
const isPreviewEnvironment = process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview"

// Create a mock transporter for preview environments
const mockTransporter = {
  verify: async () => true,
  sendMail: async (mailOptions: any) => {
    console.log("PREVIEW MODE: Email would be sent with these options:", mailOptions)
    return { messageId: "mock-message-id-" + Date.now() }
  },
}

// Create a real transporter for production
const createRealTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
}

// Choose the appropriate transporter based on environment
const transporter = isPreviewEnvironment ? mockTransporter : createRealTransporter()

// Function to send OTP email
export async function sendOtpEmail(email: string, otp: string): Promise<boolean> {
  try {
    if (isPreviewEnvironment) {
      console.log(`PREVIEW MODE: Would send OTP ${otp} to ${email}`)
      return true
    }

    // Verify SMTP connection configuration
    await transporter.verify()
    console.log("SMTP connection verified successfully")

    const mailOptions = {
      from: `"MSV Infotech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP for MSV Infotech Account Verification",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="background-color: #0a3d3f; padding: 15px; text-align: center; border-radius: 5px 5px 0 0;">
            <h1 style="color: white; margin: 0;">MSV Infotech</h1>
          </div>
          <div style="padding: 20px;">
            <h2 style="color: #0a3d3f;">Account Verification</h2>
            <p>Thank you for registering with MSV Infotech. To complete your account verification, please use the following OTP:</p>
            <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; margin: 20px 0;">
              ${otp}
            </div>
            <p>This OTP is valid for 10 minutes. Please do not share this OTP with anyone.</p>
            <p>If you did not request this OTP, please ignore this email or contact our support team.</p>
            <p style="margin-top: 30px;">Best regards,<br>MSV Infotech Team</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 5px 5px;">
            <p>© ${new Date().getFullYear()} MSV Infotech Pvt. Ltd. All rights reserved.</p>
            <p>123 Financial District, Mumbai, Maharashtra, India</p>
          </div>
        </div>
      `,
    }

    console.log("Sending email to:", email)
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully. Message ID:", info.messageId)
    return true
  } catch (error) {
    console.error("Error sending email:", error)

    // In preview mode, we'll still return success
    if (isPreviewEnvironment) {
      console.log("PREVIEW MODE: Simulating successful email delivery despite error")
      return true
    }

    return false
  }
}

// Function to send contact form email
export async function sendContactEmail(formData: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}): Promise<boolean> {
  try {
    if (isPreviewEnvironment) {
      console.log(`PREVIEW MODE: Would send contact form from ${formData.email} with subject "${formData.subject}"`)
      console.log("Form data:", formData)
      return true
    }

    // Verify SMTP connection configuration
    await transporter.verify()
    console.log("SMTP connection verified successfully")

    const mailOptions = {
      from: `"MSV Infotech Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to your own email
      subject: `Contact Form: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="background-color: #0a3d3f; padding: 15px; text-align: center; border-radius: 5px 5px 0 0;">
            <h1 style="color: white; margin: 0;">MSV Infotech - Contact Form</h1>
          </div>
          <div style="padding: 20px;">
            <h2 style="color: #0a3d3f;">New Contact Form Submission</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.subject}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Message:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.message}</td>
              </tr>
            </table>
            
            <p style="margin-top: 30px;">This message was sent from the contact form on the MSV Infotech website.</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 5px 5px;">
            <p>© ${new Date().getFullYear()} MSV Infotech Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      `,
      replyTo: formData.email, // Set reply-to as the sender's email
    }

    console.log("Sending contact form email from:", formData.email)
    const info = await transporter.sendMail(mailOptions)
    console.log("Contact form email sent successfully. Message ID:", info.messageId)
    return true
  } catch (error) {
    console.error("Error sending contact form email:", error)

    // In preview mode, we'll still return success
    if (isPreviewEnvironment) {
      console.log("PREVIEW MODE: Simulating successful contact form submission despite error")
      return true
    }

    return false
  }
}

// Function to generate a random 6-digit OTP
export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}
