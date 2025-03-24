"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { contactimg } from '@/assets'
import Image from 'next/image'
import AnimatedButton from '@/components/AnimatedButton'
import { MdArrowOutward } from 'react-icons/md'
import Breadcrumb from '@/components/Breadcrumb'

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    comments: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Breadcrumb title={"Contact Us"} Breadcrumb={"Home"} discription={"Contact Us"}/>

      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto my-6 md:my-10 gap-6 p-4 sm:p-5">
        {/* Left */}
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold text-gray-700 mt-4 lg:mt-20"
          >
            Get In Touch!
          </motion.h2>
          <div className="flex flex-col items-center lg:items-start justify-start gap-2">
            <p className="text-sm sm:text-base text-gray-600">4517 Washington Ave Manchester, Kentucky 39495.</p>
            <Link href="mailto:adyashakti@gmail.com" className="text-sm sm:text-base text-[#983532] font-semibold hover:underline">adyashakti@gmail.com</Link>
            <Link href="telto:(239) 555-0108" className="text-sm sm:text-base text-[#983532] font-semibold hover:underline">(239) 555-0108</Link>
          </div>
          <motion.div
            initial={{ opacity: 2 }}
            animate={{
              opacity: 1,
              x: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="w-full flex justify-center lg:justify-start mt-6"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-[200px] sm:h-[250px] md:h-[300px] mt-4">
              <Image 
                src={contactimg} 
                fill
                style={{ objectFit: 'contain' }}
                alt="World Map" 
                className="transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Right - Form */}
        <div className="w-full lg:w-1/2 bg-gray-100 rounded-xl py-8 sm:py-10 px-4 sm:px-6 mt-4 sm:mt-8 lg:mt-14">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-12">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Write here your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Write here your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="text"
                name="topic"
                placeholder="I would like to discuss"
                value={formData.topic}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border text-sm sm:text-base"
              />
            </div>
            <div>
              <textarea
                name="comments"
                placeholder="Write comments"
                value={formData.comments}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 sm:p-3 border text-sm sm:text-base"
              ></textarea>
            </div>
            <motion.div
              className="w-full flex justify-start"
              variants={itemVariants}
            >
              <AnimatedButton
                text="Donate Now"
                icon={<MdArrowOutward />}
                className="py-[6px] sm:py-[8px] md:py-[10px] text-white text-sm sm:text-base"
                className2="text-white"
              />
            </motion.div>
          </form>
        </div>
      </div>

      <section className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[470px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086165!2d144.95592831531685!3d-37.81720997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cc4c0f9b19d1!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1633079622227!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </>
  )
}

export default Page