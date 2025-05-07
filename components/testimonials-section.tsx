"use client";

import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Star } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { AnimatePresence, motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Zach",
      country: "Uzbekistan",
      rating: 5,
      testimonial:
        "Booking the products was excellent. Delivered the products on time as mentioned by the sales team. Hassle-free service providers for new customers like...",
      initial: "Z",
    },
    {
      id: 2,
      name: "Sarah",
      country: "Canada",
      rating: 5,
      testimonial:
        "Never having done business with them I was skeptical but it was everything as advertised and a good price and was delivered faster than expected.",
      initial: "S",
    },
    {
      id: 3,
      name: "Michael",
      country: "Australia",
      rating: 5,
      testimonial:
        "Excellent service, extremely satisfied with the sales transaction and the customer service far exceeded my high expectations and requests!",
      initial: "M",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () =>
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      ),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="relative" {...swipeHandlers}>
      <div className="max-w-3xl mx-auto min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-red-500/50 backdrop-blur-sm rounded-lg p-8 transition-all cursor-move"
          >
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-red-600 font-bold text-xl">
                {testimonials[currentIndex].initial}
              </Avatar>
              <div className="flex flex-col">
                <div className="flex mb-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="italic text-white">
                  "{testimonials[currentIndex].testimonial}"
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-semibold">
                {testimonials[currentIndex].name} •{" "}
                {testimonials[currentIndex].country}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute  left-0 right-0 flex justify-center gap-2 ">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
