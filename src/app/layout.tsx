import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import Footer from '@/components/footer'


import './globals.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'ShopVerse',
        template: '%s | ShopVerse',
    },
    description: 'Discover our handcrafted desk accessories and office essentials.',
    icons: {
        icon: '/logos/tree-rings.svg',
    }
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>
            <main className="flex-grow">{children}</main>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    )
}