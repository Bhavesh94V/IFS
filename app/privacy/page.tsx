import { Card, CardContent } from "@/components/ui/card"
import AnimatedBackground from "@/components/animated-background"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dark-green to-light-green py-16 text-white">
        <div className="absolute inset-0 opacity-10">
          <AnimatedBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp">Privacy Policy</h1>
            <p className="text-lg animate-fadeIn animate-delay-200">
              We are committed to protecting your privacy and personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 pattern-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">1. Introduction</h2>
                    <p className="text-gray-700 mb-4">
                      MSV Infotech Pvt. Ltd. ("we", "our", or "us") is committed to protecting your privacy. This
                      Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
                      our website and investment services.
                    </p>
                    <p className="text-gray-700">
                      Please read this privacy policy carefully. If you do not agree with the terms of this privacy
                      policy, please do not access our website or use our services.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">2. Information We Collect</h2>
                    <p className="text-gray-700 mb-4">
                      We collect personal information that you voluntarily provide to us when you register for an
                      account, express interest in obtaining information about us or our products and services, or
                      otherwise contact us.
                    </p>
                    <p className="text-gray-700 mb-4">The personal information we collect may include:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Name, email address, phone number, and contact details</li>
                      <li>Date of birth, PAN number, and other identification information</li>
                      <li>Bank account details and financial information</li>
                      <li>Address and location information</li>
                      <li>Investment preferences and history</li>
                      <li>KYC documents and identity proofs</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">3. How We Use Your Information</h2>
                    <p className="text-gray-700 mb-4">
                      We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>To provide, operate, and maintain our services</li>
                      <li>To process and complete investment transactions</li>
                      <li>To verify your identity and conduct KYC checks</li>
                      <li>
                        To send administrative information, such as updates, security alerts, and support messages
                      </li>
                      <li>To respond to your comments, questions, and requests</li>
                      <li>To provide customer support and assistance</li>
                      <li>To send you marketing and promotional communications (with your consent)</li>
                      <li>To comply with legal obligations and regulatory requirements</li>
                      <li>
                        To protect our rights, privacy, safety, or property, and/or that of our affiliates, you, or
                        others
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">4. Disclosure of Your Information</h2>
                    <p className="text-gray-700 mb-4">We may share your information in the following situations:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>
                        <strong>Compliance with Laws:</strong> We may disclose your information where required by law or
                        to respond to legal process or government requests.
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> We may share or transfer your information in connection
                        with, or during negotiations of, any merger, sale of company assets, financing, or acquisition
                        of all or a portion of our business.
                      </li>
                      <li>
                        <strong>With Your Consent:</strong> We may disclose your information for any other purpose with
                        your consent.
                      </li>
                      <li>
                        <strong>Service Providers:</strong> We may share your information with third-party vendors,
                        service providers, and other third parties who perform services for us or on our behalf.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">5. Security of Your Information</h2>
                    <p className="text-gray-700 mb-4">
                      We use administrative, technical, and physical security measures to protect your personal
                      information. While we have taken reasonable steps to secure the personal information you provide
                      to us, please be aware that no security measures are perfect or impenetrable, and no method of
                      data transmission can be guaranteed against interception or other types of misuse.
                    </p>
                    <p className="text-gray-700">
                      Any information disclosed online is vulnerable to interception and misuse by unauthorized parties.
                      Therefore, we cannot guarantee complete security if you provide personal information.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">6. Data Retention</h2>
                    <p className="text-gray-700 mb-4">
                      We will retain your personal information only for as long as is necessary for the purposes set out
                      in this privacy policy, unless a longer retention period is required or permitted by law (such as
                      tax, accounting, or other legal requirements).
                    </p>
                    <p className="text-gray-700">
                      When we have no ongoing legitimate business need to process your personal information, we will
                      either delete or anonymize it, or, if this is not possible, we will securely store your personal
                      information and isolate it from any further processing until deletion is possible.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">7. Your Privacy Rights</h2>
                    <p className="text-gray-700 mb-4">You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Access and receive a copy of your personal information</li>
                      <li>Rectify or update your personal information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Object to or restrict the processing of your personal information</li>
                      <li>Request transfer of your personal information</li>
                      <li>Withdraw your consent at any time (if we rely on consent as a legal basis)</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      To exercise these rights, please contact us using the contact information provided below.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">8. Cookies and Tracking Technologies</h2>
                    <p className="text-gray-700 mb-4">
                      We may use cookies, web beacons, tracking pixels, and other tracking technologies on our website
                      to help customize the website and improve your experience. By using the website, you agree to our
                      use of cookies.
                    </p>
                    <p className="text-gray-700">
                      Most web browsers allow you to control cookies through their settings preferences. However, if you
                      limit the ability of websites to set cookies, you may impact your overall user experience.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">9. Changes to This Privacy Policy</h2>
                    <p className="text-gray-700 mb-4">
                      We may update this privacy policy from time to time. The updated version will be indicated by an
                      updated "Revised" date and the updated version will be effective as soon as it is accessible. We
                      encourage you to review this privacy policy frequently to be informed of how we are protecting
                      your information.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-dark-green mb-4">10. Contact Information</h2>
                    <p className="text-gray-700 mb-4">
                      If you have questions or comments about this privacy policy, please contact us at:
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
                      Email: privacy@msvinfotech.com
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
