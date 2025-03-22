"use client"
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Dashboard = () => {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <div className="flex h-screen items-center justify-center">Loading...</div>
    }

    if (status === "unauthenticated") {
        redirect('/login')
    }

    const handleSignOut = () => {
        signOut({ callbackUrl: '/login' })
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <p className="mb-4">Welcome, {session?.user?.email}!</p>
            <div className="flex gap-4">
                <Button asChild>
                    <Link href="/">Go to Home</Link>
                </Button>
                <Button variant="outline" onClick={handleSignOut}>
                    Sign Out
                </Button>
            </div>
        </div>
    )
}

export default Dashboard
