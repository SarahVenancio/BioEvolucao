import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Minus, Plus, X, Zap } from 'lucide-react';
import { MECHANISMS } from '../constants';
import { Mechanism } from '../types';

const Mechanisms: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="mecanismos" className="py-24 px-6 max-w-7xl mx-auto bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mecanismos Evolutivos</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Como a biodiversidade é moldada? Entenda os motores biológicos que impulsionam a mudança e como eles afetam a variação genética.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MECHANISMS.map((mech) => (
          <MechanismCard 
            key={mech.id} 
            mechanism={mech} 
            isSelected={selectedId === mech.id}
            onClick={() => setSelectedId(mech.id)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative shadow-2xl overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-slate-800/50 p-2 rounded-full hover:bg-slate-800"
              >
                <X size={20} />
              </button>
              
              {MECHANISMS.filter(m => m.id === selectedId).map(mech => (
                <div key={mech.id} className="flex flex-col lg:flex-row gap-10 relative z-10">
                  <div className="shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 rotate-3 transform">
                      <mech.icon size={40} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-3xl font-bold">{mech.title}</h3>
                        <span className="px-3 py-1 rounded-full bg-slate-700 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-slate-600">
                            {mech.impact === 'increase' ? 'Aumenta Variabilidade' : mech.impact === 'decrease' ? 'Reduz Variabilidade' : 'Impacto Variável'}
                        </span>
                    </div>
                    
                    <p className="text-xl text-slate-300 mb-8 font-light">{mech.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                            <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Zap size={14} /> Mecanismo de Ação
                            </h4>
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base">{mech.detailedText}</p>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm flex flex-col justify-center">
                             <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Impacto na Biodiversidade</h4>
                             <BiodiversityGauge impact={mech.impact} />
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const BiodiversityGauge: React.FC<{ impact: 'increase' | 'decrease' | 'variable' }> = ({ impact }) => {
    return (
        <div className="w-full">
            <div className="flex justify-between text-xs text-slate-400 mb-2">
                <span>Redução</span>
                <span>Estável</span>
                <span>Aumento</span>
            </div>
            <div className="h-4 bg-slate-700 rounded-full overflow-hidden relative">
                {/* Background grid */}
                <div className="absolute inset-0 flex justify-between px-2">
                    <div className="w-px h-full bg-slate-600/30"></div>
                    <div className="w-px h-full bg-slate-600/30"></div>
                    <div className="w-px h-full bg-slate-600/30"></div>
                </div>
                
                {/* The Bar */}
                <motion.div 
                    initial={{ width: '0%', x: 0 }}
                    animate={{ 
                        width: impact === 'variable' ? '40%' : '50%',
                        x: impact === 'increase' ? '100%' : impact === 'decrease' ? '0%' : '75%',
                        backgroundColor: impact === 'increase' ? '#34d399' : impact === 'decrease' ? '#f43f5e' : '#fbbf24'
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full absolute left-0 top-0"
                    style={{ left: 0 }}
                />
            </div>
             <p className="text-xs mt-3 text-right text-slate-400">
                {impact === 'increase' 
                    ? 'Gera novas variantes genéticas.' 
                    : impact === 'decrease' 
                    ? 'Remove variantes menos aptas.' 
                    : 'Pode aumentar ou diminuir dependendo do acaso.'}
            </p>
        </div>
    )
}

const MechanismCard: React.FC<{ 
  mechanism: Mechanism; 
  isSelected: boolean;
  onClick: () => void;
}> = ({ mechanism, isSelected, onClick }) => {
  
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group flex flex-col h-full
        ${isSelected 
          ? 'bg-white border-emerald-500 shadow-xl scale-105 z-10' 
          : 'bg-white border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1'
        }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-xl transition-colors ${isSelected ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600'}`}>
          <mechanism.icon size={28} />
        </div>
        
        <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">Impacto</span>
            <div className="flex gap-1">
                {mechanism.impact === 'increase' && <div className="w-2 h-2 rounded-full bg-emerald-500"></div>}
                {mechanism.impact === 'increase' && <div className="w-2 h-2 rounded-full bg-emerald-500"></div>}
                {mechanism.impact === 'variable' && <div className="w-2 h-2 rounded-full bg-amber-400"></div>}
                {mechanism.impact === 'decrease' && <div className="w-2 h-2 rounded-full bg-rose-500"></div>}
            </div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-3">{mechanism.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed flex-grow">
        {mechanism.description}
      </p>
      
      <div className={`mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-sm font-semibold transition-colors ${isSelected ? 'text-emerald-600' : 'text-slate-400 group-hover:text-emerald-600'}`}>
        <span>Detalhes</span>
        <div className={`p-1 rounded-full ${isSelected ? 'bg-emerald-100' : 'bg-slate-100 group-hover:bg-emerald-50'}`}>
            <ArrowUpRight size={16} />
        </div>
      </div>
    </motion.div>
  );
};

export default Mechanisms;