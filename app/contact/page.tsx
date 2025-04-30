"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import AnimatedBackground from "@/components/animated-background"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong")
      }

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dark-green to-light-green py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <AnimatedBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideUp">Contact Us</h1>
            <p className="text-lg mb-8 animate-fadeIn animate-delay-200">
              Have questions or need assistance? Our team is here to help you with your investment journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 pattern-dots">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slideLeft">
              <h2 className="section-title">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                      <p className="text-gray-600">
                        Your message has been sent successfully. We'll get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {error && (
                        <Alert variant="destructive" className="mb-4">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Your Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+91 1234567890"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Subject
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            required
                            placeholder="Investment Inquiry"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Your Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          placeholder="How can we help you?"
                          rows={5}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-dark-green hover:bg-light-green transition-all duration-300"
                        disabled={isSubmitting}
                      >
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
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="animate-slideRight">
              <h2 className="section-title">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                You can reach out to us through any of the following channels or visit our office during business hours.
              </p>

              <div className="space-y-6">
                <Card className="border-none shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-dark-green/10 dark:bg-dark-green/20 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-dark-green dark:text-light-green" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 dark:text-white">Our Office</h3>
                        <address className="not-italic text-gray-600 dark:text-gray-400">
                          MSV Infotech Pvt. Ltd.
                          <br />
                          123 Financial District
                          <br />
                          Mumbai, Maharashtra
                          <br />
                          India
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-dark-green/10 dark:bg-dark-green/20 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-dark-green dark:text-light-green" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 dark:text-white">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-400">+91 1234567890</p>
                        <p className="text-gray-600 dark:text-gray-400">+91 9876543210 (Customer Support)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-dark-green/10 dark:bg-dark-green/20 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-dark-green dark:text-light-green" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-400">info@msvinfotech.com</p>
                        <p className="text-gray-600 dark:text-gray-400">support@msvinfotech.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-dark-green/10 dark:bg-dark-green/20 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-dark-green dark:text-light-green" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 dark:text-white">Business Hours</h3>
                        <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600 dark:text-gray-400">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-gray-600 dark:text-gray-400">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-8 dark:text-white">Find Us</h2>
            <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
              {/* Replace with actual map */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-700">
                <p className="text-gray-600 dark:text-gray-400">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
