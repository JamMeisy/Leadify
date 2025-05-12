'use client';

import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#vision', label: 'Vision' },
    { href: '#mission', label: 'Mission' },
    { href: '#goals', label: 'Goals' },
    { href: '#project', label: 'Project' },
    { href: '#about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-400)] to-[var(--primary-600)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <h1 className="text-2xl font-bold gradient-text">Leadify</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--neutral-600)] hover:text-[var(--primary)] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-2 rounded-full font-medium hover:bg-[var(--primary-700)] transition-colors">
              Get Involved
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--neutral-100)] transition-colors"
          >
            <div className="space-y-1.5">
              <div
                className={`w-6 h-0.5 bg-[var(--neutral-600)] transition-transform ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-[var(--neutral-600)] transition-opacity ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-[var(--neutral-600)] transition-transform ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[var(--border)]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[var(--neutral-600)] hover:text-[var(--primary)] font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-2 rounded-full font-medium hover:bg-[var(--primary-700)] transition-colors">
                Get Involved
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
