import Image from "next/image"
import Link from "next/link"
import { Apple, PlayCircle } from "lucide-react"

export default function CultureCashPromo() {
    return (
        <div className="bg-black text-white rounded-lg overflow-hidden my-8">
            <div className="grid md:grid-cols-2">
                <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-lg font-medium mb-2">WITH EVERY ORDER YOU WILL EARN</h3>
                    <h2 className="text-4xl font-bold mb-4">CULTURE CA$H</h2>
                    <p className="text-gray-400 mb-4">AVAILABLE FOR</p>
                    <div className="flex space-x-4 mb-6">
                        <Apple className="h-6 w-6" />
                        <PlayCircle className="h-6 w-6" />
                    </div>
                    <Link href="/download-app" className="bg-blue-700 text-white py-3 px-4 rounded-md text-center font-medium">
                        Download App to claim <span className="font-bold">C</span> 999 Culture Cash
                    </Link>
                </div>
                <div className="relative h-64 md:h-auto">
                    <Image src="/images/culture-cash-promo.jpeg" alt="Culture Cash Promo" fill className="object-cover" />
                </div>
            </div>
        </div>
    )
}
