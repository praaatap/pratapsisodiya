import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pratap Singh | Developer",
  description: "Developer portfolio, projects and writing by Pratap Singh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}
      >
        <Navbar />
        <div className="max-w-2xl mx-auto px-5 sm:px-6 min-h-screen flex flex-col pt-8">
          <main className="flex-1 pb-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
