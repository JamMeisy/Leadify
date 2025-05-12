'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Project() {
  const [activeTab, setActiveTab] = useState('objectives');
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

  const tabs = [
    { id: 'objectives', label: 'Objectives' },
    { id: 'situationer', label: 'Situationer' },
    { id: 'plans', label: 'Plans of Action' },
    { id: 'evaluation', label: 'Evaluation' },
  ];

  const content = {
    objectives: {
      title: 'Project Objectives',
      general: {
        title: 'General Objective',
        content: `This project aims to create a comprehensive digital platform that helps Filipino voters understand the psychological tactics used in political campaigns. We'll build a website that empowers voters to make more conscious decisions—not by telling them who to vote for, but by helping them see how they're being influenced while giving them access to credible candidate information.`
      },
      specific: {
        title: 'Specific Objectives',
        content: [
          'Create a one-stop resource where voters can access everything about running candidates, including backgrounds, platforms, and track records from credible sources.',
          'Develop an interactive website that helps users understand campaign psychology while reviewing candidate information.',
          'Integrate strategic interventions with factual candidate information through psychological checkpoints.',
          'Build an interactive assessment tool where users can evaluate their voting psychology.',
          'Connect with broader campaign ecosystem—poster campaigns, social media initiatives, and media segments.',
          'Achieve nationwide reach and tangible behavioral change in voting patterns.',
          'Create a permanent resource that combines reliable political information with voter psychology education.'
        ]
      }
    },
    situationer: {
      title: 'Situationer of the Target Locale and Audience',
      content: `The Philippines has long been a vibrant democracy, but voter behavior remains deeply shaped by non-rational influences such as celebrity endorsements, personality-driven politics, and emotionally charged campaigns. Across various election cycles, Filipino voters have consistently shown susceptibility to psychological tactics, particularly those involving appeals, bandwagon, and charisma. These trends are rooted not in ignorance, but rather in a lack of accessible education on how these strategies operate beneath the surface of political discourse. The prevalence of social media has further complicated this dynamic, amplifying emotionally manipulative content, often without critical engagement from its audience.

Our campaign targets Filipino voters nationwide, with special emphasis on first-time voters, youth sectors, and those with limited access to formal education. These groups represent both the most impressionable and the most crucial for long-term democratic development. In many communities, especially outside urban municipalities, political decisions are often influenced by tradition, familial loyalty, or patronage systems, leaving little room for reflective or policy-driven engagement. Furthermore, while COMELEC and civic groups have made efforts in voter education, these are often limited to procedural instructions (e.g., how to register, or where to vote), rather than addressing the deeper psychological processes that impact electoral decisions.

In parallel, candidates themselves operate in a system that often rewards emotional appeal over substantive and genuine policy. Campaign strategists often deploy persuasion techniques, such as targeted fear messaging, symbolism, and identity politics, not necessarily to mislead, but to heavily influence voter behavior. However, without transparency or voter awareness, these tactics contribute to a political climate where winning becomes a matter of manipulation instead of merit.

That said, this campaign does not only seek to inform voters, but also seek to challenge candidates and political communicators to rise above psychological exploitation. Our target audience extends beyond individual citizens to include schools, media institutions, and policy influences. By embedding psychological literacy into the way we talk about elections, we aim to shift the culture of Philippine politics toward one that values critical thinking, transparency, and integrity, not just at the ballot box, but within the entire electoral field.`
    },
    plans: {
      title: 'Plans of Action',
      content: [
        'Launch comprehensive website with candidate platforms and psychological analysis tools',
        'Develop interactive assessment tools for voter psychology evaluation',
        'Create educational content on campaign tactics and psychological strategies',
        'Partner with educational institutions to integrate voter psychology into curricula',
        'Conduct workshops and seminars on critical thinking in elections',
        'Deploy social media campaigns to reach younger demographics',
        'Collaborate with media outlets for expert analysis segments',
        'Establish monitoring system for campaign tactics and voter behavior trends'
      ]
    },
    evaluation: {
      title: 'Evaluation',
      content: `Our website will provide people direct access to the platforms of the candidates. They'll be more inclined to use the platform as it is direct and they can search for the candidate of their choice. It'll also be easier for people to disseminate to their respective friends, partners, families on the candidate.

Key features:
• No bias - presenting all information objectively
• All platforms - comprehensive candidate information
• Searchable - easy to find specific candidates
• Easy to share - social media integration
• Each party and their people - complete political landscape

The success of our platform will be measured through user engagement metrics, shifts in voting patterns, quality of political discourse, and feedback from users about how the platform influenced their decision-making process.`
    }
  };

  return (
    <section ref={sectionRef} id="project" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center gradient-text ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          Project Proposal
        </h2>
        
        {/* Tabs */}
        <div className={`flex flex-wrap justify-center mb-8 border-b border-[var(--border)] ${isVisible ? 'animate-slideIn' : 'opacity-0'}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-[var(--primary)] border-b-2 border-[var(--primary)]'
                  : 'text-[var(--neutral-700)] hover:text-[var(--primary)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          {/* Objectives Tab */}
          {activeTab === 'objectives' && (
            <div className="glass p-8 rounded-xl space-y-8">
              <h3 className="text-2xl font-bold text-[var(--primary)]">{content.objectives.title}</h3>
              
              <div>
                <h4 className="text-xl font-semibold mb-3">{content.objectives.general.title}</h4>
                <p className="text-[var(--neutral-800)] leading-relaxed">{content.objectives.general.content}</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">{content.objectives.specific.title}</h4>
                <ul className="space-y-3">
                  {content.objectives.specific.content.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[var(--primary)] mr-3">•</span>
                      <span className="text-[var(--neutral-800)]">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Situationer Tab */}
          {activeTab === 'situationer' && (
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">{content.situationer.title}</h3>
              <div className="text-[var(--neutral-800)] leading-relaxed space-y-4">
                {content.situationer.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* Plans Tab */}
          {activeTab === 'plans' && (
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">{content.plans.title}</h3>
              <ul className="space-y-4">
                {content.plans.content.map((plan, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[var(--primary)] font-bold mr-3">{index + 1}.</span>
                    <span className="text-[var(--neutral-800)]">{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Evaluation Tab */}
          {activeTab === 'evaluation' && (
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">{content.evaluation.title}</h3>
              <div className="text-[var(--neutral-800)] leading-relaxed">
                {content.evaluation.content}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
