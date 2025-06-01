"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingBag, User, ArrowLeft } from "lucide-react"

export default function Navbar() {
    const [cartCount, setCartCount] = useState(2)

     const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Update state after component mounts (client-side only)
    setCartCount(2)
    setIsMounted(true)
  }, [])

    return (
        <header className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="mr-4">
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                        <Link href="/" className="flex-shrink-0">
                            <Image src="/logo.svg" alt="Culture Circle" width={140} height={40} className="h-8 w-auto" />
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2">
                            <Search className="h-5 w-5" />
                        </button>
                        <Link href="/cart" className="p-2 relative">
                            <ShoppingBag className="h-5 w-5" />
                            {isMounted && cartCount > 0 && (
                                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button className="p-2">
                            <User className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
