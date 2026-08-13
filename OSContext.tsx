"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type OSState = {
  cognitiveLoad: number; // 0 to 100
  hackerLevel: number; // Based on interactions
  triggerInteraction: (intensity: number) => void;
};

const OSContext = createContext<OSState | undefined>(undefined);

export function OSProvider({ children }: { children: React.ReactNode }) {
  const [cognitiveLoad, setCognitiveLoad] = useState(0);
  const [hackerLevel, setHackerLevel] = useState(1);

  // Slowly decrease cognitive load over time (cooldown)
  useEffect(() => {
    const interval = setInterval(() => {
      setCognitiveLoad(prev => Math.max(0, prev - 2));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerInteraction = (intensity: number) => {
    setCognitiveLoad(prev => Math.min(100, prev + intensity));
    setHackerLevel(prev => prev + (intensity * 0.05));
  };

  return (
    <OSContext.Provider value={{ cognitiveLoad, hackerLevel, triggerInteraction }}>
      {/* We will inject global visual effects here later based on cognitiveLoad */}
      {children}
    </OSContext.Provider>
  );
}

export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) throw new Error("useOS must be used within an OSProvider");
  return context;
};