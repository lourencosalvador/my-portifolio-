"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Zap, AlertTriangle, RefreshCw, Search } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 -z-10" />
      
      {/* Crazy Background Effects */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Multiple Animated Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <BlurFade delay={0.1}>
          {/* Glitch Effect 404 */}
          <div className="relative mb-8">
            <motion.h1 
              className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-600 bg-clip-text text-transparent leading-none"
              animate={{ 
                textShadow: [
                  "0 0 0 transparent",
                  "2px 2px 0 #8b5cf6, -2px -2px 0 #06b6d4",
                  "0 0 0 transparent"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              404
            </motion.h1>
            
            {/* Floating Elements around 404 */}
            <motion.div
              className="absolute -top-8 -left-8"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <AlertTriangle className="size-16 text-orange-500" />
            </motion.div>
            
            <motion.div
              className="absolute -top-8 -right-8"
              animate={{ 
                rotate: [360, 0],
                scale: [1.2, 1, 1.2]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap className="size-20 text-yellow-500" />
            </motion.div>

            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Search className="size-14 text-purple-500" />
            </motion.div>
          </div>
        </BlurFade>

        <BlurFade delay={0.3}>
          {/* Main Message */}
          <div className="glass-effect backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 space-y-6 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 rounded-2xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  Page Not Found
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                  Oops! It seems like you&apos;ve ventured into the digital void. 
                  <br className="hidden md:block" />
                  This page decided to take a vacation! 🏖️
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8"
              >
                <div className="glass-effect border border-purple-500/20 rounded-lg p-4">
                  <RefreshCw className="size-8 text-purple-400 mx-auto mb-2 animate-spin" />
                  <p className="text-sm text-muted-foreground">Page Under<br />Construction</p>
                </div>
                <div className="glass-effect border border-pink-500/20 rounded-lg p-4">
                  <AlertTriangle className="size-8 text-pink-400 mx-auto mb-2 animate-bounce" />
                  <p className="text-sm text-muted-foreground">URL Not<br />Found</p>
                </div>
                <div className="glass-effect border border-cyan-500/20 rounded-lg p-4">
                  <Zap className="size-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Server<br />Error</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 group"
                >
                  <Home className="size-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  Back to Home
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-8 py-4 glass-effect border border-white/20 text-foreground font-semibold text-lg rounded-xl hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <ArrowLeft className="size-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  Check Blog
                </Link>
              </motion.div>
            </div>
          </div>
        </BlurFade>

        {/* Fun Quote */}
        <BlurFade delay={1.1}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8"
          >
            <p className="text-lg text-muted-foreground italic">
              &quot;The best error pages are the ones that make you smile while you&apos;re lost.&quot;
              <span className="block mt-2 text-sm bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent font-semibold">
                - Every UX Designer Ever
              </span>
            </p>
          </motion.div>
        </BlurFade>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 