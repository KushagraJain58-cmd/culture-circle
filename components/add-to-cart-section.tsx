"use client"

import { useState } from "react"
import { ChevronRight, Info } from "lucide-react"

export default function AddToCartSection() {
    const [isInCart, setIsInCart] = useState(false)

    const addToCart = () => {
        setIsInCart(true)
        // In a real app, you would dispatch to a cart state manager here
        setTimeout(() => {
            setIsInCart(false)
        }, 2000)
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-xl font-bold">₹ 23,009</span>
                    <span className="ml-2 text-sm text-gray-500">| UK6</span>
                </div>
                <button className="p-1">
                    <Info className="h-5 w-5 text-gray-500" />
                </button>
            </div>

            <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                BEST PRICE APPLIED
            </div>

            <button
                onClick={addToCart}
                className="w-full bg-black text-white py-4 rounded-md font-medium text-center transition-all hover:bg-gray-800"
            >
                {isInCart ? "Added to Cart!" : "Add to Cart"}
            </button>

            <button className="w-full flex items-center justify-between border rounded-md px-4 py-3 text-left">
                <div>
                    <span className="text-sm">Get it @ </span>
                    <span className="font-medium">₹ 3500/month</span>
                    <span className="text-sm"> with Culture Pay</span>
                </div>
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    )
}
