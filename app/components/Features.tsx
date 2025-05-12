'use client';

import React, { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: "🔍",
    title: "Unbiased Analysis",
    description: "Get objective breakdowns of campaign materials and political strategies"
  },
  {
    icon: "🧠",
    title: "Psychology Insights",
    description: "Understand the cognitive biases and emotional triggers in political messaging"
  },
  {
    icon: "📊",
    title: "Interactive Tools",
    description: "Assess your voting psychology and discover your political blind spots"
  },
  {
    icon: "🎯",
    title: "Fact-Based Content",
    description: "Access credible candidate information from verified sources"
  },
  {
    icon: "👥",
    title: "Community Forum",
    description: "Engage in civil political discussions with fellow informed citizens"
  },
  {
    icon: "📱",
    title: "Easy Sharing",
    description: "Spread awareness by sharing insights with friends and family"
  }
];

export default function Features() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center gradient-text ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center group ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass p-6 rounded-xl card-hover">
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">{feature.title}</h3>
                <p className="text-[var(--neutral-700)]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
