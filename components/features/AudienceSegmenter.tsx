"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { H2, P, Label } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle2, ArrowRight } from "lucide-react";

const CONTENT = {
  advertisers: {
    label: "For Brands & Agencies",
    title: "Reach Audiences That Matter",
    description: "Target the right users with precision using our proprietary first-party data signals. Our platform ensures your ads are seen by real people in premium environments.",
    features: [
      "Contextual Targeting",
      "Brand Safety Guarantees",
      "High-Impact Formats",
      "Real-time Reporting"
    ],
    imageGradient: "from-electric-blue/20 to-purple-900/20"
  },
  publishers: {
    label: "For Publishers & Broadcasters",
    title: "Monetize Your Content",
    description: "Turn your video inventory into a sustainable revenue stream. Our player technology provides enterprise-grade stability with seamless ad integration.",
    features: [
      "Custom Player Builder",
      "Server-Side Ad Insertion",
      "Live Streaming Support",
      "Detailed Analytics"
    ],
    imageGradient: "from-warm-coral/20 to-orange-900/20"
  }
};

export function AudienceSegmenter() {
  const [activeTab, setActiveTab] = useState<"advertisers" | "publishers">("advertisers");

  return (
    <Section className="relative overflow-hidden bg-rich-black py-32">
      {/* Tab Switcher */}
      <div className="flex justify-center mb-20">
        <div className="p-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 inline-flex relative">
           <motion.div 
             layoutId="activeTabIndicator"
             className={cn(
               "absolute inset-y-1 w-[calc(50%-4px)] bg-electric-blue rounded-full shadow-lg shadow-electric-blue/25 transition-all duration-500",
               activeTab === "publishers" ? "left-[50%] bg-warm-coral shadow-warm-coral/25" : "left-1 bg-electric-blue shadow-electric-blue/25"
             )}
           />
           <button 
             onClick={() => setActiveTab("advertisers")}
             className={cn("relative z-10 px-8 py-3 rounded-full text-sm font-medium transition-colors w-40", activeTab === "advertisers" ? "text-white" : "text-white/60 hover:text-white")}
           >
             Advertisers
           </button>
           <button 
             onClick={() => setActiveTab("publishers")}
             className={cn("relative z-10 px-8 py-3 rounded-full text-sm font-medium transition-colors w-40", activeTab === "publishers" ? "text-white" : "text-white/60 hover:text-white")}
           >
             Publishers
           </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
             {/* Text Side */}
             <div className="space-y-8 order-2 md:order-1">
                <Label className={activeTab === 'publishers' ? 'text-warm-coral' : 'text-electric-blue'}>
                    {CONTENT[activeTab].label}
                </Label>
                <H2>{CONTENT[activeTab].title}</H2>
                <P>{CONTENT[activeTab].description}</P>
                
                <ul className="space-y-4 pt-4">
                  {CONTENT[activeTab].features.map((feature, i) => (
                    <motion.li 
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex items-center gap-3 text-mist-white/90 text-lg"
                    >
                      <CheckCircle2 className={cn("h-6 w-6", activeTab === 'publishers' ? 'text-warm-coral' : 'text-electric-blue')} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <Button 
                    className="mt-8" 
                    size="lg" 
                    variant={activeTab === 'advertisers' ? 'default' : 'human'}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
             </div>

             {/* Visual Side */}
             <div className={cn(
               "aspect-square rounded-[3rem] relative overflow-hidden border border-white/10 bg-gradient-to-br order-1 md:order-2",
               CONTENT[activeTab].imageGradient
             )}>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />
                
                {/* Abstract Illustration depending on tab */}
                {activeTab === 'advertisers' ? (
                   <div className="absolute inset-0 flex items-center justify-center">
                      {/* Target / Radar animation */}
                      <div className="w-64 h-64 rounded-full border border-electric-blue/30 animate-[spin_10s_linear_infinite] relative">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-electric-blue rounded-full" />
                      </div>
                      <div className="absolute w-48 h-48 rounded-full border border-electric-blue/50 animate-[spin_15s_linear_infinite_reverse]" />
                      <div className="absolute w-4 h-4 bg-electric-blue rounded-full shadow-[0_0_30px_rgba(59,130,246,1)] animate-pulse" />
                   </div>
                ) : (
                   <div className="absolute inset-0 flex items-center justify-center">
                      {/* Play / Stream animation */}
                      <div className="w-72 h-48 rounded-2xl border border-warm-coral/30 backdrop-blur-md bg-white/5 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-warm-coral/10">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                          <div className="w-16 h-16 rounded-full bg-warm-coral/20 flex items-center justify-center pl-1 border border-warm-coral/40 group cursor-pointer transition-transform hover:scale-110">
                              <div className="w-0 h-0 border-l-[16px] border-l-warm-coral border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent" />
                          </div>
                      </div>
                   </div>
                )}
             </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

