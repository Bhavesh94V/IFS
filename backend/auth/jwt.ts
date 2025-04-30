import jwt from "jsonwebtoken"

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

// Token expiration time
const TOKEN_EXPIRY = "7d" // 7 days

// Interface for user data
interface UserData {
  id: string
  email: string
  name: string
}

// Function to generate JWT token
export function generateToken(user: UserData): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
    },
    JWT_SECRET,
    {
      expiresIn: TOKEN_EXPIRY,
    },
  )
}

// Function to verify JWT token
export function verifyToken(token: string): UserData | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as UserData
    return decoded
  } catch (error) {
    console.error("Error verifying token:", error)
    return null
  }
}

// Function to extract user from token
export function getUserFromToken(token: string): UserData | null {
  if (!token) return null

  // Remove Bearer prefix if present
  const tokenString = token.startsWith("Bearer ") ? token.slice(7) : token

  return verifyToken(tokenString)
}
