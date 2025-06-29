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

const Index = () => {
  return (
    <div className="min-h-screen bg-rich-black text-light-gray">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
