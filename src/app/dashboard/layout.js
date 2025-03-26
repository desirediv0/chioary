"use client";

import Sidenav from "@/components/ui/Sidenav";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";



const Layout = ({ children }) => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div className="flex h-screen items-center justify-center"><div className="text-center">
            <div
                className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
            ></div>
            <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        </div></div>;
    }

    if (status === "unauthenticated") {
        redirect('/login');
    }

    return (
        <div className="h-full relative">
            <div className=" h-full flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <Sidenav />
            </div>
            <main className="md:pl-64 h-full">
                <div className="p-4 md:p-8">{children}</div>
            </main>
        </div>
    );
};

export default Layout;
