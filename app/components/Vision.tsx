'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Eye } from 'lucide-react';

export default function Vision() {
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
    <section ref={sectionRef} id="vision" className="py-16 md:py-24 bg-[var(--neutral-50)]">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-8">
            <Eye className="w-8 h-8 text-[var(--primary)]" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Our Vision</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-[var(--neutral-800)] leading-relaxed text-justify">
              Leadify envisions a society where informed decision-making thrives, where we empower individuals with 
              a deeper understanding of campaign dynamics and voter behavior. We envision voters who engage in civil 
              political discussions, research candidates thoroughly, and critically assess the role of media in politics. 
              By leading conversations and amplifying knowledge, we aim to inspire civic engagement and nurture a more 
              inclusive and progressive democracy for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
