import { useNavigate } from 'react-router-dom';
import {
  Cloud,
  Server,
  CloudCog,
  Code,
  Star,
  Clock,
  User,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { courses } from '../data/courses';

const iconMap = {
  cloud: Cloud,
  server: Server,
  clouds: CloudCog,
  code: Code,
};

export default function Courses() {
  const navigate = useNavigate();

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Popular Courses
          </h2>
          <p className="text-xl text-gray-600">
            Industry-leading programs designed to make you job-ready
          </p>
        </div>

        {/* Courses */}
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => {
            const Icon =
              iconMap[course.icon as keyof typeof iconMap] || Cloud;

            return (
              <div
                key={course.id}
                className="bg-white border-2 border-gray-100 rounded-2xl
                hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {course.title}
                  </h3>
                  <p className="text-blue-100">{course.description}</p>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(course.rating)
                            ? 'fill-orange-400 text-orange-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 font-semibold">
                      {course.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({course.reviews})
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-100">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-semibold">{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-500">Faculty</p>
                        <p className="font-semibold">{course.faculty}</p>
                      </div>
                    </div>
                  </div>

                  {/* Batch */}
                  <div className="flex items-center justify-between bg-orange-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <div>
                        <p className="text-xs text-orange-700">Next Batch</p>
                        <p className="font-semibold">{course.nextBatch}</p>
                      </div>
                    </div>
                    <span className="bg-orange-200 text-orange-800 text-xs px-3 py-1 rounded-full">
                      {course.highlights}
                    </span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() =>
                      navigate(`/courses/${course.slug}`)
                    }
                    className="w-full bg-blue-600 text-white py-3 rounded-lg
                    font-semibold hover:bg-blue-700 transition-all
                    flex items-center justify-center gap-2"
                  >
                    Know More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
