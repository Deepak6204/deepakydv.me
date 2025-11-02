import { ArrowDown, Github, Linkedin, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactCard from '@/components/ContactCard';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-blue/20 rounded-lg rotate-45 animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-electric-blue/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 border border-slate-gray/20 rounded-lg animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-blue via-electric-blue to-cyan-blue bg-clip-text animate-gradient">
            Deepak Yadav
          </h1>
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl md:text-3xl font-semibold text-transparent bg-gradient-to-r from-light-gray via-cyan-blue to-light-gray bg-clip-text mb-3">
              Full-Stack Developer & AI Enthusiast
            </p>
            <p className="text-lg text-slate-gray">
              Computer Science & Engineering • NIT Srinagar
            </p>
          </div>
          
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-light-gray max-w-3xl mx-auto leading-relaxed">
              Pre-final year student passionate about building <span className="text-cyan-blue font-semibold">scalable web applications</span> and 
              <span className="text-electric-blue font-semibold"> AI-powered solutions</span>. 
              Experienced in full-stack development with expertise in modern frameworks and cloud technologies.
            </p>
            
            {/* Key highlights for HR */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="px-4 py-2 bg-cyan-blue/10 border border-cyan-blue/30 rounded-full">
                <span className="text-cyan-blue font-semibold text-sm">🎓 CGPA: 8.42</span>
              </div>
              <div className="px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full">
                <span className="text-electric-blue font-semibold text-sm">💼 2+ Internships</span>
              </div>
              <div className="px-4 py-2 bg-slate-gray/10 border border-slate-gray/30 rounded-full">
                <span className="text-slate-gray font-semibold text-sm">🚀 Full-Stack Projects</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <ContactCard />

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button
              variant="outline"
              size="icon"
              className="border-slate-gray/30 text-slate-gray hover:text-cyan-blue hover:border-cyan-blue/50"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-gray/30 text-slate-gray hover:text-electric-blue hover:border-electric-blue/50"
              asChild
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </Button>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {/* Download Resume Button */}
            <Button
              variant="outline"
              size="lg"
              className="border-slate-gray/30 text-slate-gray hover:text-cyan-blue hover:border-cyan-blue/50 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-blue/20"
              asChild
            >
              <a
                href="/deepak_resume.pdf"
                download
                className="inline-flex items-center gap-2"
              >
                <FileDown size={20} />
                Download Resume
              </a>
            </Button>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-blue to-electric-blue text-rich-black px-8 py-3 rounded-lg font-semibold hover:from-electric-blue hover:to-cyan-blue transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-blue/30"
              asChild
            >
              <a href="#experience" className="inline-flex items-center gap-2">
                Explore My Work
                <ArrowDown size={20} className="animate-bounce" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
