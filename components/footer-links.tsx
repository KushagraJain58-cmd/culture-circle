import Link from "next/link"

interface FooterLinksProps {
    links: {
        label: string
        href: string
    }[]
}

export default function FooterLinks({ links }: FooterLinksProps) {
    return (
        <ul className="space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
