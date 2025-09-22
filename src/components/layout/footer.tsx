"use client";

import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="bg-background/50 border-t border-border/50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Section 1: Logo & Tagline */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="text-2xl font-bold text-glow tracking-wider text-foreground hover:text-primary transition-colors">
              TRUTHLENS.AI
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Making Truth Verifiable, One Frame at a Time.
            </p>
          </div>

          {/* Section 2: Navigation */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-semibold text-foreground/80">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub Repo</Link></li>
            </ul>
          </div>

          {/* Section 3: Legal & Social */}
          <div className="md:col-span-4 lg:col-span-4">
             <h3 className="text-sm font-semibold text-foreground/80">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TRUTHLENS.AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
