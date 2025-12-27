import { CheckCircle } from 'lucide-react';

export default function LearningJourney() {
  const steps = [
    {
      step: 1,
      title: 'Registration',
      desc: 'Enroll with us and start your learning journey towards a successful tech career.',
    },
    {
      step: 2,
      title: 'Structured Course Modules',
      desc: 'Follow industry-aligned modules designed from beginner to advanced level.',
    },
    {
      step: 3,
      title: 'Hands-On Projects',
      desc: 'Work on real-world projects to apply your skills and build confidence.',
    },
    {
      step: 4,
      title: 'Assessments & Mock Interviews',
      desc: 'Evaluate your knowledge with regular assessments and interview preparation.',
    },
    {
      step: 5,
      title: '100% Job Assistance',
      desc: 'Get dedicated support for resume building, interviews, and placements.',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:28px_28px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Welcome to{' '}
            <span className="text-orange-400">CloudMirai Academy</span>
          </h2>

          <p className="text-orange-300 font-semibold mb-6">
            Transforming Ambition into IT Excellence
          </p>

          <div className="space-y-5 text-gray-200 leading-relaxed">
            <p>
              CloudMirai Academy is built for IT aspirants who want real-world
              skills, hands-on experience, and complete placement support.
              Our programs are designed by industry experts and aligned with
              modern cloud & DevOps job requirements.
            </p>

            <p>
              We combine structured learning, practical projects, and career
              guidance to ensure you become job-ready. Whether you are a
              fresher or a working professional, our training adapts to your
              growth path.
            </p>

            <p>
              From instructor-led sessions to real-time labs and interview
              readiness, we support you at every stage of your career journey.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3 text-green-400 font-semibold">
            <CheckCircle className="w-5 h-5" />
            ISO-aligned training • Industry mentors • Placement focused
          </div>
        </div>

        {/* RIGHT TIMELINE */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/30" />

          <div className="space-y-10">
            {steps.map((item) => (
              <div key={item.step} className="relative flex gap-6">
                {/* step circle */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>

                {/* content */}
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
