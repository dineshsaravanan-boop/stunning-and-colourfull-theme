import React from 'react';

const projects = [
  {
    title: 'NovaPay',
    category: 'Fintech Platform',
    description: 'A premium digital wallet with real-time transactions, AI-powered spending insights, and beautiful analytics dashboards.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    gradient: 'linear-gradient(135deg, #7c3aed, #9333ea, #ec4899)',
    icon: 'payments',
    featured: true,
  },
  {
    title: 'ArcSpace',
    category: 'SaaS Design Tool',
    description: 'A real-time collaborative design platform for distributed teams with smart component libraries.',
    tags: ['Next.js', 'WebSockets', 'Figma API'],
    gradient: 'linear-gradient(135deg, #0891b2, #4f46e5, #7c3aed)',
    icon: 'space_dashboard',
    featured: false,
  },
  {
    title: 'Luminary',
    category: 'E-Commerce',
    description: 'Luxury jewelry store with 3D product visualization and AR try-on powered by WebGL.',
    tags: ['React', 'Three.js', 'Stripe'],
    gradient: 'linear-gradient(135deg, #d97706, #ea580c, #db2777)',
    icon: 'diamond',
    featured: false,
  },
  {
    title: 'PulseAI',
    category: 'AI Dashboard',
    description: 'ML-powered business analytics with real-time forecasting, predictive insights, and custom reporting.',
    tags: ['Next.js', 'Python', 'TensorFlow'],
    gradient: 'linear-gradient(135deg, #059669, #0891b2, #4f46e5)',
    icon: 'insights',
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-gradient-to-r from-pink-500 to-amber-500" />
            <span className="text-pink-400 text-xs font-bold tracking-[0.25em] uppercase">Portfolio</span>
            <div className="w-8 h-px bg-gradient-to-l from-pink-500 to-amber-500" />
          </div>
          <h2 className="heading-font font-black text-4xl md:text-5xl text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-base">A curated selection of my most impactful and visually striking work.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured */}
          {projects.filter(p => p.featured).map(p => (
            <div key={p.title} className="md:col-span-2 glass card-hover rounded-3xl overflow-hidden">
              <div className="relative h-64 flex items-center justify-center overflow-hidden" style={{ background: p.gradient }}>
                <div className="absolute inset-0"
                  style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
                <span className="material-symbols-outlined text-white/20 select-none" style={{fontSize:'120px'}}>{p.icon}</span>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
                    ★ Featured
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-pink-400 text-xs font-bold tracking-widest uppercase">{p.category}</span>
                    <h3 className="heading-font font-black text-3xl text-white mt-1">{p.title}</h3>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button className="glass w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                      <span className="material-symbols-outlined" style={{fontSize:'18px'}}>open_in_new</span>
                    </button>
                    <button className="glass w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                      <span className="material-symbols-outlined" style={{fontSize:'18px'}}>code</span>
                    </button>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Others */}
          {projects.filter(p => !p.featured).map(p => (
            <div key={p.title} className="glass card-hover rounded-3xl overflow-hidden">
              <div className="relative h-48 flex items-center justify-center overflow-hidden" style={{ background: p.gradient }}>
                <div className="absolute inset-0"
                  style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                <span className="material-symbols-outlined text-white/25 select-none" style={{fontSize:'88px'}}>{p.icon}</span>
              </div>
              <div className="p-6">
                <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">{p.category}</span>
                <h3 className="heading-font font-black text-xl text-white mt-1 mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};