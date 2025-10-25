"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  ClockIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  CubeIcon,
  LightBulbIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline"

const features = [
  {
    icon: ClockIcon,
    title: "Fast Lead Times",
    description: "2-5 day prototypes, 2-4 week production runs",
  },
  {
    icon: AcademicCapIcon,
    title: "Engineering Expertise",
    description: "In-house design support and DFM optimization",
  },
  {
    icon: ShieldCheckIcon,
    title: "Strict Quality Assurance",
    description: "ISO certified processes with full traceability",
  },
  {
    icon: CubeIcon,
    title: "Certified Materials",
    description: "Material certs and compliance documentation",
  },
  {
    icon: LightBulbIcon,
    title: "Rapid Prototyping",
    description: "Quick iterations to validate your designs",
  },
  {
    icon: ChartBarIcon,
    title: "Short-Run Production",
    description: "Flexible quantities from 10 to 10,000+ pieces",
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-muted" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose MetalWorks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Over 50 years of metalworking excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgb(255, 255, 255)" }}
              className="p-6 bg-card rounded-lg border border-border transition-all"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
