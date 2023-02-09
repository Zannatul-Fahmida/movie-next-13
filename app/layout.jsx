"use client";
import "./globals.css";
import { Montserrat } from "@next/font/google";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <SessionProvider>
          <head />
          <body className={`${montserrat.className}`}>
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
            </ThemeProvider>
          </body> 
      </SessionProvider>
    </html>
  );
}
