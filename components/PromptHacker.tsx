"use client";

import React, { useState } from 'react';
import { Terminal, User, BookOpen, LayoutList, Sparkles, Cpu } from 'lucide-react';

export default function PromptHacker() {
  const [hasRole, setHasRole] = useState(false);
  const [hasContext, setHasContext] = useState(false);
  const [hasFormat, setHasFormat] = useState(false);

  // The base prompt that is always there
  const basePrompt = "Write a workout plan.";

  // Determine the simulated AI response based on the active blocks
  let aiResponse = "Here is a workout:\n1. Pushups\n2. Situps\n3. Running\nGood luck!";
  let aiVibe = "text-slate-400";
  
  if (hasRole && !hasContext && !hasFormat) {
    aiResponse = "Listen up, athlete! Here is your Olympic-level conditioning protocol:\n1. Explosive Plyometrics\n2. Core Stabilization\nLet's get for the gold!";
    aiVibe = "text-blue-300";
  } else if (hasRole && hasContext && !hasFormat) {
    aiResponse = "Welcome! Since you only have 20 minutes and need knee-friendly exercises, here is your low-impact Olympic routine:\n1. Swimming intervals\n2. Seated core twists\nKeep it safe and effective!";
    aiVibe = "text-purple-300";
  } else if (hasRole && hasContext && hasFormat) {
    aiResponse = "| Exercise | Duration | Notes |\n|---|---|---|\n| Swimming | 10 mins | Low impact on knees |\n| Core Twists | 10 mins | Focus on breathing |";
    aiVibe = "text-emerald-400 font-mono text-sm";
  }

  // Calculate a "Prompt Power" score
  const score = (hasRole ? 33 : 0) + (hasContext ? 33 : 0) + (hasFormat ? 34 : 0);

  return (
    <div className="w-full p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 text-white shadow-2xl relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
            <Terminal className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">The Prompt Console</h2>
            <p className="text-slate-400 text-sm mt-1">Upgrade your base prompt using the engineering blocks.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: The Controls */}
          <div className="space-y-6">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-4">
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Base Task (Unchangeable)</div>
              <div className="text-lg font-medium text-white bg-black/50 p-3 rounded-lg font-mono">
                "{basePrompt}"
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Engineering Blocks</div>
              
              <button 
                onClick={() => setHasRole(!hasRole)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${hasRole ? 'bg-blue-500/20 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
              >
                <div className="flex items-center gap-3">
                  <User className={`w-5 h-5 ${hasRole ? 'text-blue-400' : 'text-slate-500'}`} />
                  <span className={hasRole ? 'text-blue-100 font-medium' : 'text-slate-400'}>Assign a Role</span>
                </div>
                <div className="text-xs text-left text-slate-500 hidden sm:block truncate ml-4">"Act as an Olympic Coach..."</div>
              </button>

              <button 
                onClick={() => setHasContext(!hasContext)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${hasContext ? 'bg-purple-500/20 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
              >
                <div className="flex items-center gap-3">
                  <BookOpen className={`w-5 h-5 ${hasContext ? 'text-purple-400' : 'text-slate-500'}`} />
                  <span className={hasContext ? 'text-purple-100 font-medium' : 'text-slate-400'}>Provide Context</span>
                </div>
                <div className="text-xs text-left text-slate-500 hidden sm:block truncate ml-4">"I have bad knees & 20 mins..."</div>
              </button>

              <button 
                onClick={() => setHasFormat(!hasFormat)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${hasFormat ? 'bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
              >
                <div className="flex items-center gap-3">
                  <LayoutList className={`w-5 h-5 ${hasFormat ? 'text-emerald-400' : 'text-slate-500'}`} />
                  <span className={hasFormat ? 'text-emerald-100 font-medium' : 'text-slate-400'}>Define Format</span>
                </div>
                <div className="text-xs text-left text-slate-500 hidden sm:block truncate ml-4">"Output as a markdown table..."</div>
              </button>
            </div>
          </div>

          {/* Right Side: The Output */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 bg-black/60 rounded-xl border border-white/10 p-6 flex flex-col relative">
              <div className="absolute top-4 right-4 text-xs font-bold bg-white/10 px-2 py-1 rounded text-white/50 flex items-center gap-2">
                <Cpu className="w-3 h-3" /> AI Output Engine
              </div>
              
              <div className="flex items-center gap-4 mb-6 mt-4 border-b border-white/10 pb-4">
                <div className="text-sm text-slate-400 font-medium">Prompt Power:</div>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 transition-all duration-500"
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
                <div className="text-sm font-bold text-white">{score}%</div>
              </div>

              <div className="flex-1 whitespace-pre-line leading-relaxed">
                {score === 100 ? (
                  <div className="animate-in fade-in zoom-in duration-500">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold mb-4">
                      <Sparkles className="w-3 h-3" /> PERFECT PROMPT
                    </div>
                    <div className={aiVibe}>{aiResponse}</div>
                  </div>
                ) : (
                  <div className={`transition-all duration-300 ${aiVibe}`}>
                    {aiResponse}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}