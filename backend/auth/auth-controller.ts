import { type NextRequest, NextResponse } from "next/server"
import { generateOTP, sendOtpEmail } from "./nodemailer"
import { generateToken, verifyToken } from "./jwt"
import { v4 as uuidv4 } from "uuid"

// In-memory storage for OTPs and users (in a real app, use a database)
const otpStore: Record<string, { otp: string; expires: number }> = {}
const userStore: Record<
  string,
  {
    id: string
    email: string
    name: string
    password: string
    phone?: string
    profileImage?: string
    investments?: Array<{
      id: string
      planType: string
      amount: number
      startDate: string
      currentValue: number
      nextPayoutDate: string
    }>
  }
> = {}

// Function to handle login/register request
export async function handleLoginRegister(req: NextRequest) {
  try {
    const { email, name, password, loginType = "password" } = await req.json()

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 })
    }

    // Check if user exists
    const userExists = userStore[email]

    // If registering and user already exists, return error
    if (!userExists && !name) {
      return NextResponse.json(
        {
          success: false,
          message: "Account not found. Please register first.",
          code: "USER_NOT_FOUND",
        },
        { status: 404 },
      )
    }

    // If user exists and trying to register again, return error
    if (userExists && name) {
      return NextResponse.json(
        {
          success: false,
          message: "An account with this email already exists. Please login instead.",
          code: "USER_EXISTS",
        },
        { status: 400 },
      )
    }

    const userId = userExists ? userExists.id : uuidv4()

    // If user doesn't exist, create a new user
    if (!userExists && name) {
      userStore[email] = {
        id: userId,
        email,
        name,
        password: password || "", // In a real app, hash the password
        investments: [],
      }
    }

    // For password login, verify password
    if (loginType === "password" && userExists) {
      if (userExists.password !== password) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid password",
            code: "INVALID_PASSWORD",
          },
          { status: 401 },
        )
      }

      // Generate JWT token
      const token = generateToken({
        id: userExists.id,
        email: userExists.email,
        name: userExists.name,
      })

      return NextResponse.json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: userExists.id,
          email: userExists.email,
          name: userExists.name,
          phone: userExists.phone,
          profileImage: userExists.profileImage,
        },
      })
    }

    // For OTP login/register, generate and send OTP
    const otp = generateOTP()
    const expiryTime = Date.now() + 10 * 60 * 1000 // 10 minutes

    // Store OTP
    otpStore[email] = {
      otp,
      expires: expiryTime,
    }

    // Send OTP email
    const emailSent = await sendOtpEmail(email, otp)

    if (!emailSent) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send OTP email. Please try again.",
          code: "EMAIL_FAILED",
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "OTP sent successfully",
      isNewUser: !userExists,
    })
  } catch (error) {
    console.error("Login/Register error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

// Function to verify OTP
export async function verifyOTP(req: NextRequest) {
  try {
    const { email, otp } = await req.json()

    if (!email || !otp) {
      return NextResponse.json({ success: false, message: "Email and OTP are required" }, { status: 400 })
    }

    // Check if OTP exists and is valid
    const storedOTP = otpStore[email]
    if (!storedOTP || storedOTP.otp !== otp) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid OTP. Please try again.",
          code: "INVALID_OTP",
        },
        { status: 400 },
      )
    }

    // Check if OTP is expired
    if (Date.now() > storedOTP.expires) {
      delete otpStore[email] // Clean up expired OTP
      return NextResponse.json(
        {
          success: false,
          message: "OTP expired. Please request a new one.",
          code: "OTP_EXPIRED",
        },
        { status: 400 },
      )
    }

    // OTP is valid, clean up
    delete otpStore[email]

    // Get user data
    const user = userStore[email]
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
    }

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      name: user.name,
    })

    return NextResponse.json({
      success: true,
      message: "OTP verified successfully",
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        profileImage: user.profileImage,
        investments: user.investments,
      },
    })
  } catch (error) {
    console.error("OTP verification error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

// Function to handle logout
export async function handleLogout(req: NextRequest) {
  // In a real app, you might want to invalidate the token
  // For now, we'll just return a success response
  return NextResponse.json({
    success: true,
    message: "Logged out successfully",
  })
}

// Function to update user profile
export async function updateUserProfile(req: NextRequest) {
  try {
    const { token } = await req.json()

    // Verify token
    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired token",
          code: "INVALID_TOKEN",
        },
        { status: 401 },
      )
    }

    const { email } = decoded
    const userData = await req.json()

    // Get user data
    const user = userStore[email]
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
    }

    // Update user data
    if (userData.name) user.name = userData.name
    if (userData.phone) user.phone = userData.phone
    if (userData.profileImage) user.profileImage = userData.profileImage

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        profileImage: user.profileImage,
      },
    })
  } catch (error) {
    console.error("Profile update error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

// Function to get user investments
export async function getUserInvestments(req: NextRequest) {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.get("Authorization")
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          success: false,
          message: "Authorization header missing or invalid",
          code: "AUTH_HEADER_INVALID",
        },
        { status: 401 },
      )
    }

    const token = authHeader.split(" ")[1]

    // Verify token
    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired token",
          code: "INVALID_TOKEN",
        },
        { status: 401 },
      )
    }

    const { email } = decoded

    // Get user data
    const user = userStore[email]
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      investments: user.investments || [],
    })
  } catch (error) {
    console.error("Get investments error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

// Function to add a new investment
export async function addInvestment(req: NextRequest) {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.get("Authorization")
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          success: false,
          message: "Authorization header missing or invalid",
          code: "AUTH_HEADER_INVALID",
        },
        { status: 401 },
      )
    }

    const token = authHeader.split(" ")[1]

    // Verify token
    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired token",
          code: "INVALID_TOKEN",
        },
        { status: 401 },
      )
    }

    const { email } = decoded

    // Get user data
    const user = userStore[email]
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
    }

    // Get investment data
    const investmentData = await req.json()

    // Create new investment
    const newInvestment = {
      id: uuidv4(),
      planType: investmentData.planType,
      amount: investmentData.amount,
      startDate: new Date().toISOString(),
      currentValue: investmentData.amount,
      nextPayoutDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days from now
    }

    // Add investment to user
    if (!user.investments) {
      user.investments = []
    }

    user.investments.push(newInvestment)

    return NextResponse.json({
      success: true,
      message: "Investment added successfully",
      investment: newInvestment,
    })
  } catch (error) {
    console.error("Add investment error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
