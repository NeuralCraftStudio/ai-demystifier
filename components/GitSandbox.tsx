"use client";

import React, { useState } from 'react';
import { Laptop, Cloud, ArrowRight, FileText, CheckCircle, RefreshCcw } from 'lucide-react';

export default function GitSandbox() {
  const [stage, setStage] = useState<'empty' | 'saved' | 'committed' | 'pushed'>('empty');

  return (
    <div className="w-full p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 text-white shadow-2xl">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight">Demystifying GitHub</h2>
        <p className="text-slate-400 text-sm mt-2">Before we touch AI models, let's learn how code gets saved to the cloud.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Local Computer Area */}
        <div className="flex flex-col items-center w-full md:w-1/3 p-6 bg-white/5 rounded-xl border border-white/10">
          <Laptop className="w-12 h-12 text-blue-400 mb-4" />
          <h3 className="font-semibold text-slate-200">Your Computer</h3>
          <div className="mt-4 h-24 flex items-center justify-center">
            {stage === 'empty' && <span className="text-sm text-slate-500 border border-dashed border-white/20 p-2 rounded">No files yet</span>}
            {stage === 'saved' && <FileText className="w-8 h-8 text-yellow-400 animate-pulse" />}
            {(stage === 'committed' || stage === 'pushed') && <CheckCircle className="w-8 h-8 text-emerald-400" />}
          </div>
          <p className="text-xs text-slate-400 mt-2 text-center h-8">
            {stage === 'empty' && "Your local folder is empty."}
            {stage === 'saved' && "File saved. (Not tracked yet)"}
            {stage === 'committed' && "Committed! (Saved to local history)"}
          </p>
        </div>

        {/* Action Bridge */}
        <div className="flex flex-col items-center w-full md:w-1/3 space-y-4">
          <button 
            onClick={() => setStage('saved')}
            disabled={stage !== 'empty'}
            className="w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl disabled:opacity-30 hover:bg-white/10 transition font-medium"
          >
            1. Write Code
          </button>
          
          <button 
            onClick={() => setStage('committed')}
            disabled={stage !== 'saved'}
            className="w-full py-3 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-xl disabled:opacity-30 hover:bg-blue-500/30 transition font-medium"
          >
            2. Git Commit
          </button>

          <button 
            onClick={() => setStage('pushed')}
            disabled={stage !== 'committed'}
            className="w-full py-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl disabled:opacity-30 hover:bg-emerald-500/30 flex items-center justify-center gap-2 transition font-medium shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            3. Git Push <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Cloud Area */}
        <div className="flex flex-col items-center w-full md:w-1/3 p-6 bg-white/5 rounded-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <Cloud className="w-12 h-12 text-slate-300 mb-4 relative z-10" />
          <h3 className="font-semibold text-slate-200 relative z-10">GitHub (The Cloud)</h3>
          <div className="mt-4 h-24 flex items-center justify-center relative z-10">
             {stage === 'pushed' ? (
                <FileText className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
             ) : (
                <span className="text-sm text-slate-500 border border-dashed border-white/20 p-2 rounded">Awaiting push...</span>
             )}
          </div>
          <p className="text-xs text-slate-400 mt-2 text-center h-8 relative z-10">
             {stage === 'pushed' ? "Code is live! Anyone can see it." : "Safe in the cloud."}
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button onClick={() => setStage('empty')} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition">
          <RefreshCcw className="w-4 h-4" /> Start Over
        </button>
      </div>
    </div>
  );
}