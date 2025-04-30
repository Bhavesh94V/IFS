"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  MapPin,
  User,
  Bell,
  ShoppingCart,
  Wallet,
  LogOut,
  Sun,
  Moon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import LoginRegisterModal from "@/components/auth/login-register-modal"
import { useAuth } from "@/components/auth/auth-provider"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    submenu: [
      { name: "Our Story", href: "/about#story" },
      { name: "Our Team", href: "/about#team" },
      { name: "Our Mission", href: "/about#mission" },
    ],
  },
  {
    name: "Investment Plans",
    href: "/investment-plans",
    submenu: [
      { name: "Quarterly Compounding", href: "/investment-plans#quarterly" },
      { name: "Tree Family Plan", href: "/investment-plans#tree-family" },
      { name: "Systematic Investment", href: "/investment-plans#systematic" },
    ],
  },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Calculator", href: "/calculator" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { user, isAuthenticated, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    window.location.reload()
  }

  return (
    <>
      {/* Top Bar */}
      <div className='bg-dark-green text-white py-2 hidden md:block'>
        <div className='container mx-auto px-4 flex justify-between items-center text-sm'>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center'>
              <Phone className='h-3 w-3 mr-1' />
              <span>+91 1234567890</span>
            </div>
            <div className='flex items-center'>
              <Mail className='h-3 w-3 mr-1' />
              <span>info@infiniumfinance.com</span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center'>
              <Clock className='h-3 w-3 mr-1' />
              <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
            </div>
            <div className='flex items-center'>
              <MapPin className='h-3 w-3 mr-1' />
              <span>Ahmedabad, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "bg-white dark:bg-gray-900 sticky top-0 z-40 transition-all duration-300",
          scrolled ? "shadow-md py-2" : "shadow-sm",
        )}
      >
        <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8" aria-label="Global">
          <div className='flex lg:flex-1'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>MSV Infotech Pvt. Ltd.</span>
              <img
                src='/logo.png' // 👈 Apne logo ka path yahaan daaliye
                alt='MSV Logo'
                className='h-[120px] w-[120px] object-contain transition-transform hover:rotate-12 scale-125'
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) =>
              item.submenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-dark-green dark:hover:text-light-green flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link href={subItem.href} className="w-full">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-dark-green dark:hover:text-light-green relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dark-green dark:bg-light-green transition-all group-hover:w-full"></span>
                </Link>
              ),
            )}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center space-x-4">
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button> */}

            {isAuthenticated ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <div className="p-2 text-sm">
                      <p className="font-medium">Notifications</p>
                      <p className="text-gray-500 text-xs">You have 3 unread notifications</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <div className="flex flex-col">
                        <p className="font-medium">Quarterly return credited</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div className="flex flex-col">
                        <p className="font-medium">KYC verification pending</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div className="flex flex-col">
                        <p className="font-medium">New investment plan launched</p>
                        <p className="text-xs text-gray-500">3 days ago</p>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* <Link href="/dashboard/wallet">
                  <Button variant="ghost" size="icon">
                    <Wallet className="h-5 w-5" />
                  </Button>
                </Link>   

                <Link href="/dashboard/cart">
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-accent"></span>
                  </Button>
                </Link> */}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{user?.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="cursor-pointer">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/profile" className="cursor-pointer">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/investments" className="cursor-pointer">
                        My Investments
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/bank-details" className="cursor-pointer">
                        Bank Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                      <LogOut className="h-4 w-4 mr-2" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <LoginRegisterModal
                trigger={<Button className="bg-accent hover:bg-[hsl(var(--gold-hover))]">Login / Register</Button>}
              />
            )}
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
          <div className="fixed inset-0 bg-black/20" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">MSV Infotech Pvt. Ltd.</span>
                <img
                  src="/logo.png" // 👈 Apne logo ka path yahaan daaliye
                  alt="MSV Logo"
                  className="h-[100px] w-[100px] object-contain transition-transform hover:rotate-12 -scale-130"
                />
              </Link>
              <div className="flex items-center gap-2">
                {/* <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button> */}
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <div className="space-y-2">
                          <div className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 px-3 py-2">
                            {item.name}
                          </div>
                          <div className="pl-4 space-y-1 border-l-2 border-gray-100 dark:border-gray-800">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  {isAuthenticated ? (
                    <div className="space-y-3">
                      <div className="flex items-center px-3">
                        <User className="h-5 w-5 mr-2 text-dark-green dark:text-light-green" />
                        <span className="font-medium">{user?.name}</span>
                      </div>
                      <Link
                        href="/dashboard"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/dashboard/profile"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        href="/dashboard/investments"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        My Investments
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 w-full text-left"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <LoginRegisterModal
                      trigger={
                        <Button className="w-full bg-accent hover:bg-[hsl(var(--gold-hover))]">Login / Register</Button>
                      }
                    />
                  )}
                </div>
                <div className="py-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+91 1234567890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>info@msvinfotech.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
