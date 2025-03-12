"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { course1, course2, course3, slider2, sliderB } from "@/assets"
import { useInView } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"

export default function HumanitarianProject() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const carouselRef = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const images = [sliderB, course1, course2, course3, course1, course2, course3]

  // Plugin for autoplay
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  // Reset autoplay on slide change
  useEffect(() => {
    if (plugin.current) {
      plugin.current.reset()
    }
  }, [activeSlide])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const imageHoverVariants = {
    rest: { scale: 1, filter: "brightness(0.9)" },
    hover: {
      scale: 1.05,
      filter: "brightness(1.1)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    active: {
      scale: 1.03,
      filter: "brightness(1.05)",
      boxShadow: "0 0 20px rgba(255, 165, 0, 0.5)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full mt-16 overflow-hidden h-screen bg-white bg-cover bg-center bg-no-repeat`}
    >
      {/* Background image with parallax effect */}
      <motion.div
        className="absolute inset-0 z-0 brightness-[0.5]"
        style={{
          y: isInView ? 0 : -30,
          scale: isInView ? 1 : 1.1,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <Image
          src="/project-one-bg.jpg"
          alt="Background"
          width={1920}
          height={200}
          className="object-cover bg-black/80 h-96"
        />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Orange shape with floating animation */}
      <motion.div
        className="md:flex hidden absolute left-0 top-0 z-10 h-[400px] w-[400px]"
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: [0, -10, 0],
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          y: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      >
        <Image src={slider2 || "/placeholder.svg"} alt="Orange shape" fill />
      </motion.div>

      <motion.div
        className="relative z-20 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header section */}
        <motion.div className="mb-8 flex items-center justify-center" variants={itemVariants}>
          <div className="flex items-center gap-2 text-white">
            <motion.div
              className="h-2 w-2 rounded-full bg-amber-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            ></motion.div>
            <p className="text-sm font-medium">Our Recent Project</p>
          </div>
        </motion.div>

        <motion.h1
          className="mb-12 text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl"
          variants={itemVariants}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            One Project
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative"
          >
            At A Time
            <motion.span
              className="absolute -bottom-2 left-0 h-1 w-full bg-amber-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
          </motion.span>
        </motion.h1>

        {/* Image gallery/carousel using shadcn/ui */}
        <motion.div className="relative mb-8" variants={itemVariants} ref={carouselRef}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onSelect={(index) => setActiveSlide(index)}
          >
            <CarouselContent className="-ml-2 gap-6 md:-ml-4">
              {images.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-3 md:basis-1/2 lg:basis-1/3 transition-all duration-500 ease-in-out"
                >
                  <motion.div
                    className={cn("relative overflow-hidden rounded-lg", "h-[450px] w-full", "cursor-pointer group")}
                    initial="rest"
                    whileHover="hover"
                    animate={activeSlide === index ? "active" : "rest"}
                    variants={imageHoverVariants}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  >
                    <motion.div
                      className={cn("absolute inset-0 z-10", activeSlide === index ? "ring-2 ring-amber-500" : "")}
                      whileHover={{
                        boxShadow: "0 0 0 4px rgba(255, 165, 0, 0.5)",
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Image */}
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Project image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out"
                    />

                    {/* Overlay with gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                    {/* Caption that appears on hover */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                      initial={{ y: 50, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      <h3 className="text-lg font-bold">Project {index + 1}</h3>
                      <p className="text-sm opacity-80">Humanitarian initiative</p>
                    </motion.div>

                    {/* Shine effect on hover */}
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    )}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>


            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 hidden md:block"
            >
              <CarouselPrevious className="bg-black/50 text-white hover:bg-black/70 border-amber-500 hover:border-amber-600 transition-all duration-300" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 hidden md:block"
            >
              <CarouselNext className="bg-black/50 text-white hover:bg-black/70 border-amber-500 hover:border-amber-600 transition-all duration-300" />
            </motion.div>
          </Carousel>
        </motion.div>

        {/* Navigation dots with animations */}
        <motion.div className="flex justify-center gap-3 -mt-4" variants={itemVariants}>
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`h-3 w-3 border border-black transition-all duration-300 ease-out ${activeSlide === index ? "bg-amber-500 scale-125" : "bg-transparent"
                }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.3, backgroundColor: "#f59e0b" }}
              whileTap={{ scale: 0.9 }}
              animate={
                activeSlide === index
                  ? { scale: [1, 1.2, 1], backgroundColor: "#f59e0b" }
                  : { scale: 1, backgroundColor: "transparent" }
              }
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

