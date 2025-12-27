import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Clock,
  Users,
  Lightbulb,
  Trophy,
  FileCheck,
  Calendar,
} from 'lucide-react';

/* -------------------------
   Counter Component
-------------------------- */
function Counter({
  end,
  suffix = '+',
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let current = 0;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* -------------------------
   About Component
-------------------------- */
export default function About() {
  const features = useMemo(
    () => [
      {
        icon: Clock,
        title: '24/7 Lab Access & Support',
        description:
          'Practice anytime with round-the-clock access to cloud labs and a dedicated support team.',
      },
      {
        icon: Users,
        title: '1:1 Mentorship',
        description:
          'Personalized guidance from industry experts with real-world production experience.',
      },
      {
        icon: Lightbulb,
        title: 'Real-Time Projects',
        description:
          'Work on live, industry-grade projects to build strong hands-on expertise.',
      },
      {
        icon: Trophy,
        title: '100% Placement Assistance',
        description:
          'End-to-end placement support until you land a role in a top tech company.',
      },
      {
        icon: FileCheck,
        title: 'Resume & Interview Prep',
        description:
          'ATS-friendly resumes, mock interviews, and technical interview coaching.',
      },
      {
        icon: Calendar,
        title: 'Flexible Batches',
        description:
          'Weekday and weekend batches designed for students and working professionals.',
      },
    ],
    []
  );

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Why Choose CloudMirai Academy?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            CloudMirai Academy is a premier training hub for Cloud and DevOps.
            Our programs follow a{' '}
            <span className="font-semibold text-blue-600">
              role-based, industry-driven approach
            </span>{' '}
            to ensure you are job-ready from day one.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="
                  bg-white p-8 rounded-xl border border-gray-100
                  shadow-md hover:shadow-2xl
                  transition-all duration-300 hover:-translate-y-2
                  focus-within:ring-2 focus-within:ring-blue-500
                "
              >
                <div
                  className="
                    w-16 h-16 mb-6 rounded-xl
                    bg-gradient-to-br from-blue-500 to-orange-500
                    flex items-center justify-center
                    transition-transform duration-300 hover:rotate-12
                  "
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight Section */}
        <div className="mt-20 rounded-2xl p-10 sm:p-12 text-center text-white shadow-2xl bg-gradient-to-r from-blue-600 to-blue-800">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Industry-Driven Curriculum
          </h3>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our curriculum is built by professionals who have worked in real
            production environments. We focus on skills companies actually hire
            for — not just theory.
          </p>

          {/* LIVE STATS */}
          <div className="flex flex-wrap justify-center gap-12 mt-10">
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-400">
                <Counter end={10} />
              </p>
              <p className="text-blue-100 mt-1">Years Experience</p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-bold text-orange-400">
                <Counter end={50} />
              </p>
              <p className="text-blue-100 mt-1">Expert Trainers</p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-bold text-orange-400">
                <Counter end={15} />
              </p>
              <p className="text-blue-100 mt-1">Certification Tracks</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
