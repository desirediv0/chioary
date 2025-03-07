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

export const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 2000 }));
  const images = [sliderB, sliderB2, sliderB3, sliderB4];

  return (
    <div className="relative w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="relative">
          <div className="absolute w-full h-full bg-black/75 inset-0 z-10" />
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[100vh] lg:h-[150vh]">
                <Image
                  src={image}
                  alt={`banner-${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Banner Content */}
      <section className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-2/5 text-left space-y-4 lg:space-y-8 lg:p-10">
              <span className="text-white font-semibold uppercase text-xs sm:text-sm">
                Charity Foundation Non Profit
              </span>
              <h1 className="text-3xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold text-white">
                Your <span className="text-yellow-400">Compassion</span>
                <br className="hidden sm:block" /> Their Hope
              </h1>
              <p className="text-gray-300 text-sm sm:text-xl max-w-2xl">
                Your Compassion Their Hope Is A Powerful And Inspiring Choice
                For Your Charity Website. It Effectively Captures The Essence Of
                Your Mission And The Impact Of Support.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center justify-start gap-4 mt-6">
                <a
                  href="#"
                  className="bg-yellow-500 hover:bg-yellow-600 transition-colors text-black font-semibold py-3 px-6 rounded-full flex items-center gap-2"
                >
                  <span>Donate Now</span>
                </a>
                <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Images */}
            <div className="hidden lg:block w-full lg:w-full relative">
              <div className="relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] mx-auto">
                <div className="absolute inset-0 rounded-full top-[15%]">
                  <Image
                  src={slider1}
                    alt="Primary charity image"
                    fill
                    className="z-50 object-cover"
                  />
                </div>
                <div className="absolute z-10 overflow-hidden -top-1/3 w-[300px] h-[300px] xl:w-[650px] xl:h-[750px] ">
                  
                  <Image
                    src={slider2}
                    alt="Secondary charity image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};