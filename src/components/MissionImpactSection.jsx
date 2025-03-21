import React, { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const MissionImpactSection = () => {
  // Animation controls
  const missionControls = useAnimation();
  const impactControls = useAnimation();
  const statControls = useAnimation();

  // Start animations when component mounts
  useEffect(() => {
    missionControls.start("visible");
    impactControls.start("visible");
    statControls.start("visible");
  }, [missionControls, impactControls, statControls]);

  // Variants for animations
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

  const focusAreas = [
    {
      id: 1,
      title: "Education",
      description:
        "Providing quality education and life skills to underprivileged children",
    },
    {
      id: 2,
      title: "Nutrition",
      description: "Combating malnutrition through sustainable food programs",
    },
    {
      id: 3,
      title: "Mental Wellness",
      description:
        "Supporting mental health through counseling and mindfulness practices",
    },
    {
      id: 4,
      title: "Spiritual Growth",
      description:
        "Facilitating spiritual development through education and practice",
    },
    {
      id: 5,
      title: "Gau Seva",
      description:
        "Protecting and caring for cows according to traditional practices",
    },
  ];

  const impactStats = [
    { value: "5000+", label: "Children Educated" },
    { value: "20+", label: "Villages Served" },
    { value: "100+", label: "Cows Protected" },
    { value: "15,000+", label: "Meals Provided" },
  ];

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Mission Section */}
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
            initial="hidden"
            animate={missionControls}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4"
            >
              Our Mission
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="h-1 w-16 bg-amber-500 mb-6"
            ></motion.div>

            <motion.p variants={itemVariants} className="text-gray-700 mb-4">
              Our mission is to uplift society through compassionate service,
              promoting holistic wellbeing, spiritual awareness, and sustainable
              living practices.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-700 mb-6">
              We strive to create positive change through five primary areas of
              focus:
            </motion.p>

            <motion.ul className="space-y-5" variants={containerVariants}>
              {focusAreas.map((area) => (
                <motion.li
                  key={area.id}
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.span
                    className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1"
                    whileHover={{
                      backgroundColor: "#f59e0b",
                      color: "#ffffff",
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <span className="text-amber-600 font-bold">{area.id}</span>
                  </motion.span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">
                      {area.title}
                    </h4>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Impact Section */}
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate={impactControls}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4"
            >
              Our Impact
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="h-1 w-16 bg-amber-500 mb-6"
            ></motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              initial="hidden"
              animate={statControls}
              variants={containerVariants}
            >
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-amber-50 p-6 rounded-lg text-center border-2 border-transparent hover:border-amber-200"
                  custom={index}
                  variants={statVariants}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 10px 15px -3px rgba(251, 191, 36, 0.1), 0 4px 6px -2px rgba(251, 191, 36, 0.05)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.span
                    className="text-4xl font-bold text-amber-700 block mb-2"
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
                    className="text-gray-700 font-medium"
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

            <motion.p variants={itemVariants} className="text-gray-700 mb-8">
              Through the generous support of our donors and dedicated
              volunteers, we have been able to make a tangible difference in
              thousands of lives across India.
            </motion.p>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/donate"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-md"
              >
                Support Our Cause
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MissionImpactSection;
