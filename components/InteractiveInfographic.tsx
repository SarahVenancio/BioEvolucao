import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitFork, Minimize2, MousePointerClick } from 'lucide-react';
import { ConceptType } from '../types';
import { CONCEPTS } from '../constants';

interface Props {
  mode: ConceptType;
  setMode: (mode: ConceptType) => void;
}

const InteractiveInfographic: React.FC<Props> = ({ mode, setMode }) => {
  const isAdaptive = mode === 'adaptive';
  const activeColor = isAdaptive ? 'bg-emerald-500' : 'bg-indigo-500';
  const activeText = isAdaptive ? 'text-emerald-600' : 'text-indigo-600';

  return (
    <div id="visualizacao" className="w-full max-w-6xl mx-auto px-4 relative z-20 -mt-20">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row border-b border-slate-200">
          <button
            onClick={() => setMode('adaptive')}
            className={`flex-1 py-6 px-4 text-center transition-all duration-300 flex flex-col items-center gap-3 cursor-pointer outline-none hover:bg-slate-50 group relative ${
              isAdaptive ? 'bg-slate-50' : ''
            }`}
          >
            <div className={`p-3 rounded-full transition-all duration-300 ${isAdaptive ? 'bg-emerald-100 text-emerald-600 scale-110' : 'bg-slate-100 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-400'}`}>
              <GitFork size={28} />
            </div>
            <span className={`font-bold text-lg ${isAdaptive ? 'text-slate-900' : 'text-slate-500'}`}>Radiação Adaptativa</span>
            {isAdaptive && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500" />}
          </button>
          
          <button
            onClick={() => setMode('convergent')}
            className={`flex-1 py-6 px-4 text-center transition-all duration-300 flex flex-col items-center gap-3 cursor-pointer outline-none hover:bg-slate-50 group relative ${
              !isAdaptive ? 'bg-slate-50' : ''
            }`}
          >
            <div className={`p-3 rounded-full transition-all duration-300 ${!isAdaptive ? 'bg-indigo-100 text-indigo-600 scale-110' : 'bg-slate-100 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-400'}`}>
              <Minimize2 size={28} />
            </div>
            <span className={`font-bold text-lg ${!isAdaptive ? 'text-slate-900' : 'text-slate-500'}`}>Convergência Evolutiva</span>
            {!isAdaptive && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500" />}
          </button>
        </div>

        {/* Visualization Area */}
        <div className="p-6 md:p-12 min-h-[600px] flex flex-col lg:flex-row gap-12 items-center justify-center bg-slate-50/80 relative">
          
          <div className="absolute top-4 right-4 text-slate-400 flex items-center gap-2 text-xs bg-white px-2 py-1 rounded-full border border-slate-100 shadow-sm">
            <MousePointerClick size={14} />
            <span>Animação Contínua</span>
          </div>

          {/* Animation Canvas */}
          <div className="w-full lg:w-1/2 h-64 md:h-96 relative flex items-center justify-center bg-white rounded-2xl border border-slate-100 shadow-inner overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
            <AnimatePresence mode="wait">
              {isAdaptive ? (
                <AdaptiveAnimation key="adaptive" />
              ) : (
                <ConvergentAnimation key="convergent" />
              )}
            </AnimatePresence>
          </div>

          {/* Explanation Text */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className={`text-3xl font-bold mb-2 ${activeText}`}>
                  {CONCEPTS[mode].subtitle}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  {CONCEPTS[mode].definition}
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800 uppercase text-xs tracking-wider flex items-center gap-2">
                    Exemplos na Natureza
                    <span className="h-px w-full bg-slate-200 flex-1"></span>
                  </h4>
                  {CONCEPTS[mode].examples.map((ex, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex gap-5 items-start hover:shadow-md hover:border-slate-200 transition-all hover:-translate-y-1 duration-300 group">
                      <div className={`w-1.5 rounded-full h-full min-h-[3rem] shrink-0 ${activeColor} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-lg mb-1">{ex.title}</h5>
                        <p className="text-sm text-slate-500 leading-relaxed">{ex.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component for Adaptive Radiation Animation
const AdaptiveAnimation = () => {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center">
      {/* Central Ancestor */}
      <motion.div 
        className="absolute z-20 w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center shadow-xl text-white font-bold text-xs text-center border-4 border-emerald-400"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Ancestral
        <br/>Comum
      </motion.div>

      {/* Branches */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-32 md:w-40 h-1 bg-emerald-300/50 origin-left rounded-full"
          initial={{ rotate: deg, width: 0, opacity: 0 }}
          animate={{ rotate: deg, width: '40%', opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          {/* Resulting Species */}
          <motion.div
            className="absolute right-0 -top-5 w-12 h-12 bg-emerald-50 border-2 border-emerald-500 rounded-full flex items-center justify-center shadow-md z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 + (i * 0.1) }}
          >
            <span className="text-[10px] font-bold text-emerald-700">E{i+1}</span>
          </motion.div>
          
          {/* Environment Label */}
          <motion.div
            className="absolute right-0 top-8 w-24 text-center pointer-events-none"
            style={{ transform: `rotate(-${deg}deg)` }} // Counter-rotate text
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            <span className="text-[10px] font-medium text-emerald-800 bg-emerald-100/80 px-2 py-1 rounded-full border border-emerald-200/50 backdrop-blur-sm">
              Nicho {i+1}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Sub-component for Convergent Evolution Animation
const ConvergentAnimation = () => {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center">
      {/* Central Selective Pressure */}
      <motion.div 
        className="absolute z-10 w-24 h-24 md:w-32 md:h-32 border-2 border-dashed border-indigo-300 rounded-full flex items-center justify-center bg-indigo-50/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="text-[10px] md:text-xs text-indigo-500 font-bold text-center px-2 leading-tight">
          Pressão Seletiva
          <br/><span className="font-normal text-indigo-400 text-[9px] md:text-[10px]">(Ambiente)</span>
        </span>
      </motion.div>

      {/* Ancestors moving inward */}
      {[0, 120, 240].map((deg, i) => {
        return (
          <motion.div
            key={i}
            className="absolute w-full h-full flex items-center justify-center pointer-events-none"
            style={{ rotate: deg }}
          >
            {/* The Branch Line */}
            <motion.div
              className="absolute w-1 bg-gradient-to-b from-slate-400 to-indigo-500 top-1/2 origin-top rounded-full"
              // Start: -180px (Ancestor center)
              // End: -100px (Adaptation center)
              // Height: 80px
              initial={{ height: 0, opacity: 0, translateY: -180 }}
              animate={{ height: 80, opacity: 1, translateY: -180 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Distinct Ancestor - Starts at top of line (-180px) */}
            <motion.div
              className="absolute w-14 h-14 md:w-16 md:h-16 bg-slate-700 text-white rounded-full flex items-center justify-center text-[10px] text-center border-2 border-slate-100 z-20 shadow-lg"
              style={{ 
                transform: `translateY(-180px) rotate(-${deg}deg)` 
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Grupo {i+1}
            </motion.div>

            {/* Converged Trait - Appears at bottom of line (-100px) */}
            <motion.div
              className="absolute px-3 py-1.5 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-[9px] md:text-[11px] font-bold z-20 shadow-lg border border-indigo-400 min-w-[80px]"
              style={{ transform: `translateY(-100px) rotate(-${deg}deg)` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.4 }}
            >
              Adaptação
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default InteractiveInfographic;