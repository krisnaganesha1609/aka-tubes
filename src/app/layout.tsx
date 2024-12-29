import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Particles from "@/components/particles";
import Link from "next/link";
import Nav from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AKA TUBES",
  description:
    "This a project web for college course: Analysis Complexity Algorithm. Which is to analyze the time complexity of iterative & recursive algorithm using static json datasets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={500}
        />
        {children}
      </body>
    </html>
  );
}
