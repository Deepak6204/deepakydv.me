import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button after scrolling down 300px
      setShowScrollTop(window.scrollY > 300);

      // Detect active section for navigation highlighting
      const sections = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-rich-black text-light-gray relative">
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 -right-4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-slate-gray/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Main content with relative positioning */}
      <div className="relative z-10">
        <Header />
        <main className="space-y-0">
          {/* Add subtle dividers between sections */}
          <Hero />
          <div className="h-px bg-gradient-to-r from-transparent via-slate-gray/30 to-transparent" />
          
          <About />
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-blue/20 to-transparent" />
          
          <Education />
          <div className="h-px bg-gradient-to-r from-transparent via-slate-gray/30 to-transparent" />
          
          <Skills />
          <div className="h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent" />
          
          <Experience />
          <div className="h-px bg-gradient-to-r from-transparent via-slate-gray/30 to-transparent" />
          
          <Projects />
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-blue/20 to-transparent" />
          
          <Testimonials />
          <div className="h-px bg-gradient-to-r from-transparent via-slate-gray/30 to-transparent" />
          
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Scroll to top button with smooth animation */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className={`fixed bottom-8 right-8 z-50 rounded-full shadow-lg bg-cyan-blue hover:bg-electric-blue transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-gray/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-blue to-electric-blue transition-all duration-150"
          style={{ 
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default Index;
