
'use client'

import { createContext, useEffect, useState } from "react";

import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import { lookInSession } from "@/common/SessionFunc";

import { HeroUIProvider } from '@heroui/react'

import "./globals.css";
import localFont from "next/font/local";


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

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };


export const UserContext = createContext({})


export default function RootLayout({ children }) {

  const [userAuth, setUserAuth] = useState({})
  const [activeUserAuth, setActiveUserAuth] = useState(false)

  useEffect(() => {
    let userInSession = lookInSession("user")
    if (userInSession) {
      setUserAuth(JSON.parse(userInSession))
      setActiveUserAuth(true)
    }
    else {
      setUserAuth({ token: null })
      setActiveUserAuth(false)
    }

  }, [activeUserAuth])




  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <HeroUIProvider>
          <UserContext.Provider value={{ userAuth, setUserAuth, setActiveUserAuth }}>
            <div className="relative z-20" >
              <Navbar />
              {children}
            </div>
            <div className="z-10">
              <Footer />
            </div>
          </UserContext.Provider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
