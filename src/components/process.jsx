"use client"

import { process1, process2, process3 } from "@/assets"
import Image from "next/image"

const WorkingProcess = () => {
    return (
        <div className="container mx-auto px-2 py-10 max-w-7xl">
            {/* Header with dot pattern and illustration */}
            <div className="relative mb-16">
                {/* Dot pattern */}
                <div className="absolute left-0 top-0 opacity-20">
                    <div className="grid grid-cols-8 gap-2">
                        {[...Array(64)].map((_, i) => (
                            <div key={i} className="w-3 h-3 rounded-full bg-gray-500"></div>
                        ))}
                    </div>
                </div>

                {/* Title section */}
                <div className="flex justify-between items-start">
                    <div className="flex-1"></div>
                    <div className="flex-1 text-center">
                        <div className="flex items-center justify-center gap-1 mb-4">
                            <div className="w-2 h-2 rounded-full bg-green-600"></div>
                            <span className="text-gray-700 italic">Working Process</span>
                        </div>
                        <h2 className="text-5xl font-bold text-gray-900">Our Working Process</h2>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <div className="w-32 h-32 opacity-20">
                            {/* <Image
                                src={process1}
                                alt="Decorative illustration"
                                width={100}
                                height={100}
                                className="w-full h-full"
                            /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Process steps */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-1 mt-20">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                    <div className="relative group">
                        <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-[#f8e8d4] mb-6">
                            <Image
                                src={process1}
                                width={100}
                                height={100}
                                alt="Identifying Needs"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute bottom-6 left-6 bg-gray-900 text-white px-4 py-2 rounded-full">Step 01</div>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">Identifying Needs</h3>
                    <p className="text-center mb-2">We start by listening to communities and conducting thorough assessments</p>
                </div>

                {/* Connector */}
                <div className="hidden md:block w-32 h-0.5 border-t-2 border-dashed border-amber-400 mt-[-50px]"></div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                    <div className="relative group">
                        <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-[#f8e8d4] mb-6">
                            <Image
                                src={process2}
                                width={100}
                                height={100}
                                alt="Process Step 2"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute bottom-6 left-6 bg-gray-900 text-white px-4 py-2 rounded-full">Step 02</div>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">Planning Solutions</h3>
                    <p className="text-center mb-2">We start by listening to communities and conducting thorough assessments</p>
                </div>

                {/* Connector */}
                <div className="hidden md:block w-32 h-0.5 border-t-2 border-dashed border-amber-400 mt-[-50px]"></div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                    <div className="relative group">
                        <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-[#f8e8d4] mb-6">
                            <Image
                                src={process3}
                                width={100}
                                height={100}
                                alt="Powerful And Inspiring"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute bottom-6 left-6 bg-gray-900 text-white px-4 py-2 rounded-full">Step 03</div>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">Powerful And Inspiring</h3>
                    <p className="text-center mb-2">We start by listening to communities and conducting thorough assessments</p>
                </div>
            </div>
        </div>
    )
}

export default WorkingProcess

