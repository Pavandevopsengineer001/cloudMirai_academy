import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CareerCTAProps {
  onStart?: () => void; // optional – open modal or scroll
}

export default function CareerCTA({ onStart }: CareerCTAProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center text-white">
        {/* Animated content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Still looking for a{' '}
            <span className="text-yellow-400">Job?</span>
          </h2>

          {/* Sub text */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Get the skills companies are actively hiring for. Learn from
            industry experts and build a job-ready career in
            <span className="text-white font-semibold">
              {' '}
              Cloud, DevOps, Full Stack & AI-driven technologies
            </span>{' '}
            — with dedicated placement support.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 0 rgba(0,0,0,0)',
                  '0 0 25px rgba(250,204,21,0.6)',
                  '0 0 0 rgba(0,0,0,0)',
                ],
              }}
              transition={{ repeat: Infinity, duration: 2.8 }}
              onClick={onStart}
              className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900
                         px-10 py-4 rounded-lg font-bold text-lg
                         hover:bg-yellow-300 transition-all shadow-xl"
            >
              Start Your Career
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
