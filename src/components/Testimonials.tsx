import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Quote, MapPin, Clock } from 'lucide-react';

const testimonials = [
  {
    name: "Yass",
    role: "Client",
    location: "Europe",
    project: "Multiple Projects",
    duration: "2 months",
    image: null,
    feedback: "Working with Deepak was an absolute pleasure. Over the course of 2 months, we collaborated on several projects, and I was consistently impressed by his technical expertise and dedication. He delivered high-quality work on time and maintained excellent communication throughout. I'm very satisfied with the results and would highly recommend him for any development work.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Testimonials</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-rich-black border-slate-gray/20 card-hover group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-blue/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-cyan-blue/30">
                        {testimonial.image ? (
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                        ) : null}
                        <AvatarFallback className="bg-gradient-to-br from-cyan-blue/20 to-electric-blue/10 text-cyan-blue text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-transparent bg-gradient-to-r from-cyan-blue to-electric-blue bg-clip-text text-xl font-bold mb-1">
                          {testimonial.name}
                        </CardTitle>
                        <p className="text-slate-gray text-sm font-medium">
                          {testimonial.role}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center gap-1 text-slate-gray text-xs">
                            <MapPin size={14} className="text-cyan-blue" />
                            {testimonial.location}
                          </div>
                          <div className="flex items-center gap-1 text-slate-gray text-xs">
                            <Clock size={14} className="text-electric-blue" />
                            {testimonial.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Rating stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-cyan-blue text-lg">★</span>
                      ))}
                    </div>
                  </div>
                  
                  <Badge 
                    variant="outline" 
                    className="mt-4 w-fit border-electric-blue/30 text-electric-blue"
                  >
                    {testimonial.project}
                  </Badge>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="relative pl-10 pr-4">
                    <Quote className="absolute left-0 top-0 text-cyan-blue w-8 h-8 opacity-30" />
                    <p className="text-light-gray leading-relaxed text-base italic">
                      {testimonial.feedback}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to action for more testimonials */}
          <div className="mt-12 text-center">
            <p className="text-slate-gray text-sm">
              Looking for a reliable developer? 
              <a href="#contact" className="text-cyan-blue hover:text-electric-blue ml-2 font-semibold transition-colors">
                Let's work together →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
