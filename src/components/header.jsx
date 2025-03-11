"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/assets";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className=" max-w-full mx-auto fixed top-0 z-50 left-0 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`mx-auto flex flex-wrap justify-between items-center  text-[var(--white)] p-4 md:p-4  transition-all duration-300 ${isScrolled ? 'w-full bg-[var(--black)] border-none' : 'w-[90%] mx-auto mt-4  md:rounded-full rounded-md border border-gray-400'}`}
      >
        {/* Logo */}
        <Image src={logo} width={150} height={150} alt="Logo" />

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
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

        {/* Navigation Links - Mobile */}
        <div className={`w-full md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}>
          <ul className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.link}
                  className="text-xl hover:text-yellow-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

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

        {/* Donation Button */}
        <motion.div
          className="hidden md:flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="#"
            className="bg-yellow-500 text-black font-semibold py-3 px-4 rounded-full flex items-center space-x-2 mt-4 md:mt-0 w-full md:w-auto justify-center"
          >
            <span>Donate Now</span>
          </a>
          <span className="bg-yellow-500 p-3 rounded-full">
            <ArrowUpRight className="" />
          </span>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}