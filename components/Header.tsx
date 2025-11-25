import React from 'react';
import { Info, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header id="home" className="bg-slate-900 text-white pt-32 pb-32 px-6 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-500 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 -left-20 w-72 h-72 bg-indigo-500 rounded-full blur-[100px]" 
        />
        <svg className="absolute bottom-0 w-full h-24 text-slate-50" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L 50 40 L 100 100 Z" fill="currentColor" opacity="0.05" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Biologia Evolutiva Interativa</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Padrões da <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Biodiversidade</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore visualmente como a vida se molda através da <strong>Radiação Adaptativa</strong> e da <strong>Convergência Evolutiva</strong>, impulsionada pelos motores da seleção natural e genética.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm font-medium">
            <button 
              onClick={() => document.getElementById('visualizacao')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
            >
              <MousePointerClick size={18} />
              Iniciar Experiência
            </button>
            <button 
              onClick={() => document.getElementById('mecanismos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
            >
              Ver Mecanismos
            </button>
          </div>
        </motion.div>
      </div>

      {/* Source Button Bottom Right */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20">
        <button 
          onClick={() => document.getElementById('referencias')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-emerald-400 transition-colors bg-slate-900/50 hover:bg-slate-900 px-3 py-2 rounded-lg backdrop-blur-md border border-slate-700/50 hover:border-emerald-500/50 shadow-sm hover:shadow-emerald-900/20"
          aria-label="Ver fontes de pesquisa"
        >
          <Info size={14} />
          <span>Fontes de Pesquisa</span>
        </button>
      </div>
    </header>
  );
};

export default Header;