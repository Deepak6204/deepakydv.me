import { useState, useEffect } from 'react';
import { projects } from './Projects';
import { experiences } from './Experience';
import { skillCategories } from './Skills';
import { aboutConfig } from '../config/about.config';

const QuickConsultPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [workType, setWorkType] = useState('');

  useEffect(() => {
    // Show the popup after 3.5 seconds
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workType.trim()) return;

    const systemPrompt = `Review the following candidate profile:
Name: Deepak Yadav
Email: deepaksyadav04@gmail.com
Institution: ${aboutConfig.profile.institution} (CGPA: ${aboutConfig.profile.cgpa})
Ratings: LeetCode ${aboutConfig.ratings.leetcode}, Codeforces ${aboutConfig.ratings.codeforces}

Experience:
${experiences.map((e) => `- ${e.title} at ${e.company} (${e.period})`).join('\n')}

Skills:
${skillCategories.map((c) => `- ${c.title}: ${c.skills.join(', ')}`).join('\n')}

Projects:
${projects.map((p) => `- ${p.title}: ${p.description} (${p.technologies.join(', ')})`).join('\n')}

Based on the highly detailed profile above, can the candidate work on: "${workType}"?
Please respond ONLY with a clear verdict (Yes/No/Maybe) followed by a very short, concise reason indicating why they are or aren't a fit. If the verdict is Yes, please ALSO frame a proper, professional email directed to deepaksyadav04@gmail.com initiating an interview or collaboration.`;

    const encodedPrompt = encodeURIComponent(systemPrompt);
    window.open(`https://chatgpt.com/?prompt=${encodedPrompt}`, '_blank');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 mx-auto md:left-auto md:right-8 md:bottom-8 z-[100] max-w-sm w-auto md:w-full bg-surface-container rounded-[24px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-outline-variant/10 flex flex-col gap-4 animate-in slide-in-from-bottom duration-500">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h4 className="font-headline font-bold text-on-surface text-2xl">
            In a hurry?
          </h4>
          <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
            Describe a task to see if I'm a good fit. I'll pass my resume to
            ChatGPT to evaluate instantly.
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-on-surface-variant hover:text-on-surface transition-colors p-1 bg-surface-container-highest rounded-full flex items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          value={workType}
          onChange={(e) => setWorkType(e.target.value)}
          placeholder="e.g. building a scalable python backend..."
          className="w-full bg-surface-container-highest/30 border-outline-variant/20 border focus:border-primary rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none transition-colors"
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
        >
          Check with ChatGPT
          <span className="material-symbols-outlined text-sm">robot_2</span>
        </button>
      </form>
    </div>
  );
};

export default QuickConsultPopup;
