import Image from "next/image"
import Link from "next/link"

export default function AppDownload() {
    return (
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Link
                href="https://play.google.com/store/apps/details?id=com.culturecircle"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <Image
                    src="/images/google-play.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                />
            </Link>

            <Link
                href="https://apps.apple.com/app/culturecircle/id123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <Image
                    src="/images/app-store.png"
                    alt="Download on the App Store"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                />
            </Link>
        </div>
    )
}
