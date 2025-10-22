
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
    <section id="experience" className="py-20 bg-slate-gray/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-cyan-blue mb-8">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-rich-black border border-slate-gray/20 rounded-lg p-6 card-hover animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-cyan-blue" size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-xl font-semibold text-cyan-blue">{exp.title}</h4>
                        <div className="flex items-center gap-2 text-slate-gray">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <p className="text-light-gray font-medium">{exp.company}</p>
                        <div className="flex items-center gap-1 text-slate-gray">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-slate-gray">– {item}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="tech-badge">{tech}</span>
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
