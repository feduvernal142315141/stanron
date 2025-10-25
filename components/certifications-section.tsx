"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ShieldCheckIcon, DocumentCheckIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline"

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    icon: ShieldCheckIcon,
  },
  {
    name: "AS9100D",
    description: "Aerospace Quality Management",
    icon: DocumentCheckIcon,
  },
  {
    name: "ITAR Registered",
    description: "Defense Industry Compliance",
    icon: ClipboardDocumentCheckIcon,
  },
]

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Certified for Quality and Precision
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our commitment to quality is backed by industry-leading certifications. Every part we produce is fully
              traceable with comprehensive documentation, material certifications, and inspection reports.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We maintain strict quality control processes including first article inspection, in-process monitoring,
              and final inspection using calibrated measurement equipment.
            </p>
            <Button variant="outline" size="lg">
              View Certifications (PDF)
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <motion.div
                  animate={{
                    boxShadow: ["0 0 0 0 rgba(26, 31, 113, 0.4)", "0 0 0 10px rgba(26, 31, 113, 0)"],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
                >
                  <cert.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{cert.name}</h3>
                  <p className="text-muted-foreground">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
