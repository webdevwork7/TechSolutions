
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, CreditCard, ShoppingCart, Building, GraduationCap, Truck } from 'lucide-react';
import { INDUSTRIES } from '@/config/company';

const iconMap = {
  Heart,
  CreditCard,
  ShoppingCart,
  Building,
  GraduationCap,
  Truck
};

const Industries = () => {
  const industryDetails = [
    {
      ...INDUSTRIES[0],
      details: "We develop HIPAA-compliant healthcare solutions including EMR systems, telemedicine platforms, and patient portals.",
      projects: ["Electronic Health Records", "Telemedicine Apps", "Medical Imaging Systems", "Healthcare Analytics"]
    },
    {
      ...INDUSTRIES[1],
      details: "Secure and scalable fintech solutions for banking, payments, and financial services with regulatory compliance.",
      projects: ["Digital Banking Apps", "Payment Gateways", "Trading Platforms", "Risk Management Systems"]
    },
    {
      ...INDUSTRIES[2],
      details: "Comprehensive e-commerce platforms with advanced features for online retail and marketplace businesses.",
      projects: ["Online Marketplaces", "B2B E-commerce", "Mobile Commerce", "Inventory Management"]
    },
    {
      ...INDUSTRIES[3],
      details: "Property management and real estate platforms that streamline operations and enhance customer experience.",
      projects: ["Property Listing Portals", "CRM Systems", "Virtual Tours", "Property Management Tools"]
    },
    {
      ...INDUSTRIES[4],
      details: "Educational technology solutions that transform learning experiences and improve educational outcomes.",
      projects: ["Learning Management Systems", "Online Course Platforms", "Student Information Systems", "Educational Apps"]
    },
    {
      ...INDUSTRIES[5],
      details: "Supply chain and logistics solutions that optimize operations and improve delivery efficiency.",
      projects: ["Fleet Management", "Warehouse Systems", "Route Optimization", "Supply Chain Analytics"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We bring deep industry expertise and tailored solutions to help businesses across various sectors achieve their digital transformation goals
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industryDetails.map((industry, index) => {
              const IconComponent = iconMap[industry.icon as keyof typeof iconMap];
              
              return (
                <div key={industry.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="text-blue-600" size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{industry.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{industry.details}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Solutions:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {industry.projects.map((project, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-gray-600 text-sm">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-colors"
                  >
                    Discuss Your Project
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Industry */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us for Your Industry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with deep industry knowledge to deliver solutions that address your unique challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of industry-specific requirements, regulations, and best practices
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Ready</h3>
              <p className="text-gray-600">
                Solutions built with regulatory compliance and security standards in mind
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                Successfully delivered 500+ projects across various industries with exceptional results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can help your business grow and succeed
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Start Your Project
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;
