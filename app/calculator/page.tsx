import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import InvestmentCalculator from "@/components/investment-calculator"
import AnimatedBackground from "@/components/animated-background"
import AnimatedChart from "@/components/animated-chart"
import InvestmentForm from "@/components/investment-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slideUp">
          <h1 className="text-4xl font-bold text-dark-green mb-4">Investment Calculator</h1>
          <p className="text-lg text-gray-600">
            Calculate your potential returns with MSV Infotech's quarterly compounding investment model.
          </p>
        </div>

        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="calculator">Calculate Returns</TabsTrigger>
            <TabsTrigger value="invest">Start Investing</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-slideLeft">
                <Card className="relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 z-0">
                    <AnimatedBackground />
                  </div>
                  <CardHeader className="relative z-10">
                    <CardTitle>Calculate Your Returns</CardTitle>
                    <CardDescription>
                      See how your investment grows with our 6% quarterly compounding model
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <InvestmentCalculator />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6 animate-slideRight">
                <Card className="transform transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>How Our Returns Work</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      MSV Infotech offers a powerful investment model based on quarterly compounding:
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Each quarter, your investment earns a 6% return</li>
                      <li>Returns are automatically compounded, increasing your base for the next quarter</li>
                      <li>This creates an accelerating growth curve</li>
                      <li>A full year (4 quarters) can yield up to 26.25% total return</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                      <AnimatedChart className="animate-float" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="transform transition-all duration-300 hover:shadow-lg pattern-dots">
                  <CardHeader>
                    <CardTitle>Example: ₹10,000 Investment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Initial Investment:</span>
                        <span className="font-bold">₹10,000</span>
                      </div>
                      <div className="flex justify-between items-center animate-fadeIn animate-delay-100">
                        <span>First Quarter (6%):</span>
                        <span className="font-bold">+₹600 = ₹10,600</span>
                      </div>
                      <div className="flex justify-between items-center animate-fadeIn animate-delay-200">
                        <span>Second Quarter (6%):</span>
                        <span className="font-bold">+₹636 = ₹11,236</span>
                      </div>
                      <div className="flex justify-between items-center animate-fadeIn animate-delay-300">
                        <span>Third Quarter (6%):</span>
                        <span className="font-bold">+₹674 = ₹11,910</span>
                      </div>
                      <div className="flex justify-between items-center animate-fadeIn animate-delay-400">
                        <span>Fourth Quarter (6%):</span>
                        <span className="font-bold">+₹715 = ₹12,625</span>
                      </div>
                      <div className="pt-3 border-t border-gray-200 flex justify-between items-center animate-fadeIn animate-delay-500">
                        <span className="font-bold">Total Profit:</span>
                        <span className="font-bold text-dark-green">₹2,625 (26.25%)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="invest">
            <InvestmentForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
