"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Breadcrumb from '@/components/Breadcrumb'
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Share2,
  ChevronLeft,
  Facebook,
  Twitter,
  Linkedin,
  ExternalLink,
} from 'lucide-react'
import { getImageUrl } from '../../../../../utils/imageHelpers'

const Page = ({ params }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Set common tags for events
  const suggestedTags = ['Conference', 'Seminar', 'Workshop', 'Community', 'Education'];

  useEffect(() => {
    setIsClient(true);

    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/events/${params.slug}`);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `Failed to fetch event: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Event data:", data); // For debugging
        setEvent(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching event:", err);
        setError("Failed to load event details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchEvent();
    }
  }, [params.slug]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return 'Date not specified';

    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid date';

      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Invalid date format';
    }
  };

  // Get time from date string
  const formatTime = (dateString) => {
    if (!dateString) return 'Time not specified';

    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid time';

      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (error) {
      console.error('Time formatting error:', error);
      return 'Invalid time format';
    }
  };

  // Format date range for display
  const formatDateRange = (startDate, endDate) => {
    if (!startDate) return 'Dates not specified';

    try {
      const start = new Date(startDate);
      if (isNaN(start.getTime())) return 'Invalid date range';

      const formattedStart = formatDate(startDate);

      if (!endDate) return formattedStart;

      const end = new Date(endDate);
      if (isNaN(end.getTime())) return formattedStart;

      // If start date is after end date (as in your sample data), swap them
      if (start > end) {
        return `${formatDate(endDate)} to ${formatDate(startDate)}`;
      }

      return `${formattedStart} to ${formatDate(endDate)}`;
    } catch (error) {
      console.error('Date range formatting error:', error);
      return 'Invalid date range format';
    }
  };

  // Embed YouTube video properly
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return null;

    try {
      // Handle YouTube Shorts format
      if (url.includes('youtube.com/shorts/')) {
        const videoId = url.split('shorts/')[1]?.split('?')[0];
        if (!videoId) return url;
        return `https://www.youtube.com/embed/${videoId}`;
      }

      // Handle regular YouTube format
      if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1]?.split('&')[0];
        if (!videoId) return url;
        return `https://www.youtube.com/embed/${videoId}`;
      }

      // Handle youtu.be format
      if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1]?.split('?')[0];
        if (!videoId) return url;
        return `https://www.youtube.com/embed/${videoId}`;
      }

      // If it's already an embed URL, return as is
      if (url.includes('youtube.com/embed/')) {
        return url;
      }

      return url;
    } catch (error) {
      console.error('YouTube URL parsing error:', error);
      return url;
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-amber-500"></div>
          <p className="mt-4 text-amber-600 font-medium">Loading event details...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="bg-white border-l-4 border-red-500 p-6 rounded-lg shadow-lg max-w-md">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-9v4a1 1 0 11-2 0v-4a1 1 0 112 0zm0-4a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-lg text-red-700 font-medium">{error}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          Try Again
        </button>
      </div>
    );
  }

  // No event found
  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="text-center bg-white p-10 rounded-xl shadow-xl max-w-lg">
          <Calendar className="w-16 h-16 mx-auto text-amber-300 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Event Not Found</h2>
          <p className="mb-6 text-gray-600">The event you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/events" className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 inline-block hover:scale-105">
            View All Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb title={event.title} Breadcrumb={"Home"} discription={"Event Details"} />

      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
          {/* Back button */}
          <Link href="/events">
            <motion.div
              className="inline-flex items-center gap-2 mb-6 text-amber-600 hover:text-amber-700 font-medium"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ChevronLeft size={20} />
              <span>Back to Events</span>
            </motion.div>
          </Link>

          {/* Event Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden mb-12 shadow-xl"
          >
            {event.images && event.images.length > 0 ? (
              <Image
                src={getImageUrl(event.images[0].image)}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            ) : event.thumbnail ? (
              <Image
                src={getImageUrl(event.thumbnail)}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center">
                <Calendar className="w-32 h-32 text-white opacity-25" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1 bg-amber-500 rounded-full text-sm font-medium mb-4">
                  {isClient && event.startDate && new Date(event.startDate) > new Date() ? 'Upcoming Event' : 'Past Event'}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {event.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base text-gray-200">
                  {isClient && event.startDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-amber-400" />
                      <span>{formatDate(event.startDate)}</span>
                    </div>
                  )}
                  {isClient && event.startDate && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-amber-400" />
                      <span>{formatTime(event.startDate)}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-amber-400" />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:w-2/3"
            >
              <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-10">
                {/* Event details section */}
                <div className="prose prose-lg max-w-none">
                  {/* Event description */}
                  {event.description && isClient && (
                    <div className="text-lg leading-relaxed text-gray-800 mb-8" dangerouslySetInnerHTML={{ __html: event.description }}></div>
                  )}

                  {/* Video section */}
                  {event.videoUrl && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="my-12"
                    >
                      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-amber-500 pl-4">Event Highlights</h2>
                      <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                        <iframe
                          src={getYoutubeEmbedUrl(event.videoUrl)}
                          title={event.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-[400px]"
                        ></iframe>
                      </div>

                    </motion.div>
                  )}

                  {/* Event gallery */}
                  {event.images && event.images.length > 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="my-12"
                    >
                      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-amber-500 pl-4">Event Gallery</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {event.images.map((img, index) => (
                          <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative h-64 rounded-xl overflow-hidden shadow-lg"
                          >
                            <Image
                              src={getImageUrl(img.image)}
                              alt={`${event.title} image ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-700 hover:scale-110"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Event dates and location info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="my-12 bg-white rounded-xl border border-gray-100 p-6 shadow-md"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-amber-500 pl-4">Event Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-amber-100 rounded-full">
                          <Calendar className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Date & Time</h3>
                          {isClient && event.startDate && event.endDate ? (
                            <>
                              <p className="text-gray-600 mt-1">
                                <span className="font-medium">Duration:</span> {formatDateRange(event.startDate, event.endDate)}
                              </p>
                              <p className="text-gray-600 mt-1">
                                <span className="font-medium">Start:</span> {formatTime(event.startDate)}
                              </p>
                            </>
                          ) : isClient && event.startDate ? (
                            <p className="text-gray-600 mt-1">
                              {formatDate(event.startDate)} at {formatTime(event.startDate)}
                            </p>
                          ) : (
                            <p className="text-gray-600 mt-1">Date to be announced</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-amber-100 rounded-full">
                          <MapPin className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Location</h3>
                          <p className="text-gray-600 mt-1">{event.location || 'Location to be announced'}</p>
                          {event.location && (
                            <a
                              href={`https://maps.google.com/?q=${encodeURIComponent(event.location)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm mt-2"
                            >
                              <ExternalLink size={14} />
                              <span>View on map</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/3"
            >
              {/* Event Quick Info Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                {event.thumbnail && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={getImageUrl(event.thumbnail)}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Event Summary</h3>

                  {event.shortDescription && isClient && (
                    <div
                      className="text-gray-600 mb-6"
                      dangerouslySetInnerHTML={{ __html: event.shortDescription }}
                    ></div>
                  )}

                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-700">
                      <Calendar className="w-5 h-5 text-amber-500" />
                      <span>{isClient && event.startDate ? formatDate(event.startDate) : 'Date to be announced'}</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-5 h-5 text-amber-500" />
                      <span>{isClient && event.startDate ? formatTime(event.startDate) : 'Time to be announced'}</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-amber-500 mt-1" />
                      <span>{event.location || 'Location to be announced'}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Event Contact Info */}
              <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-100 rounded-full">
                      <User className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Event Organizer</p>
                      <p className="text-gray-600">Event Management Team</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-100 rounded-full">
                      <MapPin className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">{event.location || 'To be announced'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-xl shadow-lg text-white">
                <h3 className="text-xl font-bold mb-3">Interested in this event?</h3>
                <p className="mb-4 opacity-90">Stay updated about this and future events.</p>
                <Link
                  href="/contact"
                  className="w-full py-3 bg-white text-amber-600 rounded-lg font-medium text-center block hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.aside>
          </div>

          {/* Back to Events button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link href="/events">
              <button className="px-8 py-3 bg-amber-50 border border-amber-200 text-amber-600 rounded-full font-medium hover:bg-amber-100 transition-colors inline-flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to All Events
              </button>
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  )
}

export default Page