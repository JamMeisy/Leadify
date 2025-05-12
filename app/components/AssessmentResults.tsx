'use client';

import React from 'react';
import Link from 'next/link';

interface AssessmentResultsProps {
  formData: any;
}

export default function AssessmentResults({ formData }: AssessmentResultsProps) {
  const getVoterType = () => {
    // Simple logic to determine voter type based on answers
    if (formData.politicalKnowledge === 'beginner' || formData.politicalKnowledge === 'intermediate') {
      return 'Emerging Informed Voter';
    } else if (formData.campaignInfluence === 'not-at-all' || formData.campaignInfluence === 'slightly') {
      return 'Independent Thinker';
    } else {
      return 'Conscious Observer';
    }
  };

  const getRecommendations = () => {
    const recommendations = [];
    
    if (formData.newsSource === 'social-media') {
      recommendations.push('Diversify your news sources beyond social media');
    }
    
    if (formData.votingExperience === 'first-time') {
      recommendations.push('Research candidate platforms thoroughly before voting');
    }
    
    if (formData.campaignInfluence === 'significantly') {
      recommendations.push('Practice critical analysis of campaign materials');
    }
    
    return recommendations;
  };

  const voterType = getVoterType();
  const recommendations = getRecommendations();

  return (
    <div className="animate-fadeIn">
      <div className="glass p-8 rounded-xl mb-8">
        <h2 className="text-3xl font-bold text-center mb-6 gradient-text">Your Assessment Results</h2>
        
        <div className="text-center mb-8">
          <p className="text-lg text-[var(--neutral-800)] mb-2">Your Voter Profile:</p>
          <h3 className="text-2xl font-bold text-[var(--primary)]">{voterType}</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-[var(--primary)] mb-4">Your Strengths</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[var(--neutral-800)]">Willing to learn about voter psychology</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[var(--neutral-800)]">Taking steps towards informed voting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[var(--neutral-800)]">Open to self-assessment and improvement</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[var(--primary)] mb-4">Areas for Growth</h4>
            <ul className="space-y-2">
              {recommendations.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span className="text-[var(--neutral-800)]">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[var(--primary-50)] p-6 rounded-xl text-center">
        <h4 className="text-xl font-semibold text-[var(--primary)] mb-3">Next Steps</h4>
        <p className="text-[var(--neutral-800)] mb-4">
          Continue your journey to becoming a more informed voter by exploring our resources and joining our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[var(--primary)] text-white px-6 py-2 rounded-full font-medium btn-hover"
          >
            Explore Resources
          </Link>
          <button className="border-2 border-[var(--primary)] text-[var(--primary)] px-6 py-2 rounded-full font-medium hover:bg-[var(--primary)] hover:text-white transition-colors">
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
}
