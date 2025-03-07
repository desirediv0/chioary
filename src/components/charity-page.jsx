"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, MoveUpRight, ArrowUpRight } from "lucide-react"
import { Progress } from "./ui/progress"
import { course1, course2, course3, slider3 } from "@/assets"
import Image from "next/image"



// Sample campaign data
const campaigns = [
  {
    id: "1",
    title: "Providing Access To Safe Drinking Water Through",
    description:
      "At Chioary We Believe That Education Is A Powerful Tool For Change.",
    image: course1,
    category: "Education",
    raised: 50000,
    goal: 50000,
    tag: "Medical",
  },
  {
    id: "2",
    title: "Nutritious Meals For School Children",
    description:
      "Providing daily meals to ensure children can focus on learning rather than hunger.",
    image: course2,
    category: "Health & Food",
    raised: 35000,
    goal: 60000,
    tag: "Food",
  },
  {
    id: "3",
    title: "Fighting Malnutrition In Rural Areas",
    description:
      "Tackling the root causes of malnutrition through education and resources.",
    image: course3,
    category: "Hunger & Nutrition",
    raised: 28000,
    goal: 40000,
    tag: "Nutrition",
  },
  {
    id: "4",
    title: "Mobile Medical Clinics For Remote Villages",
    description:
      "Bringing essential healthcare to communities with limited access to medical facilities.",
    image: course1,
    category: "Treatment",
    raised: 42000,
    goal: 75000,
    tag: "Healthcare",
  },
  {
    id: "5",
    title: "Building Schools In Underserved Communities",
    description:
      "Creating safe learning environments where children can thrive and grow.",
    image:
      course1,
    category: "Education",
    raised: 65000,
    goal: 100000,
    tag: "Construction",
  },
];

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

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount / 1000)
  }

  return (
    <div className="md:max-w-7xl max-w-2xl mx-auto px-4 py-16 bg-white">
     
      <div className="mb-8 relative">
        <div className="absolute -top-8 right-50">
          <div className="w-4 h-4 rounded-full bg-amber-100"></div>
          <div className="w-16 h-16 rounded-full bg-amber-50 absolute -top-12 -right-12 z-0"></div>
        </div>
        <div className="flex items-center justify-center mb-4 ">
          <span className="text-gray-700 font-medium">Recent Courses</span>
          <div className="w-2 h-2 rounded-full bg-amber-500 ml-2"></div>
        </div>
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Expanding Horizons Through Learning
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 mt-16">
        {/* Left sidebar with tabs */}
        <div className="lg:col-span-4">
          <div className="space-y-6 mt-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  className={`w-full justify-between text-lg py-6 ${
                    activeCategory === category.id
                      ? "bg-amber-500 hover:bg-amber-600 text-white"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setCurrentCampaignIndex(0);
                  }}
                >
                  {category.name}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right content area */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCampaign.id + activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900  overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Campaign image with navigation */}
                <div className="lg:col-span-6 relative">
                  <Image
                    src={currentCampaign.image}
                    alt={currentCampaign.title}
                    className="w-full h-96 p-10 object-cover object-center"
                    style={{ minHeight: "400px" }}
                    width={400}
                    height={400}
                  />
                  <div className="absolute bottom-4 left-4 bg-gray-900/80 text-white px-4 py-2 rounded">
                    {currentCampaign.tag}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                      onClick={prevCampaign}
                    >
                      <ChevronLeft className="h-6 w-6 text-white" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                      onClick={nextCampaign}
                    >
                      <ChevronRight className="h-6 w-6 text-white" />
                    </Button>
                  </div>
                </div>

                {/* Campaign details */}
                <div className="lg:col-span-6 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">
                    {currentCampaign.title}
                  </h2>
                  <p className="text-gray-300 mb-8">
                    {currentCampaign.description}
                  </p>

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold">
                        ${formatCurrency(currentCampaign.raised)}
                      </span>
                      <span className="text-gray-400 ml-2">Raised</span>
                    </div>

                    <div className="flex items-center justify-center p-[8%] w-12 h-12 rounded-full bg-white text-black border-4 border-b-2 border-r-0 border-amber-500 relative">
                      <span className=" text-base ">{progressPercentage}%</span>
                    </div>

                    <div className="flex items-center">
                      <span className="text-3xl font-bold">
                        ${formatCurrency(currentCampaign.goal)}
                      </span>
                      <span className="text-gray-400 ml-2">Goal</span>
                    </div>
                  </div>

                  <Progress
                    value={progressPercentage}
                    className="h-2 mb-8 bg-gray-700"
                  >
                    <div
                      className="h-full bg-amber-500 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </Progress>

                  <div className="flex gap-4">
                    <div className="flex space-x-2 mr-auto md:mx-auto">
                      <button className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-yellow-600 transition-colors">
                        Read More
                      </button>
                      <button className="p-3 bg-white text-black rounded-full hover:bg-yellow-600 transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                    <Button
                      variant="ghost"
                      className=" flex gap-2 underline hover:bg-transparent text-white hover:text-yellow-500"
                    >
                      View Details
                      <MoveUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

