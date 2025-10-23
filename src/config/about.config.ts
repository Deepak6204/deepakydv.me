import { GraduationCap, Trophy, Star, type LucideIcon } from 'lucide-react';

export type AboutTheme = {
  sectionBg: string;
  cardBg: string;
  border: string;
  textBody: string;
  textSecondary: string;
  accentCyan: string;
  accentElectric: string;
  iconBg: string;
};

export type AboutConfig = {
  sectionId: string;
  sectionTitle: string;
  theme: AboutTheme;
  profile: {
    institution: string;
    cgpa: string;
  };
  handles: {
    leetcode: string;
    codeforces: string;
    codechef: string;
  };
  ratings: {
    leetcode: string;
    codeforces: string;
    codechef: string;
  };
  copy: {
    aboutParagraphs: string[];
    academicTitle: string;
    competitiveTitle: string;
    academicSecondaryBadges: string[];
  };
  computed: {
    urls: {
      leetcode: string;
      codeforces: string;
      codechef: string;
    };
  };
  achievements: Array<{
    icon: LucideIcon;
    title: string;
    subtitle: string;
    href?: string;
  }>;
  academic: {
    primaryBadgeLabel: string;
  };
  competitive: {
    badges: Array<{
      label: string;
      href?: string;
      color?: 'electric' | 'slate';
    }>;
  };
};

// 1) Central data that you can change in ONE place
const handles = {
  leetcode: 'Deepaky04',
  codeforces: 'deepak0611',
  codechef: 'deepakydv',
} as const;

const profile = {
  institution: 'NIT Srinagar',
  cgpa: '8.42',
} as const;

const ratings = {
  leetcode: '1700+',
  codeforces: '1300+',
  codechef: '1600+',
} as const;

// 2) Derived URLs from handles
const urls = {
  leetcode: `https://leetcode.com/u/${handles.leetcode}/`,
  codeforces: `https://codeforces.com/profile/${handles.codeforces}`,
  codechef: `https://www.codechef.com/users/${handles.codechef}`,
} as const;

// 3) Theme tokens (Tailwind classes)
const theme: AboutTheme = {
  sectionBg: 'bg-slate-gray/5',
  cardBg: 'bg-rich-black',
  border: 'border-slate-gray/20',
  textBody: 'text-light-gray',
  textSecondary: 'text-slate-gray',
  accentCyan: 'text-cyan-blue',
  accentElectric: 'text-electric-blue',
  iconBg: 'bg-cyan-blue/20',
};

// 4) Full config export (SINGLE SOURCE OF TRUTH)
export const aboutConfig: AboutConfig = {
  sectionId: 'about',
  sectionTitle: 'About Me',
  theme,
  profile,
  handles,
  ratings,
  copy: {
    aboutParagraphs: [
      "I'm a Final year Computer Science student at the prestigious National Institute of Technology, Srinagar, with a passion for creating innovative web solutions. My journey in technology is driven by curiosity and a commitment to building applications that make a real difference.",
      "With hands-on experience in full-stack development and AI integration, I've worked on diverse projects ranging from medical form digitization to scalable educational platforms. My technical skills are complemented by strong problem-solving abilities, reflected in my competitive programming achievements.",
    ],
    academicTitle: 'Academic Excellence',
    competitiveTitle: 'Competitive Programming',
    academicSecondaryBadges: ['Strong CS fundamentals', 'Active in technical clubs'],
  },
  computed: { urls },
  achievements: [
    {
      icon: GraduationCap,
      title: `CGPA: ${profile.cgpa}`,
      subtitle: `at ${profile.institution}`,
    },
    {
      icon: Trophy,
      title: `LeetCode: ${ratings.leetcode}`,
      subtitle: 'Rating',
      href: urls.leetcode,
    },
    {
      icon: Star,
      title: `Codeforces: ${ratings.codeforces}`,
      subtitle: 'Rating',
      href: urls.codeforces,
    },
  ],
  academic: {
    primaryBadgeLabel: `CGPA: ${profile.cgpa} at ${profile.institution}`,
  },
  competitive: {
    badges: [
      { label: `LeetCode Rating: ${ratings.leetcode}`, href: urls.leetcode, color: 'electric' },
      { label: `Codeforces Rating: ${ratings.codeforces}`, href: urls.codeforces, color: 'slate' },
      { label: 'Strong algorithmic thinking', color: 'slate' },
    ],
  },
};

export default aboutConfig;