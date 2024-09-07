import Image from 'next/image'
import Link from 'next/link'

const products = [
    { id: 1, name: 'Wooden Desk Organizer', price: '$59.99', image: '/products/desk-organizer.png' },
    { id: 2, name: 'Leather Mouse Pad', price: '$34.99', image: '/products/mouse-pad.png' },
    { id: 3, name: 'Brass Pen Holder', price: '$24.99', image: '/products/pen-holder.png' },
    { id: 4, name: 'Walnut Desk Shelf', price: '$89.99', image: '/products/desk-shelf.png' },
]

export default function ProductGrid() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold text-stone-800 mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Link href={`/product/${product.id}`} key={product.id} className="group">
                            <div className="aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-stone-800">{product.name}</h3>
                            <p className="mt-1 text-sm text-stone-600">{product.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}