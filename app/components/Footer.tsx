import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="gradient-green text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <h3 className="text-xl font-bold text-white">Leadify</h3>
            </div>
            <p className="text-sm opacity-90">Lead + Amplify - Psychology of Voters and Candidates</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link href="/#vision" className="hover:text-white/80 transition-colors">Vision</Link>
            <Link href="/#mission" className="hover:text-white/80 transition-colors">Mission</Link>
            <Link href="/#goals" className="hover:text-white/80 transition-colors">Goals</Link>
            <Link href="/#project" className="hover:text-white/80 transition-colors">Project</Link>
            <Link href="/candidates" className="hover:text-white/80 transition-colors">Candidates</Link>
            <Link href="/assessment" className="hover:text-white/80 transition-colors">Assessment</Link>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Leadify. All rights reserved. | Empowering informed democracy</p>
        </div>
      </div>
    </footer>
  );
}
