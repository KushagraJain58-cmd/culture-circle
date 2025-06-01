import Image from "next/image"
import { Heart } from "lucide-react"

export default function WhyCultureCircle() {
    const benefits = [
        {
            icon: "/icons/collection.png",
            title: "India's Largest Authenticated Collection",
        },
        {
            icon: "/icons/price.png",
            title: "Guaranteed Lowest Prices",
        },
        {
            icon: "/icons/authenticity.png",
            title: "100% Authenticity Guaranteed",
        },
        {
            icon: "/icons/shipping.png",
            title: "Free Express Shipping",
        },
    ]

    return (
        <div className="my-8 bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-6">
                <Heart className="h-5 w-5 mr-2" />
                <h3 className="text-xl font-bold">
                    WHY ONLY <span className="text-blue-700">CULTURE CIRCLE</span>?
                </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 flex items-center">
                        <div className="bg-gray-100 rounded-full p-3 mr-3">
                            <Image
                                src={benefit.icon || "/placeholder.svg"}
                                alt={benefit.title}
                                width={24}
                                height={24}
                                className="h-6 w-6"
                            />
                        </div>
                        <h4 className="font-medium text-sm">{benefit.title}</h4>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <h2 className="text-4xl font-bold text-gray-200 tracking-wider">IN THE CULTURE</h2>

                <div className="mt-6 bg-black text-white rounded-lg overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="relative h-64 md:h-auto">
                            <Image src="/images/testimonial.jpg" alt="Customer with product" fill className="object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4">Panda Dunks Low</h3>
                            <p className="text-sm">
                                Got my Panda Dunks Low from Culture Circle— authentic, fast shipping, and great service! Perfect fit,
                                versatile style, and solid quality. Highly recommend both the kicks and the store!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
