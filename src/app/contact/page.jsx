"use client"

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { contactimg } from '@/assets'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import AnimatedButton from '@/components/AnimatedButton'
import { MdArrowOutward } from 'react-icons/md'

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

      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto md:my-10 gap-6 p-5">
        {/* Left */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left ">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900"
          >
            Have Questions?
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold text-gray-700"
          >
            Get In Touch!
          </motion.h2>
          <div className="flex flex-col  items-start justify-start gap-2">
          <p className="text-gray-600">2118 Thornridge Cir. Syracuse, Connecticut 35624.</p>
          <Link href="mailto:info@gmail.com" className="text-green-600 font-semibold hover:underline">Info@Gmail.Com</Link>
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
            className="w-full flex justify-center mt-6 md:mt-0"
          >
            <Image src={contactimg} width={700} height={500} alt="World Map" className="mt-10 md:max-w-lg" />
          </motion.div>
        </div>

        {/* Right - Form */}
        <div className="w-full lg:w-2/3 bg-gray-100 py-10 px-6 mt-14">
          <form onSubmit={handleSubmit}>
            <div className="mb-12">
              <input
                type="text"
                name="name"
                placeholder="Write here your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border"
              />
            </div>
            <div className="mb-12">
              <input
                type="email"
                name="email"
                placeholder="Write here your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border"
              />
            </div>
            <div className="mb-12">
              <input
                type="text"
                name="topic"
                placeholder="I would like to discuss"
                value={formData.topic}
                onChange={handleChange}
                className="w-full p-3 border"
              />
            </div>
            <div className="mb-12">
              <textarea
                name="comments"
                placeholder="Write comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full p-3 border"
              ></textarea>
            </div>
            <motion.div
              className="w-full flex justify-start"
              variants={itemVariants}
            >
              <AnimatedButton
                text="Donate Now"
                icon={<MdArrowOutward />}
                className="py-[8px] md:py-[10px] text-white"
                className2="text-white"
              />
            </motion.div>
          </form>
        </div>
      </div>

      <section className="w-full h-[300px] md:h-[470px]">
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
