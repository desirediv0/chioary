import { service1, service2, service3 } from "@/assets";
import {UtensilsCrossed, GraduationCap, Droplets, Stethoscope, Leaf, HeartHandshake, Brain } from "lucide-react"

export const services = [
  {
    icon: <GraduationCap />,
    title: "Education",
    description:
      "We firmly believe that education is the most powerful tool for change.",
    image: service1,
    bgColor: "bg-[#1a2721]",
    textColor: "text-white",
    accentColor: "bg-[#FFA500]",
  },
  {
    icon: <UtensilsCrossed />,
    title: "Fighting Malnutrition",
    description:
      "A well-fed body leads to a strong mind and a productive life.",
    image: service2,
    bgColor: "bg-white",
    textColor: "text-black",
    accentColor: "bg-[#1a2721]",
  },
  {
    icon: <Brain />,
    title: "Mental Wellness",
    description: "Mental well-being is just as important as physical health.",
    image: service3,
    bgColor: "bg-white",
    textColor: "text-black",
    accentColor: "bg-[#1a2721]",
  },
  {
    icon: <HeartHandshake />,
    title: "Community Support",
    description: "Empowering communities through support and collaboration.",
    image: service1,
    bgColor: "bg-[#1a2721]",
    textColor: "text-white",
    accentColor: "bg-[#FFA500]",
  },
  {
    icon: <Leaf />,
    title: "Environmental Awareness",
    description:
      "Raising awareness about sustainability and eco-friendly practices.",
    image: service2,
    bgColor: "bg-white",
    textColor: "text-black",
    accentColor: "bg-[#1a2721]",
  },
  {
    icon: <Stethoscope />,
    title: "Healthcare Assistance",
    description: "Ensuring access to basic healthcare services for all.",
    image: service3,
    bgColor: "bg-[#1a2721]",
    textColor: "text-white",
    accentColor: "bg-[#FFA500]",
  },
];

