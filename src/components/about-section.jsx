"use client";
import { about1, about2, slider3 } from "@/assets";
import {
  GraduationCap,
  Droplets,
  Stethoscope,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  { icon: GraduationCap, label: "Education" },
  { icon: Droplets, label: "Water" },
  { icon: Stethoscope, label: "Medical" },
];

export default function AboutSection() {
  return (
    <section className=" md:max-w-6xl max-w-2xl mx-auto px-4 py-16 md:py-24 ">
     
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left side with logo, heading and content */}
        <div className="lg:col-span-6 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center opacity-30">
              <svg
                viewBox="0 0 24 24"
                className="w-16 h-16 text-gray-500"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span className="ml-2 text-gray-800 font-medium">Our About</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
            Empowering Lives
            <br />
            Through Compassion.
          </h1>

          <div className="flex flex-col gap-6 md:flex-row">
            <Image
              src={about1}
              alt="Person in need wearing yellow head covering"
              width={300}
              height={100}
              className="h-64 object-cover rounded-tr-[2.2rem] rounded-bl-[2.2rem]"
            />
            <div className="flex flex-col items-center md:px-4">
              <p className="text-gray-500 ">
                &quot;Empowering Lives Through Compassion&quot; is a powerful
                and inspiring heading that perfectly captures the essence of
                your charity&apos;s mission. It’s a great choice.
              </p>

              <div className="grid grid-cols-3  mr-auto md:mx-auto  gap-4 py-6">
                {features.map(({ icon: Icon, label }, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-3"
                  >
                    <div className="p-4 border border-gray-200 rounded-b-full hover:bg-yellow-500 hover:text-white transition-colors duration-500 ease-in-out">
                      <Icon className="w-6 h-6 text-gray-500" />
                    </div>
                    <span className="text-gray-800 font-medium">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-2 mr-auto md:mx-auto">
                <button className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-full hover:bg-yellow-600 transition-colors">
                  Read More
                </button>
                <button className="p-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-8">
          <div className="relative mt-8">
            {/* // Replace the existing motion.div with this updated version */}

            <div className="absolute top-5 md:right-[440px] right-[550px] w-28 h-28">
              {/* Static background and 25+ */}
              <div className="absolute w-full h-full bg-gray-900 text-white rounded-full flex flex-col items-center justify-center">
                <span className="text-2xl font-bold z-10">25+</span>
              </div>

              {/* Rotating text */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
                className="absolute w-full h-full"
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path
                    id="textPath"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[8px] uppercase tracking-wider">
                    <textPath
                      href="#textPath"
                      startOffset="0%"
                      className="fill-white"
                    >
                      Years of Experience • Years of Experience •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
            <Image
              src={about2}
              alt="Person in need wearing yellow head covering"
              width={500}
              height={500}
              className="w-full h-84 object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
