import { useState } from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import LearningJourney from '../components/LearningJourney';
import AIToolsShowcase from '../components/AIToolsShowcase';
import Courses from '../components/Courses';
import TrainingOptions from '../components/TrainingOptions';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import CareerCTA from '../components/CareerCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import DemoModal from '../components/DemoModal';

export default function LandingPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-[112px]">
      {/* HEADER */}
      <Header onOpenDemo={() => setIsDemoOpen(true)} />

      {/* HERO */}
      <Hero onEnroll={() => setIsDemoOpen(true)} />

      {/* CORE CONTENT */}
      <About />
      <LearningJourney />
      <AIToolsShowcase />
      <Courses />
      <TrainingOptions />
      <Testimonials />
      <Partners />

      {/* 🔥 HIGH-CONVERSION CTA (correct place) */}
      <CareerCTA onStart={() => setIsDemoOpen(true)} />

      {/* CONTACT & FOOTER */}
      <Contact />
      <Footer />

      {/* UTILITIES */}
      <ScrollToTop />

      {/* MODAL (single source of truth) */}
      <DemoModal
        open={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
}
