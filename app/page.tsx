import BenefitsSection from "@/components/benefits-section";
import BrandsSection from "@/components/brands-section";
import CategoryCard from "@/components/category-card";
import HeroBanner from "@/components/HeroBanner";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
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
              image="/assets/images/categories/1.jpg"
            />
            <CategoryCard
              title="Suspension & Power Steering"
              image="/assets/images/categories/2.jpg"
            />
            <CategoryCard
              title="Battery"
              image="/assets/images/categories/3.jpg"
            />
            <CategoryCard
              title="Lubricant and Additives"
              image="/assets/images/categories/4.jpg"
            />
            <CategoryCard
              title="Bearing"
              image="/assets/images/categories/5.jpg"
            />
            <CategoryCard
              title="Brake Parts"
              image="/assets/images/categories/6.jpg"
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
  );
}
