import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const isProductsPage = location.pathname === '/products';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isProductsPage) return;

      const sections = ['projects', 'experience', 'skills'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProductsPage]);

  const getLinkClass = (section: string) => {
    return activeSection === section 
      ? "text-[#c0c1ff] border-b-2 border-[#8083ff] pb-1 transition-colors"
      : "text-[#c7c4d7] hover:text-[#dae2fd] transition-colors pb-[6px]";
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b1326]/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.25)]' : 'bg-transparent'}`}>
      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter bg-gradient-to-br from-[#c0c1ff] to-[#8083ff] bg-clip-text text-transparent">
          Deepak Yadav
        </Link>
        {!isProductsPage && (
          <>
            <div className="hidden md:flex items-center gap-8 font-headline tracking-tight text-sm font-medium">
              <a className={getLinkClass('projects')} href="/#projects">Projects</a>
              <a className={getLinkClass('experience')} href="/#experience">Experience</a>
              <a className={getLinkClass('skills')} href="/#skills">Skills</a>
              <a className="text-[#c7c4d7] hover:text-[#dae2fd] transition-colors pb-[6px]" href="/products">Products</a>
            </div>
            <a href="/#contact" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:opacity-90 active:scale-90 inline-block">
              Get in Touch
            </a>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
