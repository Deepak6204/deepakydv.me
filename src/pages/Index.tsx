import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import QuickConsultPopup from '@/components/QuickConsultPopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <QuickConsultPopup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
