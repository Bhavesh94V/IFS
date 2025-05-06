import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartPie, TrendingUp, FileText, Info } from "lucide-react";
import InvestmentChart from "@/components/InvestmentChart";

const Index = () => {
    // Investment data for both plans
    // const quarterlyPlanData = {
    //     name: "Quarterly Compounding Plan",
    //     investmentAmount: 30000,
    //     currentValue: 34875,
    //     profit: 4875,
    //     startDate: "01 Jan 2023",
    //     nextPayout: "30 Jun 2023",
    //     isActive: true,
    //     monthlyData: [
    //         { month: "Jan", value: 30000 },
    //         { month: "Feb", value: 30600 },
    //         { month: "Mar", value: 31400 },
    //         { month: "Apr", value: 32900 },
    //         { month: "May", value: 33800 },
    //         { month: "Jun", value: 34875 }
    //     ],
    //     quarterlyData: [
    //         { quarter: "Q1 2023", returns: 4.2 },
    //         { quarter: "Q2 2023", returns: 3.8 },
    //         { quarter: "Q3 2023", returns: 5.1 },
    //         { quarter: "Q4 2023", returns: 3.5 }
    //     ]
    // };

    const treeFamilyPlanData = {
        name: "Tree Family Plan",
        investmentAmount: 20000,
        currentValue: 23250,
        profit: 3250,
        startDate: "15 Feb 2023",
        nextPayout: "15 Aug 2023",
        isActive: true,
        monthlyData: [
            { month: "Feb", value: 20000 },
            { month: "Mar", value: 20400 },
            { month: "Apr", value: 21200 },
            { month: "May", value: 22300 },
            { month: "Jun", value: 22800 },
            { month: "Jul", value: 23250 }
        ],
        quarterlyData: [
            { quarter: "Q1 2023", returns: 3.8 },
            { quarter: "Q2 2023", returns: 4.7 },
            { quarter: "Q3 2023", returns: 4.3 },
            { quarter: "Q4 2023", returns: 3.9 }
        ]
    };

    return (
        <div className="z-50 bg-gray-50 py-8 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                <Card className="mb-8 border rounded-lg p-6">
                    <div className="mb-4">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Investment Reports</h1>
                        <p className="text-gray-600 mt-1">Track your investment performance over time</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-6">
                            {/* <div className="border rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <TrendingUp className="h-5 w-5 text-gray-700 mr-2" />
                                        <h3 className="font-medium">Growth Analysis</h3>
                                    </div>
                                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                                        <FileText className="h-4 w-4" />
                                        Download PDF
                                    </Button>
                                </div>
                                <div className="h-80">
                                    <InvestmentChart
                                        investmentAmount={quarterlyPlanData.investmentAmount}
                                        currentValue={quarterlyPlanData.currentValue}
                                        profit={quarterlyPlanData.profit}
                                        colorScheme="teal"
                                        chartType="growth"
                                        monthlyData={quarterlyPlanData.monthlyData}
                                    />
                                </div>
                            </div> */}

                            <div className="border rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <ChartPie className="h-5 w-5 text-gray-700 mr-2" />
                                        <h3 className="font-medium">Quarterly Returns</h3>
                                    </div>
                                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                                        <FileText className="h-4 w-4" />
                                        Download PDF
                                    </Button>
                                </div>
                                <div className="h-80">
                                    <InvestmentChart
                                        investmentAmount={treeFamilyPlanData.investmentAmount}
                                        currentValue={treeFamilyPlanData.currentValue}
                                        profit={treeFamilyPlanData.profit}
                                        colorScheme="amber"
                                        chartType="quarterly"
                                        quarterlyData={treeFamilyPlanData.quarterlyData}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Growth Analysis */}
                        <Card className="overflow-hidden border rounded-lg">
                            <div className="bg-white p-4 border-b flex justify-between items-center">
                                <div className="flex items-center">
                                    <TrendingUp className="h-5 w-5 mr-2 text-gray-700" />
                                    <h2 className="font-medium text-lg text-gray-800">Growth Analysis</h2>
                                </div>
                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                    <FileText className="h-4 w-4" />
                                    Download PDF
                                </Button>
                            </div>
                            {/* <div className="p-6">
                                <InvestmentChart
                                    investmentAmount={quarterlyPlanData.investmentAmount}
                                    currentValue={quarterlyPlanData.currentValue}
                                    profit={quarterlyPlanData.profit}
                                    colorScheme="teal"
                                    chartType="growth"
                                    monthlyData={quarterlyPlanData.monthlyData}
                                />
                            </div> */}
                        </Card>

                        {/* Quarterly Returns */}
                        <Card className="overflow-hidden border rounded-lg">
                            <div className="bg-white p-4 border-b flex justify-between items-center">
                                <div className="flex items-center">
                                    <ChartPie className="h-5 w-5 mr-2 text-gray-700" />
                                    <h2 className="font-medium text-lg text-gray-800">Quarterly Returns</h2>
                                </div>
                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                    <FileText className="h-4 w-4" />
                                    Download PDF
                                </Button>
                            </div>
                            <div className="p-6">
                                <InvestmentChart
                                    investmentAmount={treeFamilyPlanData.investmentAmount}
                                    currentValue={treeFamilyPlanData.currentValue}
                                    profit={treeFamilyPlanData.profit}
                                    colorScheme="amber"
                                    chartType="quarterly"
                                    quarterlyData={treeFamilyPlanData.quarterlyData}
                                />
                            </div>
                        </Card>

                        
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Index;