
import React from 'react';
import { CheckCircle, Users, Clock, Award, Globe, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled developers and designers bring years of experience to every project"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We pride ourselves on delivering projects on time and within budget"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensure exceptional results"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and communication"
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "We use cutting-edge technologies and modern development practices"
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "500+ successful projects delivered for satisfied clients"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <feature.icon className="text-blue-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
