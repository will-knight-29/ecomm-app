import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ProductGrid from '@/components/product-grid'
import Newsletter from '@/components/newsletter'

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[70vh]">
                <Image
                    src="/office.png"
                    alt="Craftsmen style workspace"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Elevate Your Workspace</h1>
                        <p className="text-xl text-stone-200 mb-8">Discover our handcrafted desk accessories and office
                            essentials.</p>
                        <Button size="lg" asChild>
                            <Link href="/products">Shop Now</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16 bg-stone-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-semibold text-stone-800 mb-8">Shop by Category</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Desk Organizers', 'Lighting', 'Stationery'].map((category) => (
                            <Link href={`/category/${category.toLowerCase().replace(' ', '-')}`} key={category}
                                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-medium text-stone-800 mb-2">{category}</h3>
                                <span className="text-stone-600 hover:text-stone-900 flex items-center">
                  View Collection <ChevronRight className="ml-2 w-4 h-4"/>
                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ProductGrid/>

            {/* Brand Story */}
            <section className="py-16 bg-stone-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold mb-4">Our Craft, Your Space</h2>
                        <p className="text-lg mb-8">At ShopVerse, we believe in the power of beautifully crafted objects
                            to inspire creativity and productivity. Each piece is thoughtfully designed and meticulously
                            made to elevate your workspace.</p>
                        <Button variant="outline" asChild>
                            <Link href="/about">Learn Our Story</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Newsletter/>
        </>
    )
}