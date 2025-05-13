'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AssessmentResults from '../components/AssessmentResults';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { User, Vote, Brain, ChevronRight, ChevronLeft } from 'lucide-react';

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
    setShowResults(true);
  };

  const stepIcons = {
    1: <User className="w-6 h-6" />,
    2: <Vote className="w-6 h-6" />,
    3: <Brain className="w-6 h-6" />
  };

  const stepTitles = {
    1: 'Personal Information',
    2: 'Voting Experience',
    3: 'Psychology Assessment'
  };

  return (
    <div className="min-h-screen bg-[var(--neutral-50)] flex flex-col">
      <Header />
      <main className="py-16 md:py-24 flex-grow">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {!showResults ? (
              <>
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">
                  Voter Psychology Assessment
                </h1>
                
                <div className="mb-8">
                  <div className="flex items-center justify-center mb-4">
                    {[1, 2, 3].map((num, index) => (
                      <React.Fragment key={num}>
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center
                          transition-all duration-300
                          ${step >= num 
                            ? 'bg-[var(--primary)] text-white' 
                            : 'bg-[var(--neutral-200)] text-[var(--neutral-500)]'
                          }
                        `}>
                          {stepIcons[num as keyof typeof stepIcons]}
                        </div>
                        {num < 3 && (
                          <div className={`
                            w-24 md:w-32 h-1
                            transition-all duration-300
                            ${step > num
                              ? 'bg-[var(--primary)]'
                              : 'bg-[var(--neutral-200)]'
                            }
                          `} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-medium text-[var(--primary)]">
                      {stepTitles[step as keyof typeof stepTitles]}
                    </p>
                    <p className="text-[var(--neutral-600)]">Step {step} of 3</p>
                  </div>
                </div>

                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit}>
                      {/* Step 1: Personal Information */}
                      {step === 1 && (
                        <div className="animate-fadeIn space-y-6">
                          <div>
                            <label className="block text-[var(--neutral-800)] mb-2 font-medium">
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white transition-all"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-[var(--neutral-800)] mb-2 font-medium">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white transition-all"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-[var(--neutral-800)] mb-2 font-medium">
                              Age
                            </label>
                            <input
                              type="number"
                              name="age"
                              value={formData.age}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white transition-all"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-[var(--neutral-800)] mb-2 font-medium">
                              Region
                            </label>
                            <select
                              name="region"
                              value={formData.region}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white transition-all"
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

                          <Button
                            type="button"
                            onClick={nextStep}
                            size="lg"
                            className="w-full"
                          >
                            Next
                            <ChevronRight className="ml-2 w-5 h-5" />
                          </Button>
                        </div>
                      )}

                      {/* Step 2: Voting Experience */}
                      {step === 2 && (
                        <div className="animate-fadeIn space-y-6">
                          <div>
                            <label className="block text-[var(--neutral-800)] mb-2 font-medium">
                              How many times have you voted?
                            </label>
                            <select
                              name="votingExperience"
                              value={formData.votingExperience}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white transition-all"
                              required
                            >
                              <option value="">Select an option</option>
                              <option value="first-time">This will be my first time</option>
                              <option value="1-2">1-2 times</option>
                              <option value="3-5">3-5 times</option>
                              <option value="more-than-5">More than 5 times</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[var(--neutral-800)] mb-2 font-medium">
                              Rate your political knowledge
                            </label>
                            <select
                              name="politicalKnowledge"
                              value={formData.politicalKnowledge}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white transition-all"
                              required
                            >
                              <option value="">Select a rating</option>
                              <option value="beginner">Beginner</option>
                              <option value="intermediate">Intermediate</option>
                              <option value="advanced">Advanced</option>
                              <option value="expert">Expert</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[var(--neutral-800)] mb-2 font-medium">
                              Primary source of political news
                            </label>
                            <select
                              name="newsSource"
                              value={formData.newsSource}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white transition-all"
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
                            <Button
                              type="button"
                              onClick={prevStep}
                              size="lg"
                              variant="outline"
                              className="flex-1"
                            >
                              <ChevronLeft className="mr-2 w-5 h-5" />
                              Previous
                            </Button>
                            <Button
                              type="button"
                              onClick={nextStep}
                              size="lg"
                              className="flex-1"
                            >
                              Next
                              <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Psychology Assessment */}
                      {step === 3 && (
                        <div className="animate-fadeIn space-y-6">
                          <div>
                            <label className="block text-[var(--neutral-800)] mb-2 font-medium">
                              What factors most influence your candidate selection?
                            </label>
                            <textarea
                              name="candidateSelection"
                              value={formData.candidateSelection}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white h-32 transition-all"
                              placeholder="Describe what matters most to you when choosing a candidate..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-[var(--neutral-800)] mb-2 font-medium">
                              How do campaign tactics influence your decisions?
                            </label>
                            <select
                              name="campaignInfluence"
                              value={formData.campaignInfluence}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white transition-all"
                              required
                            >
                              <option value="">Select your response</option>
                              <option value="not-at-all">Not at all - I research independently</option>
                              <option value="slightly">Slightly - I consider them but verify</option>
                              <option value="moderately">Moderately - They shape my initial opinions</option>
                              <option value="significantly">Significantly - They heavily influence me</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[var(--neutral-800)] mb-2 font-medium">
                              Describe your critical thinking approach to political information
                            </label>
                            <textarea
                              name="criticalThinking"
                              value={formData.criticalThinking}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white h-32 transition-all"
                              placeholder="How do you evaluate political claims and promises?"
                              required
                            />
                          </div>

                          <div className="flex gap-4">
                            <Button
                              type="button"
                              onClick={prevStep}
                              size="lg"
                              variant="outline"
                              className="flex-1"
                            >
                              <ChevronLeft className="mr-2 w-5 h-5" />
                              Previous
                            </Button>
                            <Button
                              type="submit"
                              size="lg"
                              className="flex-1"
                            >
                              Submit Assessment
                            </Button>
                          </div>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
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
