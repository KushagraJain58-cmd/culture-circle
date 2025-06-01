import Image from "next/image"

export default function ProductHighlights() {
    const highlights = [
        {
            icon: "/icons/silhouette.svg",
            title: "Midi Silhouette",
        },
        {
            icon: "/icons/leather.svg",
            title: "Leather Material",
        },
        {
            icon: "/icons/high-top.svg",
            title: "High-Top Design",
        },
        {
            icon: "/icons/pattern.svg",
            title: "Solid Pattern",
        },
    ]

    return (
        <div className="my-8">
            <h3 className="text-gray-500 font-medium mb-4">PRODUCT HIGHLIGHTS</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {highlights.map((highlight, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="mb-4">
                            <Image
                                src={highlight.icon || "/placeholder.svg"}
                                alt={highlight.title}
                                width={40}
                                height={40}
                                className="h-10 w-10"
                            />
                        </div>
                        <h4 className="font-medium">{highlight.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
