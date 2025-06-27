import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Trophy, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: GraduationCap, title: "CGPA: 8.35", subtitle: "at NIT Srinagar" },
    {
      icon: Trophy,
      title: "LeetCode: 1700+",
      subtitle: "Rating",
      link: "https://leetcode.com/u/Deepaky04/",
    },
    {
      icon: Star,
      title: "CodeChef: 1600+",
      subtitle: "Rating",
      link: "https://www.codechef.com/users/deepak5327",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-gray/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Me</h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Card className="bg-rich-black border-slate-gray/20 mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-light-gray leading-relaxed mb-6">
                    I'm a pre-final year Computer Science student at the prestigious National Institute of Technology, Srinagar,
                    with a passion for creating innovative web solutions. My journey in technology is driven by curiosity and
                    a commitment to building applications that make a real difference.
                  </p>
                  <p className="text-lg text-light-gray leading-relaxed">
                    With hands-on experience in full-stack development and AI integration, I've worked on diverse projects
                    ranging from medical form digitization to scalable educational platforms. My technical skills are
                    complemented by strong problem-solving abilities, reflected in my competitive programming achievements.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Achievement cards */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-rich-black border-slate-gray/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-cyan-blue/20 rounded-lg flex items-center justify-center">
                        <achievement.icon className="text-cyan-blue" size={20} />
                      </div>
                      <div>
                        {achievement.link ? (
                          <a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-blue font-bold hover:underline"
                          >
                            {achievement.title}
                          </a>
                        ) : (
                          <p className="text-cyan-blue font-bold">{achievement.title}</p>
                        )}
                        <p className="text-slate-gray text-sm">{achievement.subtitle}</p>
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
            <Card className="bg-rich-black border-slate-gray/20">
              <CardHeader>
                <CardTitle className="text-cyan-blue flex items-center gap-3">
                  <GraduationCap size={24} />
                  Academic Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Badge variant="outline" className="border-cyan-blue/30 text-cyan-blue">
                    CGPA: 8.325 at NIT Srinagar
                  </Badge>
                  <Badge variant="outline" className="border-slate-gray/30 text-slate-gray">
                    Strong CS fundamentals
                  </Badge>
                  <Badge variant="outline" className="border-slate-gray/30 text-slate-gray">
                    Active in technical clubs
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Competitive Programming */}
            <Card className="bg-rich-black border-slate-gray/20">
              <CardHeader>
                <CardTitle className="text-electric-blue flex items-center gap-3">
                  <Trophy size={24} />
                  Competitive Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a
                    href="https://leetcode.com/deepakydv/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge
                      variant="outline"
                      className="border-electric-blue/30 text-electric-blue hover:underline"
                    >
                      LeetCode Rating: 1700+
                    </Badge>
                  </a>
                  <a
                    href="https://www.codechef.com/users/deepakydv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge
                      variant="outline"
                      className="border-slate-gray/30 text-slate-gray hover:underline"
                    >
                      CodeChef Rating: 1600+
                    </Badge>
                  </a>
                  <Badge variant="outline" className="border-slate-gray/30 text-slate-gray">
                    Strong algorithmic thinking
                  </Badge>
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
