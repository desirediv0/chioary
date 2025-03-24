"use client";

import Sidenav from "@/components/ui/Sidenav";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";



const Layout = ({ children }) => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div className="flex h-screen items-center justify-center">Loading...</div>;
    }

    if (status === "unauthenticated") {
        redirect('/login');
    }

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-56 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <Sidenav />
            </div>
            <main className="md:pl-56 h-full">
                <div className="p-4 md:p-8">{children}</div>
            </main>
        </div>
    );
};

export default Layout;
