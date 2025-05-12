'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Mission() {
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
    <section ref={sectionRef} id="mission" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-center gradient-text ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            Our Mission
          </h2>
          <div className={`glass p-8 rounded-xl ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}>
            <p className="text-lg text-[var(--neutral-800)] leading-relaxed">
              Leadify encourages voters to think independently about political candidates and participate in civil 
              discussions free from hostility. Through educational efforts, we promote research-based decision-making 
              so voters can better understand campaign strategies and candidate platforms. Acknowledging the influence 
              of social media, we provide guidance to help voters distinguish facts from misinformation. Additionally, 
              we support the youth in becoming civic ambassadors, helping them grow into future leaders who inspire 
              others to engage in meaningful political discourse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
