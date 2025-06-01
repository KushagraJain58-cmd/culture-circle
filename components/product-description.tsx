"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ProductDescription() {
    const [isExpanded, setIsExpanded] = useState(false)

    const details = [
        { label: "Release Date", value: "20th Nov 2022" },
        { label: "Main Color", value: "Red" },
        { label: "Series", value: "Air Jordan" },
    ]

    return (
        <div className="space-y-4">
            <h3 className="text-gray-500 font-medium">DESCRIPTION AND DETAILS</h3>

            <div className={`text-sm space-y-4 ${isExpanded ? "" : "line-clamp-6"}`}>
                <p>
                    The Air Jordan 1 Lost & Found is a nostalgic reimagining of the iconic Chicago colorway, designed to capture
                    the essence of discovering a vintage pair in a forgotten stockroom. Released in November 2022, it features a
                    distressed, aged look, with cracked leather on the collar and midsole to mimic natural wear over time. The
                    classic red, white, and black color scheme stays true to its 1985 roots, enhanced by vintage-style packaging,
                    including a mismatched box and old-school receipts. This release tells a story of sneaker history, paying
                    homage to the golden era of Michael Jordan and the sneaker culture he inspired. With its limited availability,
                    high demand, and deep storytelling, the Lost & Found quickly became a grail for collectors. It blends heritage
                    and hype, making it one of the most celebrated Jordan 1 releases in recent years.
                </p>
            </div>

            <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center justify-center w-full py-2">
                {isExpanded ? (
                    <>
                        <ChevronUp className="h-5 w-5 mr-1" />
                        <span>Show less</span>
                    </>
                ) : (
                    <>
                        <ChevronDown className="h-5 w-5 mr-1" />
                        <span>Show more</span>
                    </>
                )}
            </button>

            <div className="space-y-2 pt-2">
                {details.map((detail, index) => (
                    <div key={index} className="flex justify-between py-2 border-b last:border-b-0">
                        <span className="text-gray-500">{detail.label}</span>
                        <span className="font-medium">{detail.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
