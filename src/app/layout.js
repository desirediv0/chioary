import localFont from "next/font/local";
import "./globals.css";
import NextAuth from "../../provider/NextAuth";
import { ToastProvider } from "@/components/ui/use-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Adyashakti - Spiritual Awakening and Self-Realization",
  description: "Explore the path of spiritual awakening and self-realization with Adyashakti. Join our community in the journey of inner transformation.",
  keywords: "adyashakti, spiritual, awakening, meditation, self-realization",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <ToastProvider>
          <NextAuth>
            {children}
          </NextAuth>
        </ToastProvider>
      </body>
    </html>
  );
}
