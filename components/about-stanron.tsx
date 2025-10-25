"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ClockIcon, ShieldCheckIcon, CpuChipIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const values = [
  {
    icon: ClockIcon,
    title: "Over 50 Years of Excellence",
    description: "Precision-driven engineering since 1972.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Certified Quality",
    description: "ISO 9001:2015 and AS9100D standards guaranteed.",
  },
  {
    icon: CpuChipIcon,
    title: "Advanced Technology",
    description: "2k Fiber Laser Cutting | CNC Turret Punches.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Custom Engineering Solutions",
    description: "Tailored design support for unique industry needs.",
  },
]

export default function AboutStanron() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden" ref={ref}>
      {/* Background gradient with metallic texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F71] via-[#0B0E23] to-[#0B0E23]">
        {/* Hexagonal pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' strokeWidth='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-25 md:opacity-40">
        <Image
          src="/precision-laser-cutting-metal-fabrication-industri.jpg"
          alt="Stanron Steel Specialties manufacturing facility"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/60" />
      </div>

      {/* Animated border line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent origin-left"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Precision. Passion. Proven Results.
            </h2>
            <p className="text-xl text-blue-200 tracking-wide mb-6">
              Delivering excellence in custom metal fabrication since 1972 — combining innovation, craftsmanship, and
              ISO-certified precision.
            </p>
            <p className="text-gray-200 leading-relaxed max-w-3xl text-base md:text-lg">
              At Stanron Steel Specialties, we've spent over five decades mastering the art of precision metal
              fabrication. From aerospace and healthcare to communications and technology, our experts engineer every
              component with the highest standards of accuracy and durability. With ISO 9001:2015 / AS9100D
              certification, state-of-the-art laser cutting, CNC tooling, and a commitment to perfection, we transform
              raw metal into performance-ready products trusted across industries.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <div className="text-center lg:text-left">
                <p className="text-2xl font-semibold text-white mb-2">Let's Build Precision Together</p>
                <p className="text-blue-200 mb-4">Talk to our experts today</p>
                <a
                  href="https://wa.me/19549748050?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20precision%20metal%20fabrication%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#1EBE5A] text-white font-semibold rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:border-2 hover:border-[#1A1F71] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Get a Quote on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Values grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(3, 126, 204, 0.6)",
                }}
                className="group relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                {/* Metallic glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/10 group-hover:via-blue-400/5 group-hover:to-transparent transition-all duration-500" />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <value.icon className="h-12 w-12 text-blue-300 mb-4 group-hover:text-blue-200 transition-colors duration-300" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2 relative">{value.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed relative">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom animated line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent origin-right"
      />
    </section>
  )
}
