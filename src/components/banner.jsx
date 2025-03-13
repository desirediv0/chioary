"use client";

import { sliderB, sliderB2 } from "@/assets";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { MdArrowOutward } from "react-icons/md";

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const images = [sliderB, sliderB2];
  const intervalRef = useRef(null);

  // Preload images to ensure they're available before rendering
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = images.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = typeof src === 'string' ? src : src.src;
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  // Set up the image transition interval
  useEffect(() => {
    if (imagesLoaded) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [imagesLoaded, images.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      },
    },
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.2
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 1 },
        scale: { duration: 8 }
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        opacity: { duration: 1 },
        scale: { duration: 2 }
      }
    }
  };

  const highlightVariants = {
    initial: { color: "#F59E0B" },
    hover: {
      color: "#F59E0B",
      textShadow: "0px 0px 8px rgba(251, 191, 36, 0.6)",
      transition: { duration: 0.3, yoyo: Infinity }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Container */}
      {imagesLoaded && (
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full bg-black inset-0 z-10"
          />
          <AnimatePresence mode="sync">
            <motion.div
              key={currentIndex}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`banner-${currentIndex}`}
                fill
                className="object-cover object-center"
                priority={true}
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
              />
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Content */}
      <section className="absolute inset-0 z-20 flex items-center justify-center md:mt-[5%]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8 p-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight md:leading-[1.3]"
              variants={headingVariants}
            >
              सर्वे भवन्तु सुखिनः{" "}
              <br />
              <motion.span
                className="text-[#F59E0B]"
                variants={highlightVariants}
                initial="initial"
                whileHover="hover"
              >
                सर्वे सन्तु निरामयाः।
              </motion.span>
              <br />
              सर्वे भद्राणि पश्यन्तु{" "}
              <br />
              <motion.span
                className="text-[#F59E0B]"
                variants={highlightVariants}
                initial="initial"
                whileHover="hover"
              >
                मा कश्चित् दुःखभाग्भवेत्॥
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto"
              variants={itemVariants}
            >
              सभी सुखी रहें, सभी निरोगी रहें, सभी शुभ चीजें देखें, और कोई भी दुखी न हो।
            </motion.p>

            <motion.div
              className="w-full flex justify-center"
              variants={itemVariants}
            >
              <AnimatedButton
                text="Donate Now"
                icon={<MdArrowOutward />}
                className="py-[8px] md:py-[10px] text-white"
                className2="text-white"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};