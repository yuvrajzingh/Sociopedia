import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'

const inter = Inter({ subsets: ['latin'] })

const dotenv = require("dotenv");

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
} 


export const metadata = {
  title: 'Sociopedia',
  description: 'A Next.js 12 Social Networking Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar/>

          <main className='flex flex-row'>
            <LeftSidebar/>

              <section className='main-container'>
                <div className='w-full max-w-4xl'>
                  {children}
                </div>
              </section>

            <RightSidebar/>
          </main>

          <Bottombar/>
        </body>
      </html>
    </ClerkProvider>
    
  )
}
