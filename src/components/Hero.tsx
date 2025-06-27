import { ArrowDown, Github, Linkedin, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactCard from '@/components/ContactCard';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-blue to-electric-blue bg-clip-text">
            Deepak Yadav
          </h1>
          <p className="text-xl md:text-2xl text-slate-gray mb-8">
            Computer Science Student & Web Developer
          </p>
          <p className="text-lg text-light-gray mb-12 max-w-2xl mx-auto">
            Pre-final year student at NIT Srinagar, passionate about building
            innovative web solutions with a focus on user experience and
            scalability.
          </p>

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
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Download Resume Button */}
            <Button
              variant="outline"
              size="lg"
              className="border-slate-gray/30 text-slate-gray hover:text-cyan-blue hover:border-cyan-blue/50"
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
              className="bg-gradient-to-r from-cyan-blue to-electric-blue text-rich-black px-8 py-3 rounded-lg font-semibold hover:from-electric-blue hover:to-cyan-blue transition-all duration-300"
              asChild
            >
              <a href="#experience" className="inline-flex items-center gap-2">
                Explore My Work
                <ArrowDown size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
