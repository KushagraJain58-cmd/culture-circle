import Link from "next/link"
import { Facebook, Instagram, MessageCircle, Twitter, Youtube } from "lucide-react"

export default function SocialLinks() {
    const socialLinks = [
        { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com/culturecircle", label: "Facebook" },
        { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/culturecircle", label: "Instagram" },
        { icon: <MessageCircle className="h-5 w-5" />, href: "https://t.me/culturecircle", label: "Telegram" },
        { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/culturecircle", label: "Twitter" },
        { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com/culturecircle", label: "YouTube" },
    ]

    return (
        <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="text-gray-500 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {link.icon}
                </Link>
            ))}
        </div>
    )
}
