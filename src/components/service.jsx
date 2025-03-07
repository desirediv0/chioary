"use client"
import { service1, service2, service3 } from "@/assets";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: "💧",
    title: "Clean Water Initiatives",
    description:
      "Providing Access To Safe Drinking Water Through Well Construction And Purification Projects.",
    image: service1,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    icon: "🎓",
    title: "Educational Programs",
    description:
      "Providing Access To Safe Drinking Water Through Well Construction And Purification Projects.",
    image: service2,
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    icon: "🍽️",
    title: "Food Distribution",
    description:
      "Providing Access To Safe Drinking Water Through Well Construction And Purification Projects.",
    image: service3,
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

export const Service = () => {
  return (
    <section className="relative bg-gray-100 text-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-yellow-500 font-semibold uppercase text-xs sm:text-sm">
          Best Of Service
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
          The Best Service
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-2xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out shadow-lg p-4 sm:p-6 text-center relative ${service.bgColor} ${service.textColor}`}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-lg sm:text-xl">
              {service.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-6">
              {service.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base">{service.description}</p>
            <div className="mt-4 overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={150}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-10 md:mt-12 max-w-md mx-auto">
        <a
          href="#"
          className="bg-black text-white font-semibold py-3 px-4 rounded-full flex items-center space-x-2 w-full sm:w-auto justify-center hover:bg-yellow-500 hover:text-white transition-colors duration-500 ease-in-out mb-4 sm:mb-0 sm:mr-4"
        >
          <span>Donate Now</span>
        </a>
        <span className="bg-black text-white p-3 flex rounded-full hover:bg-yellow-500 hover:text-white transition-colors duration-500 ease-in-out">
          <ArrowUpRight />
        </span>
      </div>
    </section>
  );
};
