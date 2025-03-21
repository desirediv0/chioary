"use client"

import React, { useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { about1, about2 } from '@/assets'
import Breadcrumb from '@/components/Breadcrumb'
import { 
    FaCalendarAlt,
     FaComments,
      FaFacebookF,
       FaLinkedinIn,
        FaShareAlt,
         FaTwitter,
          FaUserAlt } from 'react-icons/fa'

const Page = () => {
  // Use state to handle category counts to ensure consistency between server and client
  const [categoryCounts] = useState({
    'Politics': 21,
    'Election': 15,
    'Democracy': 18,
    'World News': 24,
    'Opinion': 12
  });
  


  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <>
      <Breadcrumb title={"Blog Details"} Breadcrumb={"Home"} discription={"Blog Details"} />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden mb-8"
          >
            <Image 
              src={about1}
              alt="Article cover image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex flex-wrap gap-3 mb-3">
                  <span className="px-3 py-1 bg-purple-600 rounded-full text-sm font-medium">Politics</span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">Election</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  Revenge of the Never Trumpers
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-gray-200">
                  <div className="flex items-center gap-2">
                    <FaUserAlt />
                    <span>By Ahmad Sultani</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>March 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaComments />
                    <span>24 Comments</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <motion.article 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:w-2/3"
            >
              <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-10">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>

                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl sm:text-3xl font-bold mt-10 mb-6 text-gray-900 border-l-4 border-purple-600 pl-4"
                  >
                    #1. What is Lorem Ipsum?
                  </motion.h2>

                  <p className="text-lg leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged.
                  </p>
                  
                  <div className="my-8 relative">
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-purple-600 to-blue-500"></div>
                    <blockquote className="pl-6 py-2 italic text-xl text-gray-700 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s</blockquote>
                      <footer className="text-right text-sm text-gray-500 mt-2">— Political Analyst</footer>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="aspect-w-16 aspect-h-9 my-8 rounded-xl overflow-hidden shadow-lg"
                  >
                    <Image 
                      src={about1}
                      alt="Article image"
                      width={800}
                      height={450}
                      className="object-cover"
                    />
                  </motion.div>

                  <p className="text-lg leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                  
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl sm:text-3xl font-bold mt-10 mb-6 text-gray-900 border-l-4 border-purple-600 pl-4"
                  >
                    #2. Why do we use it?
                  </motion.h2>
                  
                  <p className="text-lg leading-relaxed">
                    It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                    of letters, as opposed to using Content here, content here, making it look like readable English.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                    and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have 
                    evolved over the years, sometimes by accident, sometimes on purpose.
                  </p>
                </div>
                
                {/* Tags */}
                <motion.div 
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 mt-10"
                >
                  {['Election', 'Politics', 'Election2020', 'Trump', 'Democracy', 'VotingRights'].map((tag) => (
                    <motion.span
                      key={tag}
                      variants={tagVariants}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* Share Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mt-10 pt-6 border-t border-gray-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="flex items-center text-lg font-medium text-gray-700">
                      <FaShareAlt className="mr-2" /> Share this article
                    </span>
                    <div className="flex gap-3">
                      <Link href="/" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <FaFacebookF />
                      </Link>
                      <Link href="/" className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                        <FaTwitter />
                      </Link>
                      <Link href="/" className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-900 transition-colors">
                        <FaLinkedinIn />
                      </Link>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mt-10 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image 
                        src={about2}
                        alt="Author"
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold">Ahmad Sultani</h3>
                      <p className="text-gray-600 mb-3">Political Correspondent</p>
                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, 
                        eu pellentesque tortor vestibulum ut.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/3 space-y-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">Recent Posts</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((item) => (
                    <motion.div 
                      key={item}
                      whileHover={{ x: 5 }}
                      className="flex gap-4"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image 
                          src={about1}
                          alt="Recent post"
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 line-clamp-2 hover:text-purple-600 transition-colors">
                          <Link href="/">The Political Landscape After the Election</Link>
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">March {10 + item}, 2025</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">Categories</h3>
                <ul className="space-y-3">
                  {Object.entries(categoryCounts).map(([category, count]) => (
                    <motion.li 
                      key={category}
                      whileHover={{ x: 5 }}
                    >
                      <Link 
                        href="/" 
                        className="flex justify-between items-center text-gray-700 hover:text-purple-600 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs rounded-full px-2 py-1">
                          {count}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Election', 'Politics', 'Democracy', 'Trump', 'Biden', 'Congress', 'Senate', 'House', 'America', 'VotingRights'].map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              
             
            </motion.div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page