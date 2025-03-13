"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { about1, donation, service3 } from "@/assets"

export default function HumanitarianProject() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const images = [service3, donation, about1, service3, donation, about1]

  // Auto-play functionality
  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    // Auto-play timer
    const autoPlayInterval = setInterval(() => {
      if (api) {
        api.scrollNext()
      }
    }, 4000)

    return () => {
      clearInterval(autoPlayInterval)
    }
  }, [api])

  const scrollTo = (index) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-gradient-to-b from-black to-white">
      {/* Background with overlay */}
      <div className="absolute inset-0 h-[60%] overflow-hidden">
        <Image src="/project-bg.jpeg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="absolute left-0 top-0 md:block hidden">
        <svg width="400" height="400" viewBox="0 0 400 400" className="opacity-90">
          <circle cx="200" cy="200" r="200" fill="#FF9500" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#983532] animate-pulse" />
            <p className="text-white text-sm">Our Recent Project</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            One Project At A Time
            <div className="h-1 w-32 bg-[#983532] mx-auto mt-4" />
          </h1>
        </div>

        {/* Carousel */}
        <div className="relative px-4 md:px-12">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: true,
              align: "center",
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent className="-ml-4">
              {images.map((src, index) => (
                <CarouselItem key={index} className="pl-4 sm:basis-1/2 md:basis-1/3">
                  <motion.div
                    className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  >
                    <Image src={src} alt={`Project ${index + 1}`} fill className="object-cover" />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Hover effects */}
                    {hoveredIndex === index && (
                      <>
                        <motion.div
                          className="absolute inset-x-4 h-[1px] bg-white/70"
                          style={{ top: "5%" }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                        />
                        <motion.div
                          className="absolute inset-x-4 h-[1px] bg-white/70"
                          style={{ bottom: "5%" }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                        />
                        <motion.div
                          className="absolute top-[5%] bottom-[5%] w-[1px] bg-white/70"
                          style={{ left: "4%" }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                        />
                        <motion.div
                          className="absolute top-[5%] bottom-[5%] w-[1px] bg-white/70"
                          style={{ right: "4%" }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                        />

                        {/* Red circle with arrow */}
                        <motion.div
                          className="absolute top-[70%] left-[40%] md:left-[45%] transform -translate-x-1/2 -translate-y-1/2
                                   bg-[#983532] rounded-full p-4 cursor-pointer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          <ArrowUpRight className="w-6 h-6 text-white" />
                        </motion.div>

                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </>
                    )}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  current === index ? "bg-[#983532] scale-110" : "bg-white/40 hover:bg-[#983532]/50",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

