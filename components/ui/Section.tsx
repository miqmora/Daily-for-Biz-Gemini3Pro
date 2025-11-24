import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("w-full py-20 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto", className)}>
      {children}
    </section>
  );
}

