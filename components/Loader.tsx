
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-pulse">
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-t-4 border-indigo-400 rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-4 border-purple-500/20 rounded-full"></div>
        <div className="absolute inset-4 border-b-4 border-purple-400 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-0 flex items-center justify-center text-3xl">✨</div>
      </div>
      <h2 className="text-2xl font-mystical text-white font-bold mb-2">Aligning the Stars</h2>
      <p className="text-slate-400">Decrypting your daily energy frequency...</p>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
