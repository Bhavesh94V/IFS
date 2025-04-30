"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Upload, CheckCircle } from "lucide-react"
import LoginRegisterModal from "@/components/auth/login-register-modal"
import { useAuth } from "@/components/auth/auth-provider"

interface InvestmentFormProps {
  defaultPlan?: "quarterly" | "tree-family" | "systematic"
  defaultAmount?: number
}

export default function InvestmentForm({ defaultPlan = "quarterly", defaultAmount = 10000 }: InvestmentFormProps) {
  const { isAuthenticated } = useAuth()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Details
    name: "",
    dob: "",
    pan: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Investment Details
    plan: defaultPlan,
    amount: defaultAmount.toString(),
    tenure: "4", // quarters
    frequency: "quarterly",
    nomineeRelation: "",
    nomineeName: "",

    // Bank Details
    accountNumber: "",
    confirmAccountNumber: "",
    ifsc: "",
    accountType: "savings",
    idProof: null as File | null,
    addressProof: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: "idProof" | "addressProof") => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, [field]: e.target.files?.[0] || null }))
    }
  }

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real implementation, this would be an API call to submit the investment
      setIsComplete(true)
    } catch (error) {
      console.error("Investment submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Authentication Required</h2>
        <p className="text-gray-600 mb-6">
          You need to be logged in to start investing. Please login or register to continue.
        </p>
        <LoginRegisterModal
          trigger={
            <Button size="lg" className="bg-accent hover:bg-[hsl(var(--gold-hover))]">
              Login / Register to Continue
            </Button>
          }
        />
      </div>
    )
  }

  if (isComplete) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Investment Submitted Successfully!</h2>
        <p className="text-gray-600 mb-8">
          Your investment request has been received. Our team will review your application and contact you shortly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/dashboard/investments">View My Investments</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Tabs value={`step-${currentStep}`} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="step-1" disabled={currentStep !== 1}>
            Personal Details
          </TabsTrigger>
          <TabsTrigger value="step-2" disabled={currentStep !== 2}>
            Investment Preferences
          </TabsTrigger>
          <TabsTrigger value="step-3" disabled={currentStep !== 3}>
            Bank & KYC Details
          </TabsTrigger>
        </TabsList>

        <Card className="mt-6 border-none shadow-lg">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit}>
              <TabsContent value="step-1">
                <h2 className="text-2xl font-bold mb-6">Personal Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name (as per PAN)</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" name="dob" type="date" value={formData.dob} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number</Label>
                    <Input
                      id="pan"
                      name="pan"
                      value={formData.pan}
                      onChange={handleChange}
                      placeholder="ABCDE1234F"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" name="state" value={formData.state} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="button" onClick={nextStep}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="step-2">
                <h2 className="text-2xl font-bold mb-6">Investment Preferences</h2>

                <div className="space-y-6 mb-8">
                  <div className="space-y-2">
                    <Label>Investment Plan</Label>
                    <RadioGroup
                      value={formData.plan}
                      onValueChange={(value) => handleSelectChange("plan", value)}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:border-dark-green">
                        <RadioGroupItem value="quarterly" id="quarterly" />
                        <Label htmlFor="quarterly" className="cursor-pointer">
                          Quarterly Compounding
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:border-dark-green">
                        <RadioGroupItem value="tree-family" id="tree-family" />
                        <Label htmlFor="tree-family" className="cursor-pointer">
                          Tree Family Plan
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:border-dark-green">
                        <RadioGroupItem value="systematic" id="systematic" />
                        <Label htmlFor="systematic" className="cursor-pointer">
                          Systematic Investment
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Investment Amount (₹)</Label>
                    <Input
                      id="amount"
                      name="amount"
                      type="number"
                      min={formData.plan === "systematic" ? 5000 : 10000}
                      step={1000}
                      value={formData.amount}
                      onChange={handleChange}
                      required
                    />
                    <p className="text-sm text-gray-500">
                      Minimum investment: {formData.plan === "systematic" ? "₹5,000" : "₹10,000"}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tenure">Investment Tenure</Label>
                    <Select value={formData.tenure} onValueChange={(value) => handleSelectChange("tenure", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tenure" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">1 Year (4 Quarters)</SelectItem>
                        <SelectItem value="8">2 Years (8 Quarters)</SelectItem>
                        <SelectItem value="12">3 Years (12 Quarters)</SelectItem>
                        <SelectItem value="20">5 Years (20 Quarters)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.plan === "systematic" && (
                    <div className="space-y-2">
                      <Label htmlFor="frequency">Investment Frequency</Label>
                      <Select
                        value={formData.frequency}
                        onValueChange={(value) => handleSelectChange("frequency", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                          <SelectItem value="annually">Annually</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="nomineeName">Nominee Name</Label>
                    <Input
                      id="nomineeName"
                      name="nomineeName"
                      value={formData.nomineeName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nomineeRelation">Relationship with Nominee</Label>
                    <Select
                      value={formData.nomineeRelation}
                      onValueChange={(value) => handleSelectChange("nomineeRelation", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button type="button" onClick={nextStep}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="step-3">
                <h2 className="text-2xl font-bold mb-6">Bank & KYC Details</h2>

                <div className="space-y-6 mb-8">
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Bank Account Number</Label>
                    <Input
                      id="accountNumber"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmAccountNumber">Confirm Account Number</Label>
                    <Input
                      id="confirmAccountNumber"
                      name="confirmAccountNumber"
                      value={formData.confirmAccountNumber}
                      onChange={handleChange}
                      required
                    />
                    {formData.accountNumber &&
                      formData.confirmAccountNumber &&
                      formData.accountNumber !== formData.confirmAccountNumber && (
                        <p className="text-sm text-red-500">Account numbers do not match</p>
                      )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ifsc">IFSC Code</Label>
                    <Input
                      id="ifsc"
                      name="ifsc"
                      value={formData.ifsc}
                      onChange={handleChange}
                      placeholder="SBIN0000123"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Account Type</Label>
                    <RadioGroup
                      value={formData.accountType}
                      onValueChange={(value) => handleSelectChange("accountType", value)}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:border-dark-green">
                        <RadioGroupItem value="savings" id="savings" />
                        <Label htmlFor="savings" className="cursor-pointer">
                          Savings Account
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:border-dark-green">
                        <RadioGroupItem value="current" id="current" />
                        <Label htmlFor="current" className="cursor-pointer">
                          Current Account
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="idProof">ID Proof (PAN/Aadhaar)</Label>
                    <div className="border rounded-md p-4">
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="idProof"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PDF, JPG or PNG (Max. 2MB)</p>
                          </div>
                          <input
                            id="idProof"
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange(e, "idProof")}
                            required
                          />
                        </label>
                      </div>
                      {formData.idProof && (
                        <p className="mt-2 text-sm text-green-600">File selected: {formData.idProof.name}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="addressProof">Address Proof (Utility Bill/Passport)</Label>
                    <div className="border rounded-md p-4">
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="addressProof"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PDF, JPG or PNG (Max. 2MB)</p>
                          </div>
                          <input
                            id="addressProof"
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange(e, "addressProof")}
                            required
                          />
                        </label>
                      </div>
                      {formData.addressProof && (
                        <p className="mt-2 text-sm text-green-600">File selected: {formData.addressProof.name}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
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
                        Submit Investment <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </TabsContent>
            </form>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  )
}
