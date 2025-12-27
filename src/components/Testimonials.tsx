import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import CareerCTA from './CareerCTA';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /* ---------- AUTO PLAY ---------- */
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  /* ---------- Navigation ---------- */
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    startAutoPlay();
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    startAutoPlay();
  };

  /* ---------- Responsive count ---------- */
  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const getVisibleTestimonials = () => {
    const count = getVisibleCount();
    return Array.from({ length: count }, (_, i) =>
      testimonials[(currentIndex + i) % testimonials.length]
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-300">
            Hear from our alumni who transformed their careers with CloudMirai Academy
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            >
              <Quote className="w-10 h-10 text-orange-400 mb-4" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              <p className="text-gray-200 italic mb-6">
                “{testimonial.text}”
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                  <p className="text-xs text-orange-400 font-semibold mt-1">
                    Now at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <br />

      </div>
    </section>
  );
}
