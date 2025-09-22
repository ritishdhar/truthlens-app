"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Why Argus VPN', href: '#' },
  { name: 'Cost', href: '#' },
  { name: 'Devices', href: '#' },
  { name: 'Support', href: '#' },
  { name: 'Get points', href: '#' },
  { name: 'Blog', href: '#' },
];

export function Header() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-700 ease-out',
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
      )}
    >
      <div className="glassmorphic rounded-full px-4 py-2">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold text-glow">
            <span className="font-extrabold">ARGUS</span>
            <span className="font-medium">VPN</span>
          </Link>
          
          <ul className="hidden lg:flex items-center gap-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-x-2 sm:gap-x-4">
            <Link href="#" className="hidden sm:block text-sm text-foreground/80 hover:text-foreground transition-colors">
              Log In
            </Link>
            <Button variant="outline" className="rounded-full bg-transparent hover:bg-white/10 border-white/50 h-9 px-4 sm:px-6 text-sm">
              Install ArgusVPN
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex items-center rounded-full hover:bg-white/10 text-sm">
              <Globe className="h-4 w-4" />
              <span className="ml-2">EN</span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
