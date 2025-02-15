"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  Brain,
  ChartBar,
  CircuitBoard,
  LineChart as LineChartIcon,
  Network,
  PieChart as PieChartIcon,
  Sparkles,
  Zap,
} from "lucide-react"

const performanceData = [
  { month: "Jan", accuracy: 92, speed: 85, efficiency: 78 },
  { month: "Feb", accuracy: 93, speed: 87, efficiency: 80 },
  { month: "Mar", accuracy: 95, speed: 89, efficiency: 84 },
  { month: "Apr", accuracy: 94, speed: 88, efficiency: 85 },
  { month: "May", accuracy: 96, speed: 90, efficiency: 87 },
  { month: "Jun", accuracy: 97, speed: 92, efficiency: 89 },
]

const modelDistribution = [
  { name: "Neural Networks", value: 35 },
  { name: "Decision Trees", value: 25 },
  { name: "SVM", value: 20 },
  { name: "Random Forest", value: 20 },
]

const processingStats = [
  { name: "Data 1", processed: 4000, pending: 2400 },
  { name: "Data 2", processed: 3000, pending: 1398 },
  { name: "Data 3", processed: 2000, pending: 9800 },
  { name: "Data 4", processed: 2780, pending: 3908 },
  { name: "Data 5", processed: 1890, pending: 4800 },
]

const metrics = [
  {
    title: "Model Accuracy",
    value: "97.8%",
    change: "+2.3%",
    icon: Brain,
  },
  {
    title: "Processing Speed",
    value: "125ms",
    change: "-15ms",
    icon: Zap,
  },
  {
    title: "Active Models",
    value: "234",
    change: "+12",
    icon: Network,
  },
  {
    title: "Data Processed",
    value: "1.2TB",
    change: "+0.3TB",
    icon: ChartBar,
  },
]

export default function AnalysisPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-1.5 mb-8">
              <CircuitBoard className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Real-time Analysis</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              AI Performance
              <span className="text-primary block mt-2">Analytics Dashboard</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Monitor and analyze your AI models' performance with real-time insights
              and detailed metrics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-lg border relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className="h-6 w-6 text-primary" />
                    <span className={`text-sm ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {metric.change}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-muted-foreground">{metric.title}</h3>
                  <p className="text-3xl font-bold mt-2">{metric.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Performance Trends */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card rounded-xl p-6 shadow-lg border"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Performance Trends</h3>
                <LineChartIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="accuracy"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="speed"
                      stroke="hsl(var(--secondary))"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="efficiency"
                      stroke="hsl(var(--accent))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Model Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card rounded-xl p-6 shadow-lg border"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Model Distribution</h3>
                <PieChartIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={modelDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="hsl(var(--primary))"
                      paddingAngle={5}
                      dataKey="value"
                    />
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Processing Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-xl p-6 shadow-lg border lg:col-span-2"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Processing Overview</h3>
                <ChartBar className="h-5 w-5 text-primary" />
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={processingStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="processed" fill="hsl(var(--primary))" />
                    <Bar dataKey="pending" fill="hsl(var(--secondary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Ready to Optimize Your AI?</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Get detailed insights and improve your AI models' performance with our
              advanced analytics tools.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule a Demo
                  <Sparkles className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/documentation">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}