"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { motion } from "framer-motion"

// Custom hook to detect when element is in viewport
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

export const Footer = () => {
  const [footerRef, isFooterInView] = useInView({ threshold: 0.1 })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const lineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  }

  const contactItemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: i * 0.2,
      },
    }),
  }

  const logoVariants = {
    hidden: { rotate: -10, scale: 0.8, opacity: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  }

  return (
    <motion.footer
      ref={footerRef}
      className="bg-black text-white py-6 sm:py-8 md:py-10 overflow-hidden"
      initial="hidden"
      animate={isFooterInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-56 mb-8">
          {/* Logo and Social Media Section */}
          <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
            <motion.div className="flex items-center" variants={logoVariants}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--custom-color)] rounded-full flex items-center justify-center mr-2 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-[var(--custom-color)] rounded-full"
                  initial={{ scale: 0 }}
                  animate={isFooterInView ? { scale: [0, 1.5, 1] } : { scale: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" fill="currentColor">
                  <path d="M17,10c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8S17,5.6,17,10z M12,10c0-1.7-1.3-3-3-3s-3,1.3-3,3s1.3,3,3,3S12,11.7,12,10z" />
                  <path d="M19.5,10c0,1.7-0.3,3.4-1,5l3.8,3.8c1.3-2.5,2-5.5,2-8.8s-0.7-6.3-2-8.8L18.5,5C19.2,6.6,19.5,8.3,19.5,10z" />
                </svg>
              </div>
              <motion.h2
                className="text-xl sm:text-2xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={isFooterInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Chi
                <motion.span
                  className="text-[#FFA415]"
                  initial={{ opacity: 0 }}
                  animate={isFooterInView ? { opacity: [0, 1, 0, 1] } : { opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  oary
                </motion.span>
              </motion.h2>
            </motion.div>

            <motion.p className="text-gray-300 text-sm sm:text-base" variants={itemVariants}>
              Charity And Donation Is Category That
              <br className="hidden sm:block" /> Involves Giving.
            </motion.p>

            <div className="flex space-x-3 sm:space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={iconVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href="/"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-[var(--custom-color)] transition-colors p-2 rounded-full"
                  >
                    <Icon size={22} className="" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div className="mt-8 md:mt-0" variants={itemVariants}>
            <motion.h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" variants={itemVariants}>
              Quick Links
            </motion.h3>
            <ul className="space-y-2 sm:space-y-4">
              {["About Us", "Our Services", "Our Team", "Our Blog", "Contact Us"].map((text, index) => (
                <motion.li key={index} variants={itemVariants} custom={index} whileHover={{ x: 5 }}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-[var(--custom-color)] transition-colors inline-block"
                  >
                    <motion.span initial={{ width: 0 }} whileHover={{ width: "100%" }} className="relative">
                      {text}
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-[var(--custom-color)]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Section */}
          <motion.div className="mt-8 lg:mt-0" variants={itemVariants}>
            <motion.h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" variants={itemVariants}>
              Services
            </motion.h3>
            <ul className="space-y-2 sm:space-y-4">
              {[
                "Emergency Relief",
                "Medical Outreach",
                "Educational Support",
                "Mental Health",
                "Community Development",
              ].map((text, index) => (
                <motion.li key={index} variants={itemVariants} custom={index} whileHover={{ x: 5 }}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-[var(--custom-color)] transition-colors inline-block"
                  >
                    <motion.span initial={{ width: 0 }} whileHover={{ width: "100%" }} className="relative">
                      {text}
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-[var(--custom-color)]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Section */}
      <motion.div className="border-t border-gray-800 pt-6 sm:pt-8" variants={itemVariants}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* Office Address */}
            <motion.div className="flex items-start" variants={contactItemVariants} custom={0}>
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-700 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 relative overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  borderColor: "var(--custom-color)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-[var(--custom-color)]"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-white relative z-10" />
              </motion.div>
              <div>
                <motion.h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" variants={itemVariants}>
                  Visit Our Office
                </motion.h4>
                <motion.div variants={itemVariants}>
                  <Link
                    href="https://maps.google.com/?q=4517+Washington+Ave.+Manchester,+Kentucky+39495"
                    className="text-gray-300 hover:text-[var(--custom-color)] transition-colors text-sm sm:text-base"
                  >
                    4517 Washington Ave.
                    <br />
                    Manchester, Kentucky 39495
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div className="flex items-start mt-6 md:mt-0" variants={contactItemVariants} custom={1}>
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-700 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 relative overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  borderColor: "var(--custom-color)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-[var(--custom-color)]"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-white relative z-10" />
              </motion.div>
              <div>
                <motion.h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" variants={itemVariants}>
                  Send Us An Email
                </motion.h4>
                <motion.div variants={itemVariants}>
                  <Link
                    href="mailto:Chioary@Gmail.Com"
                    className="text-gray-300 hover:text-[var(--custom-color)] transition-colors text-sm sm:text-base"
                  >
                    Chioary@Gmail.Com
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div className="flex items-start mt-6 md:mt-0" variants={contactItemVariants} custom={2}>
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-700 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 relative overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  borderColor: "var(--custom-color)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-[var(--custom-color)]"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-white relative z-10" />
              </motion.div>
              <div>
                <motion.h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" variants={itemVariants}>
                  Ask Any Questions
                </motion.h4>
                <motion.div variants={itemVariants}>
                  <Link
                    href="tel:(239)555-0108"
                    className="text-gray-300 hover:text-[var(--custom-color)] transition-colors text-sm sm:text-base"
                  >
                    (239) 555-0108 - (239) 555-0108
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.hr className="border-gray-700 my-4 sm:my-6 mx-4 sm:mx-6 md:mx-8 lg:mx-0" variants={lineVariants} />

      {/* Bottom Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <motion.div className="flex flex-col sm:flex-row justify-between items-center py-4" variants={itemVariants}>
          <motion.p
            className="text-sm sm:text-base"
            variants={itemVariants}
            initial={{ opacity: 0, y: 10 }}
            animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.8 }}
          >
            &copy; {new Date().getFullYear()} Chioary. All Rights Reserved.
          </motion.p>
          <motion.ul className="flex gap-3 sm:gap-4 mt-3 sm:mt-0 text-sm sm:text-base" variants={itemVariants}>
            {["Terms of Service", "Privacy Policy"].map((text, index) => (
              <motion.li key={index} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <Link href="/" className="transition-colors hover:text-[var(--custom-color)]">
                  {text}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--custom-color)] opacity-5"
          initial={{ scale: 0 }}
          animate={isFooterInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-40 -left-20 w-60 h-60 rounded-full bg-[var(--custom-color)] opacity-5"
          initial={{ scale: 0 }}
          animate={isFooterInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
    </motion.footer>
  )
}

