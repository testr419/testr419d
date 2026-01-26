
import React from 'react';
import { LuckyColorResult, ZodiacSign } from '../types';

interface ResultViewProps {
  sign: ZodiacSign;
  result: LuckyColorResult;
  onReset: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ sign, result, onReset }) => {
  const isDarkColor = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  return (
    <div className="max-w-4xl mx-auto w-full px-4 py-8 animate-in fade-in zoom-in duration-500">
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Color Display */}
          <div 
            className="w-full md:w-1/2 h-64 md:h-auto flex flex-col items-center justify-center p-8 transition-colors duration-1000"
            style={{ backgroundColor: result.hexCode }}
          >
            <div className={`text-center ${isDarkColor(result.hexCode) ? 'text-white' : 'text-slate-900'}`}>
              <span className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2 block">Today's Hue</span>
              <h2 className="text-5xl font-mystical font-bold mb-4 drop-shadow-sm">{result.colorName}</h2>
              <div className="inline-block px-4 py-2 rounded-full bg-black/10 backdrop-blur-sm border border-black/5 font-mono text-xl">
                {result.hexCode}
              </div>
            </div>
          </div>

          {/* Horoscope Details */}
          <div className="w-full md:w-1/2 p-8 md:p-12 text-slate-200">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-mystical font-bold text-white mb-1">{sign}</h1>
                <p className="text-indigo-400 font-medium">Daily Celestial Alignment</p>
              </div>
              <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-4 py-2 text-center">
                <span className="text-[10px] text-indigo-400 uppercase block font-bold">Lucky No.</span>
                <span className="text-2xl font-mystical text-indigo-300 leading-none">{result.luckyNumber}</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Spiritual Meaning</h3>
              <p className="text-lg leading-relaxed italic text-slate-300">
                "{result.reason}"
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Celestial Guidance</h3>
              {result.horoscopeSummary.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-xs text-indigo-300 flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-slate-300 leading-snug">{tip}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onReset}
              className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-indigo-900/20"
            >
              Consult Another Sign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
