"use client";

import React, { useState } from 'react';
import { useOS } from '../OSContext';
import { Radio, Globe, DownloadCloud, Activity, ExternalLink, Clock } from 'lucide-react';

type HFModel = {
  _id: string;
  id: string;
  downloads: number;
  tags: string[];
};

export default function LiveIntelFeed() {
  const { triggerInteraction } = useOS();
  const [models, setModels] = useState<HFModel[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [lastSync, setLastSync] = useState<string | null>(null);

  const establishUplink = async () => {
    setIsFetching(true);
    triggerInteraction(30); // Massive spike to the HUD's Cognitive Load
    
    try {
      // Tapping into the real Hugging Face public API for the newest text-generation models
      const response = await fetch('https://huggingface.co/api/models?pipeline_tag=text-generation&sort=createdAt&direction=-1&limit=4');
      const data = await response.json();
      
      // Artificial delay for dramatic hacking/processing effect
      setTimeout(() => {
        setModels(data);
        setLastSync(new Date().toLocaleTimeString());
        setIsFetching(false);
      }, 1500);
    } catch (error) {
      console.error("Uplink failed", error);
      setIsFetching(false);
    }
  };

  return (
    <div className="w-full p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 text-white shadow-2xl relative overflow-hidden group">
      
      {/* Radar Sweep Background Effect */}
      <div className={`absolute top-0 left-1/2 w-[200%] h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-1/2 transition-transform duration-1000 ${
        isFetching ? 'translate-x-1/2' : '-translate-x-[150%]'
      }`}></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
              <Globe className="w-4 h-4" /> Global API Uplink
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Live Model Intel</h2>
            <p className="text-slate-400 text-sm mt-1">
              Fetch the absolute newest raw open-source models uploaded to Hugging Face by developers worldwide, in real-time.
            </p>
          </div>
          
          <button 
            onClick={establishUplink}
            disabled={isFetching}
            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/50 rounded-xl font-bold transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isFetching ? (
              <><Activity className="w-5 h-5 animate-pulse" /> SYNCING DATA...</>
            ) : (
              <><Radio className="w-5 h-5" /> ESTABLISH UPLINK</>
            )}
          </button>
        </div>

        {/* The Live Data Grid */}
        <div className="min-h-[200px] flex flex-col justify-center">
          {models.length === 0 && !isFetching ? (
            <div className="text-center text-slate-500 flex flex-col items-center gap-3">
              <DownloadCloud className="w-12 h-12 opacity-20" />
              <p className="font-mono text-sm">System standing by. Awaiting uplink command.</p>
            </div>
          ) : isFetching ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((skeleton) => (
                <div key={skeleton} className="h-16 bg-white/5 rounded-xl animate-pulse border border-white/5"></div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 font-mono text-right flex items-center justify-end gap-1 mb-2">
                <Clock className="w-3 h-3" /> Last Sync: {lastSync}
              </div>
              
              {models.map((model, idx) => {
                const [creator, modelName] = model.id.split('/');
                return (
                  <a 
                    key={model._id}
                    href={`https://huggingface.co/${model.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-black/60 border border-white/10 hover:border-cyan-500/50 rounded-xl group transition-all"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs text-cyan-500 font-mono mb-1">{creator || "Unknown"}</span>
                      <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">{modelName || model.id}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}