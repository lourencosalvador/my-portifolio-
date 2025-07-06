"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Determinar o tema atual
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  // Cores para tema light (mais escuras)
  const lightColors = {
    purple: "rgba(88, 28, 135, 0.15)", // purple-900
    blue: "rgba(30, 58, 138, 0.15)", // blue-900
    cyan: "rgba(22, 78, 99, 0.15)", // cyan-900
    purpleIntense: "rgba(88, 28, 135, 0.25)",
    blueIntense: "rgba(30, 58, 138, 0.25)",
    cyanIntense: "rgba(22, 78, 99, 0.25)",
    particles: "rgba(88, 28, 135, 0.8)",
    particlesSecondary: "rgba(30, 58, 138, 0.8)",
    border: "rgba(88, 28, 135, 0.3)",
    glow: "rgba(88, 28, 135, 0.4)",
  };

  // Cores para tema dark (mais claras)
  const darkColors = {
    purple: "rgba(147, 51, 234, 0.1)", // purple-600
    blue: "rgba(59, 130, 246, 0.1)", // blue-500
    cyan: "rgba(6, 182, 212, 0.1)", // cyan-500
    purpleIntense: "rgba(147, 51, 234, 0.3)",
    blueIntense: "rgba(59, 130, 246, 0.3)",
    cyanIntense: "rgba(6, 182, 212, 0.2)",
    particles: "rgba(147, 51, 234, 0.8)",
    particlesSecondary: "rgba(59, 130, 246, 0.8)",
    border: "rgba(147, 51, 234, 0.2)",
    glow: "rgba(147, 51, 234, 0.3)",
  };

  const colors = isDark ? darkColors : lightColors;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Gradiente Base Dinâmico */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `linear-gradient(45deg, ${colors.purple}, ${colors.blue}, ${colors.cyan})`,
            `linear-gradient(135deg, ${colors.cyan}, ${colors.purple}, ${colors.blue})`,
            `linear-gradient(225deg, ${colors.blue}, ${colors.cyan}, ${colors.purple})`,
            `linear-gradient(315deg, ${colors.purple}, ${colors.blue}, ${colors.cyan})`,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Mesh Gradient Animado */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            `radial-gradient(circle at 20% 30%, ${colors.purpleIntense} 0%, transparent 50%),
             radial-gradient(circle at 80% 70%, ${colors.blueIntense} 0%, transparent 50%),
             radial-gradient(circle at 50% 50%, ${colors.cyanIntense} 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 20%, ${colors.purpleIntense} 0%, transparent 50%),
             radial-gradient(circle at 20% 80%, ${colors.blueIntense} 0%, transparent 50%),
             radial-gradient(circle at 70% 30%, ${colors.cyanIntense} 0%, transparent 50%)`,
            `radial-gradient(circle at 50% 80%, ${colors.purpleIntense} 0%, transparent 50%),
             radial-gradient(circle at 30% 20%, ${colors.blueIntense} 0%, transparent 50%),
             radial-gradient(circle at 80% 60%, ${colors.cyanIntense} 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Partículas Flutuantes */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, ${colors.particles}, ${colors.particlesSecondary})`,
            boxShadow: `0 0 6px ${colors.particles}`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ondas Animadas */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              ${colors.border} 35px,
              ${colors.border} 70px
            )
          `,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Círculos Orbitais */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border rounded-full"
            style={{
              width: `${200 + i * 150}px`,
              height: `${200 + i * 150}px`,
              borderColor: colors.border,
            }}
            animate={{
              rotate: i % 2 === 0 ? -360 : 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 20 + i * 10,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 4 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </motion.div>

      {/* Efeito de Luz Central */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div 
          className="w-96 h-96 bg-gradient-radial rounded-full blur-3xl" 
          style={{
            background: `radial-gradient(circle, ${colors.glow} 0%, ${colors.blue} 50%, transparent 100%)`,
          }}
        />
      </motion.div>

      {/* Grid Animado */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(${colors.border} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.border} 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Explosões de Luz */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${25 + i * 15}%`,
            top: `${35 + i * 10}%`,
            background: `linear-gradient(45deg, ${colors.particlesSecondary}, ${colors.particles})`,
            boxShadow: `0 0 12px ${colors.particles}`,
          }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Nebulosa Flutuante */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            `radial-gradient(ellipse at 10% 20%, ${colors.purpleIntense} 0%, transparent 70%)`,
            `radial-gradient(ellipse at 90% 80%, ${colors.blueIntense} 0%, transparent 70%)`,
            `radial-gradient(ellipse at 50% 50%, ${colors.cyanIntense} 0%, transparent 70%)`,
            `radial-gradient(ellipse at 10% 20%, ${colors.purpleIntense} 0%, transparent 70%)`,
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBackground; 