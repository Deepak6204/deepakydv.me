import React from 'react';

export const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Kickdrum Technologies',
    location: 'Hybrid',
    period: 'Jan 2026 - Present',
    description:
      'Working on full-stack development, contributing to the development of robust software solutions and exploring innovative technologies.',
    active: true,
  },
  {
    title: 'AI Engineer Intern',
    company: 'SynecxAiLabs',
    location: 'Remote',
    period: 'Dec 2024 - Feb 2025',
    description:
      'Built a full-stack app to extract patient data from scanned prescriptions using vision-language models (SmolVLM-Instruct). Implemented Flask API and designed a responsive UI with Tailwind CSS.',
    active: false,
  },
  {
    title: 'Research Intern',
    company: 'NIT Patna',
    location: 'On-site',
    period: 'Dec 2023 - Feb 2024',
    description:
      'Worked on skin cancer image classification. Implemented the P2P-Net model with a ResNet50 backbone, achieving 94.76% accuracy on the HAM10000 dataset.',
    active: false,
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-8 bg-surface" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-16 text-center">
          Engineering Journey
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                <div className="md:col-span-3 md:text-right">
                  <span
                    className={`${exp.active ? 'text-primary' : 'text-on-surface-variant/80'} font-bold font-headline text-lg tracking-tighter`}
                  >
                    {exp.period}
                  </span>
                  <div className="text-xs text-on-surface-variant/60 mt-1 uppercase tracking-widest">
                    {exp.location}
                  </div>
                </div>
                <div className="hidden md:flex md:col-span-1 justify-center relative h-full">
                  <div
                    className={`w-4 h-4 rounded-full ${exp.active ? 'bg-primary' : 'bg-surface-container-highest'} border-4 border-surface z-10`}
                  ></div>
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-4 w-px h-[calc(100%+3rem)] bg-outline-variant/20"></div>
                  )}
                </div>
                <div className="md:col-span-8 bg-surface-container-low p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-on-surface">
                    {exp.title}
                  </h3>
                  <div className="text-secondary text-sm font-medium mb-4">
                    {exp.company}
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
