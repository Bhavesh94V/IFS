import { Card, CardContent } from "@/components/ui/card"
import AnimatedBackground from "@/components/animated-background"

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dark-green to-light-green py-16 text-white">
        <div className="absolute inset-0 opacity-10">
          <AnimatedBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp">Terms & Conditions</h1>
            <p className="text-lg animate-fadeIn animate-delay-200">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 pattern-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">1. Introduction</h2>
                    <p className="text-gray-700 mb-4">
                      Welcome to MSV Infotech Pvt. Ltd. These terms and conditions outline the rules and regulations for
                      the use of our investment services.
                    </p>
                    <p className="text-gray-700">
                      By accessing this website and using our services, we assume you accept these terms and conditions
                      in full. Do not continue to use MSV Infotech's services if you do not accept all of the terms and
                      conditions stated on this page.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">2. Investment Services</h2>
                    <p className="text-gray-700 mb-4">
                      MSV Infotech Pvt. Ltd. offers investment services through various plans including Quarterly
                      Compounding Plan, Tree Family Plan, and Systematic Investment Plan. The details of these plans are
                      provided on our website and in the investment documentation.
                    </p>
                    <p className="text-gray-700 mb-4">
                      All investments are subject to market risks. Past performance is not indicative of future results.
                      Returns mentioned are not guaranteed and are subject to market conditions.
                    </p>
                    <p className="text-gray-700">
                      The minimum investment amount, lock-in period, and other terms specific to each plan are mentioned
                      in the respective plan details and must be adhered to.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">3. Account Registration</h2>
                    <p className="text-gray-700 mb-4">
                      To use our investment services, you must register an account with us. You agree to provide
                      accurate, current, and complete information during the registration process and to update such
                      information to keep it accurate, current, and complete.
                    </p>
                    <p className="text-gray-700">
                      You are responsible for safeguarding your account credentials and for all activities that occur
                      under your account. You agree to notify us immediately of any unauthorized use of your account or
                      any other breach of security.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">4. KYC Requirements</h2>
                    <p className="text-gray-700 mb-4">
                      All investors are required to complete the Know Your Customer (KYC) process as per regulatory
                      requirements. This includes providing valid identification and address proof documents.
                    </p>
                    <p className="text-gray-700">
                      MSV Infotech reserves the right to reject any investment application if the KYC requirements are
                      not met or if the provided documents are found to be invalid or suspicious.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">5. Investment Process</h2>
                    <p className="text-gray-700 mb-4">
                      Investments can be made through the methods specified on our website or investment documentation.
                      All investments are subject to verification and acceptance by MSV Infotech.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The investment amount will be confirmed once the funds are received and verified. The investment
                      cycle will begin from the date of confirmation.
                    </p>
                    <p className="text-gray-700">
                      Investors will receive regular updates and reports on their investments as per the schedule
                      mentioned in the investment plan.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">6. Withdrawals and Redemptions</h2>
                    <p className="text-gray-700 mb-4">
                      Withdrawals and redemptions are subject to the lock-in period specified in each investment plan.
                      Early withdrawals may be subject to penalties as mentioned in the investment documentation.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Withdrawal requests must be submitted through the designated channels and will be processed within
                      the timeframe mentioned in the investment documentation.
                    </p>
                    <p className="text-gray-700">
                      All withdrawals will be made to the registered bank account of the investor after deducting
                      applicable taxes and charges.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">7. Taxes and Fees</h2>
                    <p className="text-gray-700 mb-4">
                      All investments and returns are subject to applicable taxes as per the prevailing tax laws.
                      Investors are responsible for their tax liabilities.
                    </p>
                    <p className="text-gray-700">
                      MSV Infotech may deduct TDS (Tax Deducted at Source) as per the applicable tax laws before
                      disbursing returns to investors.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">8. Limitation of Liability</h2>
                    <p className="text-gray-700 mb-4">
                      MSV Infotech Pvt. Ltd. shall not be liable for any direct, indirect, incidental, special, or
                      consequential damages resulting from the use or inability to use our services.
                    </p>
                    <p className="text-gray-700">
                      We shall not be responsible for any loss of data, profits, or investments due to technical issues,
                      market conditions, or any other factors beyond our control.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">9. Changes to Terms</h2>
                    <p className="text-gray-700 mb-4">
                      MSV Infotech reserves the right to modify these terms and conditions at any time. Changes will be
                      effective immediately upon posting on our website.
                    </p>
                    <p className="text-gray-700">
                      Continued use of our services after any such changes shall constitute your consent to such
                      changes.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">10. Governing Law</h2>
                    <p className="text-gray-700 mb-4">
                      These terms and conditions are governed by and construed in accordance with the laws of India. Any
                      disputes arising under these terms and conditions shall be subject to the exclusive jurisdiction
                      of the courts in Mumbai, Maharashtra.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">11. Contact Information</h2>
                    <p className="text-gray-700 mb-4">
                      If you have any questions about these Terms and Conditions, please contact us at:
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
                      Email: legal@msvinfotech.com
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
