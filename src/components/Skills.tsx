
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Settings, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C++", "JavaScript", "C", "Python", "SQL"],
      color: "cyan-blue"
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: ["Flask", "Express.js", "Bootstrap", "Node.js"],
      color: "electric-blue"
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      skills: ["Git", "GitHub", "Linux", "AWS (EC2, S3, RDS)"],
      color: "slate-gray"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "SQLite", "MongoDB"],
      color: "cyan-blue"
    },
    {
      title: "Core Subjects",
      icon: BookOpen,
      skills: ["Operating Systems", "DBMS", "Computer Organisation", "Software Engineering"],
      color: "electric-blue"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Skills & Technologies</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-rich-black border-slate-gray/20">
                <CardHeader>
                  <CardTitle className={`flex items-center gap-3 text-${category.color}`}>
                    <category.icon size={30} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="border-slate-gray/30 text-slate-gray text-base hover:border-cyan-blue/50 hover:text-cyan-blue transition-colors"
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
