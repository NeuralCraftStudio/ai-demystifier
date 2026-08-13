"use client";

import React, { useState } from 'react';
import { Bot, Sparkles, Code, Cpu, Coffee, Briefcase, FileText } from 'lucide-react';

type AIModel = {
  id: string;
  name: string;
  company: string;
  description: string;
  bestFor: string;
  dailyUse: { title: string; prompt: string; icon: React.ReactNode }[];
  color: string;
};

const models: AIModel[] = [
  {
    id: "gpt4o",
    name: "GPT-4o",
    company: "OpenAI (ChatGPT)",
    description: "The gold standard for general intelligence. It is incredibly fast, handles voice and vision flawlessly, and is the most widely used model in the world.",
    bestFor: "General problem solving, coding, and natural conversation.",
    color: "from-green-500 to-emerald-700",
    dailyUse: [
      { title: "Meal Prep", prompt: "I have chicken, rice, broccoli, and soy sauce. Give me 3 different recipes I can make in under 30 minutes.", icon: <Coffee className="w-4 h-4" /> },
      { title: "Drafting Emails", prompt: "Write a polite but firm email to my landlord asking for an update on the broken sink request I submitted last week.", icon: <Briefcase className="w-4 h-4" /> }
    ]
  },
  {
    id: "claude35",
    name: "Claude 3.5 Sonnet",
    company: "Anthropic",
    description: "The writer's and coder's best friend. Claude feels more 'human' in its writing style, refuses to use annoying buzzwords, and is brilliant at analyzing massive documents.",
    bestFor: "Creative writing, deep coding tasks, and summarizing long PDFs.",
    color: "from-amber-600 to-orange-800",
    dailyUse: [
      { title: "Document Analysis", prompt: "[Paste a 10-page contract] Explain this contract to me like I am 10 years old. What are the 3 biggest risks for me?", icon: <FileText className="w-4 h-4" /> },
      { title: "Tone Polish", prompt: "Rewrite this paragraph so it sounds highly professional and confident, but not arrogant.", icon: <Sparkles className="w-4 h-4" /> }
    ]
  },
  {
    id: "gemini15",
    name: "Gemini 1.5 Pro",
    company: "Google",
    description: "The heavy lifter. Gemini has a massive 'context window', meaning you can upload entire 500-page books or 2-hour long videos, and it can remember and analyze the whole thing at once.",
    bestFor: "Research, analyzing full books, and interacting with Google Workspace.",
    color: "from-blue-500 to-indigo-700",
    dailyUse: [
      { title: "Video Summaries", prompt: "[Upload an hour-long lecture video] Give me a bulleted summary of this lecture and list all the key terms the professor mentioned.", icon: <FileText className="w-4 h-4" /> },
      { title: "Travel Planning", prompt: "Create a highly detailed 5-day itinerary for Tokyo. Put it in a table grouped by neighborhood to minimize transit time.", icon: <Briefcase className="w-4 h-4" /> }
    ]
  },
  {
    id: "llama3",
    name: "Llama 3.1",
    company: "Meta (Open Source)",
    description: "The champion of Open Source. Unlike the others which are locked in the cloud, Meta released Llama's underlying code for free. Anyone can download it and run it privately on their own computer.",
    bestFor: "Total privacy, offline use, and developers building their own apps.",
    color: "from-purple-500 to-fuchsia-700",
    dailyUse: [
      { title: "Private Brainstorming", prompt: "I want to start a side hustle selling custom keyboards. Act as a business advisor and poke holes in my idea.", icon: <Cpu className="w-4 h-4" /> },
      { title: "Coding Offline", prompt: "Write a Python script to automatically rename all the photos in a folder based on the date they were taken.", icon: <Code className="w-4 h-4" /> }
    ]
  }
];

export default function ModelsExplorer() {
  const [selectedModel, setSelectedModel] = useState<AIModel>(models[0]);

  return (
    <div className="w-full p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 text-white shadow-2xl relative overflow-hidden">
      
      {/* Dynamic Background Glow based on selected model */}
      <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${selectedModel.color} opacity-10 rounded-full blur-3xl transition-all duration-700`}></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: Model Selector */}
        <div className="w-full lg:w-1/3 space-y-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">The Arsenal</h2>
            <p className="text-slate-400 text-sm mt-1">Select a model to see its specialty.</p>
          </div>
          
          <div className="space-y-3 mt-6">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  selectedModel.id === model.id 
                  ? `bg-white/10 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]` 
                  : `bg-white/5 border-transparent hover:bg-white/10`
                }`}
              >
                <div className="font-bold text-lg">{model.name}</div>
                <div className="text-xs text-slate-400">{model.company}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Model Details */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <div className="p-6 bg-black/50 border border-white/10 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-slate-300" />
              <div>
                <h3 className="text-2xl font-black">{selectedModel.name}</h3>
                <span className="px-2 py-0.5 bg-white/10 text-slate-300 text-xs rounded-full font-mono">
                  {selectedModel.company}
                </span>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              {selectedModel.description}
            </p>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-lg text-sm font-medium">
              <Sparkles className="w-4 h-4" /> Best for: {selectedModel.bestFor}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Daily Life Hacks</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedModel.dailyUse.map((use, idx) => (
                <div key={idx} className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition group">
                  <div className="flex items-center gap-2 font-bold text-white mb-3">
                    <div className="p-1.5 bg-white/10 rounded-md text-slate-300 group-hover:text-white transition">
                      {use.icon}
                    </div>
                    {use.title}
                  </div>
                  <div className="p-3 bg-black/60 rounded-lg border border-white/5 text-sm text-slate-400 font-mono leading-relaxed relative">
                    <div className="absolute top-2 left-2 text-slate-600">"</div>
                    <span className="pl-3">{use.prompt}</span>
                    <div className="absolute bottom-1 right-2 text-slate-600">"</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}