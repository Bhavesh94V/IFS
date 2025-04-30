import { Card, CardContent } from "@/components/ui/card"
import AnimatedBackground from "@/components/animated-background"

export default function RiskDisclosurePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dark-green to-light-green py-16 text-white">
        <div className="absolute inset-0 opacity-10">
          <AnimatedBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp">Risk Disclosure</h1>
            <p className="text-lg animate-fadeIn animate-delay-200">
              Understanding the risks associated with investments.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Disclosure Content */}
      <section className="py-12 pattern-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">1. Introduction</h2>
                    <p className="text-gray-700 mb-4">
                      This Risk Disclosure document outlines the various risks associated with investing through MSV
                      Infotech Pvt. Ltd. It is important that all investors read and understand these risks before
                      making any investment decisions.
                    </p>
                    <p className="text-gray-700">
                      Investing involves risk, including the possible loss of principal. Past performance is not
                      indicative of future results. The value of investments and the income from them can go down as
                      well as up and are not guaranteed.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">2. General Investment Risks</h2>
                    <p className="text-gray-700 mb-4">
                      All investments carry some degree of risk. The following are general risks that apply to
                      investments:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>
                        <strong>Market Risk:</strong> The risk that the value of an investment will decrease due to
                        changes in market factors.
                      </li>
                      <li>
                        <strong>Liquidity Risk:</strong> The risk of being unable to sell your investment at a fair
                        price and get your money out when you want to.
                      </li>
                      <li>
                        <strong>Inflation Risk:</strong> The risk that the value of your investment will not keep pace
                        with inflation, reducing your purchasing power over time.
                      </li>
                      <li>
                        <strong>Interest Rate Risk:</strong> The risk that changes in interest rates will affect the
                        value of your investments.
                      </li>
                      <li>
                        <strong>Credit Risk:</strong> The risk that the issuer of a security may not be able to pay
                        interest and principal when due.
                      </li>
                      <li>
                        <strong>Regulatory Risk:</strong> The risk that changes in laws and regulations will impact the
                        value of your investments or the operations of MSV Infotech.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">
                      3. Specific Risks Related to MSV Infotech's Investment Plans
                    </h2>
                    <p className="text-gray-700 mb-4">
                      In addition to the general investment risks, the following specific risks apply to investments
                      made through MSV Infotech:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>
                        <strong>Business Risk:</strong> The risk that MSV Infotech's business operations may be affected
                        by various factors, impacting its ability to generate returns for investors.
                      </li>
                      <li>
                        <strong>Concentration Risk:</strong> The risk that arises from a lack of diversification in
                        investments, making them more vulnerable to specific market events.
                      </li>
                      <li>
                        <strong>Lock-in Period Risk:</strong> The risk associated with the inability to access your
                        funds during the specified lock-in period without incurring penalties.
                      </li>
                      <li>
                        <strong>Return Variability Risk:</strong> While we aim to provide consistent returns, actual
                        returns may vary based on market conditions and business performance.
                      </li>
                      <li>
                        <strong>Operational Risk:</strong> The risk of loss resulting from inadequate or failed internal
                        processes, people, and systems, or from external events.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">4. No Guaranteed Returns</h2>
                    <p className="text-gray-700 mb-4">
                      While MSV Infotech strives to provide consistent returns as mentioned in our investment plans, it
                      is important to understand that these returns are not guaranteed. Actual returns may vary based on
                      various factors including but not limited to market conditions, business performance, and economic
                      factors.
                    </p>
                    <p className="text-gray-700">
                      The projected returns mentioned in our investment plans are based on historical performance and
                      market analysis but should not be considered as a guarantee of future performance.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">5. Risk Mitigation Strategies</h2>
                    <p className="text-gray-700 mb-4">
                      MSV Infotech employs various risk mitigation strategies to protect investor interests, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Diversification of investment portfolios</li>
                      <li>Regular monitoring and assessment of market conditions</li>
                      <li>Strict adherence to regulatory requirements</li>
                      <li>Transparent reporting and communication with investors</li>
                      <li>Robust internal controls and risk management systems</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      However, these strategies cannot eliminate all risks associated with investments.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">6. Investor Responsibility</h2>
                    <p className="text-gray-700 mb-4">Investors are responsible for:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Reading and understanding all investment documentation, including this Risk Disclosure</li>
                      <li>Assessing their own risk tolerance and financial situation before investing</li>
                      <li>Seeking independent financial advice if necessary</li>
                      <li>Regularly reviewing their investments and staying informed about market conditions</li>
                      <li>Diversifying their investments across different asset classes and investment vehicles</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">7. Tax Implications</h2>
                    <p className="text-gray-700 mb-4">
                      Investments through MSV Infotech may have tax implications. These may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Income tax on investment returns</li>
                      <li>Tax Deducted at Source (TDS) on withdrawals</li>
                      <li>Capital gains tax on investment appreciation</li>
                      <li>Other taxes as per applicable tax laws</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Investors should consult with their tax advisors regarding the tax implications of their
                      investments.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">8. Regulatory Compliance</h2>
                    <p className="text-gray-700 mb-4">
                      MSV Infotech operates in compliance with all applicable laws and regulations. However, changes in
                      regulatory requirements may impact our operations and the returns on investments.
                    </p>
                    <p className="text-gray-700">
                      We strive to keep our investors informed about any regulatory changes that may affect their
                      investments.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">9. Acknowledgment</h2>
                    <p className="text-gray-700 mb-4">
                      By investing with MSV Infotech, you acknowledge that you have read and understood this Risk
                      Disclosure and accept the risks associated with your investment.
                    </p>
                    <p className="text-gray-700">
                      You also acknowledge that you have been advised to seek independent financial advice if necessary
                      and that MSV Infotech is not responsible for any investment losses you may incur.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">10. Contact Information</h2>
                    <p className="text-gray-700 mb-4">
                      If you have any questions about this Risk Disclosure or would like more information about the
                      risks associated with our investment plans, please contact us at:
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
                      Email: risk@msvinfotech.com
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
