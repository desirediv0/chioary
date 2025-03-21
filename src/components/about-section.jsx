"use client";
import { about1, about2 } from "@/assets";
import {
  GraduationCap,
  Droplets,
  Stethoscope,

} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { MdArrowOutward } from "react-icons/md";

const features = [
  { icon: GraduationCap, label: "Education" },
  { icon: Droplets, label: "Malnutrition" },
  { icon: Stethoscope, label: "Mental Wellness" },
  { icon: Stethoscope, label: "Spritiual Growth" },
  { icon: Stethoscope, label: "Cow Protection" },
  { icon: Stethoscope, label: "Social Responsibilty" },
];

export default function AboutSection({show =true}) {
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
              <span className="ml-2 text-gray-800 font-medium">About Us</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
            About Adyashakti Parmarth Niketan Trust
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
                At Adyashakti Parmarth Niketan Trust, we believe that service to
                humanity is the highest form of devotion. As a religious
                charitable trust and non-profit organization, our purpose is to
                uplift society through education, nourishment, mental wellness,
                spiritual growth, and Gau Seva (cow protection).
              </p>

              {/* <div className="grid grid-cols-3  mr-auto md:mx-auto  gap-4 py-6">
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
              </div> */}

              {show && (
                
                <span className="mr-auto pt-4 md:pt-5">
                  {" "}
                  <AnimatedButton
                    text={"Read More"}
                    icon={<MdArrowOutward />}
                    className={"py-[8px] md:py-[10px]  text-white "}
                    className2={" text-white"}
                  href={"/about"}
                  />

                </span>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-8">
          <div className="relative mt-8">
            {/* // Replace the existing motion.div with this updated version */}

            <div className="absolute -top-5 lg:left-0 md:left-10  left-0 w-28 h-28">
              {/* Rotating text */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-36 md:h-56  flex justify-center items-center ">
                {/* Rotating Text Border */}
                <motion.div
                  className="absolute w-40 h-40  "
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 20,
                    ease: "linear",
                  }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute w-40 h-40 p-2  bg-white rounded-full "
                  >
                    <defs>
                      <path
                        id="textPath"
                        fill="none"
                        d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                      />
                    </defs>
                    <text className="text-xs sm:text-sm font-bold uppercase tracking-[0.0em] fill-gray-800">
                      <textPath href="#textPath" startOffset="0%">
                        • We exists for selfless service •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Center Circle */}
                <motion.div
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#983532] rounded-full flex justify-center items-center shadow-lg"
                  initial={{ scale: 0.8 }}
                  animate={{
                    boxShadow: [
                      "0px 0px 0px rgba(0,0,0,0.2)",
                      "0px 0px 20px rgba(0,0,0,0.4)",
                      "0px 0px 0px rgba(0,0,0,0.2)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  {/* <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                    25+
                  </span> */}
                </motion.div>
              </div>
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
