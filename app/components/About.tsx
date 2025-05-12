import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[var(--neutral-50)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">About Leadify</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 border border-[var(--border)]">
            <p className="text-lg text-[var(--neutral-700)] leading-relaxed mb-6">
              Leadify is more than just an advocacy platform—it's a movement towards a more informed and engaged democracy. 
              Our name represents our dual mission: to <strong>Lead</strong> the conversation on voter psychology and to 
              <strong>Amplify</strong> the voices of citizens seeking genuine political change.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Our Approach</h3>
                <p className="text-[var(--neutral-600)]">
                  We believe in empowering voters through education and awareness. By understanding the psychological 
                  tactics used in campaigns, citizens can make more informed decisions that reflect their true values 
                  and priorities.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Our Impact</h3>
                <p className="text-[var(--neutral-600)]">
                  Through our platform, workshops, and educational initiatives, we're creating a ripple effect of 
                  informed voters who can see beyond emotional manipulation and focus on substantive policy discussions.
                </p>
              </div>
            </div>
            
            <div className="bg-[var(--secondary)] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Join Our Movement</h3>
              <p className="text-[var(--neutral-700)] mb-4">
                Whether you're a first-time voter, an educator, or someone passionate about democratic reform, 
                there's a place for you in the Leadify community. Together, we can build a more transparent 
                and accountable political system.
              </p>
              <button className="bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-2 rounded-full font-medium hover:bg-[var(--primary-700)] transition-colors">
                Get Involved Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
