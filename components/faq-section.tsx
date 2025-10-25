"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { PlusIcon } from "@heroicons/react/24/outline"
import { MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "What are your typical lead times?",
    answer:
      "Most prototypes are completed within 2–5 business days, while production runs typically range from 2–4 weeks depending on volume and complexity.",
  },
  {
    question: "What materials do you work with?",
    answer:
      "We specialize in aluminum, stainless steel, cold-rolled steel, and titanium, using state-of-the-art laser cutting and precision stamping technology.",
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "We support both short-run and high-volume production. There's no strict MOQ — we adapt to your project's scale.",
  },
  {
    question: "Do you offer design and engineering support?",
    answer:
      "Absolutely. Our in-house engineers assist with DFM (Design for Manufacturability) and cost-optimization strategies to ensure production efficiency and quality.",
  },
  {
    question: "Can you sign NDAs and handle proprietary designs?",
    answer:
      "Yes. We regularly work with proprietary designs and are happy to sign NDAs before discussing your project. All customer information is kept strictly confidential.",
  },
  {
    question: "What quality certifications do you hold?",
    answer:
      "We are ISO 9001:2015 and AS9100D certified. We also maintain ITAR registration for defense-related projects. All parts include full inspection reports and material certifications.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. We work with trusted logistics partners to ensure safe and timely delivery. We can also accommodate customer-arranged pickup or specific shipping requirements.",
  },
  {
    question: "What inspection and quality control processes do you use?",
    answer:
      "We perform first article inspection (FAI), in-process monitoring, and final inspection using calibrated CMM equipment, optical comparators, and precision measurement tools. Full inspection reports are provided with every order.",
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const whatsappNumber = "+1234567890"

  return (
    <section
      className="relative py-24 md:py-32 bg-gradient-to-br from-[#0B0E23] to-[#1A1F71] overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          rgba(255,255,255,0.1) 2px,
          rgba(255,255,255,0.1) 4px
        )`,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance"
            style={{ textShadow: "0 0 20px rgba(3, 126, 204, 0.35)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-blue-300 text-lg tracking-wide text-pretty">
            Everything you need to know about our precision fabrication services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left bg-[#ffffff0d] backdrop-blur-sm border rounded-2xl px-6 py-5 md:py-6 transition-all duration-300 ${
                  openIndex === index
                    ? "border-[#037ecc] shadow-[0_0_30px_#037ecc33]"
                    : "border-[#1A1F71]/40 hover:bg-[#1A1F71]/60 hover:border-[#037ecc66]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-8">{faq.question}</h3>
                  <PlusIcon
                    className={`h-6 w-6 flex-shrink-0 transition-all duration-300 ease-out ${
                      openIndex === index ? "rotate-45 text-[#037ecc]" : "text-blue-300"
                    }`}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                    filter: openIndex === index ? "blur(0px)" : "blur(2px)",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-200 leading-relaxed tracking-wide mt-4">{faq.answer}</p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 space-y-4"
        >
          <h3 className="text-2xl font-semibold text-white">Still have questions?</h3>
          <p className="text-blue-300 text-lg">Talk directly with our experts.</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("I have questions about your precision fabrication services")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold rounded-full px-8 py-4 transition-all duration-300 shadow-[0_0_20px_#25D36666] hover:shadow-[0_0_30px_#25D36688] hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Contact us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
