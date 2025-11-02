
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Server, ExternalLink, Github, Calendar, Layers } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const frontendProjects = [
    {
      title: "TeacherTech.in",
      subtitle: "Virtual Classroom Management Platform",
      description: "Platform for teachers to create and manage virtual classrooms with real-time student engagement features.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Real-time Features"],
      link: "https://teachertech.in",
      github: null,
      featured: true,
      highlights: [
        "Virtual classroom management",
        "Student engagement tools",
        "Real-time interactions"
      ]
    }
  ];

  const backendProjects = [
    {
      title: "Scheduler Backend V2",
      subtitle: "Advanced Scheduling Server (Calendly Alternative)",
      description: "Robust scheduling backend with advanced availability management, timezone handling, and seamless integration capabilities.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "REST API", "JWT", "Docker"],
      link: null,
      github: "https://github.com/Deepak6204/scheduler_backendV2",
      featured: true,
      highlights: [
        "Advanced scheduling algorithms",
        "Multi-timezone support",
        "RESTful API architecture"
      ]
    },
    {
      title: "PeerWorks",
      subtitle: "Student Freelance Marketplace",
      description: "Scalable freelance marketplace for students. Built with Docker containers for easy deployment and horizontal scaling.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Docker", "MongoDB", "Microservices", "Redis", "Nginx"],
      link: null,
      github: "https://github.com/Deepak6204/PeerWorks",
      featured: true,
      highlights: [
        "Containerized microservices",
        "Fully scalable architecture",
        "Student-focused marketplace"
      ]
    }
  ];

  const renderProjectCard = (project: any, index: number, category: string) => (
    <Card 
      key={index} 
      className="bg-rich-black border-slate-gray/20 overflow-hidden card-hover group relative"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-gradient-to-r from-cyan-blue to-electric-blue text-rich-black font-semibold px-3 py-1 shadow-lg">
            ⭐ Featured
          </Badge>
        </div>
      )}

      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/80 to-rich-black/40" />
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3 mb-2">
          <CardTitle className="flex-1">
            <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-blue to-electric-blue bg-clip-text group-hover:from-electric-blue group-hover:to-cyan-blue transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-slate-gray text-sm font-medium mt-1">{project.subtitle}</p>
          </CardTitle>
        </div>
        <p className="text-light-gray/80 text-sm leading-relaxed">{project.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Key Highlights */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Layers size={16} className="text-cyan-blue" />
            <h4 className="text-light-gray font-semibold text-sm">Key Features</h4>
          </div>
          <ul className="space-y-1.5 ml-1">
            {project.highlights.map((highlight: string, i: number) => (
              <li key={i} className="text-slate-gray text-sm flex items-start gap-2">
                <span className="text-cyan-blue mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-light-gray font-semibold mb-3 text-sm">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, i: number) => (
              <Badge 
                key={i} 
                variant="outline" 
                className="text-xs border-slate-gray/30 text-slate-gray hover:border-cyan-blue/50 hover:text-cyan-blue hover:bg-cyan-blue/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-2">
          {project.link && (
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-cyan-blue to-electric-blue text-rich-black hover:from-electric-blue hover:to-cyan-blue transition-all duration-300"
              asChild
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Visit Site
              </a>
            </Button>
          )}
          {project.github && (
            <Button 
              size="sm"
              variant="outline"
              className="flex-1 border-slate-gray/30 text-slate-gray hover:border-cyan-blue/50 hover:text-cyan-blue hover:bg-cyan-blue/5 transition-all duration-300"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-transparent via-slate-gray/5 to-transparent relative">
      {/* Premium decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Eye-Catching Notice */}
          <div className="flex justify-center mb-6 animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-blue to-electric-blue rounded-full blur opacity-50 animate-pulse"></div>
              <div className="relative px-6 py-2 bg-rich-black rounded-full border border-cyan-blue/50 shadow-lg">
                <p className="text-cyan-blue font-semibold text-sm flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-blue"></span>
                  </span>
                  👇 Switch between Frontend & Backend projects using tabs below
                </p>
              </div>
            </div>
          </div>



          {/* Premium Tabs Interface */}
          <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
            {/* Highlighted Tab List */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-blue/20 via-electric-blue/20 to-cyan-blue/20 rounded-3xl blur-xl animate-pulse"></div>
                
                <TabsList className="relative grid grid-cols-2 gap-4 bg-gradient-to-r from-slate-gray/20 to-slate-gray/10 backdrop-blur-sm p-3 rounded-2xl border-2 border-cyan-blue/40 shadow-2xl shadow-cyan-blue/20">
                  
                  <TabsTrigger 
                    value="frontend" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-blue data-[state=active]:to-electric-blue data-[state=active]:text-rich-black data-[state=active]:shadow-2xl data-[state=active]:shadow-cyan-blue/60 data-[state=inactive]:text-slate-gray px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center gap-3 relative overflow-hidden group"
                  >
                    {/* Bottom Border Slide Animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-blue to-electric-blue rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    <Monitor size={24} className={activeTab === 'frontend' ? 'animate-pulse' : ''} />
                    <div className="text-left relative z-10">
                      <div>Frontend Projects</div>
                      <div className="text-xs font-normal opacity-80">User Interfaces</div>
                    </div>
                  </TabsTrigger>
                  
                  <TabsTrigger 
                    value="backend" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-electric-blue data-[state=active]:to-cyan-blue data-[state=active]:text-rich-black data-[state=active]:shadow-2xl data-[state=active]:shadow-electric-blue/60 data-[state=inactive]:text-slate-gray px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center gap-3 relative overflow-hidden group"
                  >
                    {/* Bottom Border Slide Animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-cyan-blue rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    <Server size={24} className={activeTab === 'backend' ? 'animate-pulse' : ''} />
                    <div className="text-left relative z-10">
                      <div>Backend Projects</div>
                      <div className="text-xs font-normal opacity-80">Server Architecture</div>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            {/* Frontend Projects Tab Content */}
            <TabsContent value="frontend" className="mt-8 animate-fade-in-up">
              <div className="grid lg:grid-cols-2 gap-8">
                {frontendProjects.map((project, index) => renderProjectCard(project, index, 'frontend'))}
              </div>
            </TabsContent>

            {/* Backend Projects Tab Content */}
            <TabsContent value="backend" className="mt-8 animate-fade-in-up">
              <div className="grid lg:grid-cols-2 gap-8">
                {backendProjects.map((project, index) => renderProjectCard(project, index, 'backend'))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Projects;
