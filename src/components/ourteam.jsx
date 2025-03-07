"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { team1, team2, team3, team4, teambg } from "@/assets"; // bgPattern = background image
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    { name: "Leslie Alexander", role: "Junior Poster", img: team1 },
    { name: "Dianne Russell", role: "Junior Poster", img: team2 },
    { name: "Ralph Edwards", role: "Junior Poster", img: team3 },
    { name: "Annette Black", role: "Junior Poster", img: team4 },
  ];

  return (
    <section className="py-16 bg-gray-50">
    <div className="text-center">
      <p className="text-green-600 font-medium">● Our Team Member</p>
      <h2 className="text-4xl font-bold mt-2">Meet the Dedicated Team</h2>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto px-4">
      {teamMembers.map((member, index) => (
        <div key={index} className="relative group">
          <div className="rounded-lg overflow-hidden p-1">
            <div className="relative">
              {/* Background image and hover effect */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-[var(--custom-color-2)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ backgroundImage: `url(${teambg})` }}
              />
  
              {/* Main image */}
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={500}
                className="w-full h-auto transition-all duration-500 group-hover:opacity-0 z-10 bg-gray-100 -z-10"
              />
  
              {/* Social Icons Inside the Card */}
              <div className="absolute bottom-2 left-4 flex flex-col gap-2 opacity-0 translate-y-6 transition-all duration-500 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
                {[
                  { icon: FaFacebookF, link: "https://www.facebook.com" },
                  { icon: FaTwitter, link: "https://www.twitter.com" },
                  { icon: FaInstagram, link: "https://www.instagram.com" },
                  { icon: FaLinkedin, link: "https://www.linkedin.com" },
                ].map(({ icon: Icon, link }, i) => (
                  <Link
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-[var(--custom-color)] text-white rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <Icon size={14} />
                  </Link>
                ))}
              </div>
            </div>
  
            {/* Text */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  
    {/*Button Section */}
    <div className="flex items-center justify-center my-12 px-4">
      <div className="flex items-center gap-2 sm:gap-3 w-full max-w-[600px]">
        <div className="h-px bg-gray-300 flex-1"></div>
  
        <Link
          href="/"
          className="flex items-center gap-2 bg-[#121C17] text-white px-4 sm:px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#0E1613] transition duration-300"
        >
          All Team Member
          <span className="w-8 h-8 bg-[#121C17] rounded-full flex items-center justify-center shadow-md">
            <ArrowUpRight size={16} className="text-white" />
          </span>
        </Link>
  
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
    </div>
  </section>
  
  );
};

export default TeamSection;
