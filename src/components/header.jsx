"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/assets";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { MdArrowOutward } from "react-icons/md";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "Events", link: "/events" },
  ];

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Add effect to prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for menu items
  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <motion.header
      className="max-w-full mx-auto fixed top-0 z-50 left-0 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`mx-auto flex flex-wrap bg-white justify-between items-center p-4 md:p-4 transition-all duration-300 ${isScrolled
            ? "w-full bg-[var(--black)] border-none"
            : "w-[90%] mx-auto mt-4 md:rounded-full rounded-md border border-gray-400"
          }`}
      >
        {/* Logo */}
        <Image src="/logo.png" className="logo-shadow" width={160} height={160} alt="Logo" />

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white z-50"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links - Mobile Sheet */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
              />
              <motion.div
                className="fixed top-0 left-0 h-full w-3/4 bg-[var(--black)] z-40 shadow-lg p-6 flex flex-col"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="flex justify-between items-center mb-8">
                  <Image src={logo} width={120} height={120} alt="Logo" />
                </div>
                <ul className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-b border-gray-600 pb-2"
                    >
                      <Link
                        href={item.link}
                        className="text-xl hover:text-yellow-500 transition-colors block py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="max-w-min mt-8">
                  <AnimatedButton
                    text={"Donate Now"}
                    icon={<MdArrowOutward />}
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:block">
          <ul className="flex flex-row md:space-x-6">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.link}
                  className="text-xl hover:text-yellow-500 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Donation Button - Desktop */}
        <div className="hidden md:block">
          <AnimatedButton text={"Donate Now"} icon={<MdArrowOutward />} />
        </div>
      </motion.div>
    </motion.header>
  );
}