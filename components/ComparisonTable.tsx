import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { GLOSSARY } from '../constants';

const ComparisonTable: React.FC = () => {
  return (
    <section id="comparacao" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-emerald-500 font-bold tracking-wider text-sm uppercase mb-2 block">Síntese</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Quadro Comparativo</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Entenda as diferenças fundamentais lado a lado. Passe o mouse sobre os ícones <HelpCircle size={14} className="inline text-slate-400"/> para definições detalhadas.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="p-6 font-bold border-b border-slate-200 w-1/3 text-sm uppercase tracking-wider text-slate-500">Característica</th>
                  <th className="p-6 font-bold border-b border-slate-200 text-emerald-700 w-1/3 bg-emerald-50/30 border-l border-slate-200">Radiação Adaptativa</th>
                  <th className="p-6 font-bold border-b border-slate-200 text-indigo-700 w-1/3 bg-indigo-50/30 border-l border-slate-200">Convergência Evolutiva</th>
                </tr>
              </thead>
              <tbody className="text-slate-600 text-sm md:text-base">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-slate-800">Origem (Ancestralidade)</td>
                  <td className="p-6 border-l border-slate-100">Único ancestral comum.</td>
                  <td className="p-6 border-l border-slate-100">Ancestrais diferentes e distantes.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-slate-800">Direção da Evolução</td>
                  <td className="p-6 border-l border-slate-100 flex items-center gap-2">
                      <span className="text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded">Divergente</span>
                  </td>
                  <td className="p-6 border-l border-slate-100 flex items-center gap-2">
                      <span className="text-indigo-600 font-medium bg-indigo-50 px-2 py-0.5 rounded">Convergente</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-slate-800">Causa Principal</td>
                  <td className="p-6 border-l border-slate-100">Disponibilidade de novos nichos ecológicos.</td>
                  <td className="p-6 border-l border-slate-100">Pressões seletivas (ambientes) semelhantes.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-slate-800 flex items-center gap-2">
                    Estruturas Resultantes
                  </td>
                  <td className="p-6 border-l border-slate-100 group relative">
                      <TooltipTerm term="Homólogas" definition={GLOSSARY.homologas} />
                      <span className="text-xs text-slate-400 block mt-1">Mesma origem, função diferente.</span>
                  </td>
                  <td className="p-6 border-l border-slate-100 group relative">
                      <TooltipTerm term="Análogas" definition={GLOSSARY.analogas} />
                      <span className="text-xs text-slate-400 block mt-1">Origem diferente, mesma função.</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-semibold text-slate-800">Biodiversidade</td>
                  <td className="p-6 border-l border-slate-100 font-bold text-emerald-600 bg-emerald-50/10">Aumenta significativamente.</td>
                  <td className="p-6 border-l border-slate-100 text-slate-500">Mantém ou adapta (não cria novas linhagens).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const TooltipTerm: React.FC<{ term: string, definition: string }> = ({ term, definition }) => {
  return (
    <div className="inline-flex items-center gap-1 cursor-help relative group z-10">
      <span className="font-bold text-slate-900 underline decoration-dotted decoration-slate-400 underline-offset-4 hover:text-emerald-600 hover:decoration-emerald-500 transition-all">{term}</span>
      <HelpCircle size={14} className="text-slate-400" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none whitespace-normal">
        {definition}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
      </div>
    </div>
  );
}

export default ComparisonTable;