import React, { useState, useEffect } from 'react';

const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'pt-3 pb-3' : 'pt-5 pb-5'}`}>
      <div className={`mx-4 md:mx-auto md:max-w-5xl rounded-2xl px-5 py-3 transition-all duration-500 ${scrolled ? 'glass' : ''}`}>
        <div className="flex items-center justify-between">
          <a href="#" className="heading-font font-black text-xl tracking-tight">
            <span className="gradient-text">Alex</span>
            <span className="text-white">.dev</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide">
                {link}
              </a>
            ))}
          </div>
          <a href="#contact"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200">
            <span className="material-symbols-outlined text-base" style={{fontSize:'16px'}}>handshake</span>
            Hire Me
          </a>
          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-3 border-t border-white/10 mt-3">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-gray-300 hover:text-white text-sm font-medium py-1 transition-colors">
                {link}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)}
              className="w-fit bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-1">
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};