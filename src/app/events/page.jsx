"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { event1, event2, event3, event4 } from "@/assets"
import Breadcrumb from "@/components/Breadcrumb"
import { motion } from "framer-motion"

export default function EventsSchedule() {
  const events = [
    {
      id: 1,
      title: "Environmental Clean Up Day",
      author: "Brooklyn Simmons",
      timeStart: "09:05AM",
      timeEnd: "01:05 AM",
      image: event1,
    },
    {
      id: 2,
      title: "Environmental Clean Up Day",
      author: "Brooklyn Simmons",
      timeStart: "09:05AM",
      timeEnd: "01:05 AM",
      image: event2,
    },
    {
      id: 3,
      title: "Environmental Clean Up Day",
      author: "Brooklyn Simmons",
      timeStart: "09:05AM",
      timeEnd: "01:05 AM",
      image: event3,
    },
    {
      id: 4,
      title: "Environmental Clean Up Day",
      author: "Brooklyn Simmons",
      timeStart: "09:05AM",
      timeEnd: "01:05 AM",
      image: event4,
    },
  ]

  return (
    <>
      <Breadcrumb title={"Events"} Breadcrumb={"Home"} discription={"Events"} />

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-amber-500"></div>
            <span className="text-lg font-medium">Our Events</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl">
            Events Schedule Upcoming Events.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-16">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="border border-gray-200 p-6 rounded-lg overflow-hidden"
              initial={{ backgroundColor: "white" }}
              whileHover={{
                backgroundColor: "#f3f4f6", // gray-100
                scale: 1.03,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 group">
                <div className="w-full md:w-1/3">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={300}
                    className="w-full h-auto aspect-square object-cover grayscale"
                  />
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h2>
                    <p className="text-gray-600 mb-2">
                      By {event.author}{" "}
                      <span className="ml-2">
                        {event.timeStart} - {event.timeEnd}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                    </motion.div>
                      <Link
                        href="/events/slug"
                      >
                    <div className="flex items-center gap-6">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gray-300 group-hover:bg-red-500 group-hover:text-white  transition-colors">
                          <ArrowRight className="h-5 w-5  " />
                        </div>
                        <span className="group-hover:text-red-500">Read More</span>
                    </div>
                      </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}