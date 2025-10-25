"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon, PrinterIcon } from "@heroicons/react/24/outline"

export default function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const whatsappNumber = "+19549748050"
  const phoneNumber = "(954) 974-8050"
  const faxNumber = "(954) 975-3584"
  const email = "stanron@stanron.com"
  const address = "2770 NW 63rd Court, Ft. Lauderdale, Florida 33309"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  const whatsappLink = `https://wa.me/19549748050?text=${encodeURIComponent("I'd like directions to your facility")}`

  return (
    <section
      id="location"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #0B0E23 0%, #1A1F71 100%)",
        backgroundImage: `
          linear-gradient(135deg, #0B0E23 0%, #1A1F71 100%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundBlendMode: "normal, overlay",
      }}
    >
      {/* Animated top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#037ecc] to-transparent origin-left"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            style={{
              textShadow: "0 0 20px rgba(3, 126, 204, 0.35)",
            }}
          >
            Visit Our Facility
          </h2>
          <p className="text-lg md:text-xl text-blue-200 tracking-wide max-w-3xl mx-auto">
            Stanron Steel Specialties — A real, solid, and accessible precision fabrication facility
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_0_40px_#037ecc33] group"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8!2d-80.2!3d26.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzAwLjAiTiA4MMKwMTInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&theme=dark`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) brightness(0.9) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-500 group-hover:brightness-100"
            />
            {/* Overlay with "Open in Google Maps" button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-[#0B0E23]/60 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300"
            >
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-[#037ecc] text-white font-semibold rounded-full py-4 px-8 hover:bg-[#0369a8] transition-all duration-200 overflow-hidden group/btn"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                />
                <span className="relative z-10">Open in Google Maps</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md border border-[#1A1F71]/40 rounded-2xl p-8 md:p-10 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>

            {/* Company Name */}
            <div className="pb-4 border-b border-white/10">
              <p className="text-xl font-semibold text-white">Stanron Steel Specialties</p>
            </div>

            {/* Address */}
            <motion.div
              className="flex items-start gap-4 group cursor-pointer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#037ecc]/20 rounded-lg flex items-center justify-center group-hover:bg-[#037ecc]/30 transition-colors duration-200">
                <MapPinIcon className="h-6 w-6 text-[#037ecc] animate-pulse-slow" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1 group-hover:text-[#037ecc] transition-colors duration-200">
                  Main Address
                </h4>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors duration-200 relative inline-block"
                >
                  2770 NW 63rd Court
                  <br />
                  Ft. Lauderdale, Florida 33309
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-[#037ecc]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div className="flex items-start gap-4 group" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <div className="flex-shrink-0 w-12 h-12 bg-[#037ecc]/20 rounded-lg flex items-center justify-center group-hover:bg-[#037ecc]/30 transition-colors duration-200">
                <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.2 }}>
                  <PhoneIcon className="h-6 w-6 text-[#037ecc]" />
                </motion.div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1 group-hover:text-[#037ecc] transition-colors duration-200">
                  Phone
                </h4>
                <a
                  href={`tel:${whatsappNumber}`}
                  className="text-gray-200 hover:text-white transition-colors duration-200 relative inline-block"
                >
                  Tel: {phoneNumber}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-[#037ecc]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </div>
            </motion.div>

            {/* Fax */}
            <motion.div className="flex items-start gap-4 group" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <div className="flex-shrink-0 w-12 h-12 bg-[#037ecc]/20 rounded-lg flex items-center justify-center group-hover:bg-[#037ecc]/30 transition-colors duration-200">
                <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.2 }}>
                  <PrinterIcon className="h-6 w-6 text-[#037ecc]" />
                </motion.div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1 group-hover:text-[#037ecc] transition-colors duration-200">
                  Fax
                </h4>
                <p className="text-gray-200">Fax: {faxNumber}</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div className="flex items-start gap-4 group" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <div className="flex-shrink-0 w-12 h-12 bg-[#037ecc]/20 rounded-lg flex items-center justify-center group-hover:bg-[#037ecc]/30 transition-colors duration-200">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <EnvelopeIcon className="h-6 w-6 text-[#037ecc]" />
                </motion.div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1 group-hover:text-[#037ecc] transition-colors duration-200">
                  E-mail
                </h4>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-200 hover:text-white transition-colors duration-200 relative inline-block"
                >
                  {email}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-[#037ecc]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div className="flex items-start gap-4 group" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <div className="flex-shrink-0 w-12 h-12 bg-[#037ecc]/20 rounded-lg flex items-center justify-center group-hover:bg-[#037ecc]/30 transition-colors duration-200">
                <ClockIcon className="h-6 w-6 text-[#037ecc] animate-pulse-slow" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1 group-hover:text-[#037ecc] transition-colors duration-200">
                  Business Hours
                </h4>
                <p className="text-gray-200 leading-relaxed">
                  Monday – Friday: 7:00 AM – 5:00 PM
                  <br />
                  Saturday: 8:00 AM – 12:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">We're ready to meet you</h3>
          <p className="text-lg text-blue-200 mb-6">Visit our facility or contact our engineers directly</p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold rounded-full py-4 px-8 transition-all duration-200 hover:ring-2 hover:ring-[#037ecc] hover:shadow-[0_0_25px_#25D36666] group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
            />
            <svg className="h-5 w-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="relative z-10">Get Directions on WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Animated bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#037ecc] to-transparent origin-right"
      />
    </section>
  )
}
