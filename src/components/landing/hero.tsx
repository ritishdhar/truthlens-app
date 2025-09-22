"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallax = (speed: number) => {
    if (typeof window === 'undefined') return {};
    const x = (mousePosition.x - window.innerWidth / 2) * speed;
    const y = (mousePosition.y - window.innerHeight / 2) * speed;
    return { transform: `translate3d(${x}px, ${y}px, 0)` };
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex justify-center items-center text-center">
      {/* Layer 0: Background & Planets */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary/0.1),theme(colors.background)_40%)]" />
        <div style={parallax(0.02)} className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-primary/10 shadow-[inset_0_0_20px_theme(colors.primary/0.5)] opacity-50" />
          <div className="absolute bottom-[15%] right-[15%] w-48 h-48 rounded-full bg-primary/5 shadow-[inset_0_0_30px_theme(colors.primary/0.3)] opacity-50" />
        </div>
      </div>

      {/* Layer 30: Lens Flare */}
      <div
        style={parallax(0.04)}
        className={cn(
          "absolute top-1/2 left-1/2 -mt-64 -translate-x-1/2 w-96 h-96 bg-[radial-gradient(circle,hsl(var(--primary)/0.3)_0%,transparent_50%)] animate-[lens-flare-flicker_5s_infinite] transition-opacity duration-1000 z-30",
          isMounted ? 'opacity-100' : 'opacity-0',
          '[animation-delay:1000ms]'
        )}
      />

      {/* Text & CTA Container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Layer 10: "ARGUS" Text */}
        <h1
          style={parallax(0.05)}
          className={cn(
            'font-black text-7xl md:text-9xl lg:text-[180px] tracking-[1.5rem] md:tracking-[3rem] text-white/50 transition-all duration-1000 ease-out z-10 -mb-12 md:-mb-20 lg:-mb-28',
            isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90',
            '[animation-delay:500ms]'
          )}
        >
          ARGUS
        </h1>
        
        {/* Layer 40: Main Heading and CTA */}
        <div
            style={parallax(0.06)}
            className={cn(
            'relative z-40 transition-all duration-1000 ease-out',
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            '[animation-delay:700ms]'
            )}
        >
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider uppercase">
                VPN THAT SIMPLY WORKS
            </h2>
            <p className="mt-8 text-sm text-foreground/60">
                30-days money back guarantee
            </p>
            <Button size="lg" className="mt-6 rounded-full px-10 py-6 text-lg font-semibold bg-white text-background hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 aurora-border">
                Install ArgusVPN
            </Button>
        </div>
      </div>
      
      {/* Layer 20: The Arc */}
      <div
        style={parallax(0.03)}
        className={cn(
          "absolute left-1/2 -translate-x-1/2 w-[180vw] h-[180vw] md:w-[120vw] md:h-[120vw] z-20",
          "bottom-[-170vw] md:bottom-[-110vw]"
        )}
      >
        <div 
          className={cn(
            "w-full h-full rounded-full animate-[power-on-arc_2s_ease-out_forwards] [animation-delay:300ms] animate-[pulse-glow_8s_ease-in-out_infinite_3s]"
          )}
        >
            <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_10s_ease-in-out_infinite] [animation-delay:4s]" />
            </div>
        </div>
      </div>
    </section>
  );
}
