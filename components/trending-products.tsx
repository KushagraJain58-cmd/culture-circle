"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronUp } from "lucide-react"

export default function TrendingProducts() {
    const [isExpanded, setIsExpanded] = useState(true)

    const products = [
        {
            id: 1,
            name: "Acne Studios Scarf 'Pink/Fuchisa/White'",
            image: "/images/product-scarf.png",
            price: 44099,
            link: "/product/acne-studios-scarf",
        },
        {
            id: 2,
            name: "Off White X Air Jordan 1 Retro High Og Chicago",
            image: "/images/product-offwhite.png",
            price: 11987,
            link: "/product/off-white-jordan-1",
        },
        {
            id: 3,
            name: "Air Jordan 1 Retro High Og Chicago",
            image: "/images/product-heritage.png",
            price: 25999,
            link: "/product/jordan-1-chicago",
        },
        {
            id: 4,
            name: "Off White Hoodie Black",
            image: "/images/product-hoodie.png",
            price: 32999,
            link: "/product/off-white-hoodie",
        },
    ]

    return (
        <div className="my-8 bg-gray-50 rounded-lg p-6">
            <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center mb-4 w-full">
                <ChevronUp className={`h-5 w-5 mr-2 transition-transform ${isExpanded ? "" : "rotate-180"}`} />
                <h2 className="text-2xl font-bold">TRENDING</h2>
            </button>

            {isExpanded && (
                <>
                    <p className="text-gray-600 mb-6">Drip that made it to the top</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {products.map((product) => (
                            <Link key={product.id} href={product.link} className="block bg-white rounded-lg overflow-hidden">
                                <div className="aspect-square relative">
                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-medium text-sm line-clamp-2 mb-2">{product.name}</h4>
                                    <p className="text-sm font-semibold">₹ {product.price.toLocaleString()}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
