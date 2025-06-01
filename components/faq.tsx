"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: "What kind of maintenance is recommended to keep the Air Jordan 1 Retro High OG in good condition?",
            answer:
                "To maintain your Air Jordan 1 Retro High OG, clean them regularly with a soft brush and mild soap solution. Use specialized sneaker cleaners for tough stains. Apply a water and stain repellent spray to protect the leather. Store them in a cool, dry place away from direct sunlight. Use shoe trees to maintain shape and prevent creasing. For the midsole, use a magic eraser for scuffs. Clean the outsoles after each wear to prevent dirt buildup. Consider rotation with other shoes to extend their lifespan.",
        },
        {
            question: "What lifestyle activities are best suited for the Air Jordan 1 Retro High OG?",
            answer:
                "The Air Jordan 1 Retro High OG is versatile for casual wear, streetwear fashion, light walking, urban exploration, sneaker meetups, and collecting. While designed as a basketball shoe, modern collectors typically reserve them for casual use rather than performance sports to preserve their condition and value.",
        },
        {
            question: "Can I cancel my order?",
            answer:
                "Yes, you can cancel your order within 24 hours of placing it. After that, cancellation is subject to the order processing status. Please contact our customer service team immediately if you need to cancel.",
        },
        {
            question: "When will I receive my order?",
            answer:
                "Standard delivery typically takes 7-8 days. Some limited edition or special order items may take 21-28 days. You'll receive tracking information via email once your order ships.",
        },
        {
            question: "Do you accept returns?",
            answer:
                "Yes, we accept returns within 7 days of delivery for unworn items in original packaging with tags attached. Please note that some limited edition items may be final sale.",
        },
        {
            question: "When will I receive my refund?",
            answer:
                "Once we receive and inspect your return, refunds are typically processed within 5-7 business days. The funds may take an additional 3-5 business days to appear in your account, depending on your bank or payment method.",
        },
    ]

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="my-8">
            <div className="mb-4">
                <h3 className="text-gray-500 font-medium">MOST ASKED QUESTIONS</h3>
            </div>

            <div className="space-y-4">
                {faqs.slice(0, 2).map((faq, index) => (
                    <div key={index} className="border-b pb-4">
                        <button onClick={() => toggleFaq(index)} className="flex items-center justify-between w-full text-left">
                            <h4 className="font-medium pr-8">{faq.question}</h4>
                            <ChevronDown className="h-5 w-5 flex-shrink-0" />
                        </button>

                        {openIndex === index && <div className="mt-2 text-sm text-gray-600">{faq.answer}</div>}
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <h3 className="text-gray-500 font-medium mb-4">SHIPPING</h3>
                <p className="text-sm">
                    Orders are <span className="font-semibold">typically shipped within 7-12 days</span>, undergoing a thorough
                    verification process, with our dedicated team ensuring timely delivery; however, certain{" "}
                    <span className="font-semibold">ETA pairs may take 21-25 days for shipping</span>.
                </p>
            </div>

            <div className="mt-6">
                <h3 className="text-gray-500 font-medium mb-4">EMI</h3>
                <p className="text-sm">
                    You can also enjoy the convenience of No-Cost EMIs on our website and app, allowing you to pay in
                    <span className="font-semibold"> three easy installments at no extra cost </span>
                    for a seamless shopping experience.
                </p>
            </div>

            <div className="mt-6">
                <h3 className="text-gray-500 font-medium mb-4">FAQ</h3>
                <div className="space-y-4">
                    {faqs.slice(2).map((faq, index) => (
                        <div key={index + 2} className="border-b pb-4">
                            <button
                                onClick={() => toggleFaq(index + 2)}
                                className="flex items-center justify-between w-full text-left"
                            >
                                <h4 className="font-medium">{faq.question}</h4>
                                {openIndex === index + 2 ? (
                                    <ChevronUp className="h-5 w-5 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 flex-shrink-0" />
                                )}
                            </button>

                            {openIndex === index + 2 && <div className="mt-2 text-sm text-gray-600">{faq.answer}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
