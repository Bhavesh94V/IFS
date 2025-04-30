import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"
import PlanDetails from "@/components/plan-details"

export default function InvestmentPlansPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dark-green to-light-green py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <AnimatedBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideUp">Investment Plans</h1>
            <p className="text-lg mb-8 animate-fadeIn animate-delay-200">
              Choose from our range of investment options designed to meet your financial goals and secure your future.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Overview */}
      <section className="py-16 pattern-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Our Investment Solutions</h2>
            <p className="text-gray-600">
              At MSV Infotech, we offer carefully designed investment plans that provide security, growth, and family
              benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PlanDetails planType="quarterly" id="quarterly" />
            <PlanDetails planType="tree-family" id="tree-family" />
            <PlanDetails planType="systematic" id="systematic" />
          </div>
        </div>
      </section>

      {/* Plan Comparison */}
      <section className="py-16 bg-gray-50 pattern-diagonal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Plan Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-dark-green text-white">
                    <th className="p-4 text-left">Features</th>
                    <th className="p-4 text-center">Quarterly Compounding</th>
                    <th className="p-4 text-center">Tree Family Plan</th>
                    <th className="p-4 text-center">Systematic Investment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Minimum Investment</td>
                    <td className="p-4 text-center">₹10,000</td>
                    <td className="p-4 text-center">₹10,000</td>
                    <td className="p-4 text-center">₹5,000</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Return Rate</td>
                    <td className="p-4 text-center">6% quarterly</td>
                    <td className="p-4 text-center">6% quarterly</td>
                    <td className="p-4 text-center">5% quarterly</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Annual Return</td>
                    <td className="p-4 text-center">Up to 26.25%</td>
                    <td className="p-4 text-center">Up to 26.25%</td>
                    <td className="p-4 text-center">Up to 21.55%</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Family Distribution</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">Yes (70:30)</td>
                    <td className="p-4 text-center">Optional</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Profit Withdrawal</td>
                    <td className="p-4 text-center">Quarterly</td>
                    <td className="p-4 text-center">Quarterly</td>
                    <td className="p-4 text-center">Quarterly/Annually</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Reinvestment Option</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Lock-in Period</td>
                    <td className="p-4 text-center">3 months</td>
                    <td className="p-4 text-center">3 months</td>
                    <td className="p-4 text-center">6 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Calculate Your Returns</h2>
            <p className="text-gray-600 mb-8">
              Use our investment calculator to see how your money can grow with MSV Infotech's quarterly compounding
              model.
            </p>
            <Link href="/calculator">
              <Button
                size="lg"
                className="bg-dark-green hover:bg-light-green transition-all duration-300 transform hover:scale-105"
              >
                Try Our Calculator <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
