import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/products') {
      setActiveSection('products');
      return;
    }

    const handleScroll = () => {
      const sections = ['projects', 'skills', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 300)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const getNavClass = (section: string) => {
    return activeSection === section
      ? "flex flex-col items-center justify-center bg-primary/20 text-primary-fixed rounded-xl px-4 py-1 scale-110 transition-all duration-200"
      : "flex flex-col items-center justify-center text-slate-500 hover:bg-primary/5 active:bg-primary/10 rounded-xl px-4 py-1 transition-all duration-200";
  };

  return (
    <>
      <footer className="bg-[#060e20] w-full py-12 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
          <div className="font-headline font-black text-slate-200">Deepak Yadav</div>
          <div className="flex gap-8 font-body text-xs text-slate-500">
            <a className="hover:text-primary transition-colors" href="https://github.com/Deepak6204" target="_blank" rel="noreferrer">Github</a>
            <a className="hover:text-primary transition-colors" href="https://www.linkedin.com/in/deepakyadav004/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-primary transition-colors" href="https://x.com/deepakatscale" target="_blank" rel="noreferrer">Twitter</a>
          </div>
          <div className="font-body text-xs text-slate-500">
            © {new Date().getFullYear()} Deepak Yadav. Built with logic and soul.
          </div>
        </div>
      </footer>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center p-4 bg-[#0b1326]/80 backdrop-blur-lg shadow-[0_-10px_30px_rgba(0,0,0,0.3)] z-50 rounded-t-3xl">
        <a href="/" className={getNavClass('home')} onClick={() => window.scrollTo(0, 0)}>
          <span className="material-symbols-outlined">home</span>
          <span className="font-body text-[10px] uppercase tracking-widest mt-1">Home</span>
        </a>
        <a href="/#projects" className={getNavClass('projects')}>
          <span className="material-symbols-outlined">dvr</span>
          <span className="font-body text-[10px] uppercase tracking-widest mt-1">Work</span>
        </a>
        <a href="/products" className={getNavClass('products')}>
          <span className="material-symbols-outlined">apps</span>
          <span className="font-body text-[10px] uppercase tracking-widest mt-1">Apps</span>
        </a>
        <a href="/#skills" className={getNavClass('skills')}>
          <span className="material-symbols-outlined">terminal</span>
          <span className="font-body text-[10px] uppercase tracking-widest mt-1">Skills</span>
        </a>
        <a href="/#contact" className={getNavClass('contact')}>
          <span className="material-symbols-outlined">mail</span>
          <span className="font-body text-[10px] uppercase tracking-widest mt-1">Contact</span>
        </a>
      </nav>
    </>
  );
};

export default Footer;
