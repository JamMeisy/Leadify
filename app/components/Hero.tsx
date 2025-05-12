'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[600px] flex items-center bg-white">
      <div className="absolute inset-0 gradient-green opacity-5"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <span className="gradient-text">Leadify</span>
            <span className="block text-2xl md:text-4xl mt-2 text-[var(--neutral-800)] font-medium">
              Lead + Amplify
            </span>
          </h1>
          <p className={`text-xl md:text-2xl text-[var(--neutral-700)] mb-8 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Understanding the Psychology of Voters and Candidates
          </p>
          <p className={`text-lg text-[var(--neutral-700)] mb-12 max-w-2xl mx-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            Empowering informed decision-making through deeper understanding of campaign dynamics, 
            voter behavior, and political psychology.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <Link
              href="/assessment"
              className="bg-[var(--primary)] text-[var(--primary-foreground)] px-8 py-3 rounded-full font-medium btn-hover inline-flex items-center justify-center"
            >
              Start Your Assessment
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="#vision"
              className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors inline-flex items-center justify-center"
            >
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
