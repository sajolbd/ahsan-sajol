"use client";

export default function ImpactSection() {
  const data = [
    {
      title: "E-commerce Platform Optimization",
      desc: "Combined technical SEO with performance optimization to achieve 250% increase in organic traffic and 40% improvement in conversion rate.",
      stats: [
        { label: "Organic Traffic", value: "+250%" },
        { label: "Conversion Rate", value: "+40%" },
        { label: "Core Web Vitals", value: "All Green" },
      ],
    },
    {
      title: "SaaS Dashboard Redesign",
      desc: "Rebuilt frontend architecture with SEO-first approach, resulting in 180% growth in organic sign-ups and improved user engagement.",
      stats: [
        { label: "Organic Sign-ups", value: "+180%" },
        { label: "Page Load Time", value: "-60%" },
        { label: "User Engagement", value: "+35%" },
      ],
    },
    {
      title: "Content Platform SEO Strategy",
      desc: "Implemented comprehensive SEO strategy including schema markup, optimized content structure, and technical improvements.",
      stats: [
        { label: "Search Rankings", value: "Top 3" },
        { label: "Backlinks", value: "+500%" },
        { label: "Domain Authority", value: "+15 points" },
      ],
    },
  ];

  return (
    <section id="features" className="bg-primary text-white md:py-12 py-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-accent text-sm mb-2">IMPACT</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            SEO & Performance <span className="text-accent">Impact</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Combining development expertise with SEO strategies for measurable
            results
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 w-full max-w-[1100px] mx-auto">
          {data.map((item, i) => (
            <div
              key={i}
              className="group mx-auto w-full max-w-[340px] bg-[#0b0f2a] border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-[0_14px_28px_rgba(255,122,24,0.2)]"
            >
              <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition">
                {item.title}
              </h3>

              <p className="text-white/60 text-xs leading-relaxed mb-4">
                {item.desc}
              </p>

              <div className="border-t border-white/10 pt-3 space-y-2 text-xs">
                {item.stats.map((stat, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="text-white/70">{stat.label}:</span>
                    <span className="text-accent font-medium">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
