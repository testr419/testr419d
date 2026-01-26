
import React, { useState, useCallback } from 'react';
import { ZodiacSign, LuckyColorResult } from './types';
import { getLuckyColor } from './services/gemini';
import ZodiacGrid from './components/ZodiacGrid';
import ResultView from './components/ResultView';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LuckyColorResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSignSelect = useCallback(async (sign: ZodiacSign) => {
    setSelectedSign(sign);
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await getLuckyColor(sign);
      setResult(data);
    } catch (err: any) {
      setError(err.message || "An unexpected disturbance occurred in the galaxy.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleReset = () => {
    setSelectedSign(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 overflow-x-hidden relative pb-20">
      {/* Mystical Background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <header className="relative z-10 pt-12 pb-8 text-center px-4 flex flex-col items-center">
        {/* Logo Container */}
        <div className="mb-6 group relative">
          <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl group-hover:bg-indigo-500/40 transition-all duration-500"></div>
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-indigo-500/30 p-1 bg-slate-900/80 backdrop-blur-sm overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg shadow-indigo-500/10">
            <img 
              src="https://drive.google.com/uc?export=view&id=18AapOGh6EGKOlI6waUYn37Q50y5ZYn4l" 
              alt="Celestial Palette Logo"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/shapes/svg?seed=celestial&backgroundColor=030712&shape1Color=818cf8";
              }}
            />
          </div>
        </div>

        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Astrological Insights
        </div>
        <h1 className="text-5xl md:text-7xl font-mystical font-bold text-white mb-4 tracking-tight">
          Celestial <span className="text-indigo-400">Palette</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
          The universe communicates through frequency. Select your sign to discover which color aligns with your cosmic energy today.
        </p>
      </header>

      <main className="relative z-10 container mx-auto px-4">
        {!selectedSign && !loading && (
          <div className="animate-in slide-in-from-bottom-8 duration-700">
            < ZodiacGrid 
              onSelect={handleSignSelect} 
              selectedSign={selectedSign} 
            />
          </div>
        )}

        {loading && <Loader />}

        {error && (
          <div className="max-w-md mx-auto text-center py-20">
            <div className="text-5xl mb-6">☄️</div>
            <h2 className="text-2xl font-mystical font-bold text-white mb-4">Cosmic Interference</h2>
            <p className="text-slate-400 mb-8">{error}</p>
            <button 
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-all"
            >
              Try Re-aligning
            </button>
          </div>
        )}

        {result && selectedSign && !loading && (
          <ResultView 
            sign={selectedSign} 
            result={result} 
            onReset={handleReset} 
          />
        )}
      </main>

      <footer className="fixed bottom-0 left-0 w-full py-6 text-center text-slate-500 text-xs tracking-widest uppercase z-10 pointer-events-none">
        <div className="bg-slate-900/40 backdrop-blur-md inline-block px-6 py-2 rounded-full border border-slate-800/50 pointer-events-auto">
          Driven by Celestial Intelligence &bull; ✨
        </div>
      </footer>
    </div>
  );
};

export default App;
