"use client"
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import {  about1 } from "@/assets";
import { IoEarthOutline } from "react-icons/io5";
import AboutSection from "@/components/about-section";
import { IndianRupee, User } from "lucide-react";
import Testimonials from "@/components/ui/cases-with-infinite-scroll";
import MissionImpactSection from "@/components/MissionImpactSection";
import OurImpactSection from "@/components/ourimpact";


export default function Page() {
  return (
    <>
      <Breadcrumb title={"About"} Breadcrumb={"Home"} discription={"About"} />
      <AboutSection show={false} />
      <OurImpactSection />
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main grid container replacing flex layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image column */}
            <div className="w-full">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={about1}
                  alt="Person in need wearing yellow head covering"
                  width={500}
                  height={500}
                  className="w-full h-84 object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-800 p-4">
                  <p className="text-amber-50 text-center font-medium">
                    Established in 2010
                  </p>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="w-full p-4">
              {/* Nested grid for the cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left column with two stacked cards */}
                <div className="space-y-6">
                  {/* Driven Compassion Card */}
                  <div className="bg-white shadow-md p-6 group rounded-lg  hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-center mb-6">
                      <div className="bg-white p-6 group-hover:text-white group-hover:bg-[#983532] transition-all duration-300 rounded-full">
                        <IoEarthOutline size={48} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                        Driven Compassion
                      </h2>
                    </div>
                    <p className="text-gray-600 text-center mb-6">
                      Every Service We Offer Is Rooted in Compassion.
                    </p>
                    <div className="flex justify-center">
                      <button className="flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors">
                        <span className="mr-2">—</span> Read More
                      </button>
                    </div>
                  </div>

                  {/* Holistic Support Card */}
                  <div className="bg-white shadow-md p-6 group rounded-lg   hover:shadow-md ">
                    <div className="flex flex-col items-center mb-6">
                      <div className="bg-white  p-6 group-hover:text-white group-hover:bg-[#983532] transition-all duration-300 rounded-full">
                        <IndianRupee size={40} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                        Holistic Support
                      </h2>
                    </div>
                    <p className="text-gray-600 text-center mb-6">
                      Support services with a holistic approach.
                    </p>
                    <div className="flex justify-center">
                      <button className="flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors">
                        <span className="mr-2">—</span> Read More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right column with single taller card */}
                <div className="flex flex-col  items-center relative justify-center max-h-min">
                  <div className="bg-white  p-6 md:absolute top-28 group rounded-lg shadow-md hover:shadow-md transition-shadow w-full ">
                    <div className="flex flex-col items-center mb-6">
                      <div className="bg-white p-6 group-hover:text-white group-hover:bg-[#983532] transition-all duration-300 rounded-full">
                        <User size={40} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                        Sustainable Impact
                      </h2>
                    </div>
                    <p className="text-gray-600 text-center mb-6">
                      Creating lasting change through impact-driven solutions.
                    </p>
                    <div className="flex justify-center">
                      <button className="flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors">
                        <span className="mr-2">—</span> Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <MissionImpactSection/>
      <Testimonials />
    </>
  );
}
