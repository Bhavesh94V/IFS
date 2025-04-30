"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BarChart3, CreditCard, HelpCircle, LineChart, Phone, PieChart, User, Wallet } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth/auth-provider"

export default function DashboardPage() {
  const router = useRouter()
  const { user, isAuthenticated, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/")
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dark-green"></div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-dark-green mb-2">Welcome, IFS Member</h1>
            <p className="text-gray-600">Manage your investments and track your financial growth</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild>
              <Link href="/calculator?tab=invest">New Investment</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-dark-green to-light-green text-white">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/80 text-sm">Total Investment</p>
                  <p className="text-3xl font-bold">₹50,000</p>
                </div>
                <div className="bg-white/10 p-3 rounded-full">
                  <Wallet className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex justify-between text-sm">
                  <span>Current Value</span>
                  <span className="font-medium">₹58,125</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>Total Profit</span>
                  <span className="font-medium">₹8,125 (16.25%)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Active Plans</p>
                  <p className="text-3xl font-bold text-dark-green">2</p>
                </div>
                <div className="bg-dark-green/10 p-3 rounded-full">
                  <PieChart className="h-6 w-6 text-dark-green" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span>Quarterly Compounding</span>
                  <span className="font-medium">₹30,000</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>Tree Family Plan</span>
                  <span className="font-medium">₹20,000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Next Payout</p>
                  <p className="text-3xl font-bold text-accent">₹3,000</p>
                </div>
                <div className="bg-accent/10 p-3 rounded-full">
                  <CreditCard className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span>Date</span>
                  <span className="font-medium">30 Jun 2023</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>Status</span>
                  <span className="font-medium text-green-600">Scheduled</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="investments" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="investments">My Investments</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="investments">
            <Card>
              <CardHeader>
                <CardTitle>Investment Portfolio</CardTitle>
                <CardDescription>Overview of your active investment plans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-dark-green text-white px-4 py-3 flex justify-between items-center">
                      <h3 className="font-medium">Quarterly Compounding Plan</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Investment Amount</p>
                          <p className="font-bold">₹30,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Current Value</p>
                          <p className="font-bold text-dark-green">₹34,875</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Start Date</p>
                          <p className="font-medium">01 Jan 2023</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Next Payout</p>
                          <p className="font-medium">30 Jun 2023</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/dashboard/investments/1">
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gold text-white px-4 py-3 flex justify-between items-center">
                      <h3 className="font-medium">Tree Family Plan</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Investment Amount</p>
                          <p className="font-bold">₹20,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Current Value</p>
                          <p className="font-bold text-dark-green">₹23,250</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Start Date</p>
                          <p className="font-medium">15 Feb 2023</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Next Payout</p>
                          <p className="font-medium">15 Aug 2023</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/dashboard/investments/2">
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Investment Reports</CardTitle>
                <CardDescription>Track your investment performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <LineChart className="h-5 w-5 text-dark-green mr-2" />
                        <h3 className="font-medium">Growth Analysis</h3>
                      </div>
                      <Button variant="outline" size="sm">
                        Download PDF
                      </Button>
                    </div>
                    <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                      <p className="text-gray-500">Growth chart would be displayed here</p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <BarChart3 className="h-5 w-5 text-dark-green mr-2" />
                        <h3 className="font-medium">Quarterly Returns</h3>
                      </div>
                      <Button variant="outline" size="sm">
                        Download PDF
                      </Button>
                    </div>
                    <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                      <p className="text-gray-500">Returns chart would be displayed here</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your personal and bank details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-dark-green mr-2" />
                        <h3 className="font-medium">Personal Details</h3>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/dashboard/profile">Edit</Link>
                      </Button>
                    </div>
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">{user?.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{user?.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">+91 9876543210</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">PAN</p>
                        <p className="font-medium">ABCDE1234F</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 text-dark-green mr-2" />
                        <h3 className="font-medium">Bank Details</h3>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/dashboard/bank-details">Edit</Link>
                      </Button>
                    </div>
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Account Number</p>
                        <p className="font-medium">XXXX XXXX 1234</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">IFSC Code</p>
                        <p className="font-medium">SBIN0001234</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Account Type</p>
                        <p className="font-medium">Savings</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Bank Name</p>
                        <p className="font-medium">State Bank of India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex items-start">
            <div className="bg-dark-green/10 p-3 rounded-full mr-4">
              <HelpCircle className="h-6 w-6 text-dark-green" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">24/7 Customer Support</h3>
              <p className="text-gray-600 mb-4">
                Our dedicated support team is available round the clock to assist you with any queries or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex items-center" asChild>
                  <a href="tel:+911234567890">
                    <Phone className="mr-2 h-4 w-4" /> Call Support
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
