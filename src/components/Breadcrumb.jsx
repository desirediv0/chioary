"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Breadcrumb = ({ title, Breadcrumb, discription }) => {
  return (
    <div>
      <div className="relative py-32  bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40">
          <Image
            src="/project-bg.jpeg"
            alt="Person in need wearing yellow head covering"
            width={300}
            height={100}
            className="w-full h-full object-cover "
          />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#983532] mb-4">
              {title}
            </h1>
            <div className="h-1 w-24 bg-[#983532] mx-auto mb-6"></div>
            <span className="text-md text-white flex gap-2 mx-auto justify-center items-center">
              <Link href={"/"}>{Breadcrumb}  </Link>/  <span>
                {discription}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Breadcrumb
