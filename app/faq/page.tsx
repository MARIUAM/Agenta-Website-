"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Agentic AI and how does it work?",
    answer: "Agentic AI is a cutting-edge artificial intelligence platform that combines advanced machine learning algorithms with natural language processing to provide intelligent solutions for businesses. Our AI systems learn from data, adapt to specific needs, and provide actionable insights."
  },
  {
    question: "How secure is my data with Agentic AI?",
    answer: "We implement bank-grade security measures including end-to-end encryption, secure data centers, and regular security audits. Your data is protected by multiple layers of security, and we comply with international data protection regulations."
  },
  {
    question: "What industries can benefit from Agentic AI?",
    answer: "Agentic AI serves various industries including healthcare, finance, retail, manufacturing, and technology. Our solutions are customizable to meet specific industry requirements and challenges."
  },
  {
    question: "How long does it take to implement Agentic AI solutions?",
    answer: "Implementation time varies based on the complexity of your needs. Typically, basic integration can be completed in 2-4 weeks, while more complex solutions might take 2-3 months for full deployment."
  },
  {
    question: "Do you offer custom AI solutions?",
    answer: "Yes, we specialize in creating custom AI solutions tailored to your specific business needs. Our team works closely with you to understand your requirements and develop personalized solutions."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 technical support, regular maintenance, and updates. Our support team is always available to help with any questions or issues you may encounter."
  },
  {
    question: "How does pricing work for your AI solutions?",
    answer: "Our pricing is based on your specific needs and usage. We offer flexible plans starting from basic packages to enterprise solutions. Contact our sales team for detailed pricing information."
  },
  {
    question: "Can Agentic AI integrate with existing systems?",
    answer: "Yes, our solutions are designed to integrate seamlessly with most existing systems and platforms through our comprehensive API and various integration options."
  },
  {
    question: "What makes Agentic AI different from other AI providers?",
    answer: "Our unique approach combines cutting-edge technology with practical business applications. We focus on delivering measurable results and ROI while maintaining transparency and ethical AI practices."
  },
  {
    question: "How do you handle data privacy and compliance?",
    answer: "We adhere to strict data privacy regulations including GDPR and CCPA. Our systems are designed with privacy-first principles, and we provide detailed documentation about our data handling practices."
  },
  {
    question: "What kind of training do you provide?",
    answer: "We offer comprehensive training programs including online courses, documentation, and hands-on workshops to ensure your team can effectively use our AI solutions."
  },
  {
    question: "Can I try Agentic AI before committing?",
    answer: "Yes, we offer demo sessions and trial periods for most of our solutions. Contact our sales team to schedule a demonstration or discuss trial options."
  },
  {
    question: "How often do you update your AI models?",
    answer: "Our AI models are continuously updated and improved based on new data and research. We regularly release updates to enhance performance and add new features."
  },
  {
    question: "What is your approach to ethical AI?",
    answer: "We are committed to developing and deploying AI responsibly. This includes ensuring fairness, transparency, and accountability in our AI systems while actively working to prevent bias."
  },
  {
    question: "Do you offer scalable solutions for growing businesses?",
    answer: "Yes, our solutions are designed to scale with your business. We offer flexible infrastructure that can adapt to increasing demands and evolving business needs."
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-grid-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Frequently Asked
              <span className="text-primary block mt-2">Questions</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Find answers to common questions about our AI solutions and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="gradient-border bg-card">
                  <AccordionTrigger className="px-6 text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}