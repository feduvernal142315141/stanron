"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { Building2, MapPin, HelpCircle } from "lucide-react"
import Image from "next/image"

const navigation = [
  { name: "Services", href: "#services", description: "Explore our precision fabrication capabilities" },
  { name: "Past Projects", href: "#past-projects", description: "See what we've engineered for global clients" },
  {
    name: "About",
    href: "#about",
    description: "Five decades of certified excellence",
    dropdown: [
      {
        name: "About Us",
        href: "#about",
        description: "Learn more about our company",
        icon: Building2,
        color: "#037ecc",
      },
      {
        name: "Locations",
        href: "#location",
        description: "Find our location and get directions",
        icon: MapPin,
        color: "#03a9f4",
      },
      {
        name: "FAQ",
        href: "#faq",
        description: "Find quick answers to common questions",
        icon: HelpCircle,
        color: "#4CC9F0",
      },
    ],
  },
  { name: "Contact", href: "#contact", description: "Reach our engineering team directly" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [whatsappPulse, setWhatsappPulse] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setWhatsappPulse(true)
      setTimeout(() => setWhatsappPulse(false), 600)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const phoneNumber = "+19549748050"
  const whatsappLink = `https://wa.me/19549748050?text=Hi%2C%20I%27d%20like%20a%20metal%20fabrication%20quote.`

  const handleWhatsAppClick = (source: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "click_whatsapp_header", {
        source: source,
        screen: window.innerWidth < 768 ? "mobile" : "desktop",
      })
    }
  }

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.02 }}
          className="bg-[rgb(247,247,247)] border-b border-[rgb(229,231,235)]"
        >
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="flex h-[38px] items-center justify-between text-sm">
              {/* Left side: Phone */}
              <div className="flex items-center gap-3 md:gap-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-1.5 text-[rgb(107,114,128)] hover:text-[rgb(26,31,113)] transition-colors duration-200"
                  title="Call our team"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="font-medium">{phoneNumber}</span>
                </a>

                {/* Gear separator */}
                <svg
                  className="hidden md:block h-3 w-3 text-[rgb(229,231,235)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>

                {/* Center: Slogan */}
                <span className="hidden md:inline text-[rgb(107,114,128)] tracking-normal font-medium">
                  Precision Engineering Since 1972
                </span>
              </div>

              {/* Right side: Certifications with enhanced tooltips */}
              <div className="flex items-center gap-2 text-xs">
                <div className="group relative">
                  <span className="px-2 py-1 bg-[rgb(26,31,113)]/5 text-[rgb(26,31,113)] rounded font-medium cursor-help transition-all duration-200 hover:bg-[rgb(26,31,113)]/10">
                    ISO 9001:2015
                  </span>
                  <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-[rgb(11,14,35)] text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                    Quality Management System
                    <div className="absolute -top-1 right-4 w-2 h-2 bg-[rgb(11,14,35)] rotate-45"></div>
                  </div>
                </div>
                <span className="text-[rgb(229,231,235)]">·</span>
                <div className="group relative">
                  <span className="px-2 py-1 bg-[rgb(26,31,113)]/5 text-[rgb(26,31,113)] rounded font-medium cursor-help transition-all duration-200 hover:bg-[rgb(26,31,113)]/10">
                    AS9100D Certified
                  </span>
                  <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-[rgb(11,14,35)] text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                    Aerospace Standard Certified
                    <div className="absolute -top-1 right-4 w-2 h-2 bg-[rgb(11,14,35)] rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <nav
          className={`transition-all duration-300 ${
            scrolled ? "bg-white/95 backdrop-blur-md shadow-sm h-[64px] md:h-[72px]" : "bg-white h-[72px] md:h-[80px]"
          }`}
        >
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-between h-full">
              <a href="#" onClick={scrollToTop} className="flex items-center group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative overflow-hidden"
                >
                  <Image
                    src="/logo.png"
                    alt="Stanron Steel Specialties - Custom Metal Fabrication"
                    width={180}
                    height={40}
                    className="h-[36px] md:h-[44px] w-auto"
                    priority
                  />
                  {/* Metallic shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.div>
              </a>

              <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8">
                {navigation.map((item) =>
                  item.dropdown ? (
                    // About dropdown menu
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setAboutDropdownOpen(true)}
                      onMouseLeave={() => setAboutDropdownOpen(false)}
                    >
                      <button
                        className={`relative flex items-center gap-1 text-[16px] md:text-[17px] font-medium tracking-normal transition-colors duration-200 group ${
                          activeSection === "about" || activeSection === "location" || activeSection === "faq"
                            ? "text-[rgb(26,31,113)]"
                            : "text-[rgb(17,17,17)] hover:text-[rgb(26,31,113)]"
                        }`}
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform duration-300 ease-out ${aboutDropdownOpen ? "rotate-180" : ""}`}
                        />
                        <span
                          className={`absolute -bottom-1 left-0 h-[2px] bg-[rgb(26,31,113)] transition-all duration-180 ${
                            activeSection === "about" || activeSection === "location" || activeSection === "faq"
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {aboutDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-2 w-72 bg-[#0B0E23]/95 backdrop-blur-lg border border-[#037ecc33] rounded-2xl shadow-[0_0_30px_#037ecc22] overflow-hidden z-50"
                          >
                            {item.dropdown.map((subItem, index) => {
                              const IconComponent = subItem.icon
                              return (
                                <motion.a
                                  key={subItem.name}
                                  href={subItem.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1, duration: 0.2 }}
                                  className="group/item relative flex items-center gap-3 px-5 py-4 text-white hover:text-[#037ecc] hover:bg-[#ffffff0d] transition-all duration-300 ease-out border-b border-[#1A1F71]/30 last:border-b-0"
                                  onClick={() => setAboutDropdownOpen(false)}
                                >
                                  <motion.div
                                    className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#037ecc] to-[#00b7ff]"
                                    initial={{ scaleY: 0 }}
                                    whileHover={{ scaleY: 1 }}
                                    transition={{ duration: 0.3 }}
                                  />

                                  <motion.div
                                    className="relative"
                                    whileHover={{ scale: 1.1, rotate: index === 2 ? 10 : 0 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                  >
                                    <IconComponent
                                      className="w-5 h-5 transition-all duration-300 ease-out"
                                      style={{
                                        color: "#9EB3C7",
                                        strokeWidth: 1.5,
                                        filter: "drop-shadow(0 0 0px transparent)",
                                      }}
                                    />
                                    <motion.div
                                      className="absolute inset-0"
                                      initial={{ opacity: 0 }}
                                      whileHover={{ opacity: 1 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <IconComponent
                                        className="w-5 h-5"
                                        style={{
                                          color: subItem.color,
                                          strokeWidth: 1.5,
                                          filter: `drop-shadow(0 0 6px ${subItem.color}88)`,
                                        }}
                                      />
                                    </motion.div>
                                  </motion.div>

                                  <div className="flex-1">
                                    <div className="font-semibold text-sm group-hover/item:text-[#037ecc] transition-colors duration-300">
                                      {subItem.name}
                                    </div>
                                    <div className="text-xs text-white/60 mt-0.5">{subItem.description}</div>
                                  </div>
                                </motion.a>
                              )
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular menu items
                    <a
                      key={item.name}
                      href={item.href}
                      className={`relative text-[16px] md:text-[17px] font-medium tracking-normal transition-colors duration-200 group ${
                        activeSection === item.href.slice(1)
                          ? "text-[rgb(26,31,113)]"
                          : "text-[rgb(17,17,17)] hover:text-[rgb(26,31,113)]"
                      }`}
                      aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] bg-[rgb(26,31,113)] transition-all duration-180 ${
                          activeSection === item.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </a>
                  ),
                )}

                <div className="flex items-center gap-3 ml-2">
                  {/* Primary WhatsApp CTA */}
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWhatsAppClick("header")}
                    className={`flex items-center gap-2 h-[44px] px-5 md:px-6 bg-[rgb(37,211,102)] hover:bg-[rgb(32,176,85)] text-white font-semibold text-[16px] md:text-[17px] rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110 ${
                      whatsappPulse ? "animate-pulse-whatsapp" : ""
                    }`}
                    aria-label="Open WhatsApp chat"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    title="Chat directly with our engineers"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span className="font-medium">Get a Quote on WhatsApp</span>
                  </motion.a>

                  {/* Secondary Quote CTA */}
                  <motion.a
                    href="#contact"
                    className="h-[44px] px-4 md:px-5 bg-[rgb(34,52,122)] hover:bg-[rgb(26,31,113)] text-white font-medium text-[16px] md:text-[17px] rounded-xl transition-all duration-200 hover:shadow-md flex items-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request a Quote
                  </motion.a>
                </div>
              </div>

              <button
                type="button"
                className="lg:hidden rounded-md p-2 text-[rgb(17,17,17)] hover:bg-[rgb(245,245,245)] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open main menu"}
              >
                <motion.div animate={{ rotate: mobileMenuOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                  {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </motion.div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-50"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Premium menu overlay */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "tween", duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-y-0 right-0 w-full bg-gradient-to-br from-[#0B0E23] via-[#1A1F71] to-[#132B56] lg:hidden z-[60] overflow-y-auto"
              style={{
                backgroundImage: `
                  linear-gradient(135deg, #0B0E23 0%, #1A1F71 50%, #132B56 100%),
                  url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
                `,
                backgroundBlendMode: "normal, overlay",
              }}
            >
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="relative"
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      scrollToTop(e)
                      setMobileMenuOpen(false)
                    }}
                  >
                    <Image
                      src="/logo.png"
                      alt="Stanron Steel Specialties"
                      width={160}
                      height={36}
                      className="h-[32px] w-auto brightness-0 invert"
                    />
                  </a>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{ x: ["0%", "200%"] }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                  />
                </motion.div>
                <button
                  type="button"
                  className="rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Slogan */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="px-6 pt-4 pb-2"
              >
                <p className="text-sm text-white/60 tracking-wide text-center">Precision. Engineering. Excellence.</p>
              </motion.div>

              {/* Thin separator line */}
              <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[#25D366]/30 to-transparent" />

              <div className="px-6 py-8 space-y-6 pb-64">
                {navigation.map((item, index) =>
                  item.dropdown ? (
                    // About with expandable dropdown
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                      className="group"
                    >
                      <button
                        onClick={() => setMobileAboutExpanded(!mobileAboutExpanded)}
                        className="w-full flex items-center justify-between"
                      >
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#25D366] transition-colors duration-300">
                          {item.name}
                        </h3>
                        <ChevronDownIcon
                          className={`h-6 w-6 text-white transition-transform duration-300 ease-out ${mobileAboutExpanded ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileAboutExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden mt-4 space-y-3 bg-[#0B0E23]/95 rounded-2xl p-4 border border-[#1A1F71]/40"
                          >
                            {item.dropdown.map((subItem, subIndex) => {
                              const IconComponent = subItem.icon
                              return (
                                <motion.a
                                  key={subItem.name}
                                  href={subItem.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIndex * 0.05, duration: 0.2 }}
                                  onClick={() => {
                                    setMobileMenuOpen(false)
                                    setMobileAboutExpanded(false)
                                  }}
                                  className="flex items-center gap-3 py-4 px-3 text-white hover:text-[#037ecc] hover:bg-[#ffffff08] rounded-lg transition-all duration-200 border-b border-[#1A1F71]/30 last:border-b-0"
                                >
                                  <IconComponent
                                    className="w-6 h-6"
                                    style={{
                                      color: "#9EB3C7",
                                      strokeWidth: 1.5,
                                    }}
                                  />
                                  <div className="flex-1">
                                    <div className="font-semibold text-base">{subItem.name}</div>
                                    <div className="text-sm text-white/60 mt-0.5">{subItem.description}</div>
                                  </div>
                                </motion.a>
                              )
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    // Regular menu items
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group block"
                    >
                      <div className="relative">
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#25D366] transition-colors duration-300">
                          {item.name}
                        </h3>
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm text-white/60 mt-1 opacity-0 group-hover:opacity-100"
                        >
                          {item.description}
                        </motion.p>
                        {/* Animated line on hover */}
                        <motion.div
                          className="h-0.5 bg-[#25D366] mt-2"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.a>
                  ),
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B0E23] via-[#0B0E23]/98 to-transparent pt-8 pb-6 px-6 border-t border-[#037ecc]/20"
                style={{
                  boxShadow: "0 -4px 20px rgba(3, 126, 204, 0.1)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#037ecc]/40 to-transparent" />

                {/* WhatsApp CTA with more breathing room */}
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleWhatsAppClick("mobile_menu")
                    setMobileMenuOpen(false)
                  }}
                  className="relative flex items-center justify-center gap-2 w-full mx-auto h-[56px] bg-gradient-to-r from-[#25D366] to-[#1EBE5A] text-white font-bold text-base rounded-full overflow-hidden group mb-4"
                  style={{
                    boxShadow: "0 4px 20px rgba(37, 211, 102, 0.35)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 12 }}
                  />

                  <motion.svg
                    className="h-5 w-5 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 10 }}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </motion.svg>
                  <span className="relative z-10">Chat with Us on WhatsApp</span>
                </motion.a>

                {/* Subcopy with better spacing */}
                <p className="text-center text-xs text-white/50 mb-4">
                  Instant support from our precision engineering team
                </p>

                <div className="text-center text-xs text-white/40 space-y-1.5 pt-3 border-t border-white/5">
                  <p className="font-medium text-white/50">ISO 9001:2015 | AS9100D Certified</p>
                  <p className="text-[11px]">© Stanron Steel Specialties 2025</p>
                  <p className="font-medium text-white/50 tracking-wide">50+ Years of Certified Metal Expertise</p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
