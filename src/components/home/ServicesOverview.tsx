
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Cloud, Brain, Shield } from 'lucide-react';
import { SERVICES } from '@/config/company';

const iconMap = {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  Shield
};

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive IT solutions to help your business grow and succeed in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <IconComponent className="text-blue-600 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            View All Services
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
