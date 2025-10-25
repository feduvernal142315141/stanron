"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Aerospace Bracket Assembly",
    industry: "Aerospace",
    problem: "Client needed lightweight, high-strength brackets for aircraft interior",
    solution: "Designed custom stamping dies and implemented aluminum alloy fabrication",
    result: "Reduced weight by 35% while maintaining structural integrity",
    metrics: { leadTime: "40% faster", scrap: "15% reduction", cost: "25% savings" },
    image: "/aerospace-metal-bracket-assembly-precision-parts.jpg",
  },
  {
    title: "Medical Device Enclosure",
    industry: "Medical",
    problem: "Required biocompatible stainless steel enclosure with tight tolerances",
    solution: "Implemented laser cutting and precision bending with clean room assembly",
    result: "FDA-approved manufacturing process with full traceability",
    metrics: { leadTime: "30% faster", quality: "99.8% pass rate", delivery: "100% on-time" },
    image: "/medical-device-stainless-steel-enclosure.jpg",
  },
  {
    title: "Industrial Control Panel",
    industry: "Technology",
    problem: "Complex panel with multiple cutouts and precise hole patterns",
    solution: "CNC punching and forming with powder coat finishing",
    result: "Streamlined assembly process for customer",
    metrics: { leadTime: "50% reduction", assembly: "3x faster", defects: "90% fewer" },
    image: "/industrial-control-panel-metal-enclosure.jpg",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const whatsappNumber = "+1234567890"

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="projects" className="py-24 bg-muted" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Real results from real projects</p>
        </motion.div>

        <div className="relative">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <motion.div
                  key={`image-${currentIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[4/3] md:aspect-auto"
                >
                  <img
                    src={currentProject.image || "/placeholder.svg"}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      {currentProject.industry}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  key={`content-${currentIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 md:p-12 flex flex-col justify-center"
                >
                  <h3 className="text-3xl font-bold text-foreground mb-6">{currentProject.title}</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Problem</h4>
                      <p className="text-muted-foreground">{currentProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Solution</h4>
                      <p className="text-muted-foreground">{currentProject.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Result</h4>
                      <p className="text-muted-foreground">{currentProject.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(currentProject.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="bg-[rgb(37,211,102)] hover:bg-[rgb(32,176,85)] text-white">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("I have a similar project")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      I have a similar project
                    </a>
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevProject} className="rounded-full bg-transparent">
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextProject} className="rounded-full bg-transparent">
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
