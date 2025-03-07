"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import {  course1, course2, course3, service1, slider1, slider2, sliderB } from "@/assets";

export default function HumanitarianProject() {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    sliderB,
    course1,
    course2,
    course3,
    course1,
    course2,
    course3,
  ];


  return (
    <div
      className={`relative w-full mt-16 overflow-hidden h-screen bg-white bg-cover  bg-center bg-no-repeat`}
    >
      {/* Background image - would be replaced with your actual background */}
      <div className="absolute inset-0 z-0 brightness-[0.5]">
        <Image
          src="/project-one-bg.jpg"
          alt="Background"
          width={1920}
          height={200}
          className="object-cover bg-black/80 h-96"
        />
      </div>

      {/* Orange shape */}
      <motion.div
        className=" md:flex hidden absolute left-0 top-0 z-10 h-[400px] w-[400px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image src={slider2} alt="Orange shape" fill />
      </motion.div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header section */}
        <motion.div
          className="mb-8 flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-white">
            <div className="h-2 w-2 rounded-full bg-amber-500"></div>
            <p className="text-sm font-medium">Our Recent Project</p>
          </div>
        </motion.div>

        <motion.h1
          className="mb-12 text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          One Project At A Time
        </motion.h1>

        {/* Image gallery/carousel using shadcn/ui */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onSelect={(index) => setActiveSlide(index)}
          >
            <CarouselContent className="-ml-2 gap-6 md:-ml-4">
              {images.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-3 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    className={cn(
                      "relative overflow-hidden",
                      "h-[450px] w-full",
                      "cursor-pointer"
                    )}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={cn(
                        "absolute inset-0 border-card-foreground z-10",
                        activeSlide === index ? "ring-2 ring-amber-500" : ""
                      )}
                      whileHover={{
                        boxShadow: "0 0 0 4px rgba(255, 165, 0, 0.5)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Project image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-black/50 text-white hover:bg-black/70" />
            <CarouselNext className="right-2 bg-black/50 text-white hover:bg-black/70" />
          </Carousel>
        </motion.div>

        {/* Navigation dots */}
        <motion.div
          className="flex justify-center gap-2 -mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`h-3 w-3  border border-black ${
                activeSlide === index ? "bg-amber-500" : "bg-transparent"
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
