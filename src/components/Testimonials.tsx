import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Product Manager, InnoTech',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback:
      'Working with Deepak was a game-changer. His ability to turn complex ideas into smooth, scalable solutions is unmatched.',
  },
  {
    name: 'Ritika Singh',
    role: 'Frontend Engineer, ByteWorks',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    feedback:
      'What impressed me the most was the attention to detail and clean code. A true craftsman of modern web development.',
  },
  {
    name: 'Rahul Sharma',
    role: 'CTO, OpenCloud AI',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    feedback:
      'Deepak doesn’t just deliver code — he delivers thoughtful, user-centered experiences that exceed expectations.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-gray/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Testimonials</h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-rich-black border-slate-gray/20">
                <CardHeader className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-cyan-blue text-base">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-slate-gray text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-light-gray italic relative pl-8">
                    <Quote className="absolute left-0 top-1 text-cyan-blue w-5 h-5 opacity-50" />
                    {testimonial.feedback}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
