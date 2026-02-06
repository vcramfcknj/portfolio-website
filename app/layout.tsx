import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Vince Marc Justine Rubang | Full-Stack Developer Portfolio",
  description: "Full-Stack Developer specializing in React, Next.js, PHP, and MySQL. Building modern web applications and AI-powered solutions. Based in Ilocos Sur, Philippines.",
  keywords: ["Vince Marc Rubang", "Full-Stack Developer", "Web Developer", "React", "Next.js", "PHP", "MySQL", "Portfolio", "Philippines"],
  authors: [{ name: "Vince Marc Justine Rubang" }],
  creator: "Vince Marc Justine Rubang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}