"use client";

import { slider1,slider2,sliderB, sliderB2, sliderB3, sliderB4 } from "@/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

export const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 2000 }));

  const images = [
    sliderB,
    sliderB2,
    sliderB3,
    sliderB4 
    ];
    
    


  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full  relative"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="  relative ">
          <div className="absolute  w-full h-full bg-black/75 inset-0 " />
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Image src={image} width={1920} height={1080} alt="banner" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* banner content */}

      <section className="  text-white py-20 px-8 absolute inset-0 top-80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative">
          {/* Left Content */}
          <div className="md:w-[50%] text-center md:text-left">
            <span className="text-yellow-400 font-semibold uppercase text-sm">
              Charity Foundation Non Profit
            </span>
            <h1 className="text-5xl font-bold mt-4">
              Your <span className="text-yellow-400">Compassion</span>
              <br /> Their Hope
            </h1>
            <p className="text-gray-400 mt-4 text-lg">
              Your Compassion Their Hope Is A Powerful And Inspiring Choice For
              Your Charity Website. It Effectively Captures The Essence Of Your
              Mission And The Impact Of Support.
            </p>
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg flex items-center space-x-2">
              <span>Donate Now</span>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M5 12h14M12 5l7 7-7 7" />{" "}
              </svg> */}
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-[50%] relative mt-10 md:mt-0 flex justify-center ">
            <div className=" relative w-96 h-[500px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden">
              {/* <div className="  w-full h-full bg-yellow-500 rounded-full -z-10"></div> */}
              <Image
                src={slider1}
                alt="Charity"
                layout="fill"
                className=" object-cover  "
              />
            </div>
            <div className=" ">
              <Image
                src={slider2}
                alt="Charity"
                layout="fill"
                className=" object-cover absolute -top-257  -z-1 -right-175  h-[500px] "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
