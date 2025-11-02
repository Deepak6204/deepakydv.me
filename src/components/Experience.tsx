
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer Intern",
      company: "SynecxAiLabs",
      location: "Remote",
      period: "Dec 2024 – Feb 2025",
      description: [
        "Medical Form Digitization: Built a full-stack app to extract patient data from scanned prescriptions using vision-language models.",
        "Flask API Development: Implemented endpoints for image upload, VLM inference, and JSON output.",
        "SmolVLM Integration: Used SmolVLM-Instruct (Hugging Face) to convert prescription images into structured data.",
        "Frontend Interface: Designed a responsive UI with HTML, Tailwind CSS, and JavaScript for upload and data verification.",
        "SQLite Storage: Used SQLite for lightweight storage and quick access to structured medical data."
      ],
      technologies: ["Flask", "Python", "AI/ML", "Tailwind CSS", "SQLite", "Hugging Face"]
    },
    {
      title: "Research Intern",
      company: "National Institute of Technology (NIT) Patna",
      location: "On-site",
      period: "Dec 2023 – Feb 2024",
      description: [
        "Deep Learning Research: Worked on skin cancer image classification using deep learning for early cancer detection.",
        "Model Implementation: Implemented the P2P-Net model with a ResNet50 backbone and FPN to capture global and local image features.",
        "Performance Optimization: Achieved 94.76% accuracy on a benchmark skin cancer dataset (HAM10000)."
      ],
      technologies: ["Python", "PyTorch", "CNN", "ResNet50", "FPN"]
    }

  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-slate-gray/5 via-transparent to-slate-gray/5 relative">
      {/* Premium decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Work Experience */}
          <div className="mb-12">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-rich-black border border-slate-gray/20 rounded-2xl p-8 card-hover group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-blue/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-blue/20 to-electric-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-cyan-blue/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Briefcase className="text-cyan-blue" size={28} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-3">
                          <h4 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-blue to-electric-blue bg-clip-text">
                            {exp.title}
                          </h4>
                          <div className="flex items-center gap-2 text-slate-gray bg-slate-gray/10 px-4 py-2 rounded-full w-fit">
                            <Calendar size={16} className="text-cyan-blue" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                          <p className="text-light-gray font-semibold text-lg">{exp.company}</p>
                          <div className="flex items-center gap-2 text-slate-gray">
                            <MapPin size={16} className="text-electric-blue" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Contributions */}
                    <div className="mb-6">
                      <h5 className="text-light-gray font-semibold mb-4 flex items-center gap-2">
                        <span className="w-1 h-5 bg-gradient-to-b from-cyan-blue to-electric-blue rounded-full" />
                        Key Contributions
                      </h5>
                      <ul className="space-y-3 ml-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-slate-gray leading-relaxed flex items-start gap-3 group/item">
                            <span className="text-cyan-blue mt-1 text-lg">→</span>
                            <span className="flex-1 group-hover/item:text-light-gray transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div className="border-t border-slate-gray/20 pt-5">
                      <h5 className="text-light-gray font-semibold mb-3 text-sm">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-4 py-2 bg-gradient-to-br from-cyan-blue/10 to-electric-blue/5 text-cyan-blue rounded-lg text-sm font-medium border border-cyan-blue/20 hover:border-cyan-blue/50 hover:bg-cyan-blue/20 transition-all duration-300 hover:scale-105 cursor-default shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
