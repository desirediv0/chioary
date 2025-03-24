"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Card } from "@/components/ui/card"
import { Calendar, Clock } from 'lucide-react'

const Dashboard = () => {
    const { data: session, status } = useSession()
    const [stats, setStats] = useState({
        totalEvents: 0,
        upcomingEvents: 0,
    })

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const eventsRes = await fetch('/api/events?limit=50')
                const eventsData = await eventsRes.json()

                const now = new Date()
                const upcoming = eventsData.events.filter(
                    event => new Date(event.startDate) > now
                ).length



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
        </div>
    )
}

export default Dashboard
