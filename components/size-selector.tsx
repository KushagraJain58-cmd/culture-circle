"use client"

import { useState } from "react"
import { ChevronDown, ExternalLink } from "lucide-react"

export default function SizeSelector() {
    const [selectedSize, setSelectedSize] = useState("UK6 / EU39.5 / 25cm")
    const [isOpen, setIsOpen] = useState(false)

    const sizes = [
        "UK6 / EU39.5 / 25cm",
        "UK7 / EU41 / 26cm",
        "UK8 / EU42.5 / 27cm",
        "UK9 / EU44 / 28cm",
        "UK10 / EU45 / 29cm",
    ]

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-gray-500 font-medium">SELECT YOUR SIZE</h3>
                <button className="flex items-center text-sm font-medium">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Size Chart
                </button>
            </div>

            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between border rounded-md px-4 py-3 bg-white"
                >
                    <span>{selectedSize}</span>
                    <ChevronDown className="h-5 w-5" />
                </button>

                {isOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => {
                                    setSelectedSize(size)
                                    setIsOpen(false)
                                }}
                                className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedSize === size ? "bg-gray-100" : ""}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
