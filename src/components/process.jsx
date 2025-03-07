"use client";

import { process1, process2, process3, processbg, square } from "@/assets";
import Image from "next/image";
import React from "react";

const WorkingProcess = () => {
    return (
        <div className="mx-auto px-4 py-16 max-w-7xl relative overflow-hidden lg:mt-20">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image
                    src={square}
                    alt="Background"
                    width={150}
                    height={100}
                    className="opacity-100 hidden sm:block"
                />
            </div>

            {/* Header Section */}
            <div className="text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src={processbg}
                        alt="Working Process"
                        width={50}
                        height={50}
                        className="w-12 h-12 animate-spin-slow hidden sm:block"
                    />
                </div>
                <div className="flex items-center justify-center gap-1 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    <span className="text-gray-700 italic">Working Process</span>
                </div>
                <h2 className="text-5xl font-bold text-gray-900">Our Working Process</h2>
            </div>
            {/* Process Steps */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-20 relative">
                {/* Background Image for Steps */}
                <Image
                    src={processbg}
                    alt="Background"
                    width={300}
                    height={700}
                    className="absolute inset-0 -z-10 opacity-100 priority bg-cover bg-center bg-no-repeat w-[600px] h-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block"
                />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:mt-10 relative">
                    {[
                        { img: process1, title: "Identifying Needs" },
                        { img: process2, title: "Planning Solutions" },
                        { img: process3, title: "Powerful And Inspiring" },
                    ].map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center relative ${index === 1 ? "md:mt-0" : ""
                                }`}
                        >
                            <div className="relative group">
                                <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-[#f8e8d4] mb-6 relative">
                                    <Image
                                        src={step.img}
                                        width={100}
                                        height={100}
                                        alt={step.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute bottom-6 left-6 bg-gray-900 text-white px-4 py-2 rounded-full">
                                    Step 0{index + 1}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-2">{step.title}</h3>
                            <p className="text-center">
                                We start by listening to communities and conducting thorough assessments
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;
