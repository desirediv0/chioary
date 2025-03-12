"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { donation, footerbg1 } from "@/assets"

function useInView(options = {}) {
    const ref = useRef(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting)
        }, options)

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref, options])

    return [ref, isInView]
}

export default function DonationForm() {
    const [frequency, setFrequency] = useState("monthly")
    const [amount, setAmount] = useState(50)
    const [customAmount, setCustomAmount] = useState("50")
    const [coverFees, setCoverFees] = useState(true)
    const [name, setName] = useState("")
    const [showHonorField, setShowHonorField] = useState(false)
    const [honorName, setHonorName] = useState("")
    const [formRef, isFormInView] = useInView({ threshold: 0.1 })

    const handleAmountSelect = (value) => {
        setAmount(value)
        setCustomAmount(value.toString())
    }

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value)
        setAmount(Number.parseFloat(e.target.value) || 0)
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                when: "beforeChildren",
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 },
        },
    }

    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0.8 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1.2, ease: "easeOut" },
        },
    }

    const headingVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: 0.3,
            },
        },
    }

    const buttonVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.5,
            },
        },
        hover: {
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
        tap: { scale: 0.95 },
    }

    const amountButtonVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: (custom) => ({
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2 + custom * 0.1,
            },
        }),
        hover: {
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
        tap: { scale: 0.95 },
    }

    const inputVariants = {
        hidden: {
            x: 20,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
        focus: {
            scale: 1.02,
            borderColor: "var(--custom-color)",
            boxShadow: "0 0 0 2px rgba(255, 164, 21, 0.3)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
    }

    return (
        <motion.div
            ref={formRef}
            className="flex flex-col md:flex-row w-full mx-auto bg-[var(--custom-color-2)] text-white overflow-hidden relative lg:p-8 shadow-2xl"
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Left side - Image and heading */}
            <div className=" w-full lg:p-3 flex flex-col md:flex-row">         
                <div className="relative w-full md:w-1/2 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-[var(--custom-color-2)]/80 to-transparent z-10"
                        initial={{ opacity: 0 }}
                        animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                    <motion.div variants={imageVariants} className="w-full h-full min-h-[400px]">
                        <Image
                            src={donation}
                            alt="Children in need"
                            width={500}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <motion.div className="absolute bottom-0 left-0 p-8 z-20" variants={containerVariants}>
                        {/* <motion.div className="flex items-center mb-4" variants={itemVariants}>
                            <motion.div
                                className="w-10 h-10 mr-2"
                                initial={{ rotate: -180, opacity: 0 }}
                                animate={isFormInView ? { rotate: 0, opacity: 1 } : { rotate: -180, opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 }}
                            >
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
                            </motion.div>
                            <motion.span className="text-2xl font-bold" variants={itemVariants}>
                                Chi
                                <motion.span
                                    className="text-[var(--custom-color)]"
                                    initial={{ opacity: 0 }}
                                    animate={isFormInView ? { opacity: [0, 1, 0, 1] } : { opacity: 0 }}
                                    transition={{ delay: 1, duration: 0.8 }}
                                >
                                    oary
                                </motion.span>
                            </motion.span>
                        </motion.div> */}
                        <motion.h1 className="text-4xl md:text-5xl font-bold" variants={headingVariants}>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Help Us
                            </motion.span>{" "}
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Do More
                            </motion.span>
                        </motion.h1>
                    </motion.div>
                </div>

                {/* Right side - Donation form */}
                <motion.div className="w-full md:w-1/2 p-6 md:p-8 bg-[var(--custom-color-2)] relative" variants={containerVariants}>
                    <div className="space-y-6 md:space-y-8">
                    <div className="hidden md:block">
                <Image
                    src={footerbg1}
                    alt="Children in need"
                    width={500}
                    height={600}
                    className="w-[200px] h-[200px] object-cover absolute top-0 right-[5rem] hidden sm:block"
                />
            </div>
                        {/* Frequency selection */}
                        <motion.div variants={itemVariants}>
                            <motion.h2 className="text-xl md:text-2xl font-bold mb-4" variants={itemVariants}>
                                Select Gift Frequency
                            </motion.h2>
                            <motion.div className="flex space-x-2 md:space-x-4" variants={itemVariants}>
                                <div className="flex gap-2 bg-black p-2 shadow-md rounded-full">
                                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "rounded-full border-2 px-4 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium",
                                            frequency === "monthly"
                                                ? "bg-[var(--custom-color)] text-white border-[var(--custom-color)] hover:bg-[var(--custom-color)] hover:border-[var(--custom-color)]"
                                                : "bg-transparent text-white border-[var(--custom-color)] hover:bg-[var(--custom-color)]",
                                        )}
                                        onClick={() => setFrequency("monthly")}
                                    >
                                        Monthly
                                    </Button>
                                </motion.div>
                                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "rounded-full border-2 px-4 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium",
                                            frequency === "one-time"
                                                ? "bg-[var(--custom-color)] text-white border-[var(--custom-color)] hover:bg-[var(--custom-color)] hover:border-[var(--custom-color)]"
                                                : "bg-transparent text-white border-[var(--custom-color)] hover:bg-[var(--custom-color)]",
                                        )}
                                        onClick={() => setFrequency("one-time")}
                                    >
                                        One Time
                                    </Button>
                                </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Amount selection */}
                        <motion.div variants={itemVariants}>
                            <motion.h2 className="text-xl md:text-2xl font-bold mb-4" variants={itemVariants}>
                                Select Amount{" "}
                                <motion.span
                                    className="text-[var(--custom-color)] font-normal text-sm md:text-lg"
                                    initial={{ opacity: 0 }}
                                    animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                >
                                    ( In US Dollar )
                                </motion.span>
                            </motion.h2>
                            <motion.div className="relative mb-4 w-[120px] md:w-[150px]" variants={inputVariants} whileFocus="focus">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={isFormInView ? { scale: 1 } : { scale: 0 }}
                                        transition={{ delay: 1.2, duration: 0.5 }}
                                    >
                                        <motion.div
                                            animate={isFormInView ? { rotate: [0, 15, -15, 0] } : { rotate: 0 }}
                                            transition={{
                                                delay: 1.2,
                                                duration: 0.8,
                                                type: "tween"
                                            }}
                                        >
                                            <DollarSign className="h-5 w-5 text-[var(--custom-color)]" />
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <Input
                                    type="text"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className="pl-10 py-4 md:py-6 text-base md:text-lg bg-black border-gray-700 rounded-full focus:border-[var(--custom-color)] focus:ring-[var(--custom-color)]"
                                />
                            </motion.div>
                            <motion.div className="flex  gap-2 md:gap-3" variants={itemVariants}>
                                <motion.div variants={amountButtonVariants} custom={0} whileHover="hover" whileTap="tap">
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "rounded-full border-2 py-4 md:py-6 text-base md:text-lg font-medium px-5 flex items-center justify-center hover:bg-transparent hover:text-white",
                                            "bg-transparent text-white border-gray-700",
                                            amount === 60
                                                ? "bg-[var(--custom-color)] text-white border-[var(--custom-color)] hover:bg-[var(--custom-color)] hover:border-[var(--custom-color)]"
                                                : "bg-transparent text-white border-gray-700 hover:bg-gray-800 hover:border-gray-600",
                                        )}
                                        onClick={() => handleAmountSelect(60)}
                                    >
                                        Custom Amount
                                    </Button>
                                </motion.div>
                                <div className="flex flex-row gap-2 flex-wrap ">
                                    {[30, 40, 50].map((value, index) => (
                                        <motion.div
                                            key={value}
                                            variants={amountButtonVariants}
                                            custom={index + 1}
                                            whileHover="hover"
                                            whileTap="tap"
                                            className="flex-1"
                                        >
                                            <Button
                                                variant="outline"
                                                className={cn(
                                                    "rounded-full border-2 py-4 md:py-6 w-full text-base md:text-lg font-medium hover:text-white",
                                                    amount === value
                                                        ? "bg-[var(--custom-color)] text-white border-[var(--custom-color)] hover:bg-[var(--custom-color)] hover:border-[var(--custom-color)]"
                                                        : "bg-transparent text-white border-gray-700 hover:bg-gray-800 hover:border-gray-600",
                                                )}
                                                onClick={() => handleAmountSelect(value)}
                                            >
                                                ${value}
                                            </Button>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Cover fees checkbox */}
                        <motion.div className="flex items-start space-x-3" variants={itemVariants}>
                            <motion.div
                                className="flex items-center h-6 mt-1"
                                initial={{ scale: 0 }}
                                animate={isFormInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                            >
                                <Checkbox
                                    id="cover-fees"
                                    checked={coverFees}
                                    onCheckedChange={(checked) => setCoverFees(checked)}
                                    className="border-gray-500 data-[state=checked]:bg-[var(--custom-color)] data-[state=checked]:border-[var(--custom-color)]"
                                />
                            </motion.div>
                            <motion.div className="leading-tight" variants={itemVariants}>
                                <label htmlFor="cover-fees" className="text-base md:text-lg font-medium">
                                    Well, I&apos;ll Generously Add $20.00 Per Month To Cover Transaction Fees.
                                </label>
                            </motion.div>
                        </motion.div>

                        {/* Name field */}
                        <motion.div variants={itemVariants}>
                            <motion.h2 className="text-xl md:text-2xl font-bold mb-4" variants={itemVariants}>
                                Name
                            </motion.h2>
                            <motion.div variants={inputVariants} whileFocus="focus">
                                <Input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="py-4 md:py-6 text-base md:text-lg bg-black border-gray-700 rounded-full focus:border-[var(--custom-color)] focus:ring-[var(--custom-color)]"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Honor link */}
                        <motion.div variants={itemVariants}>
                            <motion.button
                                onClick={() => setShowHonorField(!showHonorField)}
                                className="text-[var(--custom-color)] hover:text-[var(--custom-color)] text-sm md:text-md font-medium relative overflow-hidden group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Click To Give In Honor Of Other Person
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--custom-color)]"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        </motion.div>

                        {/* Honor field (conditionally shown) */}
                        <AnimatePresence>
                            {showHonorField && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <motion.div variants={inputVariants} whileFocus="focus">
                                        <Input
                                            type="text"
                                            placeholder="Enter Honoree's Name"
                                            value={honorName}
                                            onChange={(e) => setHonorName(e.target.value)}
                                            className="py-4 md:py-6 text-base md:text-lg bg-black border-gray-700 rounded-full focus:border-[var(--custom-color)] focus:ring-[var(--custom-color)]"
                                        />
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Submit button */}
                        <motion.div className="flex justify-start pt-2 md:p-6" variants={itemVariants}>
                            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="relative">
                                <motion.div
                                    className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 opacity-70 blur-sm"
                                    initial={{ opacity: 0 }}
                                    animate={isFormInView ? { opacity: 0.7, scale: [1, 1.05, 1] } : { opacity: 0 }}
                                    transition={{
                                        delay: 1.8,
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "reverse",
                                    }}
                                />
                                <Link
                                    href={"/"}
                                    className="group relative flex items-center gap-1 bg-amber-500 hover:bg-amber-400 transition-colors rounded-full overflow-hidden"
                                >
                                    <span className="px-4 md:px-6 py-2 md:py-3 font-semibold text-white text-base md:text-lg">Donate Now</span>
                                    <div className="flex items-center justify-center h-10 md:h-12 w-10 md:w-12 bg-amber-400 group-hover:bg-amber-300 transition-colors rounded-full">
                                        <motion.div
                                            animate={{
                                                x: [0, 5, 0],
                                                y: [0, -5, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Number.POSITIVE_INFINITY,
                                                repeatType: "reverse",
                                            }}
                                        >
                                            <ArrowUpRight className="h-5 w-5 text-white" />
                                        </motion.div>
                                    </div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative elements - fixed positioning to avoid overflow */}
            <motion.div
                className="absolute top-0 right-0 md:-top-20 md:-right-20 w-20 md:w-40 h-20 md:h-40 rounded-full bg-[var(--custom-color)] opacity-10 pointer-events-none"
                initial={{ scale: 0 }}
                animate={isFormInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.div
                className="absolute bottom-0 left-0 md:bottom-20 md:-left-20 w-30 md:w-60 h-30 md:h-60 rounded-full bg-[var(--custom-color)] opacity-5 pointer-events-none"
                initial={{ scale: 0 }}
                animate={isFormInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            />
        </motion.div>
    )
}
