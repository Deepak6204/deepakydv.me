export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'code',
    skills: ['C++', 'JavaScript', 'C', 'Java', 'Python', 'SQL'],
    colorClass: 'primary',
  },
  {
    title: 'Frameworks & Libraries',
    icon: 'web',
    skills: ['Flask', 'Express.js', 'Tailwind CSS', 'Node.js', 'React'],
    colorClass: 'tertiary',
  },
  {
    title: 'Tools & Databases',
    icon: 'database',
    skills: [
      'Git',
      'Docker',
      'AWS (EC2, S3, RDS)',
      'MySQL',
      'MongoDB',
      'SQLite',
    ],
    colorClass: 'secondary',
  },
];

const getHoverBorder = (colorClass: string) => {
  if (colorClass === 'primary') return 'hover:border-primary/20';
  if (colorClass === 'tertiary') return 'hover:border-tertiary/20';
  return 'hover:border-secondary/20';
};

const getIconBg = (colorClass: string) => {
  if (colorClass === 'primary') return 'bg-primary/10';
  if (colorClass === 'tertiary') return 'bg-tertiary/10';
  return 'bg-secondary/10';
};

const getIconColor = (colorClass: string) => {
  if (colorClass === 'primary') return 'text-primary';
  if (colorClass === 'tertiary') return 'text-tertiary';
  return 'text-secondary';
};

const Skills = () => {
  return (
    <section className="py-24 px-8 bg-surface-container-lowest" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
            Core Competencies
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Leveraging a modern stack to build robust, maintainable systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-10 bg-surface-container rounded-[32px] border border-outline-variant/5 transition-colors ${getHoverBorder(category.colorClass)}`}
            >
              <div
                className={`w-12 h-12 ${getIconBg(category.colorClass)} rounded-2xl flex items-center justify-center mb-8`}
              >
                <span
                  className={`material-symbols-outlined ${getIconColor(category.colorClass)}`}
                >
                  {category.icon}
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-6">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center justify-between">
                    <span className="text-on-surface-variant">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
