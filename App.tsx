import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BranchCard from './components/BranchCard';
import Services from './components/Services';
import Footer from './components/Footer';
import { BRANCHES } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Branches Section - Critical */}
        {/* Increased scroll-mt to ensure title is not hidden by sticky header */}
        <section id="branches" className="scroll-mt-40 py-16 md:py-24 container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Locations</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Find Your Nearest Branch</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
              Visit us today for repairs or spares. Tap <span className="text-slate-900 font-semibold">'Call'</span> or <span className="text-green-600 font-semibold">'WhatsApp'</span> on your nearest branch to connect instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRANCHES.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </section>

        <Services />
      </main>

      <Footer />
    </div>
  );
}

export default App;