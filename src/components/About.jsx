import React from 'react';

const techStack = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Figma', 'Tailwind CSS', 'GraphQL', 'PostgreSQL'];

const bentoCards = [
  {
    span: 'col-span-2',
    gradient: 'rgba(139,92,246,0.15), rgba(236,72,153,0.1)',
    icon: 'code',
    iconColor: 'text-violet-400',
    title: 'Clean Code Philosophy',
    desc: "I write code that's not just functional but a joy to maintain, scale, and revisit months later.",
  },
  {
    span: 'col-span-1',
    gradient: 'rgba(6,182,212,0.15), rgba(99,102,241,0.1)',
    icon: 'design_services',
    iconColor: 'text-cyan-400',
    title: 'UI/UX Design',
    desc: 'Pixel-perfect interfaces with delightful micro-interactions.',
  },
  {
    span: 'col-span-1',
    gradient: 'rgba(245,158,11,0.15), rgba(239,68,68,0.1)',
    icon: 'bolt',
    iconColor: 'text-amber-400',
    title: 'Performance First',
    desc: 'Apps that score 95+ on Lighthouse every time.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gradient-to-r from-violet-500 to-pink-500" />
              <span className="text-violet-400 text-xs font-bold tracking-[0.25em] uppercase">About Me</span>
            </div>
            <h2 className="heading-font font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Passion Meets
              <br />
              <span className="gradient-text">Precision</span>
            </h2>
            <p className="text-gray-400 text-base leading-[1.85] mb-4">
              I'm a Full-Stack Developer & UI Designer with 5+ years of experience building scalable, beautiful web applications. I specialize in React, Node.js, and modern design systems that feel alive.
            </p>
            <p className="text-gray-400 text-base leading-[1.85] mb-8">
              My approach blends technical excellence with creative vision — writing clean code while crafting interfaces that users genuinely love. Every pixel, every function, placed with intention.
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map(tech => (
                <span key={tech}
                  className="glass text-gray-300 text-sm px-4 py-2 rounded-full font-medium hover:border-violet-500/50 hover:text-white transition-all duration-200 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Bento */}
          <div className="grid grid-cols-2 gap-4">
            {bentoCards.map((card, i) => (
              <div key={i}
                className={`${card.span} glass card-hover rounded-3xl p-6`}
                style={{ background: `linear-gradient(135deg, ${card.gradient})` }}>
                <span className={`material-symbols-outlined text-3xl ${card.iconColor} mb-3 block`}>{card.icon}</span>
                <h3 className="heading-font font-bold text-white text-base mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};