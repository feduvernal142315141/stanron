"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const whatsappNumber = "19549748050"
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to discuss a precision metal fabrication project with your engineering team.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const [showShine, setShowShine] = useState(false)
  const { scrollY } = useScroll()

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])

  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0.8])
  const titleY = useTransform(scrollY, [0, 300], [0, -20])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowShine(true)
      setTimeout(() => setShowShine(false), 1000)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "click_whatsapp_hero", {
        source: "hero",
        screen: window.innerWidth < 768 ? "mobile" : "desktop",
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[110px] md:pt-[118px] pb-20 px-4 sm:px-6">
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y: backgroundY }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src="/modern-precision-metal-fabrication-factory-floor-w.jpg"
            alt="Precision metal fabrication facility"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E23]/85 via-[#0B0E23]/75 to-[#1A1F71]/50" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E23]/40 via-transparent to-[#0B0E23]/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 md:space-y-8"
        >
          <motion.div style={{ opacity: titleOpacity, y: titleY }} className="space-y-3 md:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.2] tracking-tight text-balance"
            >
              Precision Metal Engineering,
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.2] tracking-tight text-balance"
            >
              Crafted for Speed and Trust
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/80 font-medium max-w-3xl mx-auto text-pretty"
          >
            Trusted sheet metal fabrication since 1972
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-3 md:gap-4 justify-center items-center pt-4 md:pt-6 max-w-md mx-auto"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="group relative flex items-center gap-3 bg-gradient-to-b from-[#25D366] to-[#1EBE5A] hover:from-[#1EBE5A] hover:to-[#25D366] text-white text-base md:text-lg font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-0.5 w-full justify-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(37,211,102,0.3)",
                  "0 0 25px rgba(37,211,102,0.4)",
                  "0 0 20px rgba(37,211,102,0.3)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              {showShine && (
                <motion.div
                  initial={{ x: "-100%", opacity: 0.6 }}
                  animate={{ x: "200%", opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                />
              )}

              <motion.svg
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 8.5,
                  ease: "easeInOut",
                }}
                className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:scale-110 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </motion.svg>
              <span className="text-sm md:text-base">Get a Quote on WhatsApp</span>

              <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#0B0E23] text-white text-xs md:text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none z-50">
                Chat directly with our engineering team
              </span>
            </motion.a>

            <motion.a
              href="#services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="group flex items-center gap-2 bg-[#1A1F71] hover:bg-[#22347A] text-white text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-[#1A1F71] hover:border-[#25D366]/30 w-full justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm md:text-base">Explore Our Capabilities</span>
              <svg
                className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center pt-4 md:pt-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <svg
                className="h-4 w-4 md:h-5 md:w-5 text-[#25D366] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white text-xs md:text-sm font-semibold whitespace-nowrap">
                50+ Years of Precision Engineering
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ChevronDownIcon className="h-6 w-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
