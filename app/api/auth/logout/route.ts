import type { NextRequest } from "next/server"
import { handleLogout } from "@/backend/auth/auth-controller"

export async function POST(req: NextRequest) {
  return handleLogout(req)
}
