"use client";

import React, { useState } from 'react';
import { Brain, Thermometer, Type, Sparkles } from 'lucide-react';

export default function AIBrainVisualizer() {
  const [activeTab, setActiveTab] = useState<'tokens' | 'temperature'>('tokens');
  const [inputText, setInputText] = useState("Artificial intelligence is fascinating!");
  const [temperature, setTemperature] = useState<number>(0.2);

  const mockTokenize = (text: string) => {
    if (!text) return [];
    const words = text.split(/(\s+)/);
    const tokens: string[] = [];
    words.forEach(word => {
      if (word.trim() === '') {
        tokens.push(word);
      } else if (word.length > 5) {
        tokens.push(word.slice(0, 4));
        tokens.push(word.slice(4));
      } else {
        tokens.push(word);
      }
    });
    return tokens.filter(t => t.length > 0);
  };

  const tokens = mockTokenize(inputText);

  return (
    <div className="w-full p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mb-8 text-center relative z-10">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-purple-500/20 rounded-full border border-purple-500/30">
            <Brain className="w-10 h-10 text-purple-400" />
          </div>
        </div>
        <h2 className="text-2xl font-bold tracking-tight">Inside the AI Brain</h2>
        <p className="text-slate-400 text-sm mt-2">LLMs don't read words, and they don't "think." Let's see what they actually do.</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 mb-8 relative z-10">
        <button 
          onClick={() => setActiveTab('tokens')}
          className={`flex-1 py-3 font-semibold flex items-center justify-center gap-2 transition-colors ${activeTab === 'tokens' ? 'border-b-2 border-purple-500 text-purple-400' : 'text-slate-500 hover:text-slate-300'}`}
        >
          <Type className="w-4 h-4" /> 1. The Tokenizer
        </button>
        <button 
          onClick={() => setActiveTab('temperature')}
          className={`flex-1 py-3 font-semibold flex items-center justify-center gap-2 transition-colors ${activeTab === 'temperature' ? 'border-b-2 border-purple-500 text-purple-400' : 'text-slate-500 hover:text-slate-300'}`}
        >
          <Thermometer className="w-4 h-4" /> 2. Temperature (Creativity)
        </button>
      </div>

      {/* Tokenizer Content */}
      {activeTab === 'tokens' && (
        <div className="space-y-6 animate-in fade-in duration-300 relative z-10">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="font-bold text-slate-200 mb-2">How AI "Reads" Text</h3>
            <p className="text-sm text-slate-400 mb-6">
              AI doesn't read whole words. It chops sentences into smaller pieces called <strong>Tokens</strong>. 
              Type below to see how a sentence gets chopped up!
            </p>
            
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full p-4 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-white placeholder-slate-600 font-mono"
              placeholder="Type a sentence here..."
            />

            <div className="mt-8">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">AI sees {tokens.length} tokens:</p>
              <div className="flex flex-wrap gap-2">
                {tokens.map((token, idx) => (
                  <span 
                    key={idx} 
                    className={`text-lg px-2 py-1 rounded-md font-mono ${token.trim() === '' ? 'bg-transparent' : 'bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.1)]'}`}
                  >
                    {token.replace(/ /g, '\u00A0')} 
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Temperature Content */}
      {activeTab === 'temperature' && (
        <div className="space-y-6 animate-in fade-in duration-300 relative z-10">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="font-bold text-slate-200 mb-2">How AI "Writes" Text</h3>
            <p className="text-sm text-slate-400 mb-8">
              AI guesses the next word based on probability. The <strong>Temperature</strong> controls how safe or crazy its guesses are. 
              Slide the temperature to see how the AI finishes the sentence: <span className="italic text-purple-300">"The knight drew his..."</span>
            </p>

            <div className="flex items-center gap-4 mb-10 bg-black/30 p-4 rounded-lg">
              <span className="text-sm font-semibold text-slate-500 w-16">Robotic</span>
              <input 
                type="range" 
                min="0" max="1" step="0.1" 
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <span className="text-sm font-semibold text-slate-500 w-16 text-right">Creative</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-5 rounded-xl border transition-all duration-300 ${temperature < 0.4 ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.15)] scale-105' : 'border-white/5 bg-black/40 opacity-50'}`}>
                <div className="text-xs font-bold text-slate-500 mb-2 tracking-wider">TEMP 0.0 - 0.3</div>
                <div className="text-2xl font-bold text-slate-200 font-mono">"sword."</div>
                <div className="text-sm text-slate-400 mt-3">The safest, most statistically probable guess.</div>
              </div>

              <div className={`p-5 rounded-xl border transition-all duration-300 ${temperature >= 0.4 && temperature < 0.8 ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.15)] scale-105' : 'border-white/5 bg-black/40 opacity-50'}`}>
                <div className="text-xs font-bold text-slate-500 mb-2 tracking-wider">TEMP 0.4 - 0.7</div>
                <div className="text-2xl font-bold text-slate-200 font-mono">"map."</div>
                <div className="text-sm text-slate-400 mt-3">Interesting, but still makes logical sense in context.</div>
              </div>

              <div className={`p-5 rounded-xl border transition-all duration-300 ${temperature >= 0.8 ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.15)] scale-105' : 'border-white/5 bg-black/40 opacity-50'}`}>
                <div className="text-xs font-bold text-amber-500/70 mb-2 tracking-wider flex justify-between">
                  TEMP 0.8 - 1.0 <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-2xl font-bold text-slate-200 font-mono">"laser blaster."</div>
                <div className="text-sm text-slate-400 mt-3">Highly random. The AI ignores the safest paths entirely.</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}