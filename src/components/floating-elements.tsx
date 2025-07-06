"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: number;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    const generateElements = () => {
      const newElements: FloatingElement[] = [];
      
      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 1,
          direction: Math.random() * 360,
        });
      }
      
      setElements(newElements);
    };

    generateElements();
  }, []);

  if (!mounted) return null;

  // Determinar o tema atual
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  // Cores para os elementos flutuantes
  const elementColors = isDark 
    ? {
        primary: "rgba(147, 51, 234, 0.4)",
        secondary: "rgba(59, 130, 246, 0.4)",
        tertiary: "rgba(6, 182, 212, 0.4)",
      }
    : {
        primary: "rgba(88, 28, 135, 0.6)",
        secondary: "rgba(30, 58, 138, 0.6)", 
        tertiary: "rgba(22, 78, 99, 0.6)",
      };

  const colors = [elementColors.primary, elementColors.secondary, elementColors.tertiary];

  return (
    <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
      {/* Elementos Flutuantes Principais */}
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            background: colors[element.id % colors.length],
            boxShadow: `0 0 ${element.size * 2}px ${colors[element.id % colors.length]}`,
          }}
          animate={{
            x: [
              0,
              Math.cos(element.direction) * 30,
              Math.cos(element.direction + 180) * 20,
              0,
            ],
            y: [
              0,
              Math.sin(element.direction) * 30,
              Math.sin(element.direction + 180) * 20,
              0,
            ],
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.4, 0.7, 0.3, 0.4],
          }}
          transition={{
            duration: element.speed * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.id * 0.2,
          }}
        />
      ))}

      {/* Partículas Brilhantes Sutis */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: colors[i % colors.length],
            boxShadow: `0 0 4px ${colors[i % colors.length]}`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ondas de Energia Suaves */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle, ${elementColors.primary} 0%, ${elementColors.secondary} 50%, transparent 100%)`,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingElements; 