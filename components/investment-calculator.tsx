"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ArrowRight, TrendingUp, Info, BarChart3 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function InvestmentCalculator() {
  const [investment, setInvestment] = useState(10000)
  const [quarters, setQuarters] = useState(4)
  const [viewMode, setViewMode] = useState<"table" | "summary" | "chart">("summary")
  const [results, setResults] = useState<{
    quarterlyReturns: Array<{ quarter: number; profit: number; balance: number }>
    totalReturn: number
    profit: number
    percentageReturn: number
    treeFamily: {
      mukhiya: number
      family: number
      perMember: number
    }
  }>({
    quarterlyReturns: [],
    totalReturn: 0,
    profit: 0,
    percentageReturn: 0,
    treeFamily: {
      mukhiya: 0,
      family: 0,
      perMember: 0,
    },
  })

  // Calculate returns when investment or quarters change
  useEffect(() => {
    const quarterlyRate = 0.06 // 6% quarterly return
    let currentAmount = investment
    const quarterlyReturns: Array<{ quarter: number; profit: number; balance: number }> = []

    for (let i = 0; i < quarters; i++) {
      const quarterlyProfit = currentAmount * quarterlyRate
      currentAmount += quarterlyProfit
      quarterlyReturns.push({
        quarter: i + 1,
        profit: quarterlyProfit,
        balance: currentAmount,
      })
    }

    const totalReturn = currentAmount
    const profit = totalReturn - investment
    const percentageReturn = (profit / investment) * 100

    // Calculate Tree Family distribution
    const mukhiyaShare = profit * 0.7
    const familyShare = profit * 0.3
    const perMemberShare = familyShare / 5 // Assuming 5 family members

    setResults({
      quarterlyReturns,
      totalReturn,
      profit,
      percentageReturn,
      treeFamily: {
        mukhiya: mukhiyaShare,
        family: familyShare,
        perMember: perMemberShare,
      },
    })
  }, [investment, quarters])

  // Handle investment input change
  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value.replace(/,/g, ""))
    if (!isNaN(value) && value >= 0) {
      setInvestment(value)
    } else if (e.target.value === "") {
      setInvestment(0)
    }
  }

  // Handle preset amount selection
  const handlePresetAmount = (value: string) => {
    setInvestment(Number.parseInt(value))
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Render chart
  const renderChart = () => {
    const maxHeight = 150
    const maxProfit = Math.max(...results.quarterlyReturns.map((q) => q.profit))

    return (
      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Quarterly Profit Growth</span>
          <span>{formatCurrency(maxProfit)}</span>
        </div>
        <div className="h-[200px] flex items-end gap-1">
          {results.quarterlyReturns.map((quarter, index) => {
            const height = (quarter.profit / maxProfit) * maxHeight
            return (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex-1 group">
                      <div
                        className="bg-gradient-to-t from-dark-green to-light-green rounded-t group-hover:from-accent group-hover:to-gold transition-all duration-300"
                        style={{ height: `${height}px` }}
                      ></div>
                      <div className="text-xs text-center mt-1">{quarter.quarter}</div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Quarter {quarter.quarter}</p>
                    <p>Profit: {formatCurrency(quarter.profit)}</p>
                    <p>Balance: {formatCurrency(quarter.balance)}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <Tabs defaultValue="amount" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="amount">Investment Amount</TabsTrigger>
          <TabsTrigger value="duration">Duration</TabsTrigger>
        </TabsList>

        <TabsContent value="amount" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="investment">Initial Investment Amount</Label>
            <Input
              id="investment"
              type="text"
              value={formatCurrency(investment).replace("₹", "")}
              onChange={handleInvestmentChange}
              className="text-lg"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <Button
              variant="outline"
              onClick={() => handlePresetAmount("10000")}
              className={investment === 10000 ? "border-accent text-accent" : ""}
            >
              ₹10,000
            </Button>
            <Button
              variant="outline"
              onClick={() => handlePresetAmount("50000")}
              className={investment === 50000 ? "border-accent text-accent" : ""}
            >
              ₹50,000
            </Button>
            <Button
              variant="outline"
              onClick={() => handlePresetAmount("100000")}
              className={investment === 100000 ? "border-accent text-accent" : ""}
            >
              ₹1 Lakh
            </Button>
            <Button
              variant="outline"
              onClick={() => handlePresetAmount("1000000")}
              className={investment === 1000000 ? "border-accent text-accent" : ""}
            >
              ₹10 Lakhs
            </Button>
          </div>

          <div className="pt-2">
            <Slider
              min={10000}
              max={1000000}
              step={10000}
              value={[investment]}
              onValueChange={(value) => setInvestment(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>₹10,000</span>
              <span>₹10,00,000</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="duration" className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="quarters">Investment Duration</Label>
              <span className="font-medium">
                {quarters} {quarters === 1 ? "Quarter" : "Quarters"} ({Math.ceil(quarters / 4)}{" "}
                {Math.ceil(quarters / 4) === 1 ? "Year" : "Years"})
              </span>
            </div>
            <Slider
              id="quarters"
              min={1}
              max={20}
              step={1}
              value={[quarters]}
              onValueChange={(value) => setQuarters(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>1 Quarter</span>
              <span>5 Years</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <Button
              variant="outline"
              onClick={() => setQuarters(4)}
              className={quarters === 4 ? "border-accent text-accent" : ""}
            >
              1 Year
            </Button>
            <Button
              variant="outline"
              onClick={() => setQuarters(8)}
              className={quarters === 8 ? "border-accent text-accent" : ""}
            >
              2 Years
            </Button>
            <Button
              variant="outline"
              onClick={() => setQuarters(12)}
              className={quarters === 12 ? "border-accent text-accent" : ""}
            >
              3 Years
            </Button>
            <Button
              variant="outline"
              onClick={() => setQuarters(20)}
              className={quarters === 20 ? "border-accent text-accent" : ""}
            >
              5 Years
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg space-y-4 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg text-dark-green flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-accent animate-pulse" />
            Your Investment Growth
          </h3>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode("summary")}
              className={viewMode === "summary" ? "bg-muted" : ""}
            >
              Summary
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode("table")}
              className={viewMode === "table" ? "bg-muted" : ""}
            >
              Details
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode("chart")}
              className={viewMode === "chart" ? "bg-muted" : ""}
            >
              <BarChart3 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {viewMode === "summary" ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Initial Investment</p>
                <p className="font-bold text-lg">{formatCurrency(investment)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Final Amount</p>
                <p className="font-bold text-lg text-dark-green">{formatCurrency(results.totalReturn)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Profit</p>
                <p className="font-bold text-lg text-dark-green">{formatCurrency(results.profit)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Return Percentage</p>
                <p className="font-bold text-lg text-dark-green">{results.percentageReturn.toFixed(2)}%</p>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200">
              <div className="flex items-center mb-2">
                <h4 className="font-medium">Tree Family Distribution:</h4>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-1">
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Our unique Tree Family system distributes profits:</p>
                      <p>70% to the main investor (Mukhiya)</p>
                      <p>30% to family members (up to 5 members)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Mukhiya Share (70%)</p>
                  <p className="font-bold text-accent">{formatCurrency(results.treeFamily.mukhiya)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Family Share (30%)</p>
                  <p className="font-bold text-accent">{formatCurrency(results.treeFamily.family)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Per Member (5)</p>
                  <p className="font-bold text-accent">{formatCurrency(results.treeFamily.perMember)}</p>
                </div>
              </div>
            </div>
          </>
        ) : viewMode === "table" ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2">Quarter</th>
                  <th className="text-right py-2">Profit</th>
                  <th className="text-right py-2">Balance</th>
                </tr>
              </thead>
              <tbody>
                {results.quarterlyReturns.map((quarter) => (
                  <tr key={quarter.quarter} className="border-b border-gray-100">
                    <td className="py-2">Quarter {quarter.quarter}</td>
                    <td className="text-right py-2 text-dark-green">{formatCurrency(quarter.profit)}</td>
                    <td className="text-right py-2 font-medium">{formatCurrency(quarter.balance)}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <td className="py-2 font-medium">Total</td>
                  <td className="text-right py-2 font-bold text-dark-green">{formatCurrency(results.profit)}</td>
                  <td className="text-right py-2 font-bold">{formatCurrency(results.totalReturn)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          renderChart()
        )}
      </div>

      <div className="space-y-4">
        <Button className="w-full bg-accent hover:bg-[hsl(var(--gold-hover))] transition-all duration-300 transform hover:scale-105">
          Start Investing Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="text-center text-sm text-gray-500">
          <p>Secure, transparent, and profitable investment solutions</p>
        </div>
      </div>
    </div>
  )
}
