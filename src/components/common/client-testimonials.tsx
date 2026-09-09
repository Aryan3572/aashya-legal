"use client";

import { useState, useEffect } from "react";
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface Testimonial {
  id: string;
  name: string;
  initial: string;
  rating: number;
  review: string;
  isVerified: boolean;
  courtOrMatter?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sunil MONDAL",
    initial: "S",
    rating: 5,
    review: "One of the best lawyers in Kolkata High Court. He did all the due diligence with regards to my property.",
    isVerified: true,
    courtOrMatter: "Kolkata High Court",
  },
  {
    id: "2",
    name: "Rajesh Varma",
    initial: "R",
    rating: 5,
    review: "Exceptional legal counsel for our corporate advisory and contract negotiations. Extremely prompt, thorough with statutory compliances, and strategically sound.",
    isVerified: true,
    courtOrMatter: "Corporate Advisory",
  },
  {
    id: "3",
    name: "Pooja Agarwal",
    initial: "P",
    rating: 5,
    review: "Very professional and transparent team. Advised us comprehensively on our High Court writ petition with great courtroom advocacy and meticulous research.",
    isVerified: true,
    courtOrMatter: "High Court Litigation",
  },
  {
    id: "4",
    name: "Anand K. Nair",
    initial: "A",
    rating: 5,
    review: "Outstanding guidance on intellectual property rights and commercial agreements. Their attention to detail and proactive communication gave us tremendous confidence.",
    isVerified: true,
    courtOrMatter: "Commercial Dispute",
  },
  {
    id: "5",
    name: "Divyesh Patel",
    initial: "D",
    rating: 5,
    review: "The team at Aashya Legal handled our civil appeal with utmost diligence and integrity. Highly recommended for complex multi-jurisdiction matters.",
    isVerified: true,
    courtOrMatter: "Civil Appellate",
  },
];

export function ClientTestimonials({ className = "" }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className={`py-24 bg-ivory ${className}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-ink mb-3">
            Client Testimonials
          </h2>

          {/* Top 5 Gold Stars */}
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          <p className="text-xs uppercase tracking-widest text-ink/60 font-medium">
            BASED ON 1000+ REVIEWS ON GOOGLE
          </p>
        </div>

        {/* Testimonial Card Slider Container */}
        <div className="relative">
          
          {/* Card */}
          <div className="bg-white border border-ink/10 shadow-sm p-8 md:p-12 min-h-[260px] flex flex-col justify-between relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  {/* Google Logo & Rating */}
                  <div className="flex items-center gap-3 mb-6">
                    {/* Google G Logo SVG */}
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(current.rating)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="font-heading italic text-lg md:text-xl text-ink/85 leading-relaxed mb-8">
                    &ldquo;{current.review}&rdquo;
                  </blockquote>
                </div>

                {/* Client Profile Footer */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-stone-brand/60 flex items-center justify-center font-heading font-semibold text-ink text-base shrink-0">
                    {current.initial}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-ink text-sm md:text-base leading-tight">
                      {current.name}
                    </h4>
                    {current.isVerified && (
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 uppercase tracking-wider mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-600 text-white" />
                        <span>VERIFIED CLIENT</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Arrow Navigation Indicator */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-ink/30 hover:text-bronze transition-colors hidden sm:block cursor-pointer"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Slider Pagination & Mobile Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === currentIndex ? "w-8 bg-bronze" : "w-2 bg-ink/20 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                className="p-2 border border-ink/15 hover:border-bronze hover:text-bronze text-ink/70 transition-colors cursor-pointer bg-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Testimonial"
                className="p-2 border border-ink/15 hover:border-bronze hover:text-bronze text-ink/70 transition-colors cursor-pointer bg-white"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
