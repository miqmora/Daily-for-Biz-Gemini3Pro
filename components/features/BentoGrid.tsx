"use client";

import { Section } from "@/components/ui/Section";
import { H2, P, Label } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function BentoGrid() {
  return (
    <Section className="space-y-12 bg-rich-black">
       <div className="text-center space-y-4 mb-16">
          <H2>Powered by Intelligence, Driven by Results</H2>
          <P className="max-w-2xl mx-auto">
             A complete ecosystem designed to maximize your video impact.
          </P>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[800px] md:min-h-[600px]">
          {/* Card 1: Tech/Data */}
          <BentoCard 
             className="md:col-span-2 bg-gradient-to-br from-charcoal to-black border border-white/5 relative overflow-hidden group"
             title="Real-Time Analytics"
             category="Intelligence"
             description="Track audience signals and ad performance with millisecond precision."
          >
             {/* Mock Graph Animation */}
             <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-electric-blue/10 to-transparent pointer-events-none" />
             <div className="absolute inset-x-0 bottom-0 h-64 flex items-end gap-1 px-6 pb-6 opacity-50 group-hover:opacity-80 transition-opacity">
                {[40, 60, 45, 70, 85, 65, 55, 80, 95, 75, 60, 85, 90, 50, 70, 60, 80, 100, 75, 60].map((h, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0 }}
                     whileInView={{ height: `${h}%` }}
                     transition={{ duration: 1, delay: i * 0.05 }}
                     className="flex-1 bg-electric-blue/40 hover:bg-electric-blue rounded-t-sm transition-colors"
                   />
                ))}
             </div>
          </BentoCard>

          {/* Card 2: Human/Connection */}
          <BentoCard 
             className="bg-warm-coral/5 border border-warm-coral/10 relative overflow-hidden group"
             title="Audience Connection"
             category="Engagement"
             description="Build meaningful relationships through storytelling."
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 rounded-full border border-warm-coral/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <div className="w-20 h-20 rounded-full bg-warm-coral/20 animate-pulse-slow" />
                </div>
             </div>
          </BentoCard>

          {/* Card 3: Video/Player */}
          <BentoCard 
             className="md:col-span-3 bg-charcoal border border-white/5 relative overflow-hidden group flex flex-col justify-center"
             title="Cinematic Player Experience"
             category="Technology"
             description="Fastest playback, 4K support, and seamless ad insertion."
             align="left"
          >
             {/* Abstract Player UI */}
             <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 bg-black/20 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
                      <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                   </div>
                </div>
                 {/* Fake timeline */}
                 <div className="absolute bottom-8 left-8 right-8 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                        className="h-full bg-electric-blue"
                    />
                 </div>
             </div>
          </BentoCard>
       </div>
    </Section>
  );
}

interface BentoCardProps {
    children?: ReactNode;
    className?: string;
    title: string;
    category: string;
    description: string;
    align?: "bottom" | "left";
}

function BentoCard({ children, className, title, category, description, align = "bottom" }: BentoCardProps) {
   return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className={cn("rounded-3xl p-8 flex flex-col hover:shadow-2xl hover:shadow-electric-blue/5 transition-all duration-500", className)}
      >
         {children}
         <div className={cn("relative z-10 mt-auto space-y-2 pointer-events-none", align === "left" ? "mr-auto max-w-lg" : "")}>
            <Label>{category}</Label>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
            <p className="text-mist-white/60 text-lg leading-relaxed">{description}</p>
         </div>
      </motion.div>
   )
}

