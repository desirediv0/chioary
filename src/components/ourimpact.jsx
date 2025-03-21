"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {  Heart, BookOpen, Apple, Leaf } from "lucide-react";

const OurImpactSection = () => {
  const impactRef = useRef(null);

  const isImpactInView = useInView(impactRef, { once: true, amount: 0.3 });
  const impactControls = useAnimation();

  useEffect(() => {
    if (isImpactInView) {
      impactControls.start("visible");
    }
  }, [isImpactInView, impactControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const impactStats = [
    {
      value: "5000+",
      label: "Children Educated",
      color: "from-[#983532] to-[#983532]",
      icon: <BookOpen className="h-6 w-6 text-blue-100" />,
    },
    {
      value: "20+",
      label: "Villages Served",
      color: "from-[#983532] to-[#983532]",
      icon: <Heart className="h-6 w-6 text-purple-100" />,
    },
    {
      value: "100+",
      label: "Cows Protected",
      color: "from-[#983532] to-[#983532]",
      icon: <Leaf className="h-6 w-6 text-emerald-100" />,
    },
    {
      value: "15,000+",
      label: "Meals Provided",
      color: "from-[#983532] to-[#983532]",
      icon: <Apple className="h-6 w-6 text-amber-100" />,
    },
  ];

  return (
    <div className="py-16 md:py-20 bg-[#98353204] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={impactRef}
          className="relative"
          initial="hidden"
          animate={impactControls}
          variants={containerVariants}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#98353243] opacity-30"></div>
            <div className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-[#98353243] opacity-20"></div>
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mb-12 relative z-10"
          >
           
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#983532]">Impact</span>
            </h2>
            <div className="h-1 w-20 bg-[#983532] mx-auto mb-8 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Through the generous support of our donors and dedicated
              volunteers, we have been able to make a tangible difference in
              thousands of lives across India.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${stat.color} p-6 text-white shadow-lg`}
                custom={index}
                variants={statVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="absolute top-3 right-3 opacity-70">
                  {stat.icon}
                </div>
                <motion.span
                  className="text-4xl md:text-5xl font-bold block mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.3 + index * 0.1,
                      duration: 0.5,
                    },
                  }}
                >
                  {stat.value}
                </motion.span>
                <motion.p
                  className="text-sm md:text-base font-medium text-white/90"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.5 + index * 0.1,
                      duration: 0.5,
                    },
                  }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        
        </motion.div>
      </div>
    </div>
  );
};

export default OurImpactSection;
