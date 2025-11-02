
import { GraduationCap, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "National Institute of Technology, Srinagar",
      year: "2022 - Present",
      grade: "CGPA: 8.42",
    },
    {
      degree: "Class XII",
      field: "Science",
      institution: "Kendriya Vidyalaya, Bantalab, Jammu",
      year: "2020 - 2021",
      grade: "85.4%"
    },
    {
      degree: "Class X",
      field: "General",
      institution: "Kendriya Vidyalaya, Bantalab, Jammu",
      year: "2018 - 2019",
      grade: "87%"
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-gray/5 relative">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-rich-black border border-slate-gray/20 rounded-2xl p-8 card-hover group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Premium badge for current education */}
                {index === 0 && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-cyan-blue to-electric-blue text-rich-black font-semibold px-3 py-1">
                      Current
                    </Badge>
                  </div>
                )}

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-blue/20 to-electric-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-cyan-blue/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <GraduationCap className="text-cyan-blue" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-blue to-electric-blue bg-clip-text mb-2">
                          {edu.degree}
                        </h3>
                        {edu.field !== "General" && (
                          <p className="text-light-gray font-semibold text-lg mb-1">{edu.field}</p>
                        )}
                        <p className="text-slate-gray text-base">{edu.institution}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-slate-gray bg-slate-gray/10 px-4 py-2 rounded-full w-fit border border-slate-gray/20">
                        <Calendar size={16} className="text-cyan-blue" />
                        <span className="font-medium">{edu.year}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-gray/20">
                      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-blue/10 to-electric-blue/5 px-5 py-3 rounded-xl border border-cyan-blue/20">
                        <span className="text-light-gray font-medium">Performance:</span>
                        <span className="text-cyan-blue font-bold text-xl">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
