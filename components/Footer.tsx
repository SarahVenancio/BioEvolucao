import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-slate-900">
            <BookOpen size={20} />
          </div>
          EvoGraph
        </div>
        
        <p className="text-sm text-center md:text-right max-w-md">
          Projeto educativo demonstrativo. Imagens e textos simplificados para fins didáticos sobre biologia evolutiva.
        </p>
      </div>
      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-slate-800 text-xs text-center text-slate-600">
        &copy; {new Date().getFullYear()} EvoGraph. Desenvolvido com React & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;
