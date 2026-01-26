
import React from 'react';
import { ZODIAC_SIGNS, ELEMENT_COLORS } from '../constants';
import { ZodiacSign } from '../types';

interface ZodiacGridProps {
  onSelect: (sign: ZodiacSign) => void;
  selectedSign: ZodiacSign | null;
}

const ZodiacGrid: React.FC<ZodiacGridProps> = ({ onSelect, selectedSign }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 max-w-5xl mx-auto">
      {ZODIAC_SIGNS.map((sign) => (
        <button
          key={sign.name}
          onClick={() => onSelect(sign.name)}
          className={`
            relative group p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1
            ${selectedSign === sign.name 
              ? 'bg-indigo-900/40 border-2 border-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.3)]' 
              : 'bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/60'
            }
          `}
        >
          <div className="text-4xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-500">
            {sign.icon}
          </div>
          <h3 className="text-lg font-mystical font-bold text-white mb-1">{sign.name}</h3>
          <p className="text-xs text-slate-400">{sign.dateRange}</p>
          <div className={`absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider ${ELEMENT_COLORS[sign.element]}`}>
            {sign.element}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ZodiacGrid;
