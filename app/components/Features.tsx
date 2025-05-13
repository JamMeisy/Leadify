'use client';

import React, { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: "🧠",
    title: "Psychological Analysis",
    description: "Expert breakdowns of campaign tactics revealing fear-based messaging and manipulation strategies"
  },
  {
    icon: "🔍",
    title: "Campaign Decoder",
    description: "Analyze posters, speeches, and advertisements to expose hidden psychological techniques"
  },
  {
    icon: "📊",
    title: "Voting Psychology Tool",
    description: "Interactive assessment revealing your vulnerabilities to different influence tactics"
  },
  {
    icon: "🎯",
    title: "Candidate Database",
    description: "Comprehensive profiles with platforms, track records, and campaign strategy analysis"
  },
  {
    icon: "💡",
    title: "Reflection Prompts",
    description: "Strategic questions that promote critical thinking about your voting choices"
  },
  {
    icon: "📱",
    title: "Impact Analytics",
    description: "Track how many voters reconsidered their choices after using our tools"
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
    <section ref={sectionRef} className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-5xl font-bold mb-8 text-center gradient-text mx-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
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
