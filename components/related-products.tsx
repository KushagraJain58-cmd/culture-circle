import Image from "next/image"
import Link from "next/link"

interface RelatedProductsProps {
    title: string
}

export default function RelatedProducts({ title }: RelatedProductsProps) {
    const products = [
        {
            id: 1,
            name: "Off White X Air Jordan 1 Retro High Og Chicago",
            image: "/images/product-offwhite.png",
            price: 0,
            link: "/product/off-white-jordan-1",
        },
        {
            id: 2,
            name: "Air Jordan 1 High Retro High Og Heritage",
            image: "/images/product-heritage.png",
            price: 0,
            link: "/product/jordan-1-heritage",
        },
    ]

    return (
        <div className="my-8">
            <h3 className="text-gray-500 font-medium mb-4">{title}</h3>

            <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                    <Link key={product.id} href={product.link} className="block">
                        <div className="border rounded-lg overflow-hidden">
                            <div className="aspect-square relative">
                                <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-medium text-sm line-clamp-2">{product.name}</h4>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
