import { service1,service2,service3  } from "@/assets";
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
      <section className="relative bg-gray-100 text-black py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-yellow-500 font-semibold uppercase text-sm">
            Best Of Service
          </span>
          <h2 className="text-4xl font-bold mt-2">The Best Service</h2>
        </div>

        <div className=" md:max-w-6xl mx-auto grid md:grid-cols-3  md:gap-6 mt-12 ">
          {services.map((service, index) => (
            <div
              key={index}
              className={` rounded-2xl  hover:bg-black hover:text-white transition-colors duration-500 ease-in-out shadow-lg p-6 text-center relative `}
            >
              <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mt-6">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
              <div className="mt-4 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={150}
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="md:flex  justify-center mt-4 px-6 py-3 space-x-2">
          <a
            href="#"
            className="bg-black text-white font-semibold py-3 px-4 rounded-full flex items-center space-x-2 mt-4 md:mt-0 w-full md:w-auto justify-center hover:bg-yellow-500 hover:text-white transition-colors duration-500 ease-in-out "
          >
            <span>Donate Now</span>
          </a>
          <span className="bg-black text-white p-3 md:flex rounded-full hover:bg-yellow-500 hover:text-white transition-colors duration-500 ease-in-out ">
            <ArrowUpRight className="" />
          </span>
        </div>
      </section>
    );
}