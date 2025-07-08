
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Phone, CheckCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-ping delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center bg-blue-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-blue-400/30">
              <CheckCircle className="mr-2" size={16} />
              <span>Trusted by 200+ Companies Worldwide</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {COMPANY_CONFIG.COMPANY_TAGLINE}
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
              We are a leading IT company specializing in custom software development, 
              web & mobile applications, and digital transformation solutions for businesses worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center group hover:scale-105 shadow-lg"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              <a
                href={`tel:${COMPANY_CONFIG.COMPANY_PHONE}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 inline-flex items-center justify-center hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                {COMPANY_CONFIG.COMPANY_PHONE}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">★★★★★</div>
                <div className="text-sm text-blue-200">5.0 Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">{COMPANY_CONFIG.STATS.yearsOfExperience}</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{COMPANY_CONFIG.STATS.projectsDelivered}</div>
                <div className="text-blue-200">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{COMPANY_CONFIG.STATS.clientsSatisfied}</div>
                <div className="text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{COMPANY_CONFIG.STATS.teamMembers}</div>
                <div className="text-blue-200">Team Members</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            {/* Main Hero Image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
                alt="Software Development Team"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Project Delivered</div>
                    <div className="text-blue-200 text-sm">On Time & Budget</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30 animate-bounce-slow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Play className="text-white" size={16} />
                </div>
                <div>
                  <div className="text-white font-medium">24/7 Support</div>
                  <div className="text-blue-200 text-xs">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
