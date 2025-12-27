import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  Instagram,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trendingCourses = [
    'AWS DevOps Mastery',
    'Azure Cloud Architect',
    'Multi-Cloud DevOps',
    'Full Stack Developer',
    'DevOps Engineering',
  ];

  const whatsappMessage =
    'Hi CloudMirai Academy 👋, I am interested in your Cloud & DevOps courses. Please share more details.';

  return (
    <>
      {/* FOOTER */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => scrollToSection('home')}
              >
                <img
                  src="/CloudMirai_academy_footer_logo.png"
                  alt="CloudMirai Academy - Learn Cloud the Industry Way"
                  className="h-[90px] sm:h-[110px] md:h-[130px] w-auto object-contain hover:scale-105 transition-transform"
                />
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                Your gateway to next-gen tech careers. We provide industry-leading
                training in Cloud, DevOps, and Full Stack Development with 100%
                placement assistance.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white">
                    Resources
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-lg font-bold mb-4">Trending Courses</h3>
              <ul className="space-y-3">
                {trendingCourses.map((course) => (
                  <li key={course}>
                    <button
                      onClick={() => scrollToSection('courses')}
                      className="text-gray-400 hover:text-white"
                    >
                      {course}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <span>
                    CloudMirai Academy<br />
                    Manjeera Majestic Commercial,<br />
                    Kukatpally Housing Board Colony,<br />
                    Hyderabad, Telangana – 500072
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:+919154658651" className="hover:text-white">
                    +91 91546 58651
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:admissions@cloudmirai.com" className="hover:text-white">
                    admissions@cloudmirai.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 CloudMirai Academy. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed with excellence for aspiring tech professionals
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/919154658651?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>

        {/* Button */}
        <span className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all">
          <FaWhatsapp className="w-7 h-7 text-white" />
        </span>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us!
        </span>
      </a>
    </>
  );
}
