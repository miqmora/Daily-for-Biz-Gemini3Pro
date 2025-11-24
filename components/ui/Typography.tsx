import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] font-sans text-white", className)}>
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("text-3xl md:text-5xl font-bold tracking-tight font-sans text-white", className)}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("text-2xl md:text-3xl font-bold font-sans text-white", className)}>
      {children}
    </h3>
  );
}

export function P({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-lg md:text-xl text-mist-white/80 font-sans leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function Label({ children, className }: TypographyProps) {
  return (
    <span className={cn("text-sm font-mono uppercase tracking-widest text-electric-blue", className)}>
      {children}
    </span>
  );
}

