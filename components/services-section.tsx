"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

const services = [
  {
    id: "sheet-metal-fabrication",
    title: "Sheet Metal Fabrication Services",
    description:
      "Precision sheet metal products manufactured using advanced laser-cutting systems and certified materials — engineered for durability and accuracy.",
    image: "/precision-laser-cutting-metal-fabrication-industri.jpg",
    cta: "Explore Capability",
  },
  {
    id: "sheet-metal-assembly",
    title: "Sheet Metal Assembly Services",
    description:
      "Tailored assembly solutions designed for aerospace, medical, and industrial applications — ensuring precision, consistency, and scalability.",
    image: "/metal-assembly-aerospace-industrial-precision-comp.jpg",
    cta: "Learn More",
  },
  {
    id: "welding-services",
    title: "Welding Services",
    description:
      "State-of-the-art welding for multiple materials and industries, combining technical expertise with decades of certified experience.",
    image: "/industrial-welding-precision-metal-fabrication-spa.jpg",
    cta: "Explore Capability",
  },
  {
    id: "metal-stamping",
    title: "Metal Stamping Services",
    description:
      "Short-run stamping optimized for precision, repeatability, and rapid delivery — supported by ISO-certified quality control.",
    image: "/metal-stamping-press-precision-manufacturing-indus.jpg",
    cta: "Learn More",
  },
  {
    id: "surface-finishing",
    title: "Metal Surface Finishing Services",
    description:
      "High-performance finishes that enhance corrosion resistance, improve aesthetics, and extend material life.",
    image: "/metal-surface-finishing-polished-industrial-coatin.jpg",
    cta: "Explore Capability",
  },
  {
    id: "rapid-prototyping",
    title: "Rapid Sheet Metal Prototyping Services",
    description:
      "Accelerated prototyping solutions that bring your metal designs to life with speed, precision, and engineering excellence.",
    image: "/rapid-prototyping-metal-parts-precision-engineerin.jpg",
    cta: "Learn More",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 bg-[#F8FAFC]" ref={ref}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0E23] tracking-tight mb-3">
            Stanron Steel Specialty Services
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-3 max-w-3xl mx-auto leading-relaxed">
            Explore our expert-led metal fabrication and stamping services — designed for precision, performance, and
            reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isInView,
}: { service: (typeof services)[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden border border-[#E5E7EB]/40 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2.5 cursor-pointer h-[440px] flex flex-col"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1A1F71] via-[#24398C] to-[#1A1F71] opacity-40 animate-[shimmer_8s_ease-in-out_infinite]" />

      <div className="relative h-[200px] overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E23]/50 to-[#1A1F71]/10" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 shadow-[inset_0_0_30px_rgba(36,57,140,0.25)]"
        />
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <motion.h3
          className="text-2xl font-semibold leading-tight mb-3 transition-colors duration-300"
          animate={{
            color: isHovered ? "#24398C" : "#0B0E23",
          }}
          style={{
            textShadow: isHovered ? "0 0 20px rgba(36,57,140,0.15)" : "none",
          }}
        >
          {service.title}
        </motion.h3>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
          {service.description}
        </p>

        <motion.button
          className="inline-flex items-center gap-2 text-[#1A1F71] font-medium text-base group/btn transition-all duration-200"
          whileHover={{ x: 3 }}
        >
          <span>{service.cta}</span>
          <motion.div animate={{ x: isHovered ? 3 : 0 }} transition={{ duration: 0.2 }}>
            <ArrowRightIcon className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(36,57,140,0.12) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{
          opacity: isHovered ? [0, 0.3, 0] : 0,
          x: isHovered ? ["0%", "200%"] : "-100%",
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          repeatDelay: 3,
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
          transform: "skewX(-20deg)",
        }}
      />
    </motion.div>
  )
}
