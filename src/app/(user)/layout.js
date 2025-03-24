"use client";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import BackgroundMusic from "@/components/BackgroundMusic";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {children}
            </main>
            <BackgroundMusic src="/bg.mp3" />
            <Footer />
        </>
    );
}
