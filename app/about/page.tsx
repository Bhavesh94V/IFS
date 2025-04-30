import { CheckCircle, Award, Target, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedBackground from "@/components/animated-background"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="story" className="relative bg-gradient-to-r from-dark-green to-light-green py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <AnimatedBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideUp">About MSV Infotech</h1>
            <p className="text-lg mb-8 animate-fadeIn animate-delay-200">
              A forward-thinking investment solutions company dedicated to offering secure, structured, and profitable
              financial growth plans for individuals and families.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 pattern-dots">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideLeft">
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                MSV Infotech was founded in 2025 with a clear vision: to make secure and profitable investments
                accessible to everyone. Our founders recognized that traditional investment options were often complex,
                risky, or inaccessible to the average person.
              </p>
              <p className="text-gray-600 mb-6">
                Drawing on decades of combined experience in finance and technology, they developed a unique investment
                model based on quarterly compounding and family-oriented distribution. This approach has helped
                thousands of investors achieve their financial goals while securing their family's future.
              </p>
              <p className="text-gray-600">
                Today, MSV Infotech stands as a trusted name in the investment industry, known for our transparency,
                reliability, and consistent returns. Our commitment to our investors' success remains our top priority
                as we continue to innovate and expand our services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-slideRight">
              <div className="bg-gray-200 rounded-lg h-64 overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
                  alt="Company Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-200 rounded-lg h-64 overflow-hidden mt-12">
                <img
                  src="https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
                  alt="Team Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-200 rounded-lg h-64 overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/businessman-big-office_53876-144319.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
                  alt="Investment Planning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-200 rounded-lg h-64 overflow-hidden mt-12">
                <img
                  src="https://img.freepik.com/free-photo/business-partners-handshake-global-corporate-with-technology-concept_53876-102615.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
                  alt="Client Consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section id="mission" className="py-16 bg-gray-50 pattern-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="text-gray-600">
              At MSV Infotech, we're guided by a clear mission and strong values that shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-dark-green transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-dark-green/10 p-3 rounded-full mb-4">
                    <Target className="h-8 w-8 text-dark-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower individuals and families to achieve financial security through transparent, accessible,
                    and profitable investment solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-gold transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gold/10 p-3 rounded-full mb-4">
                    <TrendingUp className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To become the most trusted investment partner for families across India, helping them build
                    generational wealth and financial freedom.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-light-green transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-light-green/10 p-3 rounded-full mb-4">
                    <Award className="h-8 w-8 text-light-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Commitment</h3>
                  <p className="text-gray-600">
                    We are committed to maintaining the highest standards of integrity, transparency, and customer
                    service in everything we do.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <h3 className="section-subtitle text-center mb-8">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-dark-green/10 p-2 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-dark-green" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Transparency</h4>
                  <p className="text-gray-600">
                    We believe in complete transparency in all our operations, from fee structures to investment
                    strategies.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dark-green/10 p-2 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-dark-green" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Security</h4>
                  <p className="text-gray-600">
                    We prioritize the security of our investors' funds through risk-free investment models and robust
                    systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dark-green/10 p-2 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-dark-green" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Family-Oriented</h4>
                  <p className="text-gray-600">
                    Our unique Tree Family system ensures that your investment benefits not just you, but your entire
                    family.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dark-green/10 p-2 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-dark-green" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Innovation</h4>
                  <p className="text-gray-600">
                    We continuously innovate our investment models and technology to provide the best returns and user
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Leadership Team</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Meet the experienced professionals who lead MSV Infotech and drive our mission forward.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                role: "CEO & Founder",
                img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
              },
              {
                name: "Aniket Verma",
                role: "Chief Financial Officer",
                img: "https://img.freepik.com/free-photo/handsome-happy-bearded-man_74855-2827.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
              },
              {
                name: "Rahul Mehta",
                role: "Chief Investment Officer",
                img: "https://img.freepik.com/premium-photo/man-showing-thumbs-up-image_181020-152.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
              },
              {
                name: "Anjali Desai",
                role: "Head of Client Relations",
                img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
              }
            ].map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="h-64 bg-gray-200">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-light-green font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">
                    With over 15 years of experience in finance and investment management, leading our team with vision
                    and expertise.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-green text-white relative">
        <div className="absolute inset-0 opacity-10">
          <AnimatedBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">5+</div>
              <div className="text-xl">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">₹100Cr+</div>
              <div className="text-xl">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">10,000+</div>
              <div className="text-xl">Happy Investors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">99%</div>
              <div className="text-xl">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
