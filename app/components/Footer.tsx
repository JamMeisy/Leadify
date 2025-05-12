import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[var(--neutral-900)] text-[var(--neutral-300)] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-400)] to-[var(--primary-600)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <h3 className="text-xl font-bold text-white">Leadify</h3>
            </div>
            <p className="text-sm">Lead + Amplify - Psychology of Voters and Candidates</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#vision" className="hover:text-[var(--primary)] transition-colors">Vision</a>
            <a href="#mission" className="hover:text-[var(--primary)] transition-colors">Mission</a>
            <a href="#goals" className="hover:text-[var(--primary)] transition-colors">Goals</a>
            <a href="#project" className="hover:text-[var(--primary)] transition-colors">Project</a>
          </div>
        </div>
        
        <div className="border-t border-[var(--neutral-700)] mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Leadify. All rights reserved. | Empowering informed democracy</p>
        </div>
      </div>
    </footer>
  );
}
