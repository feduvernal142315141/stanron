"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  PencilSquareIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/outline"

const steps = [
  {
    icon: PencilSquareIcon,
    title: "Engineering & Design",
    description:
      "Our engineering team collaborates closely with you to optimize every design for manufacturability, performance, and cost efficiency.",
  },
  {
    icon: BeakerIcon,
    title: "Rapid Prototyping",
    description:
      "Accelerated prototypes that help validate form and function before full-scale production, saving time and resources.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Fabrication",
    description:
      "State-of-the-art facilities and skilled technicians ensure every component is produced with unmatched precision.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Quality Assurance",
    description:
      "Comprehensive inspections and ISO-certified traceability at every step guarantee consistent, flawless results.",
  },
  {
    icon: TruckIcon,
    title: "Delivery",
    description:
      "On-time, flexible delivery with end-to-end visibility — ensuring your project stays on track from concept to completion.",
  },
]

export default function ProcessTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 md:py-28 bg-[#F8FAFC]" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0E23] mb-4 tracking-tight">How We Work</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            A certified process — from concept to delivery, with precision every step of the way.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#1A1F71] to-[#24398C] mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Animated connecting line with energy pulse */}
          <div className="absolute top-[32px] left-[10%] right-[10%] h-[2px] bg-[#E5E7EB]">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#1A1F71] to-[#24398C] relative overflow-hidden"
            >
              {/* Energy pulse effect */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#25D366] to-transparent opacity-60"
              />
            </motion.div>
          </div>

          <div className="relative grid grid-cols-5 gap-10 md:gap-14">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(26,31,113,0.15)] relative overflow-hidden">
                  {/* Diagonal shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <motion.div
                      initial={{ x: "-100%", y: "-100%" }}
                      whileHover={{ x: "100%", y: "100%" }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1A1F71]/5 to-transparent"
                    />
                  </div>

                  {/* Icon with gradient background and glow */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1A1F71] to-[#0B0E23] text-white mb-6 mx-auto shadow-[0_0_25px_rgba(26,31,113,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(26,31,113,0.4)]">
                    <step.icon className="h-8 w-8" />
                    {/* Metallic shine effect */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0B0E23] mb-3 text-center transition-colors duration-300 group-hover:text-[#24398C]">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center">{step.description}</p>

                  {/* Blue underline on hover */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "60px" }}
                    className="h-0.5 bg-gradient-to-r from-[#1A1F71] to-[#24398C] mx-auto mt-4 rounded-full"
                  />

                  {/* Ambient glow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_30px_rgba(26,31,113,0.1)]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 relative"
            >
              {/* Numbered icon with vertical line */}
              <div className="flex flex-col items-center flex-shrink-0">
                {/* Step number */}
                <div className="text-xs font-bold text-[#1A1F71] mb-2">{String(index + 1).padStart(2, "0")}</div>

                {/* Icon circle */}
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#1A1F71] to-[#0B0E23] text-white shadow-[0_0_20px_rgba(26,31,113,0.25)]">
                  <step.icon className="h-6 w-6" />
                  {/* Metallic shine */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                  />
                </div>

                {/* Vertical connecting line */}
                {index < steps.length - 1 && (
                  <div className="w-[2px] flex-1 bg-[#E5E7EB] mt-4 min-h-[80px]">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={isInView ? { height: "100%" } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="w-full bg-gradient-to-b from-[#1A1F71] to-[#24398C]"
                    />
                  </div>
                )}
              </div>

              {/* Card content */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative overflow-hidden">
                {/* Glow effect on scroll into view */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: [0, 0.3, 0] } : {}}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#1A1F71]/10 to-transparent rounded-2xl"
                />

                <h3 className="text-xl font-semibold text-[#0B0E23] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
