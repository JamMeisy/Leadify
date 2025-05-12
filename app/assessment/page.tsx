'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AssessmentResults from '../components/AssessmentResults';

export default function Assessment() {
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    region: '',
    votingExperience: '',
    politicalKnowledge: '',
    newsSource: '',
    candidateSelection: '',
    campaignInfluence: '',
    criticalThinking: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show results instead of just logging
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {!showResults ? (
              <>
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">
                  Voter Psychology Assessment
                </h1>
                
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="bg-[var(--neutral-200)] rounded-full h-2 mb-2">
                    <div 
                      className="bg-[var(--primary)] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                  <p className="text-center text-[var(--neutral-600)]">Step {step} of 3</p>
                </div>

                <form onSubmit={handleSubmit} className="glass p-8 rounded-xl">
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-semibold mb-6 text-[var(--primary)]">Personal Information</h2>
                  
                  <div className="mb-4">
                    <label className="block text-[var(--neutral-800)] mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-[var(--neutral-800)] mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-[var(--neutral-800)] mb-2">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[var(--neutral-800)] mb-2">Region</label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                      required
                    >
                      <option value="">Select your region</option>
                      <option value="ncr">NCR</option>
                      <option value="region1">Region I</option>
                      <option value="region2">Region II</option>
                      <option value="region3">Region III</option>
                      <option value="region4a">Region IV-A</option>
                      <option value="region4b">Region IV-B</option>
                      <option value="region5">Region V</option>
                      <option value="car">CAR</option>
                      <option value="barmm">BARMM</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full bg-[var(--primary)] text-white py-3 rounded-lg font-medium btn-hover"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Step 2: Voting Experience */}
              {step === 2 && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-semibold mb-6 text-[var(--primary)]">Voting Experience</h2>
                  
                  <div className="mb-4">
                    <label className="block text-[var(--neutral-800)] mb-2">How many times have you voted?</label>
                    <select
                      name="votingExperience"
                      value={formData.votingExperience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="first-time">This will be my first time</option>
                      <option value="1-2">1-2 times</option>
                      <option value="3-5">3-5 times</option>
                      <option value="more-than-5">More than 5 times</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-[var(--neutral-800)] mb-2">Rate your political knowledge</label>
                    <select
                      name="politicalKnowledge"
                      value={formData.politicalKnowledge}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                      required
                    >
                      <option value="">Select a rating</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[var(--neutral-800)] mb-2">Primary source of political news</label>
                    <select
                      name="newsSource"
                      value={formData.newsSource}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                      required
                    >
                      <option value="">Select a source</option>
                      <option value="social-media">Social Media</option>
                      <option value="television">Television</option>
                      <option value="newspaper">Newspaper</option>
                      <option value="online-news">Online News Sites</option>
                      <option value="radio">Radio</option>
                      <option value="word-of-mouth">Word of Mouth</option>
                    </select>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 border-2 border-[var(--primary)] text-[var(--primary)] py-3 rounded-lg font-medium hover:bg-[var(--primary-50)] transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-[var(--primary)] text-white py-3 rounded-lg font-medium btn-hover"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Psychology Assessment */}
              {step === 3 && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-semibold mb-6 text-[var(--primary)]">Psychology Assessment</h2>
                  
                  <div className="mb-4">
                    <label className="block text-[var(--neutral-800)] mb-2">
                      What factors most influence your candidate selection?
                    </label>
                    <textarea
                      name="candidateSelection"
                      value={formData.candidateSelection}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white h-32"
                      placeholder="Describe what matters most to you when choosing a candidate..."
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-[var(--neutral-800)] mb-2">
                      How do campaign tactics influence your decisions?
                    </label>
                    <select
                      name="campaignInfluence"
                      value={formData.campaignInfluence}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                      required
                    >
                      <option value="">Select your response</option>
                      <option value="not-at-all">Not at all - I research independently</option>
                      <option value="slightly">Slightly - I consider them but verify</option>
                      <option value="moderately">Moderately - They shape my initial opinions</option>
                      <option value="significantly">Significantly - They heavily influence me</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[var(--neutral-800)] mb-2">
                      Describe your critical thinking approach to political information
                    </label>
                    <textarea
                      name="criticalThinking"
                      value={formData.criticalThinking}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white h-32"
                      placeholder="How do you evaluate political claims and promises?"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 border-2 border-[var(--primary)] text-[var(--primary)] py-3 rounded-lg font-medium hover:bg-[var(--primary-50)] transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-[var(--primary)] text-white py-3 rounded-lg font-medium btn-hover"
                    >
                      Submit Assessment
                    </button>
                  </div>
                </div>
              )}
            </form>
            </>
          ) : (
            <AssessmentResults formData={formData} />
          )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
