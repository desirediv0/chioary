"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const AnimatedButton = ({ text, icon, className, className2, href, func }) => {

    const Button = () => {
        return (
            <div className='flex items-center cursor-pointer justify-center gap-1 group max-w-min'>
                <button
                    type="button"
                    className={cn("flex justify-center text-nowrap gap-2 items-center mx-auto shadow-xl text-lg bg-[#983532] backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:group-hover:w-full before:-left-full before:group-hover:left-0 text-white  before:bg-white group-hover:text-black before:-z-10 before:aspect-square before:group-hover:scale-150 before:group-hover:duration-700 relative z-10 px-5  py-[10px] md:py-[14px] overflow-hidden  rounded-full group", className)}
                    onClick={func}
                >
                    {text}
                </button>
                <button
                    type="button"
                    className={cn("flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-[#983532] backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:group-hover:w-full before:left-full before:group-hover:left-0  before:bg-white group-hover:text-black before:-z-10 before:aspect-square before:group-hover:scale-150 before:group-hover:duration-700 relative z-10 px-4 py-4 overflow-hidden  rounded-full group text-white", className2)}
                    onClick={func}
                >
                    {icon}
                </button>
            </div>
        )
    }

    if (href) {
        return (
            <Link href={href}>
                <Button />
            </Link>
        )
    }
    return (
        <div>
            <Button />
        </div>
    )
}

export default AnimatedButton
