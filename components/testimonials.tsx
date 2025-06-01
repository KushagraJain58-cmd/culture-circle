import Image from "next/image"
import { Volume2 } from "lucide-react"

export default function Testimonials() {
    return (
        <div className="my-8 bg-gray-50 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
                <div className="bg-gray-200 rounded-full p-2">
                    <Volume2 className="h-5 w-5" />
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">THEY LOVE TALKING ABOUT US</h2>

            <div className="mb-6">
                <p className="text-lg mb-2">
                    <span className="font-bold">`Culture Circle:</span>
                    <span className="font-bold">#1 Hype and Luxury</span> App with the largest collection of authentic drip like
                    sneakers, apparel and more`
                </p>
            </div>

            <div className="flex justify-center space-x-6 opacity-70">
                <Image src="/logos/theprint.png" alt="The Print" width={80} height={30} className="h-8 object-contain" />
                <Image src="/logos/british-news.png" alt="British News" width={80} height={30} className="h-8 object-contain" />
                <Image src="/logos/republic.png" alt="Republic" width={80} height={30} className="h-8 object-contain" />
                <Image src="/logos/hindu.png" alt="Hindu" width={80} height={30} className="h-8 object-contain" />
            </div>
        </div>
    )
}
