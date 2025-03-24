"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from "@/components/ui/card"
import { Calendar, Image as ImageIcon, Clock, ChevronRight, FilePlus } from 'lucide-react'

const Dashboard = () => {
    const { data: session, status } = useSession()
    const [stats, setStats] = useState({
        totalEvents: 0,
        upcomingEvents: 0,
    })
    const [recentEvents, setRecentEvents] = useState([])

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const eventsRes = await fetch('/api/events?limit=50')
                const eventsData = await eventsRes.json()

                const now = new Date()
                const upcoming = eventsData.events.filter(
                    event => new Date(event.startDate) > now
                ).length

                // Set recent events for display
                setRecentEvents(eventsData.events.slice(0, 3))

                setStats({
                    totalEvents: eventsData.pagination.total,
                    upcomingEvents: upcoming,
                })
            } catch (error) {
                console.error("Failed to fetch stats:", error)
            }
        }

        fetchStats()
    }, [])

    if (status === "loading") {
        return <div className="flex h-screen items-center justify-center">Loading...</div>
    }

    if (status === "unauthenticated") {
        redirect('/login')
    }

    return (
        <div className="container mx-auto p-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 mb-8 text-white shadow-lg">
                <h1 className="text-4xl font-bold mb-2">Welcome back, {session?.user?.name || session?.user?.email.split('@')[0]}!</h1>
                <p className="opacity-90 mb-4">Here&apos;s what&apos;s happening with your events today.</p>
                <div className="flex space-x-4 mt-4">


                </div>
            </div>

            {/* Stats Cards */}
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-blue-100 rounded-full">
                        <Calendar className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Total Events</p>
                        <h3 className="text-3xl font-bold">{stats.totalEvents}</h3>
                    </div>
                </Card>

                <Card className="p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-green-100 rounded-full">
                        <Clock className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Upcoming Events</p>
                        <h3 className="text-3xl font-bold">{stats.upcomingEvents}</h3>
                    </div>
                </Card>


            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/events/new">
                    <Card className="p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition">
                        <div className="p-2 bg-blue-100 rounded-full">
                            <FilePlus className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="font-medium">New Event</span>
                    </Card>
                </Link>

            </div>

            {/* Recent Events */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Recent Events</h2>
                    <Link href="/events" className="text-blue-600 flex items-center hover:underline">
                        View all <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {recentEvents.length > 0 ? (
                        recentEvents.map((event, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                                <div className="h-48 bg-gray-200 relative">
                                    {event.imageUrl ? (
                                        <Image
                                            src={event.imageUrl}
                                            alt={event.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-gray-400">
                                            <ImageIcon className="h-12 w-12" />
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-blue-600 mb-1">
                                        {new Date(event.startDate).toLocaleDateString()}
                                    </p>
                                    <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-2">{event.description}</p>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <p className="text-muted-foreground col-span-3 text-center py-8">No recent events found</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
