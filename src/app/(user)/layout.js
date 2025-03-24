"use client";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import BackgroundMusic from "@/components/BackgroundMusic";


export default function Layout({ children }) {
    return (
        <html lang="en">
            <body
                className={`antialiased bg-white text-black`}
            >
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <BackgroundMusic src="/bg.mp3" />
                <Footer />
            </body>
        </html>
    );
}
