import React from 'react'


const AnimatedButton = ({ text, icon }) => {
    return (
        <div className='flex items-center justify-center gap-1 group max-w-min'>
            <a
                type="submit"
                className="flex justify-center text-nowrap gap-2 items-center mx-auto shadow-xl text-lg bg-[#FFA415] backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:group-hover:w-full before:-left-full before:group-hover:left-0  before:bg-white group-hover:text-black before:-z-10 before:aspect-square before:group-hover:scale-150 before:group-hover:duration-700 relative z-10 px-5  py-[10px] md:py-[14px] overflow-hidden  rounded-full group"
            >
                {text}
            </a>
            <a
                type="submit"
                className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-[#FFA415] backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:group-hover:w-full before:left-full before:group-hover:left-0  before:bg-white group-hover:text-black before:-z-10 before:aspect-square before:group-hover:scale-150 before:group-hover:duration-700 relative z-10 px-4 py-4 overflow-hidden  rounded-full group"
            >
                {icon}
            </a>
        </div>
    )
}


export default AnimatedButton
