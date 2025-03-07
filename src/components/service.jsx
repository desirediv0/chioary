"use client";

import Image from "next/image";
import { ArrowUpRight, Droplets, GraduationCap, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import { service1, service2, service3 } from "@/assets";

const services = [
  {
    icon: <Droplets />,
    title: "Clean Water Initiatives",
    description:
      "Providing Access To Safe Drinking Water Through Well Construction And Purification Projects.",
    image: service1,
    bgColor: "bg-[#1a2721]",
    textColor: "text-white",
    accentColor: "bg-[#FFA500]",
  },
  {
    icon: <GraduationCap />,
    title: "Educational Programs",
    description:
      "Providing Access To Safe Drinking Water Through Well Construction And Purification Projects.",
    image: service2,
    bgColor: "bg-white",
    textColor: "text-black",
    accentColor: "bg-[#1a2721]",
  },
  {
    icon: <UtensilsCrossed />,
    title: "Food Distribution",
    description:
      "Providing Access To Safe Drinking Water Through Well Construction And Purification Projects.",
    image: service3,
    bgColor: "bg-white",
    textColor: "text-black",
    accentColor: "bg-[#1a2721]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Service() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#FFA500]" />
            <span className="text-sm font-semibold uppercase text-[#FFA500]">
              Best Of Service
            </span>
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            The Best Service
          </h2>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-3xl hover:bg-black h-[450px] hover:text-white transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Service Card Content */}
              <div className="relative z-10 p-8">
                <div
                  className={`absolute -top-4 left-1/2 flex h-24 w-20 -translate-x-1/2 items-center justify-center p-4  border-gray-200 rounded-b-full bg-slate-100 group-hover:bg-yellow-500 group-hover:text-white bg-transparent transition-colors duration-300 ease-in-out  text-2xl`}
                >
                  {service.icon}
                </div>
                <div className="mt-16 space-y-6  text-center">
                  <h3 className="text-2xl group-hover:underline font-semibold">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                  <div className="overflow-hidden rounded-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={700}
                      height={300}
                      className="h-28 w-full object-cover  transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-white transition-colors duration-300 hover:bg-[#FFA500] sm:w-auto">
            <span className="font-semibold">Join With Us</span>
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
