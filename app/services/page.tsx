import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Brain,
  Bot,
  ChartBar,
  CloudCog,
  Code2,
  Database,
  FileSearch,
  MessageSquareCode,
  Network,
  Shield,
  Sparkles,
  Zap
} from "lucide-react"

const services = [
  {
    icon: Brain,
    name: "Machine Learning Solutions",
    description: "Custom ML models trained on your data for precise predictions and insights.",
    features: [
      "Deep Learning Models",
      "Neural Networks",
      "Transfer Learning",
      "Model Optimization"
    ]
  },
  {
    icon: Bot,
    name: "Conversational AI",
    description: "Intelligent chatbots and virtual assistants that understand and engage naturally.",
    features: [
      "Natural Language Processing",
      "Intent Recognition",
      "Multi-language Support",
      "Context Awareness"
    ]
  },
  {
    icon: FileSearch,
    name: "Document Intelligence",
    description: "Extract insights from documents using advanced OCR and NLP techniques.",
    features: [
      "Document Classification",
      "Data Extraction",
      "Semantic Search",
      "Format Conversion"
    ]
  },
  {
    icon: ChartBar,
    name: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with AI-powered analytics.",
    features: [
      "Time Series Analysis",
      "Pattern Recognition",
      "Risk Assessment",
      "Market Intelligence"
    ]
  },
  {
    icon: CloudCog,
    name: "AI Infrastructure",
    description: "Scalable cloud infrastructure optimized for AI/ML workloads.",
    features: [
      "GPU Acceleration",
      "Auto-scaling",
      "Model Deployment",
      "Performance Monitoring"
    ]
  },
  {
    icon: Code2,
    name: "AI Development",
    description: "Custom AI solution development tailored to your business needs.",
    features: [
      "Solution Architecture",
      "API Development",
      "Integration Services",
      "Technical Support"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-1.5 mb-8">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Advanced AI Services for
              <span className="text-primary block mt-2">
                Modern Businesses
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Transform your business with our comprehensive suite of AI solutions,
              designed to drive innovation and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="relative group rounded-2xl border p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-4">
                  <service.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Choose Agentic AI</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We deliver excellence in AI solutions with a focus on innovation and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-background rounded-xl p-6 shadow-sm"
              >
                <benefit.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Transform your business with our cutting-edge AI solutions. Contact us today
              for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const benefits = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect your data and AI models.",
  },
  {
    icon: Network,
    title: "Scalable Solutions",
    description: "Infrastructure that grows with your business needs.",
  },
  {
    icon: MessageSquareCode,
    title: "Expert Support",
    description: "24/7 technical support from our team of AI specialists.",
  },
]