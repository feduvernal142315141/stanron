"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { StarIcon } from "@heroicons/react/24/solid"

const testimonials = [
  {
    name: "David Collins",
    company: "AeroTech Industries",
    role: "Manufacturing Engineer",
    content:
      "Stanron's precision and communication helped us reduce lead time by 40% while maintaining aerospace-grade quality.",
    rating: 5,
  },
  {
    name: "Sarah Martinez",
    company: "MedLine Precision",
    role: "Engineering Director",
    content:
      "Their ISO-certified processes and attention to detail make them our trusted partner for critical medical components.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "SteelPro Systems",
    role: "Supply Chain Manager",
    content:
      "From prototyping to production, Stanron delivers consistent quality and reliability. Their team truly understands metal fabrication.",
    rating: 5,
  },
  {
    name: "Jennifer Thompson",
    company: "Industrial Solutions Corp",
    role: "Product Development Lead",
    content:
      "Fast turnaround on custom fabrication allowed us to iterate quickly and meet our aggressive market deadlines.",
    rating: 5,
  },
]

const companyLogos = [
  "AeroTech Industries",
  "MedLine Precision",
  "SteelPro Systems",
  "Industrial Solutions",
  "Precision Manufacturing",
  "Advanced Materials Co",
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isPaused])

  const whatsappLink = `https://wa.me/19549748050?text=Hi%2C%20I%27d%20like%20to%20discuss%20my%20project.`

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #0B0E23 0%, #1A1F71 100%)",
      }}
    >
      {/* Metallic texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #6B7280 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Animated metallic shine */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #037ecc 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #037ecc 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, #037ecc 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">What Our Clients Say</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-[#1A1F71] via-[#037ecc] to-[#25D366] mx-auto mb-6 rounded-full"
          />
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            Trusted by leaders in aerospace, healthcare, and technology industries.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {/* Cards container */}
            <div className="relative h-[420px] md:h-[360px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 0.95,
                    x: index === currentIndex ? 0 : index < currentIndex ? -50 : 50,
                    display: index === currentIndex ? "block" : "none",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <motion.div
                    className="relative h-full bg-[#1A1F71]/40 backdrop-blur-md rounded-3xl border border-[#1A1F71]/40 p-8 md:p-12 overflow-hidden group"
                    style={{
                      boxShadow: "0 0 40px rgba(3, 126, 204, 0.2)",
                    }}
                    whileHover={{
                      boxShadow: "0 0 50px rgba(3, 126, 204, 0.4)",
                      borderColor: "rgba(3, 126, 204, 0.6)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Diagonal shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%", y: "-100%" }}
                      whileHover={{ x: "100%", y: "100%" }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Large quote icon */}
                    <svg
                      className="absolute top-6 left-8 h-16 w-16 text-gray-300/20"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                    </svg>

                    {/* Stars */}
                    <div className="relative flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                        >
                          <StarIcon className="h-5 w-5 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="relative text-lg md:text-xl text-gray-100 leading-relaxed italic mb-8 z-10">
                      "{testimonial.content}"
                    </p>

                    {/* Client info */}
                    <div className="relative z-10">
                      <div className="font-semibold text-lg text-white">{testimonial.name}</div>
                      <div className="text-sm text-blue-300 mt-1">{testimonial.role}</div>
                      <div className="text-sm text-blue-200/80 mt-0.5">{testimonial.company}</div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#037ecc] w-8 shadow-[0_0_10px_#037ecc]"
                      : "bg-white/30 w-2 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Company logos marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden py-8 mb-12"
        >
          <div className="flex gap-12 animate-marquee">
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-white/40 font-semibold text-sm tracking-wide whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Let's Build Precision Together</h3>
          <p className="text-blue-200 mb-6">Talk to our experts today</p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-base rounded-full transition-all duration-200 group"
            style={{
              boxShadow: "0 4px 20px rgba(37, 211, 102, 0.35)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 6px 30px rgba(37, 211, 102, 0.5)",
              borderColor: "#037ecc",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Get a Quote on WhatsApp
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              →
            </motion.span>
          </motion.a>

          <p className="text-xs text-white/40 mt-6">50+ Years of Precision Engineering · ISO 9001:2015 · AS9100D</p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
