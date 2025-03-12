"use client";

import { slider1, slider2, sliderB, sliderB2, sliderB3, sliderB4 } from "@/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { MdArrowOutward } from "react-icons/md";

export const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 2000 }));
  const images = [sliderB, sliderB2, sliderB3, sliderB4];

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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const highlightVariants = {
    initial: { color: "#FBBF24" },
    hover: {
      color: "#F59E0B",
      textShadow: "0px 0px 8px rgba(251, 191, 36, 0.6)",
      transition: { duration: 0.3, yoyo: Infinity }
    }
  };

  return (
    <div className="relative w-full overflow-hidden ">
      <Carousel
        plugins={[plugin.current]}
        className="w-screen "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "center",
          containScroll: "trimSnaps",
          loop: true,
        }}
      >
        <CarouselContent className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full bg-black inset-0 z-10 overflow-hidden"
          />
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <div className="relative h-[80vh] w-full sm:h-[90vh] md:h-[100vh] lg:h-[120vh]">
                <Image
                  src={image}
                  alt={`banner-${index + 1}`}
                  fill
                  className="object-cover object-center animate-slowZoom bg-center"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <section className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-12">
            <motion.div
              className="w-full lg:w-2/5 text-left space-y-4 md:space-y-6 lg:space-y-8 p-4 lg:p-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="text-white font-semibold uppercase text-xs sm:text-sm tracking-wider"
                variants={itemVariants}
              >
                Charity Foundation Non Profit
              </motion.span>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight"
                variants={headingVariants}
              >
                Your{" "}
                <motion.span
                  className="text-yellow-400"
                  variants={highlightVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Compassion
                </motion.span>
                <br className="hidden sm:block" />
                Their Hope
              </motion.h1>

              <motion.p
                className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl"
                variants={itemVariants}
              >
                Your Compassion Their Hope Is A Powerful And Inspiring Choice
                For Your Charity Website. It Effectively Captures The Essence Of
                Your Mission And The Impact Of Support.
              </motion.p>

              <AnimatedButton text={"Donation Now"} icon={<MdArrowOutward />} />
            </motion.div>

            {/* Right Images */}
            <motion.div
              className="hidden lg:block w-full lg:w-full relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-full top-[15%]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <Image
                    src={slider1}
                    alt="Primary charity image"
                    fill
                    className="z-50 object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute z-10 overflow-hidden -top-1/3 w-[300px] h-[300px] xl:w-[650px] xl:h-[750px]"
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1 }}
                >
                  <Image
                    src={slider2}
                    alt="Secondary charity image"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};