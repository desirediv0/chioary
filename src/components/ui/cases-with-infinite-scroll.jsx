"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
import { testibg } from "@/assets"

const testimonials = [
  {
    text: "The Educational Programs Offered By Chioary Have Changed My Life. I Was Able To Complete My Education And Now Have The Skills To Support My Family. I'm Forever Grateful.",
    name: "Mate Henry",
    role: "General Manager",
  },
  {
    text: "Chioary's courses helped me gain confidence in my career. The instructors are very knowledgeable and supportive. Highly recommend!",
    name: "Jessica Brown",
    role: "Marketing Lead",
  },
  {
    text: "I appreciate the flexible learning options and hands-on training provided by Chioary. It has truly made a difference in my skill set.",
    name: "David Williams",
    role: "Software Engineer",
  },
  {
    text: "The mentorship program at Chioary connected me with industry experts who guided me through my career transition. It was invaluable!",
    name: "Rahul Sharma",
    role: "Product Manager",
  },
  {
    text: "The community support and networking opportunities at Chioary helped me land my dream job. The curriculum is cutting-edge and relevant.",
    name: "Himank Yadav",
    role: "UX Designer",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef(null)

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)

    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  useEffect(() => {
    if (isAutoplay) {
      startAutoplay()
    }

    return () => stopAutoplay()
  }, [isAutoplay])

  const handleDotClick = (index) => {
    setCurrent(index)
    setIsAutoplay(false)
    stopAutoplay()

    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:block">
          <Image
            src={testibg}
            alt={"testibg"}
            width={400}
            height={500}
            className="w-[200px] h-[200px] object-cover absolute top-[80px] lg:left-[200px] md:left-[10px] hidden sm:block"
          />
        </div>
        {/* Experience Circle */}
        <div className="flex justify-center mb-16 sm:mb-20 md:mb-24">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex justify-center items-center">
            {/* Rotating Text Border */}
            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                <defs>
                  <path id="textPath" fill="none" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                </defs>
                <text className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] fill-gray-800">
                  <textPath href="#textPath" startOffset="0%">
                    YEARS OF EXPERIENCE • YEARS OF EXCELLENCE •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Center Circle */}
            <motion.div
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-black rounded-full flex justify-center items-center shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{
                scale: [0.8, 1, 0.8],
                boxShadow: [
                  "0px 0px 0px rgba(0,0,0,0.2)",
                  "0px 0px 20px rgba(0,0,0,0.4)",
                  "0px 0px 0px rgba(0,0,0,0.2)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              {/* <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">25+</span> */}
            </motion.div>
          </div>
        </div>

        {/* Testimonial Section - Fixed max width and proper overflow handling */}
        <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 md:p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="quotesPattern" patternUnits="userSpaceOnUse" width="100" height="100">
                  <text x="10" y="50" fontSize="80" fill="currentColor" className="text-black">
                    &quot;
                  </text>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#quotesPattern)" />
            </svg>
          </div>

          {/* Large Quote Mark */}
          <div className="absolute top-4 left-4 text-6xl sm:text-7xl md:text-8xl text-gray-200 font-serif leading-none">
            &quot;
          </div>

          {/* Testimonial Content - Fixed height and overflow issues */}
          <div className="relative z-10 min-h-[320px] sm:min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 fill-yellow-500 mx-0.5" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text - Added max height and better responsiveness */}
                <div className="max-h-[150px] sm:max-h-none overflow-y-auto sm:overflow-visible px-6">
                  <p className="text-lg sm:text-xl md:text-2xl italic text-gray-700 mb-8">
                    {testimonials[current].text}
                  </p>
                </div>

                {/* Avatar and Name - Added avatar image that was missing */}
                <div className="flex flex-col items-center mt-4">
                  <h3 className="font-bold text-xl sm:text-2xl text-gray-900">{testimonials[current].name}</h3>
                  <p className="text-gray-500 text-md sm:text-lg">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Improved positioning and z-index */}
          <div className="absolute top-1/2 left-0 right-0 -mt-6 flex justify-between px-2 sm:px-4 z-20">
            <motion.button
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                setIsAutoplay(false)
                stopAutoplay()
                setTimeout(() => setIsAutoplay(true), 10000)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setCurrent((prev) => (prev + 1) % testimonials.length)
                setIsAutoplay(false)
                stopAutoplay()
                setTimeout(() => setIsAutoplay(true), 10000)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Dots Indicator - Improved position */}
        <div className="flex justify-center gap-3 mt-8 sm:mt-10">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`relative h-3 rounded-full transition-all duration-300 ${current === index ? "w-8 bg-black" : "w-3 bg-gray-300"
                }`}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {current === index && (
                <motion.span
                  className="absolute inset-0 bg-black rounded-full"
                  layoutId="activeDot"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="sr-only">Testimonial {index + 1}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Decorative Elements - Adjusted position to prevent overflow */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gray-100 rounded-full opacity-50"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-gray-100 rounded-full opacity-50"></div>
    </section>
  )
}

