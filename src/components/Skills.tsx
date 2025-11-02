import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Settings, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C++', 'JavaScript', 'C', 'java', 'Python', 'SQL'],
      color: 'cyan-blue',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Globe,
      skills: ['Flask', 'Express.js', 'Tailwind CSS', 'Node.js'],
      color: 'electric-blue',
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      skills: ['Git', 'GitHub', 'Linux', 'AWS (EC2, S3, RDS)'],
      color: 'slate-gray',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'SQLite', 'MongoDB'],
      color: 'cyan-blue',
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 geometric-bg opacity-20" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-rich-black border-slate-gray/20 card-hover group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-blue/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <CardHeader className="pb-4">
                  <CardTitle className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-blue/20 to-electric-blue/10 group-hover:from-cyan-blue/30 group-hover:to-electric-blue/20 transition-all duration-300 border border-cyan-blue/30 shadow-lg group-hover:scale-110 group-hover:rotate-3">
                      <category.icon size={32} className="text-cyan-blue" />
                    </div>
                    <span className="text-base font-bold text-light-gray group-hover:text-cyan-blue transition-colors duration-300">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="border-slate-gray/30 text-slate-gray text-sm hover:border-cyan-blue/50 hover:text-cyan-blue hover:bg-cyan-blue/10 transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-cyan-blue/20 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
