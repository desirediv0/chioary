"use client"

import { useState } from "react"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import Image from "next/image"
import { team1, team2, team3, team4, teambg } from "@/assets"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const teamMembers = [
    { name: "Leslie Alexander", role: "Junior Poster", img: team1 },
    { name: "Dianne Russell", role: "Junior Poster", img: team2 },
    { name: "Ralph Edwards", role: "Junior Poster", img: team3 },
    { name: "Annette Black", role: "Junior Poster", img: team4 },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const socialIconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="text-center" variants={itemVariants}>
          <div className="flex items-center justify-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-green-600"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <p className="text-green-600 font-medium">Our Team Member</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Meet the Dedicated Team</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mt-12"
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="relative">
                  {/* Background pattern with overlay */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center z-10"
                    style={{
                      backgroundImage: `url(${teambg || "/placeholder.svg"})`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 0.85 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Gradient overlay for better visibility of social icons */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Main image - now stays visible with reduced opacity on hover */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.img || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                    />

                    {/* Shine effect on hover */}
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute inset-0 z-30 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                    )}
                  </div>

                  {/* Social Icons Inside the Card */}
                  <div className="absolute bottom-4 left-4 z-30 flex flex-col gap-3">
                    {[
                      { icon: FaFacebookF, link: "https://www.facebook.com" },
                      { icon: FaTwitter, link: "https://www.twitter.com" },
                      { icon: FaInstagram, link: "https://www.instagram.com" },
                      { icon: FaLinkedin, link: "https://www.linkedin.com" },
                    ].map(({ icon: Icon, link }, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={socialIconVariants}
                        initial="hidden"
                        animate={hoveredIndex === index ? "visible" : "hidden"}
                      >
                        <Link
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded-full shadow-lg cursor-pointer hover:scale-110 hover:bg-green-700 transition-all duration-300"
                        >
                          <Icon size={14} />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Text */}
                <motion.div className="text-center p-4" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/*Button Section */}
        <motion.div className="flex items-center justify-center my-12 px-4" variants={itemVariants}>
          <div className="flex items-center gap-2 sm:gap-3 w-full max-w-[600px]">
            <motion.div
              className="h-px bg-gray-300 flex-1"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Link
                href="/"
                className="flex items-center gap-2 bg-[#121C17] text-white px-4 sm:px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#0E1613] transition duration-300"
              >
                All Team Member
                <motion.span
                  className="w-8 h-8 bg-[#121C17] rounded-full flex items-center justify-center shadow-md"
                  animate={{
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <ArrowUpRight size={16} className="text-white" />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              className="h-px bg-gray-300 flex-1"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default TeamSection

