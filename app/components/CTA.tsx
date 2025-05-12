import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-[var(--neutral-100)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text">
              Be Part of the Change
            </h2>
            <p className="text-xl mb-8 text-[var(--neutral-700)] text-center">
              Join thousands of Filipinos who are learning to see beyond campaign tactics and make informed voting decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment">
                <Button size="lg">
                  Start Your Assessment
                </Button>
              </Link>
              <Link href="/candidates">
                <Button size="lg" variant="outline">
                  View Candidates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
