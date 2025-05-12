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
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center gradient-text ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            About Leadify
          </h2>
          
          <div className={`glass rounded-lg shadow-lg p-8 ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-[var(--neutral-800)] leading-relaxed mb-6">
              Leadify is more than just an advocacy platform—it's a movement towards a more informed and engaged democracy. 
              Our name represents our dual mission: to <strong>Lead</strong> the conversation on voter psychology and to <strong>Amplify</strong> the
               voices of citizens seeking genuine political change.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className={`${isVisible ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Our Approach</h3>
                <p className="text-[var(--neutral-700)]">
                  We believe in empowering voters through education and awareness. By understanding the psychological 
                  tactics used in campaigns, citizens can make more informed decisions that reflect their true values 
                  and priorities.
                </p>
              </div>
              
              <div className={`${isVisible ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Our Impact</h3>
                <p className="text-[var(--neutral-700)]">
                  Through our platform, workshops, and educational initiatives, we're creating a ripple effect of 
                  informed voters who can see beyond emotional manipulation and focus on substantive policy discussions.
                </p>
              </div>
            </div>
            
            <div className={`bg-[var(--primary-50)] p-6 rounded-lg ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Join Our Movement</h3>
              <p className="text-[var(--neutral-800)] mb-4">
                Whether you're a first-time voter, an educator, or someone passionate about democratic reform, 
                there's a place for you in the Leadify community. Together, we can build a more transparent 
                and accountable political system.
              </p>
              <button className="bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-2 rounded-full font-medium btn-hover">
                Get Involved Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
