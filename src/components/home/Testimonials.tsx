
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      content: "Working with TechSolutions Pro was a game-changer for our business. They delivered a robust platform that exceeded our expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, FinanceFlow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The team's expertise in fintech solutions helped us launch our product 3 months ahead of schedule. Outstanding work!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Professional, reliable, and innovative. They understood our healthcare domain requirements perfectly.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Apple-style blur background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/5 to-indigo-400/5 rounded-full blur-3xl animate-ping delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/40 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-gray-700">Client Reviews</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="group bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 relative hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Floating quote background */}
              <Quote className="text-blue-100 absolute top-4 right-4 group-hover:text-blue-200 transition-colors duration-300" size={32} />
              
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="text-yellow-400 fill-current transition-transform duration-300 group-hover:scale-110" 
                      size={20}
                      style={{
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic font-medium leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4 border-2 border-white/50 group-hover:border-blue-300 transition-all duration-300 shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
