import { School, Laptop, Video } from 'lucide-react';

const trainingOptions = [
  {
    title: 'Classroom Training',
    icon: School,
    points: [
      'Learn directly from industry expert trainers',
      'Hands-on practice in real cloud labs',
      'Mock interviews & peer learning',
      'Projects & assignments with guidance',
      'Doubts cleared instantly',
    ],
    accent: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Online Training (Live)',
    icon: Laptop,
    points: [
      'Interactive live classes with mentors',
      'Learn from anywhere, anytime',
      'Real-time Q&A and discussions',
      'Live projects & assignments',
      'Flexible schedules for professionals',
    ],
    accent: 'from-indigo-500 to-indigo-700',
    highlighted: true, // ⭐ Recommended badge
  },
  {
    title: 'Video-Based Learning',
    icon: Video,
    points: [
      'Access to high-quality recorded classes',
      'Learn at your own pace, anytime',
      'Lifetime access to course materials',
      'Self-paced projects & practice assignments',
      'Perfect for revision & career upskilling',
    ],
    accent: 'from-slate-500 to-slate-700',
  },
];

export default function TrainingOptions() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Training Options at{' '}
            <span className="text-orange-400">CloudMirai Academy</span>
          </h2>
          <p className="text-xl text-gray-300">
            Choose the learning mode that fits your schedule, experience, and career goals
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainingOptions.map((option, index) => {
            const Icon = option.icon;

            return (
              <div
                key={index}
                className={`
                  relative bg-white text-slate-900 rounded-2xl p-8 shadow-2xl
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-3xl
                  ${option.highlighted ? 'ring-4 ring-orange-400 scale-[1.03]' : ''}
                `}
              >
                {/* Recommended Badge */}
                {option.highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.accent} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-6">
                  {option.title}
                </h3>

                {/* Points */}
                <ul className="space-y-3 text-gray-700">
                  {option.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Enquire Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
