import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

const faqs = [
  {
    question: "What is the minimum investment amount?",
    answer:
      "The minimum investment amount with MSV Infotech is ₹10,000. There is no upper limit, allowing you to invest according to your financial capacity and goals.",
  },
  {
    question: "How does the quarterly compounding work?",
    answer:
      "Our quarterly compounding model provides a 6% return every quarter on your investment. This means that each quarter, your returns are added to your principal amount, and the next quarter's returns are calculated on this increased amount. This creates an accelerating growth curve for your investment.",
  },
  {
    question: "What is the Tree Family distribution system?",
    answer:
      "The Tree Family system is our unique profit distribution model where 70% of the profits go to the main investor (Mukhiya) and 30% is distributed among family members or dependents. You can designate up to 5 family members who will receive an equal share of this 30%. This system helps create generational wealth and financial security for your loved ones.",
  },
  {
    question: "How secure is my investment?",
    answer:
      "At MSV Infotech, security is our top priority. Our investment plans are designed to be risk-free with a fixed return ratio. We maintain strict compliance with all regulatory requirements and employ robust security measures to protect your investments.",
  },
  {
    question: "Can I withdraw my investment before the term ends?",
    answer:
      "Yes, you can withdraw your investment before the term ends, subject to our early withdrawal policy. Early withdrawals may incur a nominal processing fee. We recommend discussing your specific situation with our financial advisors to understand the implications.",
  },
  {
    question: "How often will I receive reports on my investment?",
    answer:
      "We provide quarterly reports detailing your investment performance, including profits earned, compounding effects, and family distributions if applicable. You can also access your investment dashboard anytime through our online portal or mobile app.",
  },
  {
    question: "What happens if I want to add more to my investment?",
    answer:
      "You can add to your existing investment at any time. Additional investments will be treated as separate investments with their own quarterly compounding cycle, or you can choose to merge them with your existing investment.",
  },
  {
    question: "How are the returns taxed?",
    answer:
      "The tax implications of your investment returns depend on your individual tax situation and applicable tax laws. We recommend consulting with a tax professional regarding your specific circumstances. MSV Infotech provides all necessary documentation for tax filing purposes.",
  },
  {
    question: "Can I change my designated family members?",
    answer:
      "Yes, you can change your designated family members for the Tree Family distribution system. Changes will take effect from the next quarter after the request is processed. Please contact our customer service team to make these changes.",
  },
  {
    question: "What happens to my investment in case of my demise?",
    answer:
      "In the unfortunate event of an investor's demise, the investment and future returns are transferred to the nominated beneficiary as per the details provided during registration. We have a streamlined process to ensure a smooth transition during such difficult times.",
  },
]

export default function FAQsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dark-green to-light-green py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <AnimatedBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideUp">Frequently Asked Questions</h1>
            <p className="text-lg mb-8 animate-fadeIn animate-delay-200">
              Find answers to common questions about MSV Infotech's investment plans, processes, and services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 pattern-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50 pattern-diagonal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-dark-green mb-4">Still Have Questions?</h2>
                  <p className="text-gray-600 mb-6">
                    Our team is here to help you with any questions or concerns you may have about our investment plans.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-dark-green hover:bg-light-green transition-all duration-300 transform hover:scale-105"
                      >
                        Contact Us
                      </Button>
                    </Link>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
