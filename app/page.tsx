import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Mission from './components/Mission';
import Goals from './components/Goals';
import Features from './components/Features';
import Project from './components/Project';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Vision />
        <Mission />
        <Goals />
        <Features />
        <Project />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
