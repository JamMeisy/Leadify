import React from 'react';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 gradient-green text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the Change
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of Filipinos who are learning to see beyond campaign tactics and make informed voting decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--neutral-100)] transition-colors">
              Start Your Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[var(--primary)] transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
