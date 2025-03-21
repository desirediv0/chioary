"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { BookOpen, Apple, Brain, Sparkles, Leaf } from "lucide-react";

const OurMissionSection = () => {
  // Ref for scroll animation
  const missionRef = useRef(null);

  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });

  // Animation control
  const missionControls = useAnimation();

  useEffect(() => {
    if (isMissionInView) {
      missionControls.start("visible");
    }
  }, [isMissionInView, missionControls]);

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

  // Focus areas with icons
  const focusAreas = [
    {
      id: 1,
      title: "Education",
      description:
        "Providing quality education and life skills to underprivileged children",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-[#983532] text-white",
      hoverColor: "group-hover:bg-white group-hover:text-[#983532]",
    },
    {
      id: 2,
      title: "Nutrition",
      description: "Combating malnutrition through sustainable food programs",
      icon: <Apple className="h-5 w-5" />,
      color: "bg-[#983532] text-white",
      hoverColor: "group-hover:bg-white group-hover:text-[#983532]",
    },
    {
      id: 3,
      title: "Mental Wellness",
      description:
        "Supporting mental health through counseling and mindfulness practices",
      icon: <Brain className="h-5 w-5" />,
      color: "bg-[#983532] text-white",
      hoverColor: "group-hover:bg-white group-hover:text-[#983532]",
    },
    {
      id: 4,
      title: "Spiritual Growth",
      description:
        "Facilitating spiritual development through education and practice",
      icon: <Sparkles className="h-5 w-5" />,
      color: "bg-[#983532] text-white",
      hoverColor: "group-hover:bg-white group-hover:text-[#983532]",
    },
    {
      id: 5,
      title: "Gau Seva",
      description:
        "Protecting and caring for cows according to traditional practices",
      icon: <Leaf className="h-5 w-5" />,
      color: "bg-[#983532] text-white",
      hoverColor: "group-hover:bg-white group-hover:text-[#983532]",
    },
  ];

  return (
    <div className="py-16 md:py-20 bg-gradient-to-b from-white to-[#9835320e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={missionRef}
          className="mb-12"
          initial="hidden"
          animate={missionControls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#983532] text-white rounded-full text-sm font-medium mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#983532]">Mission</span>
            </h2>
            <div className="h-1 w-20 bg-[#983532] mx-auto mb-8 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Our mission is to uplift society through compassionate service,
              promoting holistic wellbeing, spiritual awareness, and sustainable
              living practices.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {focusAreas.map((area) => (
              <motion.div
                key={area.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 "
                variants={itemVariants}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-start mb-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 ${area.color} rounded-lg flex items-center justify-center mr-4 transition-colors duration-300 ${area.hoverColor}`}
                  >
                    {area.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-xl">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-600 ml-14">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMissionSection;
