"use client";

import { gift, process1, process2, process3, processbg, square } from "@/assets";
import Image from "next/image";
import React from "react";

const WorkingProcess = () => {
    return (
        <div className="mx-auto px-4 py-16 max-w-7xl relative overflow-hidden lg:mt-20 sm:mt-20 ">
            <div className="absolute inset-0 -z-10 overflow-hidden hidden sm:block">
                <Image
                    src={square}
                    alt="Background"
                    width={210}
                    height={100}
                    className="opacity-100 hidden sm:block"
                />
            </div>

            {/* Header Section */}
            <div className="text-center mb-16 relative">
                <div className="absolute top-[100px] left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                    src={gift}
                    alt="Background"
                    width={150}
                    height={100}
                    className="opacity-100 hidden sm:block"
                />
                </div>
                <div className="flex items-center justify-center gap-1 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    <span className="text-gray-700 italic">A Way of Life</span>
                </div>
                <h2 className="text-5xl font-bold text-gray-900">Seva, Shashwat, Shanti – A Way of Life</h2>
            </div>
            {/* Process Steps */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-20 relative">
                {/* Background Image for Steps */}
                <Image
                    src={processbg}
                    alt="Background"
                    width={300}
                    height={700}
                    className="absolute inset-0 -z-10 opacity-100 priority bg-cover bg-center bg-no-repeat w-[600px] h-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
                />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:mt-10 relative">
                    {[
                        { img: process1, title: "Seva", description: "Living with compassion and serving others without expecting anything in return." },
                        { img: process2, title: "Satya", description:"Seeking and living in alignment with truth, wisdom, and higher consciousness." },
                        { img: process3, title: "Shanti", description:"Cultivating inner peace, balance, and harmony with oneself and the universe." },
                    ].map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center relative group ${index === 1 ? "md:mt-0" : ""
                                }`}
                        >
                            <div className="relative ">
                                <div className="w-64 h-64 rounded-full overflow-hidden border-b-8 border-[#983532] group-hover:border-[var(--custom-color)] mb-6 relative">
                                    <Image
                                        src={step.img}
                                        width={100}
                                        height={100}
                                        alt={step.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110  "
                                    />
                                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 bg-gray-900 text-white h-32 w-32 flex items-start p-3 justify-center rounded-full group-hover:bg-[#983532] transition-transform duration-300 ">
                                    Step 0{index + 1}
                                </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-2 group-hover:text-[#983532] transition-transform duration-300 md:mt-10">{step.title}</h3>
                            <p className="text-center">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;
