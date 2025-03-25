"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import { motion } from "framer-motion"
import { getImageUrl } from "../../../../utils/imageHelpers"

export default function EventsSchedule() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  })

  const fetchEvents = async (page = 1, limit = 10) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/events?page=${page}&limit=${limit}`, {
        cache: 'no-store'
      })

      if (!response.ok) {
        throw new Error('Failed to fetch events')
      }

      const data = await response.json()
      setEvents(data.events)
      setPagination(data.pagination)
    } catch (err) {
      console.error("Error fetching events:", err)
      setError("Failed to load events. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchEvents(pagination.page, pagination.limit)
    }
  }, [pagination.page, pagination.limit])

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= pagination.totalPages) {
      setPagination(prev => ({ ...prev, page: newPage }))
    }
  }

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return '';

    try {
      const date = new Date(dateString);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Invalid date';
    }
  }

  // Get time from date string
  const formatTime = (dateString) => {
    if (!dateString) return '';

    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (error) {
      console.error('Time formatting error:', error);
      return '';
    }
  }

  // Add client-side only rendering to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  // Add this helper function before the return statement
  const truncateHtml = (html, maxLength) => {
    if (!html) return '';
    // Create a temporary element to parse HTML and extract text
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const textContent = tempDiv.textContent || tempDiv.innerText;

    // Return truncated text with ellipsis if needed
    return textContent.length > maxLength ?
      textContent.substring(0, maxLength) + '...' :
      textContent;
  }

  return (
    <>
      <Breadcrumb title={"Events"} Breadcrumb={"Home"} discription={"Events"} />

      <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-amber-50">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-amber-500"></div>
            <span className="text-lg font-medium text-amber-600">Our Events</span>
            <div className="h-2 w-2 rounded-full bg-amber-500"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-red-700">
            Events Schedule
          </h1>
          <p className="mt-4 text-xl text-center text-gray-600 max-w-2xl">
            Join us for our upcoming events and experience unforgettable moments together.
          </p>
          <div className="w-24 h-1 bg-amber-500 mt-6"></div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500"></div>
              <p className="mt-4 text-amber-600 font-medium">Loading events...</p>
            </motion.div>
          </div>
        ) : error ? (
          <motion.div
            className="text-center p-8 bg-red-50 rounded-lg shadow-md max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-red-500 text-lg font-medium">{error}</p>
            <button
              onClick={() => fetchEvents(pagination.page, pagination.limit)}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full hover:from-amber-600 hover:to-amber-700 shadow-md hover:shadow-lg transition-all duration-300 font-medium"
            >
              Try Again
            </button>
          </motion.div>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-2 gap-8 p-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {events.length > 0 ? events.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                >
                  <Link href={`/events/${event.slug}`}>
                    <motion.div
                      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{
                        scale: 1.02,
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-2/5 relative">
                          {event.thumbnail ? (
                            <div className="relative w-full aspect-square md:aspect-auto md:h-full overflow-hidden">
                              <Image
                                src={getImageUrl(event.thumbnail)}
                                alt={event.title}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                              />
                              {isClient && event.startDate && (
                                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-full shadow-md">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-amber-600" />
                                    <span className="font-medium">{formatDate(event.startDate)}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="w-full h-full min-h-[300px] bg-gradient-to-r from-amber-100 to-amber-200 flex items-center justify-center">
                              <Calendar className="h-16 w-16 text-amber-500 opacity-50" />
                            </div>
                          )}
                        </div>
                        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-4">
                              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                                {event.title}
                              </h2>
                              <div className="bg-amber-500 text-white text-xs uppercase font-bold px-3 py-1 rounded-full">
                                Upcoming
                              </div>
                            </div>

                            <div className="mb-6 space-y-3">
                              {isClient && event.startDate && (
                                <div className="flex items-center text-gray-600">
                                  <Clock className="h-5 w-5 mr-2 text-amber-500" />
                                  <span>{formatTime(event.startDate)}</span>
                                </div>
                              )}

                              <div className="flex items-center text-gray-600">
                                <MapPin className="h-5 w-5 mr-2 text-amber-500" />
                                <span>Event Hall</span>
                              </div>
                            </div>

                            {event.shortDescription && (
                              <div className="text-gray-600 mt-4 prose-sm">
                                {isClient ? (
                                  <p>{truncateHtml(event.shortDescription, 150)}</p>
                                ) : (
                                  <p>Loading description...</p>
                                )}
                              </div>
                            )}
                          </div>

                          <div className="mt-6">
                            <motion.div
                              className="inline-flex items-center gap-2 text-amber-600 font-medium"
                              whileHover={{ x: 5 }}
                            >
                              <span>Read More</span>
                              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                                <ArrowRight className="h-4 w-4" />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              )) : (
                <motion.div
                  className="col-span-1 text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-xl text-gray-500 font-medium">No events found</p>
                  <p className="text-gray-400 mt-2">Check back later for upcoming events</p>
                </motion.div>
              )}
            </motion.div>

            {/* Only show pagination on client side */}
            {isClient && pagination.totalPages > 1 && (
              <motion.div
                className="flex justify-center items-center gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <button
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                  className={`p-3 rounded-full border bg-white shadow-sm flex items-center justify-center ${pagination.page === 1
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-amber-50 hover:border-amber-200 transition-colors'
                    }`}
                >
                  <ChevronLeft size={20} className={pagination.page === 1 ? 'text-gray-400' : 'text-amber-600'} />
                </button>

                <div className="flex gap-2">
                  {[...Array(pagination.totalPages)].map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`w-12 h-12 rounded-full font-medium ${pagination.page === i + 1
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-amber-300 hover:bg-amber-50'
                        }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {i + 1}
                    </motion.button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.totalPages}
                  className={`p-3 rounded-full border bg-white shadow-sm flex items-center justify-center ${pagination.page === pagination.totalPages
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-amber-50 hover:border-amber-200 transition-colors'
                    }`}
                >
                  <ChevronRight size={20} className={pagination.page === pagination.totalPages ? 'text-gray-400' : 'text-amber-600'} />
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </>
  )
}