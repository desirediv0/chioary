"use client"

import { useState } from "react"
import { ArrowUpRight, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { donation } from "@/assets"
import Link from "next/link"


export default function DonationForm() {
    const [frequency, setFrequency] = useState("monthly")
    const [amount, setAmount] = useState(50)
    const [customAmount, setCustomAmount] = useState("50")
    const [coverFees, setCoverFees] = useState(true)
    const [name, setName] = useState("")
    const [showHonorField, setShowHonorField] = useState(false)
    const [honorName, setHonorName] = useState("")


    const handleAmountSelect = (value) => {
        setAmount(value)
        setCustomAmount(value.toString())
    }

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value)
        setAmount(Number.parseFloat(e.target.value) || 0)
    }

    return (
        <div className="flex flex-col md:flex-row w-full mx-auto bg-black text-white overflow-hidden rounded-lg lg:p-24">
            {/* Left side - Image and heading */}
            <div className="relative w-full md:w-1/2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <Image
                    src={donation}
                    alt="Children in need"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                    <div className="flex items-center mb-4">
                        <div className="w-10 h-10 mr-2">
                            <svg viewBox="0 0 24 24" fill="none" className="text-[var(--custom-color)]">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M15 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
                                    fill="currentColor"
                                />
                                <path d="M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold">
                            Chi<span className="text-[var(--custom-color)]">oary</span>
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold">Help Us Do More</h1>
                </div>
            </div>

            {/* Right side - Donation form */}
            <div className="w-full md:w-1/2 p-8 bg-black">
                <div className="space-y-8">
                    {/* Frequency selection */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Select Gift Frequency</h2>
                        <div className="flex space-x-4">
                            <Button
                                variant="outline"
                                className={cn(
                                    "rounded-full border-2 px-8 py-6 text-lg font-medium",
                                    frequency === "monthly"
                                        ? "bg-[var(--custom-color)] text-white border-bg-[var(--custom-color)] hover:bg-[var(--custom-color)] hover:border-bg-[var(--custom-color)]"
                                        : "bg-transparent text-white border-bg-[var(--custom-color)] hover:bg-[var(--custom-color)] hover:bg-[var(--custom-color)]",
                                )}
                                onClick={() => setFrequency("monthly")}
                            >
                                Monthly
                            </Button>
                            <Button
                                variant="outline"
                                className={cn(
                                    "rounded-full border-2 px-8 py-6 text-lg font-medium",
                                    frequency === "one-time"
                                        ? "bg-[var(--custom-color)] text-white border-bg-[var(--custom-color)] hover:bg-[var(--custom-color)] hover:border-bg-[var(--custom-color)]"
                                        : "bg-transparent text-white border-bg-[var(--custom-color)] hover:bg-[var(--custom-color)] hover:bg-[var(--custom-color)]",
                                )}
                                onClick={() => setFrequency("one-time")}
                            >
                                One Time
                            </Button>
                        </div>
                    </div>

                    {/* Amount selection */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            Select Amount <span className="text-[var(--custom-color)] font-normal text-lg">( In US Dollar )</span>
                        </h2>
                        <div className="relative mb-4 w-[150px]">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <DollarSign className="h-5 w-5 text-[var(--custom-color)]" />
                            </div>
                            <Input
                                type="text"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                className="pl-10 py-6 text-lg bg-black border-gray-700 rounded-full focus:border-[var(--custom-color)] focus:ring-[var(--custom-color)]"
                            />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <Button
                                variant="outline"
                                className={cn(
                                    "rounded-full border-2 py-6 text-lg font-medium flex items-center justify-start hover:bg-transparent hover:text-white ",
                                    "bg-transparent text-white border-gray-700",
                                )}
                                onClick={() => setShowHonorField(!showHonorField)}
                            >
                                $60
                            </Button>
                            <div className="flex flex-row gap-2">
                                {[30, 40, 50, 60].map((value) => (
                                    <Button
                                        key={value}
                                        variant="outline"
                                        className={cn(
                                            "rounded-full border-2 py-6 w-[70px] text-lg font-medium",
                                            amount === value
                                                ? "bg-[var(--custom-color)] text-white border-[var(--custom-color)] hover:bg-[var(--custom-color)] hover:border-[var(--custom-color)]"
                                                : "bg-transparent text-white border-gray-700 hover:bg-gray-800 hover:border-gray-600",
                                        )}
                                        onClick={() => handleAmountSelect(value)}
                                    >
                                        ${value}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Cover fees checkbox */}
                    <div className="flex items-start space-x-3">
                        <div className="flex items-center h-6 mt-1">
                            <Checkbox
                                id="cover-fees"
                                checked={coverFees}
                                onCheckedChange={(checked) => setCoverFees(checked)}
                                className="border-gray-500 data-[state=checked]:bg-[var(--custom-color)] data-[state=checked]:border-[var(--custom-color)]"
                            />
                        </div>
                        <div className="leading-tight">
                            <label htmlFor="cover-fees" className="text-lg font-medium">
                                Well, I&apos;ll Generously Add $20.00 Per Month To Cover Transaction Fees.
                            </label>
                        </div>
                    </div>

                    {/* Name field */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Name</h2>
                        <Input
                            type="text"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="py-6 text-lg bg-black border-gray-700 rounded-full focus:border-[var(--custom-color)] focus:ring-[var(--custom-color)]"
                        />
                    </div>

                    {/* Honor link */}
                    <div>
                        <button
                            onClick={() => setShowHonorField(!showHonorField)}
                            className="text-[var(--custom-color)] hover:text-[var(--custom-color)] text-md font-medium"
                        >
                            Click To Give In Honor Of Other Person
                        </button>
                    </div>

                    {/* Honor field (conditionally shown) */}
                    {showHonorField && (
                        <div>
                            <Input
                                type="text"
                                placeholder="Enter Honoree's Name"
                                value={honorName}
                                onChange={(e) => setHonorName(e.target.value)}
                                className="py-6 text-lg bg-black border-gray-700 rounded-full focus:border-[var(--custom-color)] focus:ring-[var(--custom-color)]"
                            />
                        </div>
                    )}

                    {/* Submit button */}
                    <div className="flex justify-start p-6">
                        <Link
                            href={"/"}
                            className="group flex items-center gap-1 bg-amber-500 hover:bg-amber-400 transition-colors rounded-full overflow-hidden"
                        >
                            <span className="px-6 py-3 font-semibold text-white text-lg">Donate Now</span>
                            <div className="flex items-center justify-center h-12 w-12 bg-amber-400 group-hover:bg-amber-300 transition-colors rounded-full">
                                <ArrowUpRight className="h-5 w-5 text-white" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
