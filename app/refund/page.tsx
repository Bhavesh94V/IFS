import { Card, CardContent } from "@/components/ui/card"
import AnimatedBackground from "@/components/animated-background"

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dark-green to-light-green py-16 text-white">
        <div className="absolute inset-0 opacity-10">
          <AnimatedBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp">Refund Policy</h1>
            <p className="text-lg animate-fadeIn animate-delay-200">
              Our policy regarding refunds and cancellations of investments.
            </p>
          </div>
        </div>
      </section>

      {/* Refund Policy Content */}
      <section className="py-12 pattern-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">1. Introduction</h2>
                    <p className="text-gray-700 mb-4">
                      This Refund Policy outlines the terms and conditions regarding refunds and cancellations of
                      investments made with MSV Infotech Pvt. Ltd. By investing with us, you agree to the terms of this
                      Refund Policy.
                    </p>
                    <p className="text-gray-700">
                      We encourage all investors to carefully review our investment plans and terms before making any
                      investment decisions.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">2. Lock-in Period</h2>
                    <p className="text-gray-700 mb-4">
                      All investment plans offered by MSV Infotech have a specified lock-in period as mentioned in the
                      respective plan details:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Quarterly Compounding Plan: 3 months lock-in period</li>
                      <li>Tree Family Plan: 3 months lock-in period</li>
                      <li>Systematic Investment Plan: 6 months lock-in period</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      During the lock-in period, withdrawals or cancellations are subject to the terms mentioned in this
                      policy.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">3. Cooling-off Period</h2>
                    <p className="text-gray-700 mb-4">
                      MSV Infotech provides a cooling-off period of 48 hours from the time of investment confirmation.
                      During this period, investors can cancel their investment without any penalty, and the full
                      investment amount will be refunded.
                    </p>
                    <p className="text-gray-700">
                      To request a cancellation during the cooling-off period, investors must submit a written request
                      through their registered email ID to support@msvinfotech.com or through the designated section in
                      their dashboard.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">4. Early Withdrawal</h2>
                    <p className="text-gray-700 mb-4">
                      Withdrawals requested after the cooling-off period but before the completion of the lock-in period
                      are considered early withdrawals and are subject to the following terms:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>An early withdrawal fee of 5% of the investment amount will be applicable</li>
                      <li>No returns will be paid for the period the investment was held</li>
                      <li>The processing time for early withdrawal requests is 7-10 business days</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Early withdrawal requests must be submitted through the designated channels and will be processed
                      after verification.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">5. Regular Withdrawals</h2>
                    <p className="text-gray-700 mb-4">
                      After the completion of the lock-in period, investors can request withdrawals as per the following
                      terms:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>
                        Full withdrawal: The entire investment amount along with applicable returns will be processed
                      </li>
                      <li>
                        Partial withdrawal: Investors can withdraw a portion of their investment while keeping the rest
                        invested
                      </li>
                      <li>
                        Returns withdrawal: Investors can choose to withdraw only the returns while keeping the
                        principal amount invested
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Regular withdrawal requests are processed within 3-5 business days, and the amount is transferred
                      to the registered bank account of the investor.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">6. Refund Process</h2>
                    <p className="text-gray-700 mb-4">
                      All refunds and withdrawals are processed through the following steps:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li>Investor submits a withdrawal/refund request through the designated channels</li>
                      <li>The request is verified by our team</li>
                      <li>Applicable fees or deductions, if any, are calculated</li>
                      <li>The final amount is processed for transfer to the investor's registered bank account</li>
                      <li>A confirmation is sent to the investor once the transfer is complete</li>
                    </ol>
                    <p className="text-gray-700 mt-4">
                      All refunds are made to the original payment method or bank account used for the investment. We do
                      not process refunds to third-party accounts.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">7. Special Circumstances</h2>
                    <p className="text-gray-700 mb-4">
                      In case of special circumstances such as the death of an investor, medical emergencies, or other
                      exceptional situations, MSV Infotech may consider waiving the early withdrawal fee and expediting
                      the refund process.
                    </p>
                    <p className="text-gray-700">
                      Such requests must be submitted with appropriate documentation and will be evaluated on a
                      case-by-case basis.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">8. Taxes and Deductions</h2>
                    <p className="text-gray-700 mb-4">
                      All refunds and withdrawals are subject to applicable taxes and deductions as per the prevailing
                      tax laws. TDS (Tax Deducted at Source) may be deducted before processing the refund or withdrawal.
                    </p>
                    <p className="text-gray-700">
                      Investors are responsible for their tax liabilities and should consult with their tax advisors
                      regarding the tax implications of their investments and withdrawals.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">9. Changes to This Policy</h2>
                    <p className="text-gray-700 mb-4">
                      MSV Infotech reserves the right to modify this Refund Policy at any time. Changes will be
                      effective immediately upon posting on our website.
                    </p>
                    <p className="text-gray-700">
                      Investors will be notified of any significant changes to this policy through email or
                      notifications on their dashboard.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">10. Contact Information</h2>
                    <p className="text-gray-700 mb-4">
                      If you have any questions about this Refund Policy or would like to request a refund, please
                      contact us at:
                    </p>
                    <p className="text-gray-700">
                      MSV Infotech Pvt. Ltd.
                      <br />
                      123 Financial District
                      <br />
                      Mumbai, Maharashtra
                      <br />
                      India
                      <br />
                      Email: refunds@msvinfotech.com
                      <br />
                      Phone: +91 1234567890
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-500 text-sm">Last updated: April 30, 2023</p>
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
