import React, { useState, useEffect } from 'react';
import { Activity, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Visualização', id: 'visualizacao' },
    { label: 'Mecanismos', id: 'mecanismos' },
    { label: 'Comparação', id: 'comparacao' },
    { label: 'Glossário', id: 'glossario' },
    { label: 'Referências', id: 'referencias' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-slate-900/0 py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className={`flex items-center gap-2 font-bold text-xl transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
          <div className="bg-emerald-500 p-1.5 rounded-lg text-white">
            <Activity size={20} />
          </div>
          <span>EvoGraph</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium hover:text-emerald-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg p-4 md:hidden flex flex-col gap-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left py-2 text-slate-600 font-medium border-b border-slate-50 last:border-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;