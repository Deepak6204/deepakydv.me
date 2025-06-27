
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "National Institute of Technology, Srinagar",
      year: "2022 - Present",
      grade: "CGPA: 8.35",
    },
    {
      degree: "Class XII",
      field: "Science",
      institution: "Kendriya Vidyalaya, Bantalab, Jammu",
      year: "2020 - 2021",
      grade: "89.4%"
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
    <section id="education" className="py-20 bg-slate-gray/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-rich-black border border-slate-gray/20 rounded-lg p-6 card-hover animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-cyan-blue" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-cyan-blue">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-gray">
                        <Calendar size={16} />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                    
                    {edu.field !== "General" && (
                      <p className="text-light-gray font-medium mb-1">{edu.field}</p>
                    )}
                    
                    <p className="text-slate-gray mb-2">{edu.institution}</p>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-cyan-blue font-semibold">{edu.grade}</p>
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
