'use client';

import React, { useEffect, useRef, useState } from 'react';

const goals = [
  {
    title: "Enhance Voter Awareness",
    description: "Conducting workshops and campaigns that educate voters on the psychological factors influencing their decisions, encouraging critical thinking in elections.",
    icon: "🎯"
  },
  {
    title: "Promote Ethical Campaigning",
    description: "Advocating for transparency and fairness in election campaigns and enlightening the public about the psychological tactics and campaign strategies used by candidates.",
    icon: "⚖️"
  },
  {
    title: "Amplify Voices",
    description: "Amplifying the voices of the masses through informed dialogues, developing innovative and progressive ideas, willing to challenge the status quo.",
    icon: "📢"
  },
  {
    title: "Analyze Political Trends",
    description: "Determining trends in the behaviors of political actors that help shape the electoral arena and perceive a possible preference of results.",
    icon: "📊"
  },
  {
    title: "Examine Societal Values",
    description: "Examining the normative values in a societal context that may assess the ideologies preferred by political actors.",
    icon: "🔍"
  },
  {
    title: "Create Educational Value",
    description: "Creating value for the study of the psychological aspect in terms of political behavior as an aid to better comprehend state affairs and people dynamics.",
    icon: "📚"
  }
];

export default function Goals() {
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
    <section ref={sectionRef} id="goals" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Our Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 card-hover border border-[var(--border)] ${
                isVisible ? 'animate-scaleIn' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 animate-float">{goal.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">{goal.title}</h3>
              <p className="text-[var(--neutral-700)]">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
