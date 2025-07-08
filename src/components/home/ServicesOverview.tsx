
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Cloud, Brain, Shield, Phone } from 'lucide-react';
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive IT <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we deliver cutting-edge technology solutions that drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div key={service.id} className="group relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                  {/* Service Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white" size={36} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-900">#{index + 1}</span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-3">
                    <Link 
                      to="/services" 
                      className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700 transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} />
                    </Link>
                    
                    <a
                      href={`tel:${service.phone}`}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
                    >
                      <Phone className="mr-2" size={16} />
                      Call Now: {service.phone}
                    </a>
                  </div>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-600 mb-6">Let's discuss your project and create something amazing together</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
