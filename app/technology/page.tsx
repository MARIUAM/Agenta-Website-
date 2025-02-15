import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Cpu,
  Database,
  Network,
  Shield,
  Sparkles,
} from "lucide-react"

const technologies = [
  {
    icon: Brain,
    name: "Neural Networks",
    description: "Advanced deep learning models for complex pattern recognition and decision making.",
    features: [
      "Multi-layer perceptrons",
      "Convolutional networks",
      "Recurrent networks",
      "Transformer architecture"
    ]
  },
  {
    icon: Database,
    name: "Big Data Processing",
    description: "Scalable data processing pipelines for handling massive datasets efficiently.",
    features: [
      "Distributed processing",
      "Real-time analytics",
      "Data warehousing",
      "ETL pipelines"
    ]
  },
  {
    icon: Network,
    name: "Cloud Infrastructure",
    description: "Enterprise-grade cloud infrastructure optimized for AI workloads.",
    features: [
      "Auto-scaling clusters",
      "GPU acceleration",
      "Load balancing",
      "High availability"
    ]
  },
  {
    icon: Shield,
    name: "Security & Privacy",
    description: "Advanced security measures to protect sensitive data and AI models.",
    features: [
      "Encryption at rest",
      "Secure transfer",
      "Access control",
      "Audit logging"
    ]
  }
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-1.5 mb-8">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Advanced Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Cutting-edge AI Technology
              <span className="text-primary block mt-2">
                Powering the Future
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Discover the advanced technologies behind our AI solutions that drive
              innovation and transform businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="relative group rounded-2xl border p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-4">
                  <tech.icon className="h-10 w-10 text-primary" />
                  <h3 className="text-2xl font-semibold">{tech.name}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                  <ul className="space-y-2 pt-4">
                    {tech.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Sparkles className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
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

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Ready to Experience Our Technology?</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Get started with our AI solutions and see the power of our technology in action.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}