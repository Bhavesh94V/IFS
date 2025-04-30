"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface User {
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (token: string, user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: () => {},
  logout: () => {},
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("auth_token")
    const userName = localStorage.getItem("user_name")
    const userEmail = localStorage.getItem("user_email")

    if (token && userName && userEmail) {
      setUser({
        name: userName,
        email: userEmail,
      })
    }

    setIsLoading(false)
  }, [])

  const login = (token: string, user: User) => {
    localStorage.setItem("auth_token", token)
    localStorage.setItem("user_name", user.name)
    localStorage.setItem("user_email", user.email)
    setUser(user)
  }

  const logout = () => {
    localStorage.removeItem("auth_token")
    localStorage.removeItem("user_name")
    localStorage.removeItem("user_email")
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
