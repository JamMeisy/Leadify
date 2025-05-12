'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[700px] flex items-center bg-gradient-to-b from-[var(--neutral-50)] to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--primary)] opacity-5 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <span className="gradient-text">Leadify</span>
            <span className="block text-2xl md:text-4xl mt-2 text-[var(--neutral-800)] font-medium">
              Lead + Amplify
            </span>
          </h1>
          <p className={`text-xl md:text-2xl text-[var(--neutral-700)] mb-8 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Understanding the Psychology of Voters and Candidates
          </p>
          <p className={`text-lg text-[var(--neutral-600)] mb-12 max-w-3xl mx-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            Empowering informed decision-making through deeper understanding of campaign dynamics, 
            voter behavior, and political psychology.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <Link href="/assessment">
              <Button size="lg" className="text-lg px-8">
                Start Your Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#vision">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
                Decode Tactics
              </h3>
              <p className="text-[var(--neutral-600)]">
                Understand psychological strategies used in campaigns
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
                Make Informed Choices
              </h3>
              <p className="text-[var(--neutral-600)]">
                Vote based on facts, not manipulation
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
                Strengthen Democracy
              </h3>
              <p className="text-[var(--neutral-600)]">
                Build a more conscious electoral system
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
