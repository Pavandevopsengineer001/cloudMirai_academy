import { Star, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import LeadForm from './LeadForm';

interface HeroProps {
  onEnroll: () => void;
}

export default function Hero({ onEnroll }: HeroProps) {
  const scrollToCourses = () => {
    document
      .getElementById('courses')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Award className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-medium">
                India&apos;s Premier Cloud Training Institute
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                CloudMirai Academy:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                  Your Gateway to Next-Gen Tech Careers
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Master in-demand Cloud, DevOps & Full-Stack skills with
                real-time projects, industry mentors, and guaranteed placement support.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 w-fit">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>
              <div className="border-l border-white/30 pl-3">
                <p className="font-bold text-lg">4.8 / 5</p>
                <p className="text-sm text-gray-300">
                  Rated by 5,000+ Learners
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              {/* ENROLL */}
              <motion.button
                onClick={onEnroll}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                animate={{ boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 20px rgba(255,165,0,0.6)', '0 0 0 rgba(0,0,0,0)'] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                aria-label="Book a free demo session"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold
                           hover:bg-orange-600 transition-all duration-200
                           shadow-xl flex items-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Enroll Now
              </motion.button>

              {/* VIEW COURSES */}
              <button
                onClick={scrollToCourses}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg
                           font-semibold hover:bg-white/20 border border-white/30
                           transition-all duration-200"
              >
                View All Courses
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                ['5,000+', 'Students Trained', 'text-orange-400'],
                ['95%', 'Placement Rate', 'text-blue-400'],
                ['500+', 'Hiring Partners', 'text-green-400'],
              ].map(([value, label, color]) => (
                <div key={label} className="text-center">
                  <p className={`text-3xl font-bold ${color}`}>{value}</p>
                  <p className="text-gray-300 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:block"
          >
            <LeadForm source="hero" compact />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
