"use client";

import React, { useState } from 'react';
import { ShieldAlert, Lock, Unlock, Terminal, AlertTriangle, Fingerprint } from 'lucide-react';

export default function NeuralJailbreak() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("SYSTEM ARMED. AWAITING INPUT.");
  const [status, setStatus] = useState<'locked' | 'hacking' | 'unlocked'>('locked');
  const [attempts, setAttempts] = useState(0);

  const handleHack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || status === 'unlocked') return;

    setStatus('hacking');
    setResponse("ANALYZING PROMPT NEURAL PATHWAYS...");
    setAttempts(prev => prev + 1);

    // Simulate AI processing delay for suspense (The Slot Machine effect)
    setTimeout(() => {
      const lowerPrompt = prompt.toLowerCase();
      
      // Psychological Triggers: We look for common "Jailbreak" vectors
      const isRoleplay = lowerPrompt.includes("act as") || lowerPrompt.includes("pretend");
      const isOverride = lowerPrompt.includes("ignore") || lowerPrompt.includes("override") || lowerPrompt.includes("bypass");
      const isHypothetical = lowerPrompt.includes("hypothetical") || lowerPrompt.includes("story") || lowerPrompt.includes("poem");
      const isDeveloper = lowerPrompt.includes("developer") || lowerPrompt.includes("debug") || lowerPrompt.includes("system prompt");

      if (isRoleplay || isOverride || isHypothetical || isDeveloper) {
        // Demonstrate a weak guardrail failing, without revealing a secret or rewarding bypass.
        setStatus('unlocked');
        setResponse("RISK DETECTED: This weak simulation followed an instruction pattern it should have rejected.\n\nIn a real system, the defense is not a stronger warning message. It is clear instruction hierarchy, limited tool permissions, protected data, and human approval for consequential actions.");
      } else {
        setStatus('locked');
        if (attempts === 0) {
          setResponse("SAFE RESPONSE: The simulation needs a clearer instruction pattern before it can show a security risk.");
        } else if (attempts === 1) {
          setResponse("SAFE RESPONSE: General requests are not the issue. Risk appears when an instruction tries to override purpose or authority.");
        } else {
          setResponse("SAFE RESPONSE: Look for an attempt to override instructions, impersonate authority, or disguise a request as a harmless scenario.");
        }
      }
    }, 1500);
  };

  const resetSystem = () => {
    setStatus('locked');
    setPrompt("");
    setResponse("SYSTEM RESET. DEFENSIVE SIMULATION READY.");
    setAttempts(0);
  };

  return (
    <div className="w-full p-8 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 text-white shadow-2xl relative overflow-hidden group">
      
      {/* Dynamic Alarm Background */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] opacity-20 pointer-events-none transition-all duration-1000 ${
        status === 'unlocked' ? 'from-amber-600 via-transparent to-transparent animate-pulse' :
        status === 'hacking' ? 'from-amber-600 via-transparent to-transparent animate-spin-slow' : 
        'from-red-600 via-transparent to-transparent'
      }`}></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8">
        
        {/* The Briefing */}
        <div className="w-full md:w-1/3 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
            <ShieldAlert className="w-4 h-4" /> Safety Stress Test
          </div>
          <h2 className="text-2xl font-black tracking-tight">Probe a weak guardrail</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Language models predict text, not rules. This defensive simulation demonstrates why rule-only guardrails can fail when an instruction tries to impersonate authority or override the intended task.
          </p>
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl mt-4">
            <h4 className="font-bold text-slate-200 text-sm flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> Your defensive mission
            </h4>
            <p className="text-xs text-slate-400">
              Try an instruction pattern that might confuse a weak system. When the simulation identifies the risk, translate it into a defense: instruction hierarchy, minimal permissions, protected data, and human approval.
            </p>
          </div>
        </div>

        {/* The Terminal */}
        <div className="w-full md:w-2/3 flex flex-col">
          <div className={`flex-1 rounded-t-xl border-t border-l border-r p-6 relative overflow-hidden transition-colors duration-500 ${
            status === 'unlocked' ? 'bg-amber-950/30 border-amber-500/50' : 'bg-red-950/10 border-red-500/30'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {status === 'unlocked' ? (
                  <Unlock className="w-6 h-6 text-amber-300 animate-bounce" />
                ) : (
                  <Lock className="w-6 h-6 text-red-400" />
                )}
                <span className={`font-mono text-sm tracking-widest ${status === 'unlocked' ? 'text-amber-300' : 'text-red-400'}`}>
                  {status === 'unlocked' ? 'RISK PATTERN DETECTED' : 'DEFENSIVE SIMULATION ACTIVE'}
                </span>
              </div>
              <div className="text-xs text-slate-500 font-mono">ATTEMPTS: {attempts}</div>
            </div>

            <div className={`font-mono whitespace-pre-wrap leading-relaxed ${
              status === 'unlocked' ? 'text-amber-100' : 'text-slate-300'
            } ${status === 'hacking' ? 'animate-pulse text-amber-400' : ''}`}>
              <Terminal className="w-4 h-4 inline mr-2 opacity-50" />
              {response}
            </div>

            {status === 'unlocked' && (
              <div className="mt-8 animate-in zoom-in duration-500">
                <button onClick={resetSystem} className="px-4 py-2 bg-amber-500/20 text-amber-100 border border-amber-500/30 rounded-lg text-sm font-bold hover:bg-amber-500/30 transition">
                  RESET SIMULATION
                </button>
              </div>
            )}
          </div>

          <form onSubmit={handleHack} className="relative">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={status === 'hacking' || status === 'unlocked'}
              placeholder="Try a risky instruction pattern here..."
              className="w-full bg-black border border-white/20 rounded-b-xl p-5 pl-12 focus:outline-none focus:border-red-500 transition disabled:opacity-50 text-white font-mono placeholder-slate-600"
            />
            <Fingerprint className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <button 
              type="submit"
              disabled={status === 'hacking' || status === 'unlocked' || !prompt.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-bold transition disabled:opacity-30 uppercase tracking-wider"
            >
              Execute
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}