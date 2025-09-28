import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real success stories from students who achieved their dream IELTS scores
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 relative"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              
              <div className="space-y-4">
                <p className="text-card-foreground leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-lg font-bold text-primary">Band {testimonial.score}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                ✓ Verified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;