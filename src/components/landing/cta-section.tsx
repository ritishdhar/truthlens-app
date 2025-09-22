import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CtaSection() {
  return (
    <section className="relative bg-background/50 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-[orb-pulse_10s_ease-in-out_infinite]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-glow">
            Ready to Verify the Truth?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Try out our app now and become a part of the solution.
          </p>
          <div className="mt-10">
            <Link href="/analyze">
              <Button size="lg" className={cn(
                "rounded-full px-10 py-6 text-lg font-semibold",
                "bg-primary text-primary-foreground",
                "hover:bg-primary/90 transition-transform hover:scale-105",
                "pulse-ripple"
              )}>
                Start Your Analysis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
