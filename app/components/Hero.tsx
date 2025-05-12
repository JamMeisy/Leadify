import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0 gradient-green opacity-5"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Leadify</span>
            <span className="block text-2xl md:text-4xl mt-2 text-[var(--neutral-700)] font-medium">
              Lead + Amplify
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--neutral-600)] mb-8">
            Understanding the Psychology of Voters and Candidates
          </p>
          <p className="text-lg text-[var(--neutral-600)] mb-12 max-w-2xl mx-auto">
            Empowering informed decision-making through deeper understanding of campaign dynamics, 
            voter behavior, and political psychology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#vision"
              className="bg-[var(--primary)] text-[var(--primary-foreground)] px-8 py-3 rounded-full font-medium hover:bg-[var(--primary-700)] transition-colors inline-flex items-center justify-center"
            >
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#project"
              className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors inline-flex items-center justify-center"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
