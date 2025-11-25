import React from 'react';
import { Book, Globe, ExternalLink } from 'lucide-react';
import { REFERENCES } from '../constants';

const References: React.FC = () => {
  return (
    <section id="referencias" className="py-20 bg-slate-100 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Fontes e Referências Online</h3>
          <p className="text-slate-500">Webgrafia consultada para a elaboração do conteúdo.</p>
        </div>

        <div className="grid gap-4">
          {REFERENCES.map((ref, idx) => (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${ref.type === 'book' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                {ref.type === 'book' ? <Book size={20} /> : <Globe size={20} />}
              </div>
              
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-lg">{ref.title}</h4>
                <p className="text-sm text-slate-600">
                  {ref.author}
                </p>
              </div>

              {ref.link && (
                <a 
                  href={ref.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  Acessar Site <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;