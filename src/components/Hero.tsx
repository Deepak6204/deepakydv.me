import aboutConfig from '../config/about.config';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-tertiary/5 blur-[100px]"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.9]">
          Architecting <br />
          <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
            Scalable Solutions
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl font-light leading-relaxed">
          {aboutConfig.copy.aboutParagraphs[0]}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="/deepak_resume.pdf"
            target="_blank"
            className="w-full md:w-auto px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-bold text-base shadow-xl shadow-primary/20 hover:scale-105 transition-transform inline-block"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="w-full md:w-auto px-10 py-4 bg-surface-container-high text-on-surface border border-outline-variant/15 rounded-full font-bold text-base hover:bg-surface-bright transition-colors inline-block"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
