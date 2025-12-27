import { useState, useEffect } from 'react';
import { Mail, Phone, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeaderProps {
  onOpenDemo: () => void;
}

/* 🔑 Primary navigation sections only */
const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'courses', label: 'Courses' },
  { id: 'testimonials', label: 'Resources' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ onOpenDemo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [ctaPulse, setCtaPulse] = useState(false);

  /* ---------------- SCROLL ANIMATIONS ---------------- */
  const { scrollY } = useScroll();

  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ['0 0 0 rgba(0,0,0,0)', '0 10px 30px rgba(0,0,0,0.12)']
  );

  const headerY = useTransform(scrollY, [0, 80], [0, -4]);
  const logoScale = useTransform(scrollY, [0, 120], [1, 0.85]);

  /* ---------------- ACTIVE SECTION OBSERVER ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-120px 0px -40% 0px', // ✅ FIXED HEADER OFFSET
        threshold: 0.01,
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ---------------- CTA ATTENTION ANIMATION ---------------- */
  useEffect(() => {
    const unsub = scrollY.onChange((v) => {
      if (v > 400 && !ctaPulse) {
        setCtaPulse(true);
      }
    });
    return () => unsub();
  }, [ctaPulse, scrollY]);

  /* ---------------- SMOOTH SCROLL WITH OFFSET ---------------- */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 112; // header height
    const y =
      el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      style={{ boxShadow: headerShadow, y: headerY }}
      className="fixed top-0 left-0 right-0 z-50 bg-white"
    >
      {/* ---------------- TOP BAR ---------------- */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between text-sm">
          <a
            href="mailto:admissions@cloudmirai.com"
            className="flex gap-2 hover:text-orange-400 transition"
          >
            <Mail className="w-4 h-4" />
            admissions@cloudmirai.com
          </a>
          <a
            href="tel:+919154658651"
            className="flex gap-2 hover:text-orange-400 transition"
          >
            <Phone className="w-4 h-4" />
            +91 91546 58651
          </a>
        </div>
      </div>

      {/* ---------------- NAV ---------------- */}
      <nav>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">

            {/* LOGO */}
            <motion.div
              style={{ scale: logoScale }}
              onClick={() => scrollToSection('home')}
              className="cursor-pointer origin-left select-none"
            >
              <img
                src="/CloudMirai_academy.png"
                alt="CloudMirai Academy"
                className="h-[56px] object-contain"
              />
            </motion.div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex gap-8">
              {SECTIONS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative font-medium transition ${
                    activeSection === id
                      ? 'text-blue-600'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {label}

                  {activeSection === id && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              animate={
                ctaPulse ? { scale: [1, 1.08, 1] } : { scale: 1 }
              }
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <button
                onClick={onOpenDemo}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold
                           hover:bg-orange-600 transition
                           shadow-[0_0_0_rgba(0,0,0,0)]
                           hover:shadow-[0_0_25px_rgba(249,115,22,0.45)]"
              >
                Book Free Demo
              </button>
            </motion.div>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white px-4 py-4 space-y-3 shadow-md">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left font-medium ${
                  activeSection === id
                    ? 'text-blue-600'
                    : 'text-slate-700'
                }`}
              >
                {label}
              </button>
            ))}

            <button
              onClick={() => {
                onOpenDemo();
                setIsMenuOpen(false);
              }}
              className="w-full bg-orange-500 text-white py-3 rounded-lg mt-4"
            >
              Book Free Demo
            </button>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
