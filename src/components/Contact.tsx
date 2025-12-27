import { Phone, MessageCircle } from 'lucide-react';
import LeadForm from './LeadForm';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50"
      aria-label="Contact CloudMirai Academy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Still Have Doubts? Speak to Our Career Counselors
          </h2>
          <p className="text-xl text-gray-600">
            Get expert guidance to choose the right cloud & DevOps career path
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Panel */}
          <div className="space-y-8">

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">

                {/* Call */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <a
                      href="tel:+919154658651"
                      className="text-blue-100 hover:text-white font-medium"
                      aria-label="Call CloudMirai Academy"
                    >
                      +91 91546 58651
                    </a>
                    <p className="text-sm text-blue-200 mt-1">
                      Mon – Sat: 9 AM – 7 PM
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/919154658651"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white font-medium"
                      aria-label="Chat on WhatsApp"
                    >
                      Chat with Counselor
                    </a>
                    <p className="text-sm text-blue-200 mt-1">
                      Quick response guaranteed
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Points */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-4">
                  Why Choose CloudMirai Academy?
                </h4>
                <ul className="space-y-3 text-blue-100 text-sm">
                  {[
                    'Industry-expert trainers',
                    'Hands-on real-time projects',
                    '100% placement assistance',
                    'Flexible batch timings',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Offer */}
            <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-xl">
              <h4 className="font-bold text-orange-900 mb-2">
                🎉 Special Offer
              </h4>
              <p className="text-orange-800">
                Book your <strong>free demo</strong> now and get{' '}
                <strong>10% off</strong> on course enrollment.
                Limited seats available!
              </p>
            </div>
          </div>

          {/* Right Panel – Form */}
          <div>
            <LeadForm source="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
