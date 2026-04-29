import React from 'react';

const skills = [
  { name: 'React / Next.js',    level: 95, from: '#06b6d4', to: '#6366f1', icon: 'hub' },
  { name: 'TypeScript',         level: 90, from: '#6366f1', to: '#8b5cf6', icon: 'code_blocks' },
  { name: 'Node.js / Express',  level: 88, from: '#10b981', to: '#06b6d4', icon: 'dns' },
  { name: 'UI/UX & Figma',      level: 93, from: '#ec4899', to: '#f43f5e', icon: 'palette' },
  { name: 'Tailwind CSS',       level: 97, from: '#38bdf8', to: '#06b6d4', icon: 'brush' },
  { name: 'PostgreSQL',         level: 80, from: '#f59e0b', to: '#f97316', icon: 'database' },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)' }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-violet-500" />
            <span className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase">Expertise</span>
            <div className="w-8 h-px bg-gradient-to-l from-cyan-500 to-violet-500" />
          </div>
          <h2 className="heading-font font-black text-4xl md:text-5xl text-white mb-4">
            Skills &{' '}
            <span className="gradient-text-cyan">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-base">The tools and technologies I wield to bring great ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {skills.map(skill => (
            <div key={skill.name} className="glass card-hover rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${skill.from}, ${skill.to})` }}>
                    <span className="material-symbols-outlined text-white" style={{fontSize:'20px'}}>{skill.icon}</span>
                  </div>
                  <span className="text-white font-semibold text-sm">{skill.name}</span>
                </div>
                <span className="heading-font font-black text-base"
                  style={{ background: `linear-gradient(135deg, ${skill.from}, ${skill.to})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.from}, ${skill.to})` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};