"use client";

import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Typography";
import { motion } from "framer-motion";

const BRANDS = [
  "Universal Music", "Vice Media", "NBA", "Le Monde", "BeIN Sports", "Euronews", "Hearst", "Prisma Media"
];

export function TrustedBy() {
  return (
    <Section className="py-10 border-y border-white/5 bg-black/50 backdrop-blur-sm">
       <Label className="text-center block mb-8 text-xs opacity-50">Trusted by Industry Leaders</Label>
       <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
             {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                <span key={i} className="text-xl font-bold text-white/20 uppercase tracking-widest hover:text-white/40 transition-colors cursor-default">
                   {brand}
                </span>
             ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap gap-16 items-center hidden">
             {/* Duplicate for seamless loop if needed, but CSS animation usually handles this */}
          </div>
       </div>
       <style jsx global>{`
         @keyframes marquee {
           0% { transform: translateX(0); }
           100% { transform: translateX(-100%); }
         }
         .animate-marquee {
           animation: marquee 30s linear infinite;
         }
       `}</style>
    </Section>
  );
}

