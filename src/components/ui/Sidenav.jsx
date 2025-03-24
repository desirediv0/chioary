"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Home, LogOut, PlusCircle } from "lucide-react";
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

    const handleSignOut = () => {
        signOut({ callbackUrl: '/login' });
    };

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <h1 className="text-2xl font-bold">
                        Adyashakti Admin
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href
                                    ? "text-white bg-white/10"
                                    : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                    <div
                        onClick={handleSignOut}
                        className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition text-zinc-400"
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
};

export default Sidenav;
