"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Home, LogOut, PlusCircle, Menu, X } from "lucide-react";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const routes = [
    {
        label: "Dashboard",
        icon: Home,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Events",
        icon: Calendar,
        href: "/dashboard/events",
        color: "text-violet-500",
    },
    {
        label: "Create Event",
        icon: PlusCircle,
        href: "/dashboard/events/create",
        color: "text-green-500",
    },
];

const Sidenav = () => {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleSignOut = () => {
        signOut({ callbackUrl: '/login' });
    };

    const toggleMobileNav = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    const MobileToggle = () => (
        <div className="md:hidden fixed top-4 left-4 z-50">
            <button
                onClick={toggleMobileNav}
                className="bg-[#983532] p-2 rounded-full shadow-lg"
            >
                {isMobileOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
            </button>
        </div>
    );

    const SidebarContent = () => (
        <div className="space-y-4 py-4 flex flex-col h-full bg-gradient-to-b from-slate-900 to-[#983532] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-10">

                    <h1 className="text-2xl font-bold text-white">
                        Adyashakti Admin
                    </h1>
                </Link>
                <div className="space-y-2">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-[#983532]/30 rounded-lg transition-all duration-200 ease-in-out",
                                pathname === route.href
                                    ? "text-white bg-[#983532]/40 shadow-md"
                                    : "text-zinc-300"
                            )}
                            onClick={() => isMobile && setIsMobileOpen(false)}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                    <div
                        onClick={handleSignOut}
                        className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-[#983532]/30 rounded-lg transition-all duration-200 ease-in-out text-zinc-300 mt-auto"
                    >
                        <div className="flex items-center flex-1">
                            <LogOut className="h-5 w-5 mr-3 text-red-500" />
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <>
            <MobileToggle />

            <div className="hidden md:block w-64 h-full">
                <SidebarContent />
            </div>

            {isMobile && (
                <div className={`fixed inset-0 z-40 transition-all duration-300 ${isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div
                        className={`absolute inset-0 bg-black ${isMobileOpen ? 'opacity-50' : 'opacity-0'} transition-opacity duration-300`}
                        onClick={() => setIsMobileOpen(false)}
                    />

                    <div className={`absolute top-0 left-0 h-full w-64 transform transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <SidebarContent />
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidenav;
