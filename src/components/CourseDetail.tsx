import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { courses } from '../data/courses';
import {
  ArrowLeft,
  Clock,
  Star,
  Wrench,
  Briefcase,
  CheckCircle,
  ChevronDown,
} from 'lucide-react';
import Contact from '../components/Contact';

export default function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const course = courses.find((c) => c.slug === slug);

  /* 🔑 FIX: Always open page at top */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  if (!course) {
    return (
      <div className="py-32 text-center">
        <p className="text-xl text-gray-600">Course not found</p>
      </div>
    );
  }

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-300 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Courses
          </button>

          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold">
            Job-Ready Program
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {course.title}
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl">
            {course.description}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <Stat icon={Clock} label="Duration" value={course.duration} />
            <Stat icon={Star} label="Rating" value={`${course.rating} / 5`} />
            <Stat icon={Briefcase} label="Faculty" value={course.faculty} />
            <Stat icon={CheckCircle} label="Projects" value={course.highlights} />
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-16">

            {/* WHAT YOU'LL LEARN */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                What You’ll Learn
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {course.syllabus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TOOLS */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Tools & Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {course.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium"
                  >
                    <Wrench className="inline w-4 h-4 mr-1" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CAREER OUTCOMES */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Career Outcomes
              </h2>
              <ul className="space-y-3">
                {course.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-center gap-3 text-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ SECTION */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq, index) => (
                  <div
                    key={index}
                    className="border rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full flex items-center justify-between px-6 py-4 font-semibold text-left bg-gray-50 hover:bg-gray-100"
                    >
                      {faq.q}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {openFaq === index && (
                      <div className="px-6 py-4 text-gray-600 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT – STICKY CTA */}
          <div className="lg:sticky lg:top-28 h-fit">
            <div className="border rounded-2xl p-6 shadow-xl bg-white">
              <h3 className="text-2xl font-bold mb-4">
                Book Free Demo
              </h3>

              <p className="text-gray-600 mb-6">
                Talk to our career counselor and get a personalized roadmap.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all"
              >
                Schedule Demo
              </button>

              <p className="text-sm text-gray-500 mt-4 text-center">
                No payment required • Limited seats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <Contact />
    </>
  );
}

/* ===== SMALL COMPONENTS ===== */

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-orange-400" />
        <div>
          <p className="text-sm text-gray-300">{label}</p>
          <p className="font-bold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

const FAQS = [
  {
    q: 'Is this course suitable for beginners?',
    a: 'Yes. We start from fundamentals and gradually move to advanced real-world DevOps practices.',
  },
  {
    q: 'Do you provide placement assistance?',
    a: 'Yes. We offer 100% placement assistance including resume preparation and mock interviews.',
  },
  {
    q: 'Are projects real-time and industry-based?',
    a: 'Absolutely. All projects are designed based on real production scenarios.',
  },
  {
    q: 'Will I get access to recorded sessions?',
    a: 'Yes. All enrolled students receive session recordings for revision.',
  },
];
