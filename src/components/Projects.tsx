
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ISTFC – Image Segregation Tool",
      subtitle: "Using Feature Comparison",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      technologies: ["Flask", "Python", "SQL", "HTML", "CSS", "JavaScript"],
      icon: Code
    },
    {
      title: "CoRide-server",
      subtitle: "Server for CoRide Android app",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      technologies: ["Node.js", "Express.js", "MongoDB", "Kotlin", "Firebase", "Jetpack Compose"],
      icon: Database
    },
    {
      title: "AutoBlogger",
      subtitle: "AI-Powered Blog Generator",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      technologies: ["Node.js", "Express.js", "REST API", "LLM Integration"],
      icon: Bot
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-gray/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-rich-black border-slate-gray/20 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent" />
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-cyan-blue">
                    <project.icon size={24} />
                    <div>
                      <h3 className="text-lg">{project.title}</h3>
                      <p className="text-slate-gray text-sm font-normal">{project.subtitle}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-light-gray font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-slate-gray/30 text-slate-gray">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
