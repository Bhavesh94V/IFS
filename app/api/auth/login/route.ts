import type { NextRequest } from "next/server"
import { handleLoginRegister } from "@/backend/auth/auth-controller"

export async function POST(req: NextRequest) {
  return handleLoginRegister(req)
}
