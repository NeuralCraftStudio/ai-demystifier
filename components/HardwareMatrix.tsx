"use client";

import React, { useState } from 'react';
import { useOS } from '../OSContext';
import { Server, Zap, AlertTriangle, Monitor, Download } from 'lucide-react';

type HardwareProfile = 'mac_pc' | 'dedicated_gpu';

export default function HardwareMatrix() {
  const { triggerInteraction } = useOS();
  const [profile, setProfile] = useState<HardwareProfile>('mac_pc');

  const handleProfileSwitch = (newProfile: HardwareProfile) => {
    setProfile(newProfile);
    triggerInteraction(15); // Spike the HUD when they learn a new hardware config
  };

  return (
    <div className="w-full p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 text-white shadow-2xl relative overflow-hidden group">
      
      {/* Background glow based on selection */}
      <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] transition-colors duration-1000 opacity-20 pointer-events-none ${
        profile === 'mac_pc' ? 'bg-emerald-500' : 'bg-amber-500'
      }`}></div>

      <div className="relative z-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">The Deployment Matrix</h2>
          <p className="text-slate-400 text-sm mt-1">Hugging Face has 500,000+ models. If you download the wrong format, your computer will crash. Select your hardware to decrypt the required deployment stack.</p>
        </div>

        {/* Hardware Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button 
            onClick={() => handleProfileSwitch('mac_pc')}
            className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 ${
              profile === 'mac_pc' 
              ? 'bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
              : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}
          >
            <Monitor className={`w-8 h-8 ${profile === 'mac_pc' ? 'text-emerald-400' : 'text-slate-500'}`} />
            <div className="text-left">
              <div className={`font-bold ${profile === 'mac_pc' ? 'text-emerald-100' : 'text-slate-300'}`}>Standard PC / MacBook</div>
              <div className="text-xs text-slate-500">No dedicated graphics card</div>
            </div>
          </button>

          <button 
            onClick={() => handleProfileSwitch('dedicated_gpu')}
            className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 ${
              profile === 'dedicated_gpu' 
              ? 'bg-amber-500/20 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.1)]' 
              : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}
          >
            <Server className={`w-8 h-8 ${profile === 'dedicated_gpu' ? 'text-amber-400' : 'text-slate-500'}`} />
            <div className="text-left">
              <div className={`font-bold ${profile === 'dedicated_gpu' ? 'text-amber-100' : 'text-slate-300'}`}>Gaming Rig / Cloud GPU</div>
              <div className="text-xs text-slate-500">Nvidia RTX / A100 / H100</div>
            </div>
          </button>
        </div>

        {/* Deployment Intelligence */}
        <div className="bg-black/60 border border-white/10 rounded-xl p-6">
          
          {profile === 'mac_pc' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Download className="w-3 h-3"/> File Format to Download</h4>
                  <div className="text-2xl font-black text-emerald-400 font-mono mb-1">GGUF</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Models ending in <span className="text-emerald-300">.gguf</span> are heavily compressed (quantized). They are specifically engineered to run on standard CPUs and Apple Silicon without needing an expensive graphics card.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Zap className="w-3 h-3"/> The Run Engine</h4>
                  <div className="text-2xl font-black text-white font-mono mb-1">Ollama / LM Studio</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    You cannot just "double click" an AI model. You need an engine. Download Ollama or LM Studio, feed it the GGUF file, and it acts as the server to run the AI.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><AlertTriangle className="w-3 h-3"/> The Bottleneck</h4>
                  <div className="text-2xl font-black text-rose-400 font-mono mb-1">System RAM</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Your limiting factor is standard memory. An 8-Billion parameter model needs about 8GB of free RAM to run. If you run out of RAM, your computer will freeze.
                  </p>
                </div>

              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Download className="w-3 h-3"/> File Format to Download</h4>
                  <div className="text-2xl font-black text-amber-400 font-mono mb-1">Safetensors / AWQ</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Look for raw <span className="text-amber-300">.safetensors</span> or GPU-optimized <span className="text-amber-300">AWQ/EXL2</span> formats. These load directly into the GPU's memory for blisteringly fast token generation.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Zap className="w-3 h-3"/> The Run Engine</h4>
                  <div className="text-2xl font-black text-white font-mono mb-1">vLLM / TextGen</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    For serious server deployments, engineers use <span className="text-amber-200">vLLM</span> to maximize throughput, or <span className="text-amber-200">Oobabooga Text Generation WebUI</span> for testing models locally on RTX gaming cards.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><AlertTriangle className="w-3 h-3"/> The Bottleneck</h4>
                  <div className="text-2xl font-black text-rose-400 font-mono mb-1">VRAM (Video RAM)</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Normal RAM doesn't matter here. You need VRAM. A 70-Billion parameter model often requires multiple GPUs (like 2x RTX 3090s with 24GB VRAM each) just to fit the weights into memory.
                  </p>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}