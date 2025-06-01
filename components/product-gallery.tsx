"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Heart, Share2 } from "lucide-react"

const images = [
    "/images/jordan1-main.png",
    "/images/jordan1-angle1.png",
    "/images/jordan1-angle2.png",
    "/images/jordan1-angle3.png",
    "/images/jordan1-angle4.png"
]

export default function ProductGallery() {
    const [currentImage, setCurrentImage] = useState(0)
    const [liked, setLiked] = useState(false)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
        }
    }

    return (
        <div className="space-y-4">
            <div className="md:hidden">
                <h1 className="text-2xl font-bold">Air Jordan 1 Retro High Og Volt Gold</h1>
                <div className="flex items-center mt-2">
                    <button className="flex items-center text-gray-500" onClick={() => setLiked(!liked)}>
                        <Heart className={`h-6 w-6 ${liked ? "fill-red-500 text-red-500" : ""}`} />
                        <span className="ml-1">578</span>
                    </button>
                </div>
            </div>

            <div className="relative">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                        src={images[currentImage] || "/placeholder.svg?height=600&width=600"}
                        alt="Air Jordan 1 Retro High Og Volt Gold"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="absolute top-4 right-4 flex flex-col space-y-4">
                    <button onClick={() => setLiked(!liked)} className="p-2 bg-white rounded-full shadow-md">
                        <Heart className={`h-5 w-5 ${liked ? "fill-red-500 text-red-500" : ""}`} />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md">
                        <Share2 className="h-5 w-5" />
                    </button>
                </div>

                <div className="absolute bottom-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                    ONLY 5 LEFT
                </div>
            </div>

            <div className="relative">
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div ref={scrollContainerRef} className="flex space-x-2 overflow-x-auto scrollbar-hide py-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${currentImage === index ? "border-blue-600" : "border-transparent"
                                }`}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={image || "/placeholder.svg?height=80&width=80"}
                                    alt={`Product view ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </button>
                    ))}
                </div>

                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>SNEAKERS</span>
                <span>•</span>
                <span className="font-medium">AIR JORDAN</span>
            </div>
        </div>
    )
}
