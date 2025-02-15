import { Button } from "@/components/ui/button"
import { CircuitBoard } from "lucide-react";
import Link from "next/link"
import Typewriter from "@/components/ui/typewriter"
import {
  ArrowRight,
  Brain,
  ChartBar,
  Code2,
  Cpu,
  Database,
  Globe2,
  LineChart,
  Network,
  Shield,
  Sparkles,
  Zap,
  MessageSquare,
  Phone,
  Mail,
  HelpCircle
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "State-of-the-art machine learning models trained on diverse datasets for accurate predictions.",
  },
  {
    icon: Cpu,
    title: "Real-time Processing",
    description: "Process and analyze data in real-time with our high-performance computing infrastructure.",
  },
  {
    icon: Database,
    title: "Smart Data Analytics",
    description: "Transform raw data into actionable insights with our intelligent analytics platform.",
  },
]

const solutions = [
  {
    title: "Enterprise AI Solutions",
    description: "Custom AI solutions designed for enterprise-scale deployment and integration.",
    icon: Network,
    stats: [
      { label: "Faster Processing", value: "10x" },
      { label: "Cost Reduction", value: "40%" },
      { label: "Accuracy Rate", value: "99.9%" },
    ]
  },
  {
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with AI-powered analytics.",
    icon: LineChart,
    stats: [
      { label: "Prediction Accuracy", value: "95%" },
      { label: "Time Saved", value: "60%" },
      { label: "ROI Increase", value: "3x" },
    ]
  },
  {
    title: "Global AI Infrastructure",
    description: "Scalable, secure, and reliable infrastructure for AI operations worldwide.",
    icon: Globe2,
    stats: [
      { label: "Data Centers", value: "50+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Countries", value: "30+" },
    ]
  },
]

const testimonials = [
  {
    quote: "Agentic AI has transformed our business operations with their cutting-edge AI solutions.",
    author: "Sarah Chen",
    role: "CTO, TechCorp Global",
    company: "TechCorp Global",
  },
  {
    quote: "The level of accuracy and efficiency we've achieved with Agentic AI is remarkable.",
    author: "Michael Rodriguez",
    role: "Head of Innovation",
    company: "Future Systems Inc",
  },
  {
    quote: "Their AI solutions have given us a competitive edge in our market.",
    author: "Emily Watson",
    role: "Director of Operations",
    company: "DataDrive Solutions",
  },
]

const quickLinks = [
  {
    icon: HelpCircle,
    title: "Frequently Asked Questions",
    description: "Get answers to common questions about our AI solutions",
    link: "/faq",
    stats: "15+ Topics Covered",
    color: "text-blue-500"
  },
  {
    icon: ChartBar,
    title: "AI Analysis Dashboard",
    description: "View real-time insights and performance metrics",
    link: "/analysis",
    stats: "Live Analytics",
    color: "text-purple-500"
  },
  {
    icon: MessageSquare,
    title: "Contact Support",
    description: "Reach out to our expert team for assistance",
    link: "/contact",
    stats: "24/7 Support",
    color: "text-green-500"
  }
]

const quickFaqs = [
  {
    question: "What is Agentic AI?",
    answer: "Agentic AI is a cutting-edge artificial intelligence platform that combines advanced machine learning algorithms with natural language processing."
  },
  {
    question: "How secure is my data?",
    answer: "We implement bank-grade security measures including end-to-end encryption and secure data centers."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve various industries including healthcare, finance, retail, manufacturing, and technology."
  }
]

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    color: "text-blue-500"
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@agentic-ai.com",
    color: "text-purple-500"
  },
  {
    icon: MessageSquare,
    label: "Live Chat",
    value: "Available 24/7",
    color: "text-green-500"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-1.5 mb-8">
  <CircuitBoard className="h-4 w-4 text-primary" />
  <Typewriter text=" Powered by Maryam Saleem " className="text-sm font-semibold" />
</div>
            
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
              Transform Your Business with
              <span className="text-primary block mt-2">
                Intelligent AI Solutions
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Harness the power of artificial intelligence to drive innovation,
              automate processes, and make data-driven decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {/* <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button> */}
            </div>



         <br></br>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  className="group relative overflow-hidden rounded-2xl border bg-background/50 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-primary/5"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${link.color} bg-white/10`}>
                      <link.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{link.title}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                      <div className="mt-2 text-xs font-medium text-primary">{link.stats}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-primary/0 rounded-2xl transition-all duration-300 group-hover:border-primary/10" />
                </Link>
              ))}
            </div>

            {/* Quick Info Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {/* Quick FAQs */}
              <div className="rounded-2xl border bg-background/50 backdrop-blur-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Quick FAQs</h3>
                </div>
                <div className="space-y-4">
                  {quickFaqs.map((faq, index) => (
                    <div key={index} className="group">
                      <h4 className="font-medium text-sm">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{faq.answer}</p>
                    </div>
                  ))}
                  <Button variant="ghost" size="sm" asChild className="mt-2">
                    <Link href="/faq">
                      View All FAQs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="rounded-2xl border bg-background/50 backdrop-blur-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Quick Contact</h3>
                </div>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${info.color} bg-white/10`}>
                        <info.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{info.label}</div>
                        <div className="text-sm text-muted-foreground">{info.value}</div>
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" size="sm" asChild className="mt-2">
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="p-6 rounded-2xl bg-primary/5 backdrop-blur">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-2">Enterprise Clients</div>
              </div>
              <div className="p-6 rounded-2xl bg-primary/5 backdrop-blur">
                <div className="text-4xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground mt-2">Accuracy Rate</div>
              </div>
              <div className="p-6 rounded-2xl bg-primary/5 backdrop-blur">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-2">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Cutting-edge AI Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover how our AI solutions can transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative group rounded-2xl border p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Enterprise Solutions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive AI solutions tailored for enterprise needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-background rounded-2xl p-6 shadow-sm"
              >
                <solution.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  {solution.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from businesses that have transformed with our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="relative rounded-2xl border p-6"
              >
                <div className="absolute top-6 right-6">
                  <svg
                    className="h-8 w-8 text-primary/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179zm10 0C25.447 7.773 26 9 26 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                  </svg>
                </div>
                <blockquote className="text-lg mb-4">{testimonial.quote}</blockquote>
                <div className="mt-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
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
