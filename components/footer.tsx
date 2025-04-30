import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-dark-green to-[#072a2c] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 pattern-diagonal"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#072a2c] to-transparent"></div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-12 border border-accent/20 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-white/80">
                Stay updated with our latest investment opportunities and financial insights.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-gold hover:bg-[hsl(var(--gold-hover))] whitespace-nowrap">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fadeIn">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="bg-gold text-white p-1 rounded mr-2 transform rotate-12">
                <span className="text-sm font-bold my-2 ">IFS</span>
              </div>
              Infinium Finance <br /> Solutions 
            </h3>
            <p className="mb-6">
              A forward-thinking investment solutions company dedicated to offering secure, structured, and profitable
              financial growth plans.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gold transition-colors bg-white/10 p-2 rounded-full">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-gold transition-colors bg-white/10 p-2 rounded-full">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-gold transition-colors bg-white/10 p-2 rounded-full">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-gold transition-colors bg-white/10 p-2 rounded-full">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="animate-fadeIn animate-delay-100">
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/" className="hover:text-gold transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-gold" />
                  Home
                </Link>
              </li>
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/about" className="hover:text-gold transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-gold" />
                  About Us
                </Link>
              </li>
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/investment-plans" className="hover:text-gold transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-gold" />
                  Investment Plans
                </Link>
              </li>
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/how-it-works" className="hover:text-gold transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-gold" />
                  How It Works
                </Link>
              </li>
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/calculator" className="hover:text-gold transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-gold" />
                  Investment Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fadeIn animate-delay-200">
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">Legal</h3>
            <ul className="space-y-3">
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/terms" className="hover:text-gold transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-gold" />
                  Terms & Conditions
                </Link>
              </li>
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/privacy" className="hover:text-gold transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-gold" />
                  Privacy Policy
                </Link>
              </li>
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/refund" className="hover:text-gold transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-gold" />
                  Refund Policy
                </Link>
              </li>
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/risk-disclosure" className="hover:text-gold transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-gold" />
                  Risk Disclosure
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fadeIn animate-delay-300">
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gold shrink-0 mt-0.5" />
                <address className="not-italic">
                  Infinium Finance Solutions 
                  <br />
                  123 Financial District
                  <br />
                  Ahmedabad, Gujarat
                  <br />
                  India
                </address>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-gold" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-gold" />
                <span>info@infiniumsolutions.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 text-gold" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="mb-4">© {currentYear} Infinium Finance Solutions. Ltd. All rights reserved.</p>
          {/* <div className="flex flex-wrap justify-center gap-4 mb-6">
            <img
              src="/placeholder.svg?height=40&width=120"
              alt="Secure Payment"
              className="h-10 bg-white/5 p-1 rounded"
            />
            <img
              src="/placeholder.svg?height=40&width=120"
              alt="ISO Certified"
              className="h-10 bg-white/5 p-1 rounded"
            />
            <img
              src="/placeholder.svg?height=40&width=120"
              alt="Trusted Company"
              className="h-10 bg-white/5 p-1 rounded"
            />
          </div> */}
          <div className="text-sm text-white/60">
            <p>Designed and developed with ❤️ for secure financial growth</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
