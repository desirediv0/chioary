"use client";

import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The Educational Programs Offered By Chioary Have Changed My Life. I Was Able To Complete My Education And Now Have The Skills To Support My Family. I'm Forever Grateful.",
    name: "Mate Henry",
    role: "General Manager",
  },
  {
    text: "Chioary's courses helped me gain confidence in my career. The instructors are very knowledgeable and supportive. Highly recommend!",
    name: "Jessica Brown",
    role: "Marketing Lead",
  },
  {
    text: "I appreciate the flexible learning options and hands-on training provided by Chioary. It has truly made a difference in my skill set.",
    name: "David Williams",
    role: "Software Engineer",
  },
  {
    text: "I appreciate the flexible learning options and hands-on training provided by Chioary. It has truly made a difference in my skill set.",
    name: "Rahul Sharma",
    role: "Software Engineer",
  },
  {
    text: "I appreciate the flexible learning options and hands-on training provided by Chioary. It has truly made a difference in my skill set.",
    name: "Himank Yadav",
    role: "Software Engineer",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <section className="w-full py-16 lg:py-1 lg:mb-1 bg-gray-50 sm:mt-[-100px] lg:mt-[-300px] lg:mb-[30px]">
      <div className="flex justify-center items-center md:h-screen lg:mb-[-200px] ">
        <div className="relative w-40 h-40 flex justify-center items-center border border-gray-700 rounded-full">
          {/* Rotating Text Border */}
          <motion.div
            className="absolute w-full h-full flex justify-center items-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" className="absolute w-full h-full p-2">
              <path
                id="textPath"
                fill="transparent"
                d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              />
              <text className="text-sm font-bold uppercase tracking-[10px] fill-gray-700">
                <textPath href="#textPath" startOffset="0%"  className="text-gray-700">
                  YEARS OF EXPERIENCE - YEARS OF EXPERIENCE -
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Center Circle */}
          <div className="w-24 h-24 bg-black rounded-full flex justify-center items-center">
            <span className="text-white text-xl font-bold">25+</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="flex">
              <CarouselItem key={current} className="flex justify-center w-full">
                <div className="p-6 sm:p-8 max-w-lg sm:max-w-xl lg:max-w-7xl">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg sm:text-xl italic text-gray-700">{testimonials[current].text}</p>
                  <h3 className="font-semibold mt-6 text-lg sm:text-xl">{testimonials[current].name}</h3>
                  <p className="text-gray-500 text-md sm:text-lg">{testimonials[current].role}</p>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all duration-300 ${current === index ? "bg-orange-500 scale-110" : "bg-gray-300"
                }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
