"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Linkedin, Youtube, MessageCircle } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappNumber = "+19549748050"
  const whatsappLink = `https://wa.me/19549748050`

  const navigationLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About Us", href: "#about" },
    { name: "How We Work", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
    { name: "WhatsApp", icon: MessageCircle, href: whatsappLink },
  ]

  return (
    <footer className="relative bg-[#0B0E23] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.03) 10px,
              rgba(255,255,255,0.03) 20px
            )`,
          }}
        />
      </div>

      <div className="relative h-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#037ecc33] via-[#1A1F7133] to-[#037ecc33]" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#037ecc] to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ width: "30%" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {/* Column 1 - Brand Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <div className="relative inline-block group">
              <Image
                src="/logo.png"
                alt="Stanron Steel Specialties"
                width={240}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 7,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="h-0.5 w-24 bg-gradient-to-r from-[#037ecc] to-transparent mb-4" />
            <p className="text-blue-300 tracking-wide text-sm">Precision Engineering Since 1972</p>
          </motion.div>

          {/* Column 2 - Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-xl mb-6">Explore</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group relative inline-block text-gray-300 hover:text-[#037ecc] transition-colors duration-300"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#037ecc] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact & Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-xl mb-6">Contact</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#037ecc] mt-0.5 group-hover:brightness-150 transition-all" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  2770 NW 63rd Court
                  <br />
                  Ft. Lauderdale, Florida 33309
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#037ecc] group-hover:brightness-150 transition-all" />
                <a href="tel:+19549748050" className="text-gray-300 group-hover:text-white transition-colors">
                  +1 (954) 974-8050
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#037ecc] group-hover:brightness-150 transition-all" />
                <a href="mailto:stanron@stanron.com" className="text-gray-300 group-hover:text-white transition-colors">
                  stanron@stanron.com
                </a>
              </li>
            </ul>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white rounded-full font-semibold py-3 px-8 shadow-[0_0_25px_#25D36655] hover:bg-[#1EBE5D] transition-all duration-300"
              animate={{
                boxShadow: ["0 0 25px #25D36655", "0 0 35px #25D36688", "0 0 25px #25D36655"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>

            <div className="mt-8">
              <h5 className="text-white font-medium text-sm mb-4">Follow Us</h5>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-10 h-10 rounded-full border border-[#1A1F71] bg-[#ffffff08] flex items-center justify-center hover:bg-[#037ecc] hover:border-[#037ecc] transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_20px_#037eccaa] transition-opacity duration-300" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-[#037ecc44] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p className="tracking-wide">© {currentYear} Stanron Steel Specialties. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="tracking-wide hover:text-[#037ecc] transition-colors cursor-pointer">ISO 9001:2015</span>
              <span className="text-gray-600">|</span>
              <span className="tracking-wide hover:text-[#037ecc] transition-colors cursor-pointer">
                AS9100D Certified
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(26,31,113,0.3) 0%, transparent 70%)",
        }}
      />
    </footer>
  )
}
