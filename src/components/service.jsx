"use client";

import Image from "next/image";
import { ArrowUpRight, Droplets, GraduationCap, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import { service1, service2, service3, world } from "@/assets";

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
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Service() {
  return (
    <section
      className="relative overflow-hidden bg-gray-50 py-20 bg-cover bg-center bg-no-repeat"
    >
      {/* Background Pattern with Smooth Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.6,
          x: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <div
          className="h-full w-full bg-repeat"
          style={{ backgroundImage: `url(${world.src})` }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          className="text-center"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
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
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div

              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className={`group relative overflow-hidden rounded-3xl hover:text-white transition-all duration-500 hover:shadow-2xl before:absolute before:inset-0 before:bg-black before:origin-center before:rounded-3xl before:scale-x-0 before:transition-transform before:duration-500 hover:before:scale-x-100 bg-white text-black `}
            >
              <div className="relative z-10 p-8">
                <motion.div
                  className={`absolute -top-6 left-[35%] flex h-28 w-28  items-center justify-center p-4 border-2 border-gray-200 rounded-b-full bg-white shadow-lg group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-500 ease-in-out text-3xl`}
                  whileHover={{ scale: 1.1, rotate: [0, 5, 0, -5, 0] }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    rotate: { duration: 0.5, repeat: 0 }
                  }}
                >
                  {service.icon}
                </motion.div>
                <motion.div
                  className="mt-20 space-y-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-2xl font-semibold group-hover:underline">{service.title}</h3>
                  <p className="text-sm opacity-90 group-hover:text-white/90">{service.description}</p>
                  <motion.div
                    className="overflow-hidden rounded-2xl shadow-inner"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={700}
                      height={300}
                      className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-white transition-colors duration-300 hover:bg-[#FFA500] sm:w-auto"
          >
            <span className="font-semibold">Join With Us</span>
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
