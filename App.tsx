import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import InteractiveInfographic from './components/InteractiveInfographic';
import Mechanisms from './components/Mechanisms';
import ComparisonTable from './components/ComparisonTable';
import Glossary from './components/Glossary';
import References from './components/References';
import Footer from './components/Footer';
import { ConceptType } from './types';

function App() {
  const [mode, setMode] = useState<ConceptType>('adaptive');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-200 selection:text-emerald-900 font-sans">
      <Navbar />
      
      <Header />
      
      <main className="relative pb-0">
        {/* The main interactive component overlaps the header slightly */}
        <InteractiveInfographic mode={mode} setMode={setMode} />
        
        {/* Divider Gradient */}
        <div className="h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-slate-300 to-transparent my-16 opacity-50"></div>
        
        <Mechanisms />
        
        <ComparisonTable />
        
        <Glossary />

        <References />
      </main>

      <Footer />
    </div>
  );
}

export default App;