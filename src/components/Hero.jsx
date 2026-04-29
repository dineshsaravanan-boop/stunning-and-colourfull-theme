import React from 'react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb absolute -top-52 -left-52 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)' }} />
        <div className="orb-alt absolute top-1/4 -right-40 w-[420px] h-[420px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.28) 0%, transparent 70%)' }} />
        <div className="orb absolute bottom-10 left-1/3 w-[320px] h-[320px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 70%)' }} />
        <div className="orb-alt absolute top-16 right-1/4 w-[200px] h-[200px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)' }} />
      </div>
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse block" />
          <span className="text-gray-300 text-sm font-medium">Available for new projects</span>
        </div>

        {/* Heading */}
        <h1 className="heading-font font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight mb-6">
          Crafting Digital
          <br />
          <span className="gradient-text">Experiences</span>
          <br />
          That Inspire
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Hi, I'm{' '}
          <span className="text-white font-semibold">Alex Rivera</span>
          {' '}— a Full-Stack Developer & UI Designer transforming ideas into pixel-perfect, high-performance applications.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-violet-900/40">
            <span className="material-symbols-outlined" style={{fontSize:'20px'}}>rocket_launch</span>
            View My Work
          </a>
          <a href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200">
            <span className="material-symbols-outlined" style={{fontSize:'20px'}}>send</span>
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto">
          {[
            { value: '5+', label: 'Years Exp.' },
            { value: '50+', label: 'Projects Done' },
            { value: '30+', label: 'Happy Clients' },
          ].map(stat => (
            <div key={stat.label} className="glass rounded-2xl p-4 text-center card-hover">
              <div className="heading-font font-black text-2xl sm:text-3xl gradient-text leading-none mb-1">{stat.value}</div>
              <div className="text-gray-500 text-xs sm:text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <span className="material-symbols-outlined text-xl animate-bounce">keyboard_arrow_down</span>
      </div>
    </section>
  );
};