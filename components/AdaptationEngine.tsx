"use client";

import React, { useState } from 'react';
import { Briefcase, GraduationCap, Gamepad2, Target, Zap } from 'lucide-react';

type Track = 'business' | 'learning' | 'gaming';

export default function AdaptationEngine() {
  const [activeTrack, setActiveTrack] = useState<Track>('learning');

  return (
    <div className="w-full p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 text-white shadow-2xl relative overflow-hidden">
      
      {/* Dynamic Background Glow */}
      <div className={`absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-[100px] transition-colors duration-1000 opacity-20 pointer-events-none ${
        activeTrack === 'business' ? 'bg-blue-500' : activeTrack === 'learning' ? 'bg-emerald-500' : 'bg-purple-500'
      }`}></div>

      <div className="relative z-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">The Adaptation Engine</h2>
          <p className="text-slate-400 text-sm mt-1">How to weaponize AI for your specific goals. Pick your path.</p>
        </div>

        {/* Path Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button 
            onClick={() => setActiveTrack('learning')}
            className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${activeTrack === 'learning' ? 'bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
          >
            <GraduationCap className={`w-6 h-6 ${activeTrack === 'learning' ? 'text-emerald-400' : 'text-slate-500'}`} />
            <div className="text-left">
              <div className={`font-bold ${activeTrack === 'learning' ? 'text-emerald-100' : 'text-slate-300'}`}>Hyper-Learning</div>
              <div className="text-xs text-slate-500">Master any subject</div>
            </div>
          </button>

          <button 
            onClick={() => setActiveTrack('business')}
            className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${activeTrack === 'business' ? 'bg-blue-500/20 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
          >
            <Briefcase className={`w-6 h-6 ${activeTrack === 'business' ? 'text-blue-400' : 'text-slate-500'}`} />
            <div className="text-left">
              <div className={`font-bold ${activeTrack === 'business' ? 'text-blue-100' : 'text-slate-300'}`}>Business Scaling</div>
              <div className="text-xs text-slate-500">Automate & analyze</div>
            </div>
          </button>

          <button 
            onClick={() => setActiveTrack('gaming')}
            className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${activeTrack === 'gaming' ? 'bg-purple-500/20 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
          >
            <Gamepad2 className={`w-6 h-6 ${activeTrack === 'gaming' ? 'text-purple-400' : 'text-slate-500'}`} />
            <div className="text-left">
              <div className={`font-bold ${activeTrack === 'gaming' ? 'text-purple-100' : 'text-slate-300'}`}>Gaming & Lore</div>
              <div className="text-xs text-slate-500">Build worlds</div>
            </div>
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-black/50 border border-white/10 rounded-xl p-6 min-h-[300px]">
          
          {activeTrack === 'learning' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-emerald-300 flex items-center gap-2"><Zap className="w-5 h-5"/> The Feynman Protocol</h3>
                <p className="text-slate-300 mt-2 text-sm leading-relaxed">AI is the ultimate tutor. Instead of asking it for answers, ask it to test your understanding. Use the <strong>Feynman Technique</strong>: Explain a complex topic to the AI as if it were a 5-year-old, and ask it to point out the gaps in your logic.</p>
              </div>
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Target className="w-4 h-4"/> Interactive Challenge</div>
                <div className="text-sm font-mono text-slate-300">
                  <span className="text-emerald-500">Prompt:</span> "I am going to explain Quantum Computing to you. Act as a curious high schooler. Stop me when I use jargon I haven't defined, and grade my explanation out of 10."
                </div>
              </div>
            </div>
          )}

          {activeTrack === 'business' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-300 flex items-center gap-2"><Zap className="w-5 h-5"/> The Data Synthesizer</h3>
                <p className="text-slate-300 mt-2 text-sm leading-relaxed">Stop reading 40-page market reports. Use AI to extract actionable data, format it into tables, and generate counter-arguments against your own business proposals to bulletproof your pitches before you make them.</p>
              </div>
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Target className="w-4 h-4"/> Interactive Challenge</div>
                <div className="text-sm font-mono text-slate-300">
                  <span className="text-blue-500">Prompt:</span> "Act as a ruthless venture capitalist. Here is my business plan for a coffee shop [paste plan]. Give me 3 reasons why this will fail, and suggest how to fix them."
                </div>
              </div>
            </div>
          )}

          {activeTrack === 'gaming' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-purple-300 flex items-center gap-2"><Zap className="w-5 h-5"/> Procedural Worldbuilding</h3>
                <p className="text-slate-300 mt-2 text-sm leading-relaxed">Whether you are building a D&D campaign or an indie game, LLMs are incredible at generating deep lore, NPC dialogue trees, and balanced game mechanics instantly.</p>
              </div>
              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Target className="w-4 h-4"/> Interactive Challenge</div>
                <div className="text-sm font-mono text-slate-300">
                  <span className="text-purple-500">Prompt:</span> "Design a fantasy tavern. Give me the name, a description of the one-eyed bartender, a secret menu item, and a quest hook the player overhears."
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}