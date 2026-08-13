"use client";

import React from 'react';
import { CloudOff, Lock, Unlock, Database, Cpu } from 'lucide-react';

export default function EdgeSovereign() {
  return (
    <div className="w-full p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 text-white shadow-2xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight">The Open Source Rebellion (Edge AI)</h2>
        <p className="text-slate-400 text-sm mt-1">You don't need a $20/month subscription. Open-source models can run directly on your phone or laptop. No internet required. Complete privacy.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Big Tech Cloud */}
        <div className="p-6 bg-red-950/20 border border-red-500/30 rounded-xl flex flex-col">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <Database className="w-6 h-6 text-red-400" />
            <h3 className="text-xl font-bold text-red-100">Big Tech Cloud API</h3>
          </div>
          <ul className="space-y-4 text-sm text-slate-300 flex-1">
            <li className="flex items-center gap-3"><Unlock className="w-4 h-4 text-red-400"/> Your data is sent to corporate servers.</li>
            <li className="flex items-center gap-3"><Database className="w-4 h-4 text-red-400"/> They can use your chats to train future models.</li>
            <li className="flex items-center gap-3"><Lock className="w-4 h-4 text-red-400"/> Heavy censorship and guardrails.</li>
            <li className="flex items-center gap-3"><Database className="w-4 h-4 text-red-400"/> Recurring monthly subscription fees.</li>
          </ul>
        </div>

        {/* Local Edge AI */}
        <div className="p-6 bg-emerald-950/20 border border-emerald-500/30 rounded-xl flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition duration-700"></div>
          
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 relative z-10">
            <Cpu className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold text-emerald-100">Local "Edge" Compute</h3>
          </div>
          <ul className="space-y-4 text-sm text-slate-300 flex-1 relative z-10">
            <li className="flex items-center gap-3"><Lock className="w-4 h-4 text-emerald-400"/> 100% Private. No data ever leaves your device.</li>
            <li className="flex items-center gap-3"><CloudOff className="w-4 h-4 text-emerald-400"/> Works entirely offline (on an airplane, in the woods).</li>
            <li className="flex items-center gap-3"><Unlock className="w-4 h-4 text-emerald-400"/> Uncensored open-source models (like Llama 3).</li>
            <li className="flex items-center gap-3"><Cpu className="w-4 h-4 text-emerald-400"/> Free forever. It uses your device's own chip.</li>
          </ul>
          
          <div className="mt-6 pt-4 border-t border-white/10 relative z-10">
            <p className="text-xs text-slate-400 font-mono">Tools to download today: <span className="text-emerald-400 font-bold">Ollama</span>, <span className="text-emerald-400 font-bold">LM Studio</span></p>
          </div>
        </div>

      </div>
    </div>
  );
}