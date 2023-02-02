"use client";
import "./globals.css";
import { Montserrat } from "@next/font/google";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <SessionProvider>
        <head />
        <body className={`${montserrat.className}`}>
          <Navbar />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
