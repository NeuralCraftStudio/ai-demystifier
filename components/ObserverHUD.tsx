"use client";

import React from 'react';
import { useOS } from '../OSContext';
import { Activity, Eye, Zap } from 'lucide-react';

export default function ObserverHUD() {
  const { cognitiveLoad, hackerLevel } = useOS();

  // Determine OS State based on how fast they are clicking/learning
  let osState = "STABLE";
  let stateColor = "text-emerald-400";
  if (cognitiveLoad > 50) {
    osState = "PROCESSING HEAVY";
    stateColor = "text-amber-400";
  }
  if (cognitiveLoad > 85) {
    osState = "OVERCLOCKED";
    stateColor = "text-red-400 animate-pulse";
  }

  return (
    <div className="fixed top-0 left-0 w-full p-4 z-50 pointer-events-none">
      <div className="max-w-6xl mx-auto flex justify-between items-start">
        
        {/* Left Side: System State */}
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-3 flex flex-col gap-1 shadow-2xl shadow-black">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
            <Eye className="w-3 h-3" /> Observer Protocol Active
          </div>
          <div className={`font-mono text-sm font-bold ${stateColor}`}>
            SYS_STATE: {osState}
          </div>
        </div>

        {/* Right Side: Metrics */}
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-3 flex gap-6 shadow-2xl shadow-black">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-1">
              <Zap className="w-3 h-3" /> Hacker Lvl
            </span>
            <span className="font-mono text-sm text-white">{hackerLevel.toFixed(1)}</span>
          </div>
          <div className="flex flex-col min-w-[100px]">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-1">
              <Activity className="w-3 h-3" /> Cog_Load
            </span>
            <div className="w-full h-1.5 bg-white/10 rounded-full mt-1.5 overflow-hidden relative">
              <div 
                className={`absolute top-0 left-0 h-full transition-all duration-300 ${
                  cognitiveLoad > 85 ? 'bg-red-500' : cognitiveLoad > 50 ? 'bg-amber-500' : 'bg-emerald-500'
                }`}
                style={{ width: `${cognitiveLoad}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}