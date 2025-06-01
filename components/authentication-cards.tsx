import Image from "next/image"
import Link from "next/link"

export default function AuthenticationCards() {
    const cards = [
        {
            icon: "/icons/barcode.png",
            title: "100% Authenticated",
            link: "/learn-more-authentication",
        },
        {
            icon: "/icons/credit-card.png",
            title: "Money Back Guarantee",
            link: "/learn-more-guarantee",
        },
        {
            icon: "/icons/shield.png",
            title: "Our Promise",
            link: "/learn-more-promise",
        },
    ]

    return (
        <div className="grid grid-cols-3 gap-4">
            {cards.map((card, index) => (
                <div key={index} className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="bg-gray-100 rounded-full p-4 mb-3">
                        <Image src={card.icon || "/placeholder.svg"} alt={card.title} width={24} height={24} className="h-6 w-6" />
                    </div>
                    <h3 className="text-sm font-medium mb-1">{card.title}</h3>
                    <Link href={card.link} className="text-blue-600 text-xs">
                        Learn more
                    </Link>
                </div>
            ))}
        </div>
    )
}
