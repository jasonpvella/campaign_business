'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/resources', label: 'Resources' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-navy/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-navy text-lg font-bold tracking-tight">
          Blueprint Political
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-sans font-medium transition-colors ${
                pathname === link.href ? 'text-navy' : 'text-text-muted hover:text-navy'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/work-with-me"
            className="bg-amber text-white text-sm font-sans font-semibold px-5 py-2 rounded hover:bg-amber/90 transition-colors"
          >
            Work With Me →
          </Link>
        </nav>

        <button
          className="md:hidden text-navy p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-navy/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-navy font-sans font-medium text-base"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/work-with-me"
            className="bg-amber text-white text-sm font-sans font-semibold px-5 py-3 rounded text-center"
            onClick={() => setOpen(false)}
          >
            Work With Me →
          </Link>
        </div>
      )}
    </header>
  );
}
