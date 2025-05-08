import BenefitsSection from "@/components/benefits-section";
import BrandsSection from "@/components/brands-section";
import CategoryCard from "@/components/category-card";
import HeroBanner from "@/components/HeroBanner";
import TestimonialsSection from "@/components/testimonials-section";
export const metadata = {
  title: "NewEast | Home Page",
  description:
    "Buy top-quality auto parts online including engine & fuel parts, batteries, brakes, steering, and lubricants. Trusted brands. Fast delivery across the GULF.",
  keywords: [
    "auto parts",
    "car spare parts",
    "engine parts",
    "fuel system",
    "brake pads",
    "car battery",
    "lubricants",
    "bearings",
    "suspension",
    "steering",
    "automotive",
    "brands",
    "UAE auto parts",
  ],
  openGraph: {
    title: "NewEast | Home Page",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    image:
      "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/1b159ec4b93_ne.png",
    description:
      "Buy top-quality auto parts online including engine & fuel parts, batteries, brakes, steering, and lubricants. Trusted brands. Fast delivery across the GULF.",
  },
  twitter: {
    title: "NewEast | Home Page",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    image:
      "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/1b159ec4b93_ne.png",
    description:
      "Buy top-quality auto parts online including engine & fuel parts, batteries, brakes, steering, and lubricants. Trusted brands. Fast delivery across the GULF.",
  },
};
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <HeroBanner />
        {/* Popular Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Popular Categories</h2>
              <p className="text-gray-600">
                Browse our most popular product categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              <CategoryCard
                title="Engine & Fuel Parts"
                image="https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/c4a51b159ec_1.jpg"
              />
              <CategoryCard
                title="Suspension & Power Steering"
                image="https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/4a51b159ec4_2.jpg"
              />
              <CategoryCard
                title="Battery"
                image="https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/fc4a51b159e_3.jpg"
              />
              <CategoryCard
                title="Lubricant and Additives"
                image="https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/51b159ec4b9_4.jpg "
              />
              <CategoryCard
                title="Bearing"
                image="https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/a51b159ec4b_5.jpg"
              />
              <CategoryCard
                title="Brake Parts"
                image="https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/efc4a51b159_6.jpg"
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        {/* <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-sm">
              View All
            </Button>
          </div>
        </div>

        <FeaturedProducts />
      </div>
    </section> */}
        {/* Benefits Section */}
        <section className="py-16 mt-2 ">
          <div className="container mx-auto px-4">
            <BenefitsSection />
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
              <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
              <p className="text-white">What our customers say about us</p>
            </div>

            <TestimonialsSection />
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Our Brands</h2>
              <p className="text-gray-600">
                We work with the best brands in the industry
              </p>
            </div>

            <BrandsSection />
          </div>
        </section>
      </main>
    </>
  );
}
