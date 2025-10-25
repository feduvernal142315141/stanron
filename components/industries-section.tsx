"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const industries = [
  {
    name: "Aerospace",
    image: "/aerospace-metal-components-precision-parts.jpg",
    benefit: "Precision and compliance for aerospace components",
    description: "AS9100D certified manufacturing for critical flight components",
  },
  {
    name: "Medical Devices",
    image: "/medical-device-metal-components-surgical-instrumen.jpg",
    benefit: "Biocompatible materials and sterile manufacturing",
    description: "FDA-compliant processes for medical device components",
  },
  {
    name: "Defense",
    image: "/defense-military-metal-components-equipment.jpg",
    benefit: "Secure supply chain and ITAR compliance",
    description: "Trusted partner for defense contractors and military applications",
  },
  {
    name: "Energy",
    image: "/energy-sector-metal-components-industrial-equipmen.jpg",
    benefit: "Durable components for harsh environments",
    description: "High-performance parts for renewable and traditional energy sectors",
  },
  {
    name: "Construction",
    image: "/construction-metal-components-structural-parts.jpg",
    benefit: "Structural integrity and weather resistance",
    description: "Heavy-duty fabrication for construction and infrastructure",
  },
  {
    name: "Technology",
    image: "/technology-electronics-metal-components-enclosures.jpg",
    benefit: "Precision enclosures and thermal management",
    description: "Custom metal solutions for electronics and tech hardware",
  },
  {
    name: "Automotive",
    image: "/automotive-metal-components-car-parts.jpg",
    benefit: "High-volume production with consistent quality",
    description: "Stamped and fabricated parts for automotive applications",
  },
  {
    name: "Industrial Equipment",
    image: "/industrial-equipment-metal-components-machinery.jpg",
    benefit: "Custom solutions for unique applications",
    description: "Specialized fabrication for industrial machinery and equipment",
  },
]

export default function IndustriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const whatsappNumber = "+1234567890"

  return (
    <section id="industries" className="py-24 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trusted by leading companies across diverse sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <div className="absolute inset-0">
                <img
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/60 to-transparent" />
              </div>

              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
                <p className="text-sm text-secondary mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {industry.benefit}
                </p>
                <Button
                  asChild
                  size="sm"
                  className="bg-[rgb(37,211,102)] hover:bg-[rgb(32,176,85)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`I'm interested in ${industry.name} solutions`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View similar projects
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
