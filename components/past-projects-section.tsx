"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const projects = [
  {
    title: "Fabrication of a Steel Material Handling KANBAN Cart",
    badge: "Steel / Material Handling",
    meta: "Prototype · Short-Run · ISO 9001:2015 / AS9100D",
    image: "/steel-kanban-cart-material-handling-fabrication.jpg",
  },
  {
    title: "Fabrication of Aluminum Power Supply Frame for Medical Industry",
    badge: "Aluminum / Medical",
    meta: "Prototype · Short-Run · ISO 9001:2015 / AS9100D",
    image: "/aluminum-power-supply-frame-medical-industry.jpg",
  },
  {
    title: "Stainless Steel Cytometer Frame for Medical Hematology Industry",
    badge: "Stainless Steel / Medical Hematology",
    meta: "Prototype · Short-Run · ISO 9001:2015 / AS9100D",
    image: "/stainless-steel-cytometer-frame-medical-hematology.jpg",
  },
]

export default function PastProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const whatsappNumber = "+19549748050"

  return (
    <section id="past-projects" className="py-14 md:py-28 bg-[#F8FAFC]" ref={ref}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20, letterSpacing: "-0.02em" }}
            animate={isInView ? { opacity: 1, y: 0, letterSpacing: "-0.025em" } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-extrabold text-[#1A1F71] tracking-tight mb-4"
          >
            View Our Past Metal Fabrication Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto font-medium"
          >
            We partner with leading teams across North America to engineer custom, precision-built metal solutions.
          </motion.p>
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "80px", opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#1A1F71] to-[#24398C] mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#E5E7EB]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(26,31,113,0.15)]"
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-106"
                />
                {/* Metallic overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E23]/50 to-[#1A1F71]/10 transition-opacity duration-300" />

                {/* Industry/Material Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute top-4 left-4 px-3 py-1.5 bg-[#1A1F71]/90 backdrop-blur-sm text-white text-xs font-semibold rounded-lg"
                  style={{
                    boxShadow: "0 4px 12px rgba(26,31,113,0.3)",
                  }}
                >
                  {project.badge}
                </motion.div>

                {/* Metallic border sheen on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, transparent 0%, rgba(26,31,113,0.1) 50%, transparent 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-[#1A1F71] leading-tight mb-3 group-hover:text-[#24398C] transition-colors duration-300 min-h-[3.5rem]">
                  {project.title}
                </h3>

                {/* Meta line */}
                <p className="text-xs md:text-sm text-[#4B5563]/60 mb-4 font-medium">{project.meta}</p>

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  {/* View details CTA */}
                  <button className="group/btn inline-flex items-center text-[#1A1F71] font-medium text-sm transition-all duration-200">
                    <span>View details</span>
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>

                  {/* WhatsApp mini-CTA */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`I'd like to discuss a project similar to: ${project.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#1EBE5A] font-medium text-sm transition-colors duration-200"
                  >
                    <motion.svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, repeatDelay: 12 }}
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </motion.svg>
                    <span>Discuss a similar project on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Ambient light halo on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  boxShadow: "inset 0 0 60px rgba(26,31,113,0.1)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Section Closing - Double CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-[#E5E7EB]/60 bg-white rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#1A1F71] hover:bg-[#0B0E23] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              See All Past Projects
            </motion.button>

            {/* Secondary WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("I'd like to share my drawing for a quote")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Share your drawing via WhatsApp
            </motion.a>
          </div>

          {/* Trust note */}
          <p className="text-center text-xs text-[#4B5563]/60 font-medium">
            50+ Years of Precision Engineering · ISO 9001:2015 · AS9100D
          </p>
        </motion.div>
      </div>
    </section>
  )
}
