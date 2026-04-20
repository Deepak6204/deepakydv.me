export const projects = [
  {
    title: "TeacherTech.in",
    subtitle: "Virtual Classroom Management Platform",
    description: "Platform for teachers to create and manage virtual classrooms with real-time student engagement features.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Real-time Features"],
    link: "https://teachertech.in",
    github: null,
    metric: "Beta",
    metricLabel: "Release"
  },
  {
    title: "Scheduler Backend V2",
    subtitle: "Advanced Scheduling Server (Calendly Alternative)",
    description: "Robust scheduling backend with advanced availability management, timezone handling, and seamless integration capabilities.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Docker"],
    link: null,
    github: "https://github.com/Deepak6204/scheduler_backendV2",
    metric: "Multi-Zone",
    metricLabel: "Supported"
  },
  {
    title: "PeerWorks",
    subtitle: "Student Freelance Marketplace",
    description: "Scalable freelance marketplace for students. Built with Docker containers for easy deployment and horizontal scaling.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    technologies: ["Node.js", "Docker", "MongoDB", "Microservices"],
    link: null,
    github: "https://github.com/Deepak6204/PeerWorks",
    metric: "Microservices",
    metricLabel: "Architecture"
  }
];

const Projects = () => {
  return (
    <section className="py-24 px-8 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface">Featured Projects</h2>
            <p className="text-on-surface-variant max-w-lg">A selection of enterprise-grade architectures designed for scale and performance.</p>
          </div>
          <div className="h-px flex-1 bg-outline-variant/10 mx-8 hidden md:block"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Project Card 1: Large (8 cols) */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-[24px] bg-surface-container p-1 transition-transform duration-500 hover:scale-[1.01]">
            <div className="bg-surface-container rounded-[22px] overflow-hidden">
              <div className="aspect-[16/9] w-full bg-surface-container-highest relative overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" alt={projects[0].title} src={projects[0].image} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md text-[10px] font-bold text-primary uppercase">Frontend App</span>
                </div>
              </div>
              <div className="p-10 space-y-6">
                <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 md:gap-0">
                  <h3 className="font-headline text-3xl font-bold text-on-surface break-words max-w-full">{projects[0].title}</h3>
                  <div className="text-left md:text-right shrink-0">
                    <div className="text-tertiary text-2xl font-black">{projects[0].metric}</div>
                    <div className="text-[10px] uppercase tracking-widest text-on-surface-variant">{projects[0].metricLabel}</div>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed">{projects[0].description}</p>
                <div className="flex flex-wrap gap-4">
                  {projects[0].technologies.map(tech => (
                    <span key={tech} className="text-xs font-medium text-secondary">#{tech}</span>
                  ))}
                </div>
                {projects[0].link && (
                  <a href={projects[0].link} target="_blank" rel="noreferrer" className="text-primary text-xs font-bold flex items-center gap-2 group/btn inline-flex mt-4">
                    Visit Site
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">east</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Card 2: Small (4 cols) */}
          <div className="md:col-span-4 group flex flex-col bg-surface-container rounded-[32px] overflow-hidden transition-all duration-300 hover:bg-surface-bright">
            <div className="aspect-square bg-surface-container-highest overflow-hidden relative">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" alt={projects[1].title} src={projects[1].image} />
              <div className="absolute top-6 left-6 flex gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md text-[10px] font-bold text-primary uppercase">Backend/API</span>
              </div>
            </div>
            <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">{projects[1].title}</h3>
                <p className="text-sm text-on-surface-variant line-clamp-3">{projects[1].description}</p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-tertiary font-bold text-lg">{projects[1].metric}</span>
                {projects[1].github && (
                  <a href={projects[1].github} target="_blank" rel="noreferrer" className="text-primary hover:text-primary-container">
                    <span className="material-symbols-outlined text-2xl">code</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Card 3: Large (12 cols) since there's no 4th project, we'll make it 12 */}
          <div className="md:col-span-12 group relative overflow-hidden rounded-[24px] bg-surface-container p-1 transition-transform duration-500 hover:scale-[1.01]">
            <div className="bg-surface-container rounded-[22px] overflow-hidden flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 bg-surface-container-highest overflow-hidden relative">
                <img className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" alt={projects[2].title} src={projects[2].image} />
                <div className="absolute top-6 left-6 flex gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md text-[10px] font-bold text-primary uppercase">Infrastructure</span>
                </div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h3 className="font-headline text-2xl font-bold text-on-surface">{projects[2].title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{projects[2].description}</p>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-[10px] uppercase font-black text-on-surface/50 tracking-tighter">Stack</span>
                  </div>
                  <div className="text-xl font-bold text-tertiary">{projects[2].technologies.join(" / ")}</div>
                </div>
                {projects[2].github && (
                  <a href={projects[2].github} target="_blank" rel="noreferrer" className="text-primary text-xs font-bold flex items-center gap-2 group/btn w-max">
                    View Source Code 
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">east</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Products */}
        <div className="mt-20 text-center bg-surface-container rounded-[32px] p-12 border border-outline-variant/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10 space-y-6">
            <h3 className="font-headline text-3xl font-bold text-on-surface">Wanna try what I've built?</h3>
            <p className="text-on-surface-variant max-w-lg mx-auto">Explore my live applications and tools designed to solve real-world friction.</p>
            <a href="/products" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-primary/20 mt-2">
              View Live Products
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
