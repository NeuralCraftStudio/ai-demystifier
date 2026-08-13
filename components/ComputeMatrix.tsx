"use client";

import React, { useState } from 'react';
import { useOS } from '../OSContext';
import { Droplets, Zap, Server, Microchip, Activity } from 'lucide-react';

export default function ComputeMatrix() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [metrics, setMetrics] = useState({ water: 0, power: 0, cost: 0 });
  const { triggerInteraction } = useOS();

  const simulateGeneration = () => {
    setIsProcessing(true);
    setMetrics({ water: 0, power: 0, cost: 0 });
    
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setMetrics({
        water: parseFloat((step * 0.04).toFixed(2)), // Approx water per query
        power: parseFloat((step * 0.15).toFixed(2)), // Approx Wh
        cost: parseFloat((step * 0.002).toFixed(3))  // Approx compute cost
      });
      triggerInteraction(15);
      if (step >= 20) {
        clearInterval(interval);
        setIsProcessing(false);
      }
    }, 150);
  };

  return (
    <div className="w-full p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 text-white shadow-2xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight">The Physical Reality of "The Cloud"</h2>
        <p className="text-slate-400 text-sm mt-1">Big Tech hides the hardware. Generating one image or answering one question requires literal water for cooling and heavy electricity for GPUs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Metric 1: Water */}
        <div className="p-4 bg-blue-950/30 border border-blue-500/30 rounded-xl relative overflow-hidden group">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Cooling Water</span>
            <Droplets className={`w-5 h-5 text-blue-400 ${isProcessing ? 'animate-bounce' : ''}`} />
          </div>
          <div className="text-3xl font-black text-blue-300 font-mono">{metrics.water}mL</div>
        </div>

        {/* Metric 2: Power */}
        <div className="p-4 bg-amber-950/30 border border-amber-500/30 rounded-xl relative overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">GPU Power</span>
            <Zap className={`w-5 h-5 text-amber-400 ${isProcessing ? 'animate-pulse' : ''}`} />
          </div>
          <div className="text-3xl font-black text-amber-300 font-mono">{metrics.power}Wh</div>
        </div>

        {/* Metric 3: Compute Cost */}
        <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-xl relative overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Server Cost</span>
            <Server className={`w-5 h-5 text-emerald-400 ${isProcessing ? 'animate-spin-slow' : ''}`} />
          </div>
          <div className="text-3xl font-black text-emerald-300 font-mono">${metrics.cost}</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10">
        <Activity className="w-8 h-8 text-slate-500 mb-4" />
        <button 
          onClick={simulateGeneration}
          disabled={isProcessing}
          className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isProcessing ? "Processing 1,000 Tokens..." : "Generate 1,000 AI Tokens"}
        </button>
      </div>
    </div>
  );
}