'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold mb-8 text-center gradient-text mx-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            About Leadify
          </h2>
          
          <div className={`glass rounded-lg shadow-lg p-8 ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-[var(--neutral-800)] leading-relaxed mb-6">
              Leadify is a pioneering digital platform that exposes the psychological tactics used in Philippine political campaigns. 
              Our name represents our dual mission: to <strong>Lead</strong> the conversation on voter psychology and to <strong>Amplify</strong> 
              awareness about campaign manipulation strategies.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className={`${isVisible ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Our Approach</h3>
                <p className="text-[var(--neutral-700)]">
                  We don't tell voters who to choose—we show them how they're being influenced. Through expert analysis, 
                  interactive tools, and psychological assessments, we help Filipinos see beyond emotional manipulation 
                  and focus on genuine policy substance.
                </p>
              </div>
              
              <div className={`${isVisible ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Our Impact</h3>
                <p className="text-[var(--neutral-700)]">
                  By embedding psychological literacy into election discourse, we're creating a culture that values 
                  critical thinking over emotional appeals. Our tools have helped thousands recognize and resist 
                  campaign manipulation tactics.
                </p>
              </div>
            </div>
            
            <div className={`bg-[var(--primary-50)] p-6 rounded-lg ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Beyond Elections</h3>
              <p className="text-[var(--neutral-800)] mb-4">
                Leadify is building a permanent resource for voter education. After each election cycle, we continue 
                updating our analyses, enhancing features, and partnering with schools to integrate psychological 
                awareness into civic education. Our vision extends beyond single elections to create lasting change 
                in Philippine democracy.
              </p>
              <button className="bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-2 rounded-full font-medium btn-hover">
                Explore Our Analysis Tools
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
