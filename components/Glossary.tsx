import React from 'react';
import { BookOpen } from 'lucide-react';
import { GLOSSARY } from '../constants';

const Glossary: React.FC = () => {
  return (
    <section id="glossario" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
          <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl shadow-sm">
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Glossário de Termos</h3>
            <p className="text-sm text-slate-500">Definições essenciais para compreensão.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(GLOSSARY).map(([key, definition]) => (
                <div key={key} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                    <h4 className="text-lg font-bold text-slate-800 capitalize mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        {key === 'homologas' ? 'Estruturas Homólogas' : key === 'analogas' ? 'Estruturas Análogas' : key}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        {definition}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Glossary;