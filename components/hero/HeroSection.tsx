"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { H1, P, Label } from "@/components/ui/Typography";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    
    mouseX.set(x);
    mouseY.set(y);
  }

  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-rich-black flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Background Gradient/Video Placeholder */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-purple-950/30" />
         
         {/* Abstract Shapes */}
         <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-[100px] mix-blend-screen"
            style={{ x: useTransform(mouseX, [0, 1], [-50, 50]), y: useTransform(mouseY, [0, 1], [-50, 50]) }}
         />
         <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-warm-coral/10 rounded-full blur-[120px] mix-blend-screen"
            style={{ x: useTransform(mouseX, [0, 1], [50, -50]), y: useTransform(mouseY, [0, 1], [50, -50]) }}
         />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <Label className="bg-white/5 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">
            The New Standard in Video Marketing
          </Label>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <H1 className="max-w-4xl mx-auto">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                Master the Art
              </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-400">
                 & Science of Video
              </span>
            </H1>
        </motion.div>

        <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
        >
          <P className="max-w-2xl mx-auto text-gray-400">
            Unify your advertising and video technology. Dailymotion for Business brings together 
            powerful monetization and seamless player infrastructure in one sovereign platform.
          </P>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
        >
          <Button size="lg" className="group">
            Start Monetizing 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="group backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10">
            <Play className="mr-2 h-4 w-4 fill-current" />
            Watch the Film
          </Button>
        </motion.div>
      </div>
      
      {/* Floating Data Points (Decorations) */}
      <DataPoint x="10%" y="20%" label="CTR +24%" delay={1} />
      <DataPoint x="85%" y="15%" label="Viewability 92%" delay={1.2} />
      <DataPoint x="15%" y="80%" label="Retention 8m" delay={1.4} />
      <DataPoint x="80%" y="75%" label="Ad Fill 98%" delay={1.6} />
    </div>
  );
}

function DataPoint({ x, y, label, delay }: { x: string, y: string, label: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="absolute hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-rich-black/80 border border-electric-blue/30 backdrop-blur-md text-xs font-mono text-electric-blue shadow-lg shadow-electric-blue/10 pointer-events-none"
      style={{ left: x, top: y }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
      {label}
    </motion.div>
  )
}

