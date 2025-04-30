"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Lock, User, ArrowRight, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "./auth-provider"

interface LoginRegisterModalProps {
  trigger?: React.ReactNode
  defaultTab?: "login" | "register" | "otp"
  onSuccess?: () => void
}

export default function LoginRegisterModal({ trigger, defaultTab = "login", onSuccess }: LoginRegisterModalProps) {
  const { login } = useAuth()
  const [activeTab, setActiveTab] = useState<"login" | "register" | "otp">(defaultTab)
  const [loginType, setLoginType] = useState<"password" | "otp">("password")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0]
    }

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          loginType,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Login failed")
      }

      if (loginType === "password" && data.success) {
        // Password login successful
        login(data.token, data.user)
        setOpen(false)
        if (onSuccess) onSuccess()
        window.location.reload()
      } else if (loginType === "otp" && data.success) {
        // OTP sent successfully
        setActiveTab("otp")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Registration failed")
      }

      if (data.success) {
        setActiveTab("otp")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const otpString = otp.join("")

      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp: otpString,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "OTP verification failed")
      }

      if (data.success) {
        // Store user data and token
        login(data.token, data.user)

        // Close modal and trigger success callback
        setOpen(false)
        if (onSuccess) onSuccess()

        // Reload page to update UI based on authentication state
        window.location.reload()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "OTP verification failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendOtp = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          loginType: "otp",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to resend OTP")
      }

      // Show success message
      setError("OTP has been resent to your email")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to resend OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger || <Button>Login / Register</Button>}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {activeTab !== "otp" ? (
          <>
            <DialogHeader>
              <DialogTitle>Welcome to Infinium Finance Solution</DialogTitle>
              <DialogDescription>
                {activeTab === "login"
                  ? "Login to access your investment dashboard"
                  : "Create an account to start your investment journey"}
              </DialogDescription>
            </DialogHeader>

            {error && (
              <Alert variant={error.includes("resent") ? "default" : "destructive"} className="my-2">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Tabs defaultValue={activeTab} className="w-full" onValueChange={(value) => setActiveTab(value as any)}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Label htmlFor="login-type">Login with:</Label>
                    <div className="flex space-x-2">
                      <Button
                        type="button"
                        variant={loginType === "password" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setLoginType("password")}
                      >
                        Password
                      </Button>
                      <Button
                        type="button"
                        variant={loginType === "otp" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setLoginType("otp")}
                      >
                        OTP
                      </Button>
                    </div>
                  </div>

                  {loginType === "password" && (
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Login <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="pl-10"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="you@example.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Register <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Verify Your Email</DialogTitle>
              <DialogDescription>
                We've sent a 6-digit OTP to {email}. Please enter it below to verify your account.
              </DialogDescription>
            </DialogHeader>

            {error && (
              <Alert variant={error.includes("resent") ? "default" : "destructive"} className="my-2">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleVerifyOtp} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <div className="flex justify-between gap-2">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      className="w-10 h-12 text-center text-lg"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      required
                    />
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Verify OTP <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>

              <p className="text-center text-sm text-gray-500">
                Didn't receive the OTP?{" "}
                <Button variant="link" className="p-0 h-auto" onClick={handleResendOtp} disabled={isLoading}>
                  Resend
                </Button>
              </p>
            </form>
          </>
        )}

        <DialogFooter className="flex flex-col">
          <p className="text-center text-xs text-gray-500">
            By continuing, you agree to our{" "}
            <a href="/terms" className="underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
