"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MagnifyingGlass } from './magnifying-glass';

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
      
      {/* Layer 10: Animated Magnifying Glass */}
      <MagnifyingGlass className="absolute z-10 w-[30rem] h-[30rem] animate-[scan-focus_20s_ease-in-out_infinite]" />

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
      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* Layer 40: Main Heading and CTA */}
        <div
            style={parallax(0.06)}
            className={cn(
            'relative z-40 transition-all duration-1000 ease-out',
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            '[animation-delay:700ms]'
            )}
        >
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-wider uppercase text-glow">
                TRUTHLENS
            </h1>
            <p className="mt-8 text-sm text-foreground/60">
                AI-Powered Deepfake Detection
            </p>
            <Button size="lg" className="mt-6 rounded-full px-10 py-6 text-lg font-semibold bg-white text-background hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 aurora-border">
                Analyze Media
            </Button>
        </div>
      </div>
      
      {/* Layer 20: The Arc */}
      <div
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
