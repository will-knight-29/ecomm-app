'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Menu, ShoppingCart, X } from 'lucide-react'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <button className="mr-4 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X/> : <Menu/>}
                    </button>
                    <Link href="/" className="text-2xl font-bold text-stone-800">
                        <Image
                            src="/logos/SV-logo.svg"
                            alt="ShopVerse Logo"
                            width={200}
                            height={200}
                            quality="95"
                        />
                    </Link>
                </div>
                <nav
                    className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto bg-white lg:bg-transparent w-full lg:w-auto z-50`}>
                    <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
                        <li><Link href="/category/desk" className="text-stone-600 hover:text-stone-900">Desk</Link></li>
                        <li><Link href="/category/office" className="text-stone-600 hover:text-stone-900">Office</Link>
                        </li>
                        <li><Link href="/category/accessories"
                                  className="text-stone-600 hover:text-stone-900">Accessories</Link></li>
                        <li><Link href="/about" className="text-stone-600 hover:text-stone-900">About</Link></li>
                    </ul>
                </nav>
                <Link href="/cart" className="text-stone-600 hover:text-stone-900">
                    <ShoppingCart/>
                </Link>
            </div>
        </header>
    )
}