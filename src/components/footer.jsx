"use client";

import React from "react";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-6 sm:py-8 md:py-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-56 mb-8">
            {/* Logo and Social Media Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--custom-color)] rounded-full flex items-center justify-center mr-2">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor">
                    <path d="M17,10c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8S17,5.6,17,10z M12,10c0-1.7-1.3-3-3-3s-3,1.3-3,3s1.3,3,3,3S12,11.7,12,10z" />
                    <path d="M19.5,10c0,1.7-0.3,3.4-1,5l3.8,3.8c1.3-2.5,2-5.5,2-8.8s-0.7-6.3-2-8.8L18.5,5C19.2,6.6,19.5,8.3,19.5,10z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Chi<span className="text-[#FFA415]">oary</span>
                </h2>
              </div>

              <p className="text-gray-300 text-sm sm:text-base">
                Charity And Donation Is Category That
                <br className="hidden sm:block" /> Involves Giving.
              </p>

              <div className="flex space-x-3 sm:space-x-4 ">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-[var(--custom-color)] transition-colors p-2 rounded-full"
                  >
                    <Icon size={22} className="" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="mt-8 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-4">
                {["About Us", "Our Services", "Our Team", "Our Blog", "Contact Us"].map((text, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-[var(--custom-color)] transition-colors"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Section */}
            <div className="mt-8 lg:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Services</h3>
              <ul className="space-y-2 sm:space-y-4">
                {[
                  "Emergency Relief",
                  "Medical Outreach",
                  "Educational Support",
                  "Mental Health",
                  "Community Development",
                ].map((text, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-[var(--custom-color)] transition-colors"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {/* Office Address */}
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-700 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-[var(--custom-color)]" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Visit Our Office</h4>
                  <Link
                    href="https://maps.google.com/?q=4517+Washington+Ave.+Manchester,+Kentucky+39495"
                    className="text-gray-300 hover:text-[var(--custom-color)] transition-colors text-sm sm:text-base"
                  >
                    4517 Washington Ave.
                    <br />
                    Manchester, Kentucky 39495
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start mt-6 md:mt-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-700 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-[var(--custom-color)]" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Send Us An Email</h4>
                  <Link
                    href="mailto:Chioary@Gmail.Com"
                    className="text-gray-300 hover:text-[var(--custom-color)] transition-colors text-sm sm:text-base"
                  >
                    Chioary@Gmail.Com
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start mt-6 md:mt-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-700 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-[var(--custom-color)]" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Ask Any Questions</h4>
                  <Link
                    href="tel:(239)555-0108"
                    className="text-gray-300 hover:text-[var(--custom-color)] transition-colors text-sm sm:text-base"
                  >
                    (239) 555-0108 - (239) 555-0108
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-4 sm:my-6 mx-4 sm:mx-6 md:mx-8 lg:mx-0" />

        {/* Bottom Section */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4">
            <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Chioary. All Rights Reserved.</p>
            <ul className="flex gap-3 sm:gap-4 mt-3 sm:mt-0 text-sm sm:text-base">
              {["Terms of Service", "Privacy Policy"].map((text, index) => (
                <li key={index}>
                  <Link
                    href="/"
                    className="transition-colors hover:text-[var(--custom-color)]"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

// import DonationForm from "@/components/donation-form";
// import TeamSection from "@/components/ourteam";
// import WorkingProcess from "@/components/process";
// import Testimonials from "@/components/ui/cases-with-infinite-scroll";
// import { Service } from "@/components/service";
