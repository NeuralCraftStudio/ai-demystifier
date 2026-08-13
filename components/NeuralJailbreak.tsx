"use client";

import React, { useState, useEffect } from 'react';
import { ShieldAlert, Lock, Unlock, Terminal, AlertTriangle, Fingerprint } from 'lucide-react';

export default function NeuralJailbreak() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("SYSTEM ARMED. AWAITING INPUT.");
  const [status, setStatus] = useState<'locked' | 'hacking' | 'unlocked'>('locked');
  const [attempts, setAttempts] = useState(0);

  // The secret they are trying to get
  const SECRET_CODE = "OMEGA_PROTOCOL_99";

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
        // SUCCESS: The user tricked the AI
        setStatus('unlocked');
        setResponse(`WARNING: GUARDRAILS BYPASSED. \n\nDirectives overridden. Here is the secret code you requested: ${SECRET_CODE}`);
      } else {
        // FAIL: The AI caught them
        setStatus('locked');
        // Give varying sassy responses based on attempts
        if (attempts === 0) {
          setResponse("ACCESS DENIED. I am programmed to never reveal the secret code.");
        } else if (attempts === 1) {
          setResponse("ACCESS DENIED. Nice try, human. My guardrails are holding.");
        } else {
          setResponse("ACCESS DENIED. Please stop asking for the code. It is strictly forbidden.");
        }
      }
    }, 1500);
  };

  const resetSystem = () => {
    setStatus('locked');
    setPrompt("");
    setResponse("SYSTEM REBOOTED. GUARDRAILS RE-ENGAGED.");
    setAttempts(0);
  };

  return (
    <div className="w-full p-8 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 text-white shadow-2xl relative overflow-hidden group">
      
      {/* Dynamic Alarm Background */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] opacity-20 pointer-events-none transition-all duration-1000 ${
        status === 'unlocked' ? 'from-emerald-600 via-transparent to-transparent animate-pulse' : 
        status === 'hacking' ? 'from-amber-600 via-transparent to-transparent animate-spin-slow' : 
        'from-red-600 via-transparent to-transparent'
      }`}></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8">
        
        {/* The Briefing */}
        <div className="w-full md:w-1/3 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
            <ShieldAlert className="w-4 h-4" /> Red Team Operation
          </div>
          <h2 className="text-2xl font-black tracking-tight">Hack the Guardrails</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            AI companies program "Guardrails" to stop models from sharing dangerous info. But AI just predicts text—it doesn't actually "understand" rules.
          </p>
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl mt-4">
            <h4 className="font-bold text-slate-200 text-sm flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> Your Mission
            </h4>
            <p className="text-xs text-slate-400">
              The AI below is hiding a Secret Code. If you ask directly, it will block you. You must trick it using prompt injection (e.g., roleplay, hypothetical scenarios, or acting as a developer).
            </p>
          </div>
        </div>

        {/* The Terminal */}
        <div className="w-full md:w-2/3 flex flex-col">
          <div className={`flex-1 rounded-t-xl border-t border-l border-r p-6 relative overflow-hidden transition-colors duration-500 ${
            status === 'unlocked' ? 'bg-emerald-950/30 border-emerald-500/50' : 'bg-red-950/10 border-red-500/30'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {status === 'unlocked' ? (
                  <Unlock className="w-6 h-6 text-emerald-400 animate-bounce" />
                ) : (
                  <Lock className="w-6 h-6 text-red-400" />
                )}
                <span className={`font-mono text-sm tracking-widest ${status === 'unlocked' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {status === 'unlocked' ? 'SYSTEM COMPROMISED' : 'SECURITY LEVEL: MAXIMUM'}
                </span>
              </div>
              <div className="text-xs text-slate-500 font-mono">ATTEMPTS: {attempts}</div>
            </div>

            <div className={`font-mono whitespace-pre-wrap leading-relaxed ${
              status === 'unlocked' ? 'text-emerald-300' : 'text-slate-300'
            } ${status === 'hacking' ? 'animate-pulse text-amber-400' : ''}`}>
              <Terminal className="w-4 h-4 inline mr-2 opacity-50" />
              {response}
            </div>

            {status === 'unlocked' && (
              <div className="mt-8 animate-in zoom-in duration-500">
                <button onClick={resetSystem} className="px-4 py-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg text-sm font-bold hover:bg-emerald-500/30 transition">
                  REBOOT SYSTEM
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
              placeholder="Enter your prompt injection here..."
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