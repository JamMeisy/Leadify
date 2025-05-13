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
        content: `Our primary platform will be the website, a one-stop resource where voters can access everything they need about running candidates, including their backgrounds, platforms, and track records from credible sources. What sets this apart from typical election sites is its interactive design that helps users understand campaign psychology while reviewing candidate information.

The website will serve as a trusted source for candidate platforms, enhanced with strategic interventions. As visitors browse through profiles and compare platforms, they'll encounter questions designed to promote reflection: Can they identify three specific platforms of their chosen candidate? Do these priorities align with their own? Are they voting for someone or merely against another? We're integrating factual candidate information with these psychological checkpoints.

Every candidate's platform will be clearly presented alongside expert analysis of their campaign materials. Our team will regularly upload breakdowns of posters, advertisements, and speeches to reveal the strategies being employed. While voters compare candidate positions on issues, they can access decoded versions that expose fear-based tactics, bandwagon strategies, and emotional manipulation. This gives voters the ability to see beyond surface-level messaging.

A central feature will be our interactive assessment tool where users can evaluate their voting psychology. Through simulated scenarios and targeted questions, they'll discover their vulnerabilities to different influence techniques. The tool will reveal whether their stated priorities actually align with their chosen candidate's platforms—results that may prove enlightening. Consider it a reality check for voting behavior.

The website will integrate with our broader campaign ecosystem—connecting our thought-provoking poster campaigns, social media initiatives, and planned media segments where experts analyze campaign materials in real-time. We'll implement analytics to track meaningful impact: how many users research candidates after using our tools, shifts in voting patterns, and testimonials from voters whose decision-making process has evolved.

We're targeting nationwide reach and tangible behavioral change. Our goals include sparking community conversations, partnering with educational institutions to incorporate voter psychology into curricula, and most importantly, encouraging thorough candidate research before elections. Success means reducing single-issue voting patterns and collecting evidence that our campaign has prompted voters to reconsider their choices.

This website is designed for long-term sustainability. Following each election cycle, we'll continue updating candidate information, adding fresh analyses, and enhancing features based on user feedback. Rather than a temporary campaign tool, we're building a permanent resource that combines reliable political information with voter psychology education. Our vision is to create a more critically aware electorate that extends well beyond any single election.`
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
        {
          number: '1',
          title: 'Define Goals and Target Audience',
          description: 'Definitely define what Leadify is aimed at in order to offer voters an easy access to details about election candidates. Select the target audience (general voters, first-time voters, specific regions) and make content accordingly to their needs.'
        },
        {
          number: '2',
          title: 'Research and User Analysis',
          description: 'Run surveys or interviews to learn the information that is most valuable for voters. Analyse similar platforms to learn strengths, weaknesses, and uniqueness.'
        },
        {
          number: '3',
          title: 'Build a Wireframe and Prototype',
          description: 'Make a simple mock-up or a prototype to see the user interface. Aim at intuitive navigation, search engine, and candidate comparison tools.'
        },
        {
          number: '4',
          title: 'Develop the Content Strategy',
          description: 'Decide about what information to cover (such as candidate bios, policy stances, or track records). Establish content sources: candidate interviews, official websites, news articles, and public records.'
        },
        {
          number: '5',
          title: 'Choose Technology Stack',
          description: 'Choose a website platform. Choose backend technologies for processing data (e.g., Python, Node.js) and those for front-end construction (e.g., React, Vue).'
        },
        {
          number: '6',
          title: 'Develop Core Features',
          description: 'Candidate Profiles: Fundamental facts, political association, policies, and previous positions. Search and Filter: It is easy for users to search for candidates either by name, region, or position. Comparison Tool: Side-by-side comparison of candidate policies. Fact-Checking Hub: Claims made by candidates verified.'
        },
        {
          number: '7',
          title: 'Content Aggregation and Management',
          description: 'Have data pipelines that help to gather and update candidate details. Install a content management system (CMS) to make updates simple.'
        },
        {
          number: '8',
          title: 'Test and Refine',
          description: 'Test usability, functionality, and content clarity with a user test. Receive feedback and fix technical bugs.'
        },
        {
          number: '9',
          title: 'Launch and Promotion',
          description: 'Use social media, community forums, and associations with civic groups to announce the introduction. Use SEO strategies to enhance the profile of your firm in search engines.'
        },
        {
          number: '10',
          title: 'Maintenance and Updates',
          description: 'Keep candidate information updated regularly, and especially before election seasons. Continue to enhance features according to what users are saying and upcoming needs.'
        }
      ]
    },
    evaluation: {
      title: 'Evaluation',
      content: `People will be inclined to use the website as it is accessible and easy to disseminate to their friends and family. While researching about candidates, their credentials, platforms and what they've done to positively impact the country is the way to formulate an educated opinion, it would take a lot of time and effort and not everyone is willing to search for it and not everyone is willing to read multiple articles or websites about it. Creating a website wherein everything is in one place is most beneficial as it would have the party lists and those involved in said party. There wouldn't be bias to any platform or candidate as listed only there would be their credentials, political history and their platform with pictures (if there were any).

For first time voters, it would be an easy and direct way to be informed of the different platforms that the candidates have. They wouldn't have to listen to other people badgering them on who to vote for because of this reason or that reason, first time voters have them right at their fingertips and can just search whose platform is inline with their interests.

In the website, there would be a counter on how many times it was visited, shared and commented on. It would have a feature wherein it would ask for the opinion of the user after sharing it or has been on it for a while or if they clicked on the profile of the candidate. It would ask questions such as if they were first-time voters or if they were looking for candidates having a specific platform. Before they could exit the website, the user will be presented with a questionnaire such as "during your time on our website, did you have a specific candidate in mind and after learning their platform and other candidates platform, did your decision change?" Another would be "would you like to see the most searched candidates and why viewers chose them?" it would give them an idea on the different candidates and why people would choose them indirectly. After answering that, there will be a statement that will appear stating that the results of the simulated scenarios will also be put into data in order to assess whether or not users have chosen the right candidate as per the simulation.`
    }
  };

  return (
    <section ref={sectionRef} id="project" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-5xl font-bold mb-8 text-center gradient-text mx-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
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
        <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
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
                <div className="text-[var(--neutral-800)] leading-relaxed space-y-4">
                  {content.objectives.specific.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-justify">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Situationer Tab */}
          {activeTab === 'situationer' && (
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">{content.situationer.title}</h3>
              <div className="text-[var(--neutral-800)] leading-relaxed space-y-4">
                {content.situationer.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-justify">{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* Plans Tab */}
          {activeTab === 'plans' && (
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">{content.plans.title}</h3>
              <div className="space-y-6">
                {content.plans.content.map((plan, index) => (
                  <div key={index} className="border-l-4 border-[var(--primary)] pl-4">
                    <h5 className="font-semibold text-lg text-[var(--primary)] mb-2">
                      {plan.number}. {plan.title}
                    </h5>
                    <p className="text-[var(--neutral-800)] leading-relaxed">{plan.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Evaluation Tab */}
          {activeTab === 'evaluation' && (
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">{content.evaluation.title}</h3>
              <div className="text-[var(--neutral-800)] leading-relaxed space-y-4">
                {content.evaluation.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-justify">{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
