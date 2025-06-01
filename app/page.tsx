import Navbar from "@/components/navbar"
import ProductGallery from "@/components/product-gallery"
import AuthenticationCards from "@/components/authentication-cards"
import SizeSelector from "@/components/size-selector"
import PriceComparison from "@/components/price-comparison"
import AddToCartSection from "@/components/add-to-cart-section"
import ProductDescription from "@/components/product-description"
import ProductHighlights from "@/components/product-highlights"
import FAQ from "@/components/faq"
import WhyCultureCircle from "@/components/why-culture-circle"
import Testimonials from "@/components/testimonials"
import RelatedProducts from "@/components/related-products"
import TrendingProducts from "@/components/trending-products"
import CultureCashPromo from "@/components/culture-cash-promo"
import Footer from "@/components/footer"

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Left column - Product Gallery */}
          <div>
            <ProductGallery />
          </div>

          {/* Right column - Product Details */}
          <div className="space-y-6">
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold">Air Jordan 1 Retro High Og Volt Gold</h1>
              <div className="flex items-center mt-2">
                <button className="flex items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="ml-1">578</span>
                </button>
              </div>
            </div>

            <AuthenticationCards />
            <SizeSelector />
            <PriceComparison />
            <AddToCartSection />
            <ProductDescription />
          </div>
        </div>

        <CultureCashPromo />
        <ProductHighlights />
        <FAQ />
        <WhyCultureCircle />
        <Testimonials />
        <RelatedProducts title="VIBRANT MULTICOLOR FINDS" />
        <TrendingProducts />
      </div>
      <Footer />
    </main>
  )
}
