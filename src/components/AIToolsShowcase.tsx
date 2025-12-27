export default function AIToolsShowcase() {
  const tools = [
    { name: 'Claude', slug: 'anthropic' },
    { name: 'ChatGPT', slug: 'openai' },
    { name: 'Grok', slug: 'x' },
    { name: 'Gemini', slug: 'google' },
    { name: 'Windsurf', slug: 'windsurf' },
    { name: 'GitHub Copilot', slug: 'githubcopilot' },
    { name: 'Cursor', slug: 'cursor' },
    { name: 'Perplexity', slug: 'perplexity' },
  ];

  const iconUrl = (slug: string) =>
    `https://cdn.simpleicons.org/${slug}/000000`;

  return (
    <section
      id="ai-tools"
      className="
        relative
        py-20
        bg-white
        overflow-hidden
        scroll-mt-28
        border-t
        border-gray-200
      "
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.03)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.03)_50%,rgba(0,0,0,0.03)_75%,transparent_75%,transparent)] bg-[length:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500">Train Smarter:</span>{' '}
          <span className="text-slate-900">
            Hands-On with Global AI Tools
          </span>
        </h2>

        {/* Logo Marquee */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 overflow-hidden">
          <div className="flex items-center gap-14 animate-marquee whitespace-nowrap">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool.slug}-${index}`}
                className="
                  flex
                  items-center
                  justify-center
                  min-w-[140px]
                  opacity-60
                  hover:opacity-100
                  transition-all
                  duration-300
                "
                title={tool.name}
              >
                <img
                  src={iconUrl(tool.slug)}
                  alt={tool.name}
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
