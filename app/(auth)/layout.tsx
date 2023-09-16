import React from "react";
require("dotenv").config();
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

export const metadata = {
  title: "Sociopedia",
  description: "A Next.js 12 Social Networking Application",
};

//to import fonts in next.js
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //return type of this object will be an object with children = ReactNode

  return (
    //so that we can use clerks functionalities
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <div className="w-full flex justify-center items-center min-h-screen">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider> 
  );
}
