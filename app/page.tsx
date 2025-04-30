import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  LineChart,
  Shield,
  Users
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import InvestmentCalculator from '@/components/investment-calculator'
import AnimatedBackground from '@/components/animated-background'
import AnimatedCoin from '@/components/animated-coin'
import AnimatedChart from '@/components/animated-chart'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-dark-green to-light-green py-20 text-white overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <AnimatedBackground />
        </div>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='animate-slideLeft'>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                Secure Your Financial Future with MSV Infotech Pvt. Ltd.
              </h1>
              <p className='text-lg mb-8'>
                Experience our powerful compounding investment model that
                provides consistent quarterly returns of 6%, allowing your money
                to grow substantially over time.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  className='bg-accent hover:bg-[hsl(var(--gold-hover))] transition-all duration-300 transform hover:scale-105'
                >
                  Invest Now
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='text-dark-green border-white hover:bg-white/10 transition-all duration-300'
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl animate-slideRight'>
              <div className='flex items-center mb-4'>
                <h2 className='text-2xl font-bold text-gold'>
                  Watch Your Money Grow
                </h2>
                <div className='ml-auto'>
                  <AnimatedCoin className='w-16 h-16' />
                </div>
              </div>
              <p className='mb-4'>
                See how an investment of ₹10,000 grows over a year:
              </p>
              <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                  <span>Initial Investment:</span>
                  <span className='font-bold'>₹10,000</span>
                </div>
                <div className='flex justify-between items-center animate-fadeIn animate-delay-100'>
                  <span>First Quarter (6%):</span>
                  <span className='font-bold'>+₹1800</span>
                </div>
                <div className='flex justify-between items-center animate-fadeIn animate-delay-200'>
                  <span>Second Quarter (6%):</span>
                  <span className='font-bold'>+2124</span>
                </div>
                <div className='flex justify-between items-center animate-fadeIn animate-delay-300'>
                  <span>Third Quarter (6%):</span>
                  <span className='font-bold'>+₹2506</span>
                </div>
                <div className='flex justify-between items-center animate-fadeIn animate-delay-400'>
                  <span>Fourth Quarter (6%):</span>
                  <span className='font-bold'>+₹2957</span>
                </div>
                <div className='pt-3 border-t border-white/30 flex justify-between items-center animate-fadeIn animate-delay-500'>
                  <span className='font-bold'>Final Amount:</span>
                  <span className='font-bold text-xl text-gold'>₹19,388</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span>Total Profit:</span>
                  <span className='font-bold text-gold'>
                    ₹9,388 (26.25% return)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-gray-50 pattern-dots relative overflow-hidden'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title text-center animate-slideUp'>
            Why Choose MSV Infotech?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
            <Card className='relative overflow-hidden border-t-4 border-t-dark-green transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group'>
              {/* Background fill animation layer */}
              <div className='absolute inset-0 bg-dark-green/10 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0' />

              <CardContent className='pt-6 relative z-10'>
                <div className='flex flex-col items-center text-center'>
                  {/* Icon with rotation on hover */}
                  <div className='bg-dark-green/10 p-3 rounded-full mb-4 transition-transform duration-500 group-hover:rotate-[360deg]'>
                    <Shield className='h-8 w-8 text-dark-green' />
                  </div>

                  <h3 className='text-xl font-bold mb-2 text-gray-900'>
                    Secure Investment
                  </h3>
                  <p className='text-gray-600'>
                    Our investment plans are designed to be risk-free with a
                    fixed return ratio, providing stable and long-term wealth
                    creation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='relative overflow-hidden border-t-4 border-t-dark-green transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group'>
              {/* Animated background fill on hover */}
              <div className='absolute inset-0 bg-dark-green/10 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0' />

              <CardContent className='pt-6 relative z-10'>
                <div className='flex flex-col items-center text-center'>
                  {/* Rotating icon on hover */}
                  <div className='bg-dark-green/10 p-3 rounded-full mb-4 transition-transform duration-500 group-hover:rotate-[360deg]'>
                    <LineChart className='h-8 w-8 text-dark-green' />
                  </div>

                  <h3 className='text-xl font-bold mb-2 text-gray-900'>
                    Consistent Returns
                  </h3>
                  <p className='text-gray-600'>
                    Enjoy consistent quarterly returns of 6% through our
                    powerful compounding model, resulting in up to 26.25% annual
                    returns.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='relative overflow-hidden border-t-4 border-t-dark-green transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group'>
              {/* Background drawer fill effect */}
              <div className='absolute inset-0 bg-dark-green/10 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0' />

              <CardContent className='pt-6 relative z-10'>
                <div className='flex flex-col items-center text-center'>
                  {/* Rotating icon on hover */}
                  <div className='bg-dark-green/10 p-3 rounded-full mb-4 transition-transform duration-500 group-hover:rotate-[360deg]'>
                    <Users className='h-8 w-8 text-dark-green' />
                  </div>

                  <h3 className='text-xl font-bold mb-2 text-gray-900'>
                    Tree Family System
                  </h3>
                  <p className='text-gray-600'>
                    Our unique distribution system allocates 70% profits to the
                    main investor and 30% to family or dependents.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Plans Preview */}
      <section className='py-16 pattern-dots'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title text-center animate-slideUp'>
            Our Investment Plans
          </h2>
          <p className='text-center text-gray-600 max-w-3xl mx-auto mb-12'>
            Choose from our range of investment options designed to meet your
            financial goals and secure your future.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='relative overflow-hidden border-none shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
              <div className='absolute top-0 left-0 w-full h-2 bg-dark-green'></div>
              <CardContent className='pt-8'>
                <h3 className='text-2xl font-bold text-dark-green mb-4'>
                  Quarterly Compounding
                </h3>
                <p className='text-gray-600 mb-6'>
                  Our flagship plan with 6% quarterly returns through
                  compounding interest.
                </p>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5' />
                    <span>6% quarterly compounding returns</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5' />
                    <span>Up to 26.25% annual returns</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5' />
                    <span>Minimum investment: ₹10,000</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5' />
                    <span>Quarterly profit distribution</span>
                  </li>
                </ul>
                <Button className='w-full bg-dark-green hover:bg-light-green transition-all duration-300'>
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className='relative overflow-hidden border-none shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
              <div className='absolute top-0 left-0 w-full h-2 bg-gold'></div>
              <CardContent className='pt-8'>
                <h3 className='text-2xl font-bold text-dark-green mb-4'>
                  Tree Family Plan
                </h3>
                <p className='text-gray-600 mb-6'>
                  Benefit your family with our unique profit distribution
                  system.
                </p>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5' />
                    <span>70% profits to main investor</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5' />
                    <span>30% to family or dependents</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5' />
                    <span>Collective financial growth</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5' />
                    <span>Secure generational wealth</span>
                  </li>
                </ul>
                <Button className='w-full bg-gold hover:bg-[hsl(var(--gold-hover))] transition-all duration-300'>
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className='relative overflow-hidden border-none shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
              <div className='absolute top-0 left-0 w-full h-2 bg-light-green'></div>
              <CardContent className='pt-8'>
                <h3 className='text-2xl font-bold text-dark-green mb-4'>
                  Systematic Investment Plan
                </h3>
                <p className='text-gray-600 mb-6'>
                  A structured approach to long-term wealth creation with fixed
                  returns.
                </p>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5' />
                    <span>Risk-free investment</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5' />
                    <span>Fixed return ratio</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5' />
                    <span>Flexible investment amounts</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5' />
                    <span>Long-term wealth creation</span>
                  </li>
                </ul>
                <Button className='w-full bg-light-green hover:bg-dark-green transition-all duration-300'>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className='text-center mt-12'>
            <Link href='/investment-plans'>
              <Button
                size='lg'
                className='bg-dark-green hover:bg-light-green transition-all duration-300 transform hover:scale-105'
              >
                View All Investment Plans{' '}
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className='py-16 bg-gray-50 pattern-grid'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='animate-slideLeft'>
              <h2 className='section-title'>Calculate Your Returns</h2>
              <p className='text-gray-600 mb-6'>
                Use our investment calculator to see how your money can grow
                with MSV Infotech's quarterly compounding model.
              </p>
              <div className='space-y-4 mb-8'>
                <div className='flex items-center'>
                  <BarChart3 className='h-6 w-6 text-dark-green mr-3' />
                  <span>See your potential returns over time</span>
                </div>
                <div className='flex items-center'>
                  <BarChart3 className='h-6 w-6 text-dark-green mr-3' />
                  <span>Visualize the power of compounding</span>
                </div>
                <div className='flex items-center'>
                  <BarChart3 className='h-6 w-6 text-dark-green mr-3' />
                  <span>Plan your financial future with confidence</span>
                </div>
              </div>
              <div className='flex justify-center mb-6'>
                <AnimatedChart className='animate-float' />
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-xl p-6 animate-slideRight'>
              <InvestmentCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className='py-16 pattern-waves'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title text-center animate-slideUp'>
            What Our Investors Say
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
            <Card className='transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center text-center'>
                  <div className='w-16 h-16 rounded-full bg-gray-200 mb-4 overflow-hidden'>
                    <img
                      src='https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                      alt='Investor'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <h3 className='font-bold'>Rajesh Sharma</h3>
                  <p className='text-sm text-gray-500 mb-4'>
                    Investor since 2022
                  </p>
                  <p className='text-gray-600'>
                    "I've been investing with MSV Infotech for over a year now,
                    and the returns have been exactly as promised. The quarterly
                    compounding has significantly grown my initial investment."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center text-center'>
                  <div className='w-16 h-16 rounded-full bg-gray-200 mb-4 overflow-hidden'>
                    <img
                      src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                      alt='Investor'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <h3 className='font-bold'>Priya Patel</h3>
                  <p className='text-sm text-gray-500 mb-4'>
                    Investor since 2021
                  </p>
                  <p className='text-gray-600'>
                    "The Tree Family model has been a game-changer for my
                    family. Not only am I seeing great returns, but my children
                    are also benefiting from the 30% allocation."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center text-center'>
                  <div className='w-16 h-16 rounded-full bg-gray-200 mb-4 overflow-hidden'>
                    <img
                      src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                      alt='Investor'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <h3 className='font-bold'>Amit Verma</h3>
                  <p className='text-sm text-gray-500 mb-4'>
                    Investor since 2023
                  </p>
                  <p className='text-gray-600'>
                    "I was skeptical at first, but after seeing my first
                    quarterly return, I was convinced. The transparency and
                    professionalism of MSV Infotech are commendable."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-dark-green text-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <AnimatedBackground />
        </div>
        <div className='container mx-auto px-4 text-center relative z-10'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 animate-slideUp'>
            Ready to Secure Your Financial Future?
          </h2>
          <p className='text-lg mb-8 max-w-2xl mx-auto'>
            Start your investment journey with MSV Infotech today and experience
            the power of our quarterly compounding model.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-accent hover:bg-[hsl(var(--gold-hover))] transition-all duration-300 transform hover:scale-105'
            >
              Invest Now
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-dark-green border-white hover:bg-white/10 transition-all duration-300'
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
