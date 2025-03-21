import Banner from '@/components/banner'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { contactimg } from '@/assets'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import AnimatedButton from '@/components/AnimatedButton'
import { MdArrowOutward } from 'react-icons/md'

const Page = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    comments: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };


  return (
    <>

    <Banner />





    </>
  );
}

export default Page
