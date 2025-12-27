import { Building2 } from 'lucide-react';

const partners = [
  'Google', 'Amazon', 'Microsoft', 'TCS', 'Infosys',
  'Wipro', 'Cognizant', 'Accenture', 'IBM', 'Oracle',
  'Capgemini', 'HCL', 'Tech Mahindra', 'Dell', 'SAP',
];

export default function Partners() {
  return (
    <section
      className="py-16 bg-white border-t border-b border-gray-200"
      aria-label="Placement Partners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Our Placement Partners
          </h3>
          <p className="text-gray-600">
            Join 500+ companies that hire our graduates
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="mx-6 flex items-center justify-center"
                aria-hidden={index >= partners.length}
              >
                <div
                  className="
                    min-w-[180px] sm:min-w-[200px]
                    px-6 py-5
                    rounded-xl
                    bg-gradient-to-br from-blue-50 to-gray-50
                    border border-gray-200
                    hover:border-blue-300 hover:shadow-lg
                    transition-all duration-300
                    flex items-center justify-center gap-3
                  "
                >
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <span className="text-base font-semibold text-slate-900">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Tailwind animation */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
