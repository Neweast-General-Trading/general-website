"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface BannerSlide {
  image: string;
  title: string;
  stats: string[];

  description: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides: BannerSlide[] = [
  {
    image:
      "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/b561e2de989_WebsiteBanner-01.png",
    title: "Premium OEM Parts",
    subtitle: "Extensive Inventory",
    stats: ["50,000+ Parts", "100+ Brands", "24/6 Support"],
    description: "Importer and distributor of aftermarket automotive parts",
    buttonText: "Order Now",
    buttonLink: "#",
  },
  {
    image:
      "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/3b561e2de98_WebsiteBanner-02.png",
    title: "Extensive brands for selection",
    subtitle: "Competitive Pricing",
    stats: ["Flexible ordering", "Efficient delivery", "Dedicated Support"],
    description: "Exposure to multiple markets",
    buttonText: "Shop Now",
    buttonLink: "#",
  },
  {
    image:
      "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/e3b561e2de9_WebsiteBanner-03.png",
    title: "Quality parts",
    subtitle: "Parts of reliable brands",
    stats: [
      "100% Authentic",
      "Demographic Coverage",
      "Easy access to ordering",
    ],
    description: "Flexible OEM specifications",
    buttonText: "Explore",
    buttonLink: "#",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-neweast-gray">
      <AnimatePresence initial={false}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${
              currentSlide === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="relative  flex h-full max-w-7xl items-center  md:mx-40  px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-3xl">
                {/* Subtitle */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-2 text-lg font-medium text-blue-400"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Title */}
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl"
                >
                  {slides[currentSlide].title}
                </motion.h2>

                {/* Stats */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8 flex gap-6"
                >
                  {slides[currentSlide].stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm"
                    >
                      <span className="text-sm font-medium text-white">
                        {stat}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mb-8 max-w-2xl text-lg text-gray-300"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>
            </div>
          </div>
        ))}
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
