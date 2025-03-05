"use client";

import React from "react";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-10 px-6">
        {/* Top Grid Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 text-start lg:px-20 md:text-left">
          {/* Logo and Description */}
          <div>
            <h2 className="text-3xl font-bold">Chioary</h2>
            <p className="mt-4">Charity And Donation Is Category <br /> That Involves Giving.</p>
            <div className="flex w-full sm:justify-start justify-start gap-6 mt-4">
              {[
                { icon: <FaFacebookF />, link: "/" },
                { icon: <FaXTwitter />, link: "/" },
                { icon: <FaInstagram />, link: "/" },
                { icon: <IoLogoYoutube />, link: "/" },
              ].map((item, index) => (
                <a key={index} href={item.link} className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-500 text-2xl transition-all hover:text-[var(--custom-color)] hover:border-[var(--custom-color)] hover:bg-[rgba(255,164,21,0.2)]">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              {["About Us", "Our Services", "Our Team", "Our Blog", "Contact Us"].map((text, index) => (
                <li key={index}>
                  <Link href="/" className="transition-colors hover:text-[var(--custom-color)]">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-2 space-y-2">
              {["Emergency Relief", "Medical Outreach", "Educational Support", "Mental Health", "Community Development"].map((service, index) => (
                <li key={index} className="transition-colors hover:text-[var(--custom-color)]">{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 md:px-10">
          {[
            { icon: <FaMapMarkerAlt />, title: "Visit Our Office", text: "4517 Washington Ave, Manchester, Kentucky 39495", link: "https://www.google.com/maps?q=4517+Washington+Ave,+Manchester,+Kentucky+39495" },
            { icon: <FaEnvelope />, title: "Send Us An Email", text: "Chioary@Gmail.Com", link: "mailto:Chioary@Gmail.Com" },
            { icon: <FaPhoneAlt />, title: "Ask Any Questions", text: "(239) 555-0108 - (239) 555-0108", link: "tel:+12395550108" },
          ].map((item, index) => (
            <div key={index} className="flex items-center text-left px-6 gap-4">
              {/* Icon Container */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-500 bg-black transition-all hover:border-[var(--custom-color)] hover:bg-[var(--custom-color)]">
                {item.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1">
                  <Link href={item.link} className="transition-colors hover:text-[var(--custom-color)]">
                    {item.text}
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Bottom Section */}
        <div className="text-center mt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Chioary. All Rights Reserved.</p>
          <ul className="flex gap-4 mt-2 md:mt-0">
            {["Terms of Service", "Privacy Policy"].map((text, index) => (
              <li key={index}>
                <Link href="/" className="transition-colors hover:text-[var(--custom-color)]">{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>

    </>
  )
}