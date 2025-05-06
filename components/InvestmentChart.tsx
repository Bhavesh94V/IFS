
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useState } from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TrendingUp, TrendingDown, ChartPie, ChartBar } from 'lucide-react';

interface InvestmentChartProps {
    investmentAmount: number;
    currentValue: number;
    profit: number;
    colorScheme: "teal" | "amber";
    chartType?: "growth" | "quarterly";
    monthlyData?: Array<{
        month: string;
        value: number;
    }>;
    quarterlyData?: Array<{
        quarter: string;
        returns: number;
    }>;
}

const InvestmentChart = ({
    investmentAmount,
    currentValue,
    profit,
    colorScheme,
    chartType = "growth",
    monthlyData = [
        { month: "Jan", value: investmentAmount },
        { month: "Feb", value: investmentAmount * 1.01 },
        { month: "Mar", value: investmentAmount * 1.025 },
        { month: "Apr", value: investmentAmount * 1.04 },
        { month: "May", value: investmentAmount * 1.06 },
        { month: "Jun", value: currentValue }
    ],
    quarterlyData = [
        { quarter: "Q1", returns: 2.5 },
        { quarter: "Q2", returns: 3.8 },
        { quarter: "Q3", returns: 1.5 },
        { quarter: "Q4", returns: 4.2 }
    ]
}: InvestmentChartProps) => {
    // Calculate percentage of profit
    const profitPercentage = ((profit / investmentAmount) * 100).toFixed(2);

    // States for interactive elements
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedChart, setSelectedChart] = useState<"pie" | "line" | "area" | "bar">(
        chartType === "growth" ? "area" : "bar"
    );

    // Data for the pie chart
    const pieData = [
        { name: 'Investment Amount', value: investmentAmount },
        { name: 'Profit', value: profit }
    ];

    // Colors based on color scheme
    const colors = {
        teal: ['#0d9488', '#2dd4bf', '#5eead4', '#99f6e4'],
        amber: ['#d97706', '#fbbf24', '#fcd34d', '#fef3c7']
    };

    const selectedColors = colors[colorScheme];

    // Secondary colors for additional chart elements
    const secondaryColors = colorScheme === "teal" ?
        ['#3b82f6', '#60a5fa', '#93c5fd'] :
        ['#ef4444', '#f87171', '#fca5a5'];

    // Handle mouse enter on pie slices
    const handleMouseEnter = (data: any, index: number) => {
        setActiveIndex(index);
    };

    // Handle mouse leave on pie slices
    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    // Chart selector based on type
    const renderChartSelector = () => (
        <div className="flex space-x-2 mb-4 justify-center">
            <button
                onClick={() => setSelectedChart("pie")}
                className={`p-2 rounded-md flex items-center ${selectedChart === "pie" ?
                    (colorScheme === "teal" ? 'bg-teal-100 text-teal-800' : 'bg-amber-100 text-amber-800') :
                    'bg-gray-100 text-gray-600'}`}
            >
                <ChartPie className="h-4 w-4 mr-1" />
                <span className="text-xs">Pie</span>
            </button>
            <button
                onClick={() => setSelectedChart("area")}
                className={`p-2 rounded-md flex items-center ${selectedChart === "area" ?
                    (colorScheme === "teal" ? 'bg-teal-100 text-teal-800' : 'bg-amber-100 text-amber-800') :
                    'bg-gray-100 text-gray-600'}`}
            >
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-xs">Area</span>
            </button>
            <button
                onClick={() => setSelectedChart("line")}
                className={`p-2 rounded-md flex items-center ${selectedChart === "line" ?
                    (colorScheme === "teal" ? 'bg-teal-100 text-teal-800' : 'bg-amber-100 text-amber-800') :
                    'bg-gray-100 text-gray-600'}`}
            >
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-xs">Line</span>
            </button>
            <button
                onClick={() => setSelectedChart("bar")}
                className={`p-2 rounded-md flex items-center ${selectedChart === "bar" ?
                    (colorScheme === "teal" ? 'bg-teal-100 text-teal-800' : 'bg-amber-100 text-amber-800') :
                    'bg-gray-100 text-gray-600'}`}
            >
                <ChartBar className="h-4 w-4 mr-1" />
                <span className="text-xs">Bar</span>
            </button>
        </div>
    );

    // Render different chart types
    const renderChart = () => {
        if (selectedChart === "pie") {
            return (
                <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={selectedColors[index % selectedColors.length]}
                                        stroke={activeIndex === index ? '#fff' : 'none'}
                                        strokeWidth={activeIndex === index ? 2 : 0}
                                        style={{
                                            filter: activeIndex === index ? 'drop-shadow(0px 0px 5px rgba(0,0,0,0.2))' : 'none',
                                            opacity: activeIndex === null || activeIndex === index ? 1 : 0.7,
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value: number) => [`₹${value.toLocaleString()}`, null]}
                                labelFormatter={(name) => `${name}`}
                                contentStyle={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e7eb',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                    padding: '8px 12px'
                                }}
                            />
                            <Legend
                                verticalAlign="bottom"
                                align="center"
                                wrapperStyle={{ paddingTop: '20px' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            );
        } else if (selectedChart === "line") {
            return (
                <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartType === "growth" ? monthlyData : quarterlyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis
                                dataKey={chartType === "growth" ? "month" : "quarter"}
                                tick={{ fontSize: 12 }}
                                axisLine={{ stroke: '#e5e7eb' }}
                                tickLine={false}
                            />
                            <YAxis
                                tick={{ fontSize: 12 }}
                                axisLine={{ stroke: '#e5e7eb' }}
                                tickLine={false}
                                tickFormatter={(value) => chartType === "growth" ? `₹${(value / 1000)}k` : `${value}%`}
                            />
                            <Tooltip
                                formatter={(value: any) => [
                                    chartType === "growth" ? `₹${parseInt(value).toLocaleString()}` : `${value}%`,
                                    chartType === "growth" ? "Value" : "Returns"
                                ]}
                                contentStyle={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e7eb',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                    padding: '8px 12px'
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey={chartType === "growth" ? "value" : "returns"}
                                stroke={selectedColors[0]}
                                strokeWidth={2}
                                dot={{ fill: selectedColors[0], r: 4 }}
                                activeDot={{ r: 6, fill: selectedColors[0], stroke: '#fff', strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            );
        } else if (selectedChart === "area") {
            return (
                <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartType === "growth" ? monthlyData : quarterlyData}>
                            <defs>
                                <linearGradient id={`color${colorScheme}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={selectedColors[0]} stopOpacity={0.8} />
                                    <stop offset="95%" stopColor={selectedColors[0]} stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis
                                dataKey={chartType === "growth" ? "month" : "quarter"}
                                tick={{ fontSize: 12 }}
                                axisLine={{ stroke: '#e5e7eb' }}
                                tickLine={false}
                            />
                            <YAxis
                                tick={{ fontSize: 12 }}
                                axisLine={{ stroke: '#e5e7eb' }}
                                tickLine={false}
                                tickFormatter={(value) => chartType === "growth" ? `₹${(value / 1000)}k` : `${value}%`}
                            />
                            <Tooltip
                                formatter={(value: any) => [
                                    chartType === "growth" ? `₹${parseInt(value).toLocaleString()}` : `${value}%`,
                                    chartType === "growth" ? "Value" : "Returns"
                                ]}
                                contentStyle={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e7eb',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                    padding: '8px 12px'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey={chartType === "growth" ? "value" : "returns"}
                                stroke={selectedColors[0]}
                                fillOpacity={1}
                                fill={`url(#color${colorScheme})`}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            );
        } else if (selectedChart === "bar") {
            return (
                <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartType === "growth" ? monthlyData : quarterlyData} barSize={chartType === "growth" ? 20 : 32}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                            <XAxis
                                dataKey={chartType === "growth" ? "month" : "quarter"}
                                tick={{ fontSize: 12 }}
                                axisLine={{ stroke: '#e5e7eb' }}
                                tickLine={false}
                            />
                            <YAxis
                                tick={{ fontSize: 12 }}
                                axisLine={{ stroke: '#e5e7eb' }}
                                tickLine={false}
                                tickFormatter={(value) => chartType === "growth" ? `₹${(value / 1000)}k` : `${value}%`}
                            />
                            <Tooltip
                                formatter={(value: any) => [
                                    chartType === "growth" ? `₹${parseInt(value).toLocaleString()}` : `${value}%`,
                                    chartType === "growth" ? "Value" : "Returns"
                                ]}
                                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                                contentStyle={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e7eb',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                    padding: '8px 12px'
                                }}
                            />
                            <Bar
                                dataKey={chartType === "growth" ? "value" : "returns"}
                                fill={selectedColors[0]}
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            );
        }
    };

    return (
        <div className="">
            <div className="flex justify-between items-center">
                {/* <h3 className="font-medium text-gray-800">
                    {chartType === "growth" ? "Performance Overview" : "Quarterly Returns"}
                </h3> */}
                {/* <div className="text-right">
                    <p className="text-sm text-gray-500">
                        {chartType === "growth" ? "Total Profit" : "Avg. Quarterly Return"}
                    </p>
                    <p className="text-lg font-medium text-green-600">
                        {chartType === "growth"
                            ? `₹${profit.toLocaleString()} (${profitPercentage}%)`
                            : `${(quarterlyData.reduce((acc, q) => acc + q.returns, 0) / quarterlyData.length).toFixed(1)}%`
                        }
                    </p>
                </div> */}
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 pt-4">
                {renderChartSelector()}
                {renderChart()}
            </div>

            {/* {chartType === "growth" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="md:col-span-1 bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div className="text-center mb-4">
                            <p className="text-sm text-gray-500">Investment Breakdown</p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center">
                                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: selectedColors[0] }}></div>
                                <span className="text-sm">Initial Investment</span>
                                <span className="ml-auto text-sm font-medium">₹{investmentAmount.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: selectedColors[1] }}></div>
                                <span className="text-sm">Profit Generated</span>
                                <span className="ml-auto text-sm font-medium">₹{profit.toLocaleString()}</span>
                            </div>
                            <div className="h-px bg-gray-200 my-1"></div>
                            <div className="flex items-center pt-2">
                                <span className="text-sm font-medium">Current Value</span>
                                <span className="ml-auto text-sm font-bold">₹{currentValue.toLocaleString()}</span>
                            </div>

                            <div className="mt-2 pt-3 border-t border-gray-200">
                                <div className="text-center">
                                    <p className="text-xs text-gray-500 mb-1">ROI</p>
                                    <p className="text-lg font-bold text-green-600">{profitPercentage}%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                <div className="text-xs text-gray-500">Initial Investment</div>
                                <div className="text-lg font-semibold mt-1">₹{investmentAmount.toLocaleString()}</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                <div className="text-xs text-gray-500">Current Value</div>
                                <div className="text-lg font-semibold mt-1">₹{currentValue.toLocaleString()}</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                <div className="text-xs text-gray-500">Absolute Profit</div>
                                <div className="text-lg font-semibold text-green-600 mt-1">₹{profit.toLocaleString()}</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                <div className="text-xs text-gray-500">ROI</div>
                                <div className="text-lg font-semibold text-green-600 mt-1">{profitPercentage}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}

            {/* {chartType === "quarterly" && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                    {quarterlyData.map((quarter, idx) => (
                        <div key={quarter.quarter} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <div className="text-xs text-gray-500">{quarter.quarter} Returns</div>
                            <div className={`text-lg font-semibold mt-1 ${quarter.returns >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {quarter.returns}%
                            </div>
                        </div>
                    ))}
                </div>
            )} */}
        </div>
    );
};

export default InvestmentChart;
