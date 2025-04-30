"use client"

import { useState } from "react"
import { CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

interface PlanDetailsProps {
  planType: "quarterly" | "tree-family" | "systematic"
  id: string
}

export default function PlanDetails({ planType, id }: PlanDetailsProps) {
  const [expanded, setExpanded] = useState(false)
  const router = useRouter()

  const planData = {
    quarterly: {
      title: "Quarterly Compounding",
      description: "Our flagship plan with 6% quarterly returns through compounding interest.",
      color: "dark-green",
      features: [
        "6% quarterly compounding returns",
        "Up to 26.25% annual returns",
        "Minimum investment: ₹10,000",
        "Quarterly profit distribution",
        "Reinvestment options available",
      ],
      details: {
        overview:
          "The Quarterly Compounding Plan is our flagship investment solution designed to maximize your returns through the power of compound interest. With a competitive 6% quarterly interest rate, your investment grows exponentially over time.",
        benefits: [
          "Higher returns through compounding",
          "Quarterly profit payouts",
          "Flexible investment duration",
          "No hidden fees or charges",
          "Transparent profit calculation",
        ],
        eligibility: [
          "Indian residents aged 18 years and above",
          "Valid PAN card and address proof",
          "Active bank account for transactions",
        ],
        process: [
          "Register and complete KYC verification",
          "Choose your investment amount (min ₹10,000)",
          "Select investment duration (min 3 months)",
          "Make payment through secure gateway",
          "Track your investment growth in dashboard",
        ],
        faq: [
          {
            question: "How is the quarterly interest calculated?",
            answer:
              "The 6% quarterly interest is calculated on the principal amount plus any accumulated interest from previous quarters, creating a compounding effect.",
          },
          {
            question: "Can I withdraw my investment before the term ends?",
            answer:
              "Yes, early withdrawals are possible after the minimum lock-in period of 3 months, subject to a nominal early withdrawal fee.",
          },
          {
            question: "Is there a maximum investment limit?",
            answer: "The maximum investment amount is ₹10,00,000 (10 lakhs) per individual investor.",
          },
        ],
      },
    },
    "tree-family": {
      title: "Tree Family Plan",
      description: "Benefit your family with our unique profit distribution system.",
      color: "gold",
      popular: true,
      features: [
        "70% profits to main investor",
        "30% to family or dependents",
        "Up to 5 family members",
        "Collective financial growth",
        "Secure generational wealth",
      ],
      details: {
        overview:
          "The Tree Family Plan is our innovative investment solution that allows you to share your investment returns with your family members. This plan follows the same quarterly compounding model but distributes the profits among your designated family members.",
        benefits: [
          "Create financial security for your family",
          "Distribute wealth efficiently",
          "Tax-efficient profit sharing",
          "Teach financial responsibility to family members",
          "Build generational wealth",
        ],
        eligibility: [
          "Indian residents aged 18 years and above",
          "Valid PAN card and address proof",
          "Active bank account for transactions",
          "Up to 5 family members can be nominated",
        ],
        process: [
          "Register and complete KYC verification",
          "Add family members with their details",
          "Choose your investment amount (min ₹10,000)",
          "Select investment duration (min 3 months)",
          "Make payment through secure gateway",
          "Track your family's investment growth in dashboard",
        ],
        faq: [
          {
            question: "How is the profit distributed among family members?",
            answer:
              "70% of the profit goes to the primary investor (Mukhiya), while 30% is distributed equally among the nominated family members (up to 5 members).",
          },
          {
            question: "Can I change my nominated family members?",
            answer: "Yes, you can update your nominated family members once every quarter through your dashboard.",
          },
          {
            question: "Do family members need to create their own accounts?",
            answer:
              "No, family members don't need separate accounts. Their details are managed through the primary investor's account.",
          },
        ],
      },
    },
    systematic: {
      title: "Systematic Investment Plan",
      description: "A structured approach to long-term wealth creation with fixed returns.",
      color: "light-green",
      features: [
        "Risk-free investment",
        "Fixed return ratio",
        "Monthly investment options",
        "Flexible investment amounts",
        "Long-term wealth creation",
      ],
      details: {
        overview:
          "The Systematic Investment Plan (SIP) is designed for investors who prefer a disciplined approach to wealth creation. This plan allows you to invest a fixed amount regularly (monthly or quarterly) and benefit from the power of compounding over time.",
        benefits: [
          "Disciplined investment approach",
          "Rupee cost averaging",
          "Lower investment entry point (₹5,000)",
          "Flexibility to increase investment amount",
          "Ideal for long-term financial goals",
        ],
        eligibility: [
          "Indian residents aged 18 years and above",
          "Valid PAN card and address proof",
          "Active bank account for auto-debit",
        ],
        process: [
          "Register and complete KYC verification",
          "Set up your SIP amount (min ₹5,000)",
          "Choose frequency (monthly or quarterly)",
          "Set up auto-debit mandate",
          "Track your SIP growth in dashboard",
        ],
        faq: [
          {
            question: "Can I change my SIP amount after starting?",
            answer: "Yes, you can increase or decrease your SIP amount with a 30-day notice period.",
          },
          {
            question: "What happens if I miss a SIP payment?",
            answer:
              "If you miss a payment, your SIP continues with the next scheduled payment. However, consistent missed payments may affect your overall returns.",
          },
          {
            question: "Is there a lock-in period for SIP investments?",
            answer: "Yes, there is a minimum lock-in period of 6 months for SIP investments.",
          },
        ],
      },
    },
  }

  const plan = planData[planType]

  const handleLearnMore = () => {
    setExpanded(!expanded)
  }

  const handleStartInvesting = () => {
    // Store selected plan in localStorage
    localStorage.setItem("selectedPlan", planType)
    localStorage.setItem("selectedPlanTitle", plan.title)

    // Navigate to calculator
    router.push("/calculator?tab=invest")
  }

  return (
    <Card
      id={id}
      className={`relative overflow-hidden border-none shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${expanded ? "z-10" : ""}`}
    >
      <div className={`absolute top-0 left-0 w-full h-2 bg-${plan.color}`}></div>
      {plan.popular && (
        <div className="absolute top-2 right-2 bg-gold text-white text-xs font-bold px-2 py-1 rounded">POPULAR</div>
      )}
      <CardContent className="pt-8">
        <h3 className={`text-2xl font-bold text-${plan.color} mb-4`}>{plan.title}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className={`h-5 w-5 text-${plan.color} mr-2 shrink-0 mt-0.5`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-3">
          <Button variant="outline" className="w-full flex items-center justify-center" onClick={handleLearnMore}>
            {expanded ? "Show Less" : "Learn More"}
            {expanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>

          <Button
            className={`w-full bg-${plan.color} hover:bg-${plan.color === "gold" ? "[hsl(var(--gold-hover))]" : plan.color === "light-green" ? "dark-green" : "light-green"} transition-all duration-300`}
            onClick={handleStartInvesting}
          >
            Start Investing
          </Button>
        </div>

        {expanded && (
          <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Plan Overview</h4>
                <p className="text-gray-600">{plan.details.overview}</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Key Benefits</h4>
                <ul className="space-y-2">
                  {plan.details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className={`h-4 w-4 text-${plan.color} mr-2 shrink-0 mt-0.5`} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Eligibility</h4>
                <ul className="space-y-2">
                  {plan.details.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className={`h-4 w-4 text-${plan.color} mr-2 shrink-0 mt-0.5`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Investment Process</h4>
                <ol className="space-y-2 list-decimal pl-5">
                  {plan.details.process.map((step, index) => (
                    <li key={index} className="pl-1">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Frequently Asked Questions</h4>
                <div className="space-y-4">
                  {plan.details.faq.map((item, index) => (
                    <div key={index}>
                      <p className="font-medium">{item.question}</p>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  className={`w-full bg-${plan.color} hover:bg-${plan.color === "gold" ? "[hsl(var(--gold-hover))]" : plan.color === "light-green" ? "dark-green" : "light-green"} transition-all duration-300`}
                  onClick={handleStartInvesting}
                >
                  Start Investing Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
