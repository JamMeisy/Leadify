'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Shield, LightbulbIcon, Users2 } from 'lucide-react';

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

  const missionPoints = [
    {
      icon: <LightbulbIcon className="w-6 h-6 text-[var(--primary)]" />,
      title: "Independent Thinking",
      description: "Empowering voters to form their own opinions"
    },
    {
      icon: <Shield className="w-6 h-6 text-[var(--primary)]" />,
      title: "Fight Misinformation",
      description: "Helping distinguish facts from fiction"
    },
    {
      icon: <Users2 className="w-6 h-6 text-[var(--primary)]" />,
      title: "Civil Discourse",
      description: "Promoting respectful political discussions"
    },
    {
      icon: <Rocket className="w-6 h-6 text-[var(--primary)]" />,
      title: "Youth Leadership",
      description: "Developing future civic ambassadors"
    }
  ];

  return (
    <section ref={sectionRef} id="mission" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-8 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <Rocket className="w-8 h-8 text-[var(--primary)] mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mx-auto">Our Mission</h2>
          </div>
          
          <div className={`bg-[var(--neutral-50)] rounded-xl p-8 mb-12 ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}>
            <p className="text-lg text-[var(--neutral-800)] leading-relaxed text-justify">
              Leadify encourages voters to think independently about political candidates and participate in civil 
              discussions free from hostility. Through educational efforts, we promote research-based decision-making 
              so voters can better understand campaign strategies and candidate platforms. Acknowledging the influence 
              of social media, we provide guidance to help voters distinguish facts from misinformation. Additionally, 
              we support the youth in becoming civic ambassadors, helping them grow into future leaders who inspire 
              others to engage in meaningful political discourse.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {missionPoints.map((point, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl border border-[var(--border)] hover:shadow-lg transition-shadow">
                <div className="mt-1">{point.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-[var(--neutral-600)]">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
