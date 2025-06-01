"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function NewsletterForm() {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSuccess(true)
            setEmail("")

            // Reset success message after 3 seconds
            setTimeout(() => {
                setIsSuccess(false)
            }, 3000)
        }, 1000)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="relative">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    required
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-1"
                    aria-label="Subscribe"
                >
                    <ArrowRight className="h-5 w-5" />
                </button>
            </form>

            {isSuccess && <p className="mt-2 text-green-500 text-sm">Thanks for subscribing!</p>}
        </div>
    )
}
