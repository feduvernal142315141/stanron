import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Precision Metal Fabrication & Stamping | ISO Certified Since 1972",
  description:
    "Leading metal fabrication company specializing in precision sheet metal stamping, custom fabrication, and rapid prototyping. ISO 9001:2015 & AS9100D certified. Serving aerospace, medical, defense, and industrial sectors.",
  keywords:
    "metal fabrication, sheet metal stamping, precision manufacturing, ISO certified, aerospace components, medical device manufacturing",
  openGraph: {
    title: "Precision Metal Fabrication & Stamping | ISO Certified Since 1972",
    description: "Custom metal fabrication and stamping services with over 50 years of excellence.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
