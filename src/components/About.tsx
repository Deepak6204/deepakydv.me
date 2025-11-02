import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import aboutConfig from '@/config/about.config';
import { Trophy, GraduationCap } from 'lucide-react';

const About = () => {
  const {
    sectionId,
    sectionTitle,
    theme,
    copy,
    achievements,
    academic,
    competitive,
  } = aboutConfig;

  return (
    <section id={sectionId} className={`py-24 ${theme.sectionBg} relative`}>
      {/* Premium background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center">{sectionTitle}</h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Card className={`${theme.cardBg} ${theme.border} mb-8 card-hover`}>
                <CardContent className="p-8">
                  {copy.aboutParagraphs.map((p, i) => (
                    <p
                      key={i}
                      className={`text-lg ${theme.textBody} leading-relaxed ${i === 0 ? 'mb-6 text-xl' : ''}`}
                    >
                      {p}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Achievement cards - Enhanced for HR visibility */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className={`${theme.cardBg} ${theme.border} card-hover group transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 ${theme.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <achievement.icon className={theme.accentCyan} size={24} />
                      </div>
                      <div className="flex-1">
                        {achievement.href ? (
                          <a
                            href={achievement.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${theme.accentCyan} font-bold text-lg hover:underline block`}
                          >
                            {achievement.title}
                          </a>
                        ) : (
                          <p className={`${theme.accentCyan} font-bold text-lg`}>{achievement.title}</p>
                        )}
                        <p className={`${theme.textSecondary} text-sm mt-1`}>{achievement.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Academic */}
            <Card className={`${theme.cardBg} ${theme.border}`}>
              <CardHeader>
                <CardTitle className={`${theme.accentCyan} flex items-center gap-3`}>
                  <GraduationCap size={24} />
                  {copy.academicTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Badge variant="outline" className="border-cyan-blue/30 text-cyan-blue">
                    {academic.primaryBadgeLabel}
                  </Badge>

                  {copy.academicSecondaryBadges.map((label, idx) => (
                    <Badge key={idx} variant="outline" className="border-slate-gray/30 text-slate-gray">
                      {label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Competitive Programming */}
            <Card className={`${theme.cardBg} ${theme.border}`}>
              <CardHeader>
                <CardTitle className={`${theme.accentElectric} flex items-center gap-3`}>
                  <Trophy size={24} />
                  {copy.competitiveTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {competitive.badges.map((b, idx) => {
                    const base =
                      b.color === 'electric'
                        ? 'border-electric-blue/30 text-electric-blue'
                        : 'border-slate-gray/30 text-slate-gray';

                    const badgeEl = (
                      <Badge
                        key={idx}
                        variant="outline"
                        className={`${base} ${b.href ? 'hover:underline' : ''}`}
                      >
                        {b.label}
                      </Badge>
                    );

                    return b.href ? (
                      <a key={idx} href={b.href} target="_blank" rel="noopener noreferrer">
                        {badgeEl}
                      </a>
                    ) : (
                      badgeEl
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;