"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/assets";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Contact", link: "/contact" },
        { name: "Blog", link: "/blog" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
      <header className="py-4 px-6 max-w-full mx-auto fixed top-0 z-50 left-0 w-full">
        <div className="mx-auto flex flex-wrap justify-between items-center bg-[var(--black)] text-[var(--white)]  p-4 md:p-4 border-2 rounded-full border-orange-50">
          {/* Logo */}
          <Image src={logo} width={150} height={150} alt="Logo" />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black"
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

          {/* Navigation Links */}
          <nav
            className={`w-full md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            } md:block mt-4 md:mt-0`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-xl  hover:text-yellow-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Donation Button */}
          <div className="hidden md:flex items-center justify-center gap-2">
            <a
              href="#"
              className="bg-yellow-500 text-black font-semibold py-3 px-4 rounded-full flex items-center space-x-2 mt-4 md:mt-0 w-full md:w-auto justify-center"
            >
              <span>Donate Now</span>
            </a>
            <span className="bg-yellow-500 p-3 rounded-full">
              <ArrowUpRight className="" />
            </span>
          </div>
        </div>
      </header>
    );
}