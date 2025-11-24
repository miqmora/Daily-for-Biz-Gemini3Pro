"use client";

import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300 flex items-center px-6 md:px-12",
      scrolled ? "bg-rich-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-white cursor-pointer">
          Dailymotion <span className="font-light text-white/60">Business</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-mist-white/80">
           <a href="#" className="hover:text-white transition-colors">Solutions</a>
           <a href="#" className="hover:text-white transition-colors">Insights</a>
           <a href="#" className="hover:text-white transition-colors">Company</a>
        </div>

        <div className="flex items-center gap-4">
           <Button variant="ghost" className="hidden sm:flex text-white hover:bg-white/10">Log in</Button>
           <Button variant="human" size="sm">Contact Sales</Button>
        </div>
      </div>
    </nav>
  );
}

