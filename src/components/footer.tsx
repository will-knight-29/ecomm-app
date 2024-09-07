import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Shop</h4>
                        <ul className="space-y-2">
                            <li><Link href="/category/desk-accessories" className="hover:text-white">Desk
                                Accessories</Link></li>
                            <li><Link href="/category/office-essentials" className="hover:text-white">Office
                                Essentials</Link></li>
                            <li><Link href="/category/lighting" className="hover:text-white">Lighting</Link></li>
                            <li><Link href="/category/stationery" className="hover:text-white">Stationery</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">About</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-white">Our Story</Link></li>
                            <li><Link href="/craftsmanship" className="hover:text-white">Craftsmanship</Link></li>
                            <li><Link href="/sustainability" className="hover:text-white">Sustainability</Link></li>
                            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                            <li><Link href="/shipping-returns" className="hover:text-white">Shipping & Returns</Link>
                            </li>
                            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                            <li><Link href="/care-instructions" className="hover:text-white">Care Instructions</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-stone-700 text-center">
                    <p>&copy; {new Date().getFullYear()} ShopVerse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}