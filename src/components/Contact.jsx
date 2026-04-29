import React from 'react';

const contactInfo = [
  { icon: 'mail',        label: 'Email',        value: 'alex@portfolio.dev',  from: '#7c3aed', to: '#ec4899' },
  { icon: 'location_on', label: 'Location',     value: 'San Francisco, CA',   from: '#0891b2', to: '#4f46e5' },
  { icon: 'schedule',    label: 'Availability', value: 'Open to Projects',    from: '#d97706', to: '#ea580c' },
];

const socials = [
  { icon: 'code',             label: 'GitHub'   },
  { icon: 'work',             label: 'LinkedIn' },
  { icon: 'alternate_email',  label: 'Twitter'  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-gradient-to-r from-violet-500 to-cyan-500" />
            <span className="text-violet-400 text-xs font-bold tracking-[0.25em] uppercase">Contact</span>
            <div className="w-8 h-px bg-gradient-to-l from-violet-500 to-cyan-500" />
          </div>
          <h2 className="heading-font font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
            Let's Build Something<br />
            <span className="gradient-text">Incredible Together</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">Have a project in mind? I'd love to hear about it and create something extraordinary.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Info panel */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {contactInfo.map(info => (
              <div key={info.label} className="glass card-hover rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${info.from}, ${info.to})` }}>
                  <span className="material-symbols-outlined text-white" style={{fontSize:'20px'}}>{info.icon}</span>
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-0.5">{info.label}</div>
                  <div className="text-white text-sm font-semibold">{info.value}</div>
                </div>
              </div>
            ))}
            <div className="glass rounded-2xl p-5">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">Find Me On</p>
              <div className="flex gap-3">
                {socials.map(s => (
                  <button key={s.label}
                    className="flex-1 glass rounded-xl py-3 flex flex-col items-center gap-1 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                    <span className="material-symbols-outlined" style={{fontSize:'20px'}}>{s.icon}</span>
                    <span className="text-xs font-medium">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 glass rounded-3xl p-7 md:p-8">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[{ label: 'Name', type: 'text', placeholder: 'John Doe' }, { label: 'Email', type: 'email', placeholder: 'john@example.com' }].map(f => (
                  <div key={f.label}>
                    <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500 transition-colors" />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block">Subject</label>
                <input type="text" placeholder="Project Collaboration"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500 transition-colors" />
              </div>
              <div>
                <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block">Message</label>
                <textarea rows={5} placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-violet-900/30">
                <span className="material-symbols-outlined" style={{fontSize:'20px'}}>send</span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};