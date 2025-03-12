"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, MoveUpRight, ArrowUpRight } from "lucide-react"
import { course1, course2, course3 } from "@/assets"
import Image from "next/image"

// Sample campaign data
const campaigns = [
  {
    id: "1",
    title: "Providing Access To Safe Drinking Water Through",
    description: "At Chioary We Believe That Education Is A Powerful Tool For Change.",
    image: course1,
    category: "Education",
    raised: 50000,
    goal: 50000,
    tag: "Medical",
  },
  {
    id: "2",
    title: "Nutritious Meals For School Children",
    description: "Providing daily meals to ensure children can focus on learning rather than hunger.",
    image: course2,
    category: "Health & Food",
    raised: 35000,
    goal: 60000,
    tag: "Food",
  },
  {
    id: "3",
    title: "Fighting Malnutrition In Rural Areas",
    description: "Tackling the root causes of malnutrition through education and resources.",
    image: course3,
    category: "Hunger & Nutrition",
    raised: 28000,
    goal: 40000,
    tag: "Nutrition",
  },
  {
    id: "4",
    title: "Mobile Medical Clinics For Remote Villages",
    description: "Bringing essential healthcare to communities with limited access to medical facilities.",
    image: course1,
    category: "Treatment",
    raised: 42000,
    goal: 75000,
    tag: "Healthcare",
  },
  {
    id: "5",
    title: "Building Schools In Underserved Communities",
    description: "Creating safe learning environments where children can thrive and grow.",
    image: course1,
    category: "Education",
    raised: 65000,
    goal: 100000,
    tag: "Construction",
  },
]

// Define the categories/tabs
const categories = [
  { id: "all", name: "View All" },
  { id: "education", name: "Education" },
  { id: "health", name: "Health & Food" },
  { id: "hunger", name: "Hunger & Nutrition" },
  { id: "treatment", name: "Treatment" },
]

export default function CharityPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentCampaignIndex, setCurrentCampaignIndex] = useState(0)
  const [animateProgress, setAnimateProgress] = useState(0)

  // Filter campaigns based on active category
  const filteredCampaigns =
    activeCategory === "all"
      ? campaigns
      : campaigns.filter((campaign) => {
        if (activeCategory === "education") return campaign.category === "Education"
        if (activeCategory === "health") return campaign.category === "Health & Food"
        if (activeCategory === "hunger") return campaign.category === "Hunger & Nutrition"
        if (activeCategory === "treatment") return campaign.category === "Treatment"
        return true
      })

  const currentCampaign = filteredCampaigns[currentCampaignIndex] || campaigns[0]

  // Handle navigation
  const nextCampaign = () => {
    setCurrentCampaignIndex((prev) => (prev === filteredCampaigns.length - 1 ? 0 : prev + 1))
  }

  const prevCampaign = () => {
    setCurrentCampaignIndex((prev) => (prev === 0 ? filteredCampaigns.length - 1 : prev - 1))
  }

  // Calculate progress percentage
  const progressPercentage = Math.round((currentCampaign.raised / currentCampaign.goal) * 100)

  // Animate progress bar when campaign changes
  useEffect(() => {
    setAnimateProgress(0)
    const timer = setTimeout(() => {
      setAnimateProgress(progressPercentage)
    }, 300)
    return () => clearTimeout(timer)
  }, [currentCampaign, progressPercentage])

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount / 1000)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
      }
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="md:max-w-7xl max-w-2xl mx-auto px-4 py-8 sm:py-16 bg-white overflow-hidden"
    >
      <motion.div className="mb-8 relative" variants={fadeInVariants}>
        <motion.div
          className="absolute -top-8 right-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-4 h-4 rounded-full bg-amber-100"></div>
          <motion.div
            className="w-16 h-16 rounded-full bg-amber-50 absolute -top-12 -right-12 z-0"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          ></motion.div>
        </motion.div>
        <motion.div className="flex items-center justify-center mb-4" variants={itemVariants}>
          <span className="text-gray-700 font-medium">Recent Courses</span>
          <motion.div
            className="w-2 h-2 rounded-full bg-amber-500 ml-2"
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          ></motion.div>
        </motion.div>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800"
          variants={itemVariants}
        >
          Expanding Horizons Through Learning
        </motion.h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 lg:gap-14 mt-8 md:mt-16">
        {/* Left sidebar with tabs */}
        <div className="lg:col-span-4">
          <motion.div className="space-y-3 sm:space-y-6 mt-4 sm:mt-8" variants={containerVariants}>
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`w-full justify-between text-base sm:text-lg py-4 sm:py-6 rounded-none ${activeCategory === category.id
                    ? "bg-amber-500 hover:bg-amber-600 text-white"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                    }`}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setCurrentCampaignIndex(0)
                  }}
                >
                  {category.name}
                  <motion.div
                    animate={{ x: activeCategory === category.id ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right content area */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait" custom={currentCampaignIndex}>
            <motion.div
              key={currentCampaign.id + activeCategory}
              custom={currentCampaignIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-gray-900 overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Campaign image with navigation */}
                <div className="lg:col-span-6 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={currentCampaign.image || "/placeholder.svg"}
                      alt={currentCampaign.title}
                      className="w-full h-64 sm:h-80 lg:h-96 p-4 sm:p-6 lg:p-10 object-cover object-center"
                      style={{ minHeight: "300px" }}
                      width={400}
                      height={400}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-4 left-4 bg-gray-900/80 text-white px-4 py-2 rounded"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentCampaign.tag}
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                        onClick={prevCampaign}
                      >
                        <ChevronLeft className="h-6 w-6 text-white" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                        onClick={nextCampaign}
                      >
                        <ChevronRight className="h-6 w-6 text-white" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Campaign details */}
                <div className="lg:col-span-6 p-4 sm:pt-6 sm:pb-6 sm:pr-6 text-white">
                  <motion.h2
                    className="text-xl sm:text-2xl font-bold mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {currentCampaign.title}
                  </motion.h2>
                  <motion.p
                    className="text-gray-300 mb-4 sm:mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentCampaign.description}
                  </motion.p>

                  <motion.div
                    className="flex items-center justify-between mb-2 gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      className="flex items-center"
                      initial={{ x: -20 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.4, type: "spring" }}
                    >
                      <motion.span
                        className="text-2xl sm:text-3xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        ${formatCurrency(currentCampaign.raised)}
                      </motion.span>
                      <span className="text-gray-400 ml-2">Raised</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center justify-center p-[8%] w-12 h-12 rounded-full bg-white text-black border-4 border-b-2 border-r-0 border-amber-500 relative"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, 10, 0] }}
                      transition={{
                        scale: { delay: 0.4, type: "spring", stiffness: 200 },
                        rotate: { delay: 0.6, duration: 0.5 },
                      }}
                    >
                      <motion.span
                        className="text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        {progressPercentage}%
                      </motion.span>
                    </motion.div>

                    <motion.div
                      className="flex items-center"
                      initial={{ x: 20 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.4, type: "spring" }}
                    >
                      <motion.span
                        className="text-2xl sm:text-3xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        ${formatCurrency(currentCampaign.goal)}
                      </motion.span>
                      <span className="text-gray-400 ml-2">Goal</span>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="h-2 mb-4 sm:mb-8 bg-gray-700 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <motion.div
                      className="h-full bg-amber-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${animateProgress}%` }}
                      transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    />
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="flex space-x-2 mr-auto">
                      <motion.button
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-medium rounded-full hover:bg-yellow-600 hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More
                      </motion.button>
                      <motion.button
                        className="p-2 sm:p-3 bg-white text-black rounded-full hover:bg-yellow-600 hover:text-white transition-colors"
                        whileHover={{
                          scale: 1.1,
                          rotate: 10,
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
                      </motion.button>
                    </div>
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Button
                        variant="ghost"
                        className="flex gap-2 underline hover:bg-transparent text-white hover:text-yellow-500"
                      >
                        View Details
                        <motion.div
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        >
                          <MoveUpRight className="h-4 w-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

