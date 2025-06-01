"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowDownUp } from "lucide-react"

const sellers = [
    {
        name: "heat st",
        logo: "/logos/heatst.png",
        price: 23009,
        delivery: "FREE DELIVERY | 7-8 DAYS",
    },
    {
        name: "OSWT",
        logo: "/logos/oswt.png",
        price: 25199,
        delivery: "FREE DELIVERY | 7-8 DAYS",
    },
    {
        name: "SNEAKER PLUG INDIA",
        logo: "/logos/sneakerplug.png",
        price: 30029,
        delivery: "FREE DELIVERY | 7-8 DAYS",
    },
    {
        name: "VERIFIED SELLER",
        logo: "/logos/verified.png",
        price: 33999,
        delivery: "FREE DELIVERY | 21-28 DAYS",
    },
    {
        name: "VERIFIED SELLER",
        logo: "/logos/verified.png",
        price: 36099,
        delivery: "FREE DELIVERY | 21-28 DAYS",
    },
    {
        name: "VERIFIED SELLER",
        logo: "/logos/verified.png",
        price: 34234,
        delivery: "FREE DELIVERY | 21-28 DAYS",
    },
]

export default function PriceComparison() {
    const [sortByPrice, setSortByPrice] = useState(true)

    const sortedSellers = [...sellers].sort((a, b) => {
        return sortByPrice ? a.price - b.price : 0
    })

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-gray-500 font-medium">
                    BEST PRICES FOR <span className="text-blue-700 font-semibold">UK6</span>
                </h3>
                <button onClick={() => setSortByPrice(!sortByPrice)} className="flex items-center text-sm font-medium">
                    <ArrowDownUp className="h-4 w-4 mr-1" />
                    Best prices first
                </button>
            </div>

            <div className="space-y-4">
                {sortedSellers.map((seller, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                        <div className="flex items-center">
                            <div className="w-16 h-8 relative">
                                <Image
                                    src={seller.logo || "/placeholder.svg?height=32&width=64"}
                                    alt={seller.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            {seller.name !== "heat st" && seller.name !== "OSWT" && seller.name !== "SNEAKER PLUG INDIA" && (
                                <span className="text-xs font-semibold ml-2">{seller.name}</span>
                            )}
                        </div>
                        <div className="text-right">
                            <div className="font-semibold">₹ {seller.price.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">{seller.delivery}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
