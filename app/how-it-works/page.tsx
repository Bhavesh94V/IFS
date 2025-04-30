import { ArrowRight, CheckCircle, CircleDollarSign, ClipboardCheck, LineChart, UserPlus, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slideUp">
          <h1 className="text-4xl font-bold text-dark-green mb-4">How It Works</h1>
          <p className="text-lg text-gray-600">
            Understanding MSV Infotech's investment process is simple. Follow these steps to start your journey towards
            financial growth.
          </p>
        </div>

        {/* Step by Step Process */}
        <div className="space-y-8 mb-16 relative">
          <div className="hidden md:block absolute left-8 top-16 bottom-0 border-l-2 border-dashed border-gray-300 z-0"></div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 relative z-10">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-dark-green rounded-full flex items-center justify-center text-white text-2xl font-bold animate-pulse-slow">
                  1
                </div>
              </div>
              <Card className="transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slideRight">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <div className="bg-dark-green/10 p-3 rounded-full">
                      <UserPlus className="h-8 w-8 text-dark-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Register</h3>
                      <p className="text-gray-600">
                        Create your account with MSV Infotech by providing your basic details. Our team will verify your
                        information and set up your investor profile.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 relative z-10">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-dark-green rounded-full flex items-center justify-center text-white text-2xl font-bold animate-pulse-slow">
                2
              </div>
            </div>
            <Card className="transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slideRight animate-delay-100">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <div className="bg-dark-green/10 p-3 rounded-full">
                    <ClipboardCheck className="h-8 w-8 text-dark-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Choose a Plan</h3>
                    <p className="text-gray-600">
                      Select from our range of investment plans - Quarterly Compounding, Tree Family Plan, or Systematic
                      Investment Plan - based on your financial goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 relative z-10">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-dark-green rounded-full flex items-center justify-center text-white text-2xl font-bold animate-pulse-slow">
                3
              </div>
            </div>
            <Card className="transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slideRight animate-delay-200">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <div className="bg-dark-green/10 p-3 rounded-full">
                    <Wallet className="h-8 w-8 text-dark-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Invest</h3>
                    <p className="text-gray-600">
                      Make your investment through our secure payment channels. The minimum investment amount is
                      ₹10,000, with no upper limit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 relative z-10">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-dark-green rounded-full flex items-center justify-center text-white text-2xl font-bold animate-pulse-slow">
                4
              </div>
            </div>
            <Card className="transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slideRight animate-delay-300">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <div className="bg-dark-green/10 p-3 rounded-full">
                    <LineChart className="h-8 w-8 text-dark-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Track Returns</h3>
                    <p className="text-gray-600">
                      Monitor your investment growth through quarterly reports. Watch as your money compounds with each
                      6% quarterly return.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 relative z-10">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-dark-green rounded-full flex items-center justify-center text-white text-2xl font-bold animate-pulse-slow">
                5
              </div>
            </div>
            <Card className="transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slideRight animate-delay-400">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <div className="bg-dark-green/10 p-3 rounded-full">
                    <CircleDollarSign className="h-8 w-8 text-dark-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Withdraw Profits</h3>
                    <p className="text-gray-600">
                      Choose to withdraw your profits quarterly or reinvest them for even greater returns. Withdrawals
                      are processed within 3-5 business days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tree Family Distribution */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 opacity-5 z-0 pattern-diagonal"></div>
          <div className="relative z-10">
            <h2 className="section-title animate-slideUp">Tree Family Distribution System</h2>
            <p className="text-gray-600 mb-8">
              Our unique Tree Family model promotes both individual and collective financial growth by distributing
              profits among family members:
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="animate-slideLeft">
                  <h3 className="text-xl font-bold text-dark-green mb-4">How It Works</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5" />
                      <span>70% of profits go to the main investor (Mukhiya)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5" />
                      <span>30% is reserved for family members or dependents</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5" />
                      <span>You can designate up to 5 family members</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5" />
                      <span>Each family member receives an equal share</span>
                    </li>
                  </ul>
                </div>
                <div className="animate-slideRight">
                  <h3 className="text-xl font-bold text-dark-green mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5" />
                      <span>Creates generational wealth</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5" />
                      <span>Ensures financial security for loved ones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5" />
                      <span>Promotes financial literacy among family</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5" />
                      <span>Builds a culture of saving and investment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center relative">
          <div className="absolute inset-0 opacity-5 z-0">
            <AnimatedBackground />
          </div>
          <div className="relative z-10 p-8 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg animate-fadeIn">
            <h2 className="text-2xl font-bold text-dark-green mb-4">Ready to Start Your Investment Journey?</h2>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied investors who are growing their wealth with MSV Infotech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-[hsl(var(--gold-hover))] transition-all duration-300 transform hover:scale-105"
              >
                Invest Now
              </Button>
              <Link href="/calculator">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-dark-green text-dark-green hover:bg-dark-green hover:text-white transition-all duration-300"
                >
                  Try Our Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
