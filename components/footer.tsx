import NewsletterForm from "./newsletter-form"
import FooterLinks from "./footer-links"
import SocialLinks from "./social-links"
import AppDownload from "./app-download"

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-gray-300 font-medium mb-4">MOST VIEWED</h3>
                        <FooterLinks
                            links={[
                                { label: "Under 10,000", href: "/under-10000" },
                                { label: "Under 20,000", href: "/under-20000" },
                                { label: "Under Retails", href: "/under-retails" },
                                { label: "Holy Grails", href: "/holy-grails" },
                                { label: "Popular Collabs", href: "/popular-collabs" },
                                { label: "High tops", href: "/high-tops" },
                                { label: "Low tops", href: "/low-tops" },
                                { label: "Mid tops", href: "/mid-tops" },
                                { label: "Wmns", href: "/wmns" },
                                { label: "Toddlers", href: "/toddlers" },
                                { label: "College essentials", href: "/college-essentials" },
                                { label: "Sneakerhead jewels", href: "/sneakerhead-jewels" },
                            ]}
                        />
                    </div>

                    <div>
                        <h3 className="text-gray-300 font-medium mb-4">TOP 50</h3>
                        <FooterLinks
                            links={[
                                { label: "Top 50 watches", href: "/top-50-watches" },
                                { label: "Top 50 handbags", href: "/top-50-handbags" },
                                { label: "Top 50 hoodies", href: "/top-50-hoodies" },
                                { label: "Top 50 shirts", href: "/top-50-shirts" },
                                { label: "Top 50 pants", href: "/top-50-pants" },
                                { label: "Top 50 cargos", href: "/top-50-cargos" },
                                { label: "Top 50 tshirts", href: "/top-50-tshirts" },
                                { label: "Top 50 coats", href: "/top-50-coats" },
                                { label: "Top 50 blazers", href: "/top-50-blazers" },
                                { label: "Top 50 sneakers", href: "/top-50-sneakers" },
                                { label: "Top 50 skirts", href: "/top-50-skirts" },
                                { label: "Top 50 rings", href: "/top-50-rings" },
                            ]}
                        />
                    </div>

                    <div>
                        <h3 className="text-gray-300 font-medium mb-4">KNOW MORE</h3>
                        <FooterLinks
                            links={[
                                { label: "About us", href: "/about-us" },
                                { label: "Cancellations & Returns", href: "/cancellations-returns" },
                                { label: "Shipping", href: "/shipping" },
                                { label: "Terms & Conditions", href: "/terms-conditions" },
                                { label: "Privacy Policy", href: "/privacy-policy" },
                            ]}
                        />

                        <h3 className="text-gray-300 font-medium mt-8 mb-4">CONTACT US</h3>
                        <address className="not-italic text-sm space-y-2">
                            <p>Two Horizon Centre, DLF Phase 5, Sector 43, Gurugram, Haryana 122002</p>
                            <p>K16/24 DLF Phase 2, Gurugram, Haryana 122002</p>
                        </address>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-gray-300 font-medium mb-4">SUBSCRIBE TO OUR NEWSLETTER</h3>
                            <NewsletterForm />
                        </div>

                        <div>
                            <h3 className="text-gray-300 font-medium mb-4">DOWNLOAD THE CULTURE CIRCLE APP</h3>
                            <AppDownload />
                        </div>

                        <SocialLinks />
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                    <p>© 2025 CultureCircle — All rights reserved</p>
                    <p className="mt-1">METACIRCLES TECHNOLOGIES PVT LTD</p>
                </div>
            </div>
        </footer>
    )
}
