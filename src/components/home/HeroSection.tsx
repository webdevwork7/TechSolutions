
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Phone, CheckCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Apple-style animated background elements */}
      <div className="absolute inset-0">
        {/* Large blur orbs */}
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[800px] h-[800px] bg-gradient-to-l from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-white/5 to-blue-300/10 rounded-full blur-3xl animate-ping delay-2000"></div>
        
        {/* Smaller floating elements */}
        <div className="absolute top-32 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-2xl animate-bounce delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-60 h-60 bg-gradient-to-tr from-indigo-300/15 to-purple-300/15 rounded-full blur-2xl animate-bounce delay-1500"></div>
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/20 to-transparent"></div>

      <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Glass morphism badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full text-sm border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <CheckCircle className="mr-2 animate-pulse" size={16} />
              <span className="font-medium">Trusted by 200+ Companies Worldwide</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent animate-gradient">
                {COMPANY_CONFIG.COMPANY_TAGLINE}
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl backdrop-blur-sm">
              We are a leading IT company specializing in custom software development, 
              web & mobile applications, and digital transformation solutions for businesses worldwide.
            </p>
            
            {/* Enhanced CTA buttons with glass morphism */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white/90 backdrop-blur-sm text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:shadow-2xl transition-all duration-500 inline-flex items-center justify-center group hover:scale-105 border border-white/20"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </Link>
              
              <a
                href={`tel:${COMPANY_CONFIG.COMPANY_PHONE}`}
                className="bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-500 inline-flex items-center justify-center hover:scale-105 shadow-lg"
              >
                <Phone className="mr-2" size={20} />
                {COMPANY_CONFIG.COMPANY_PHONE}
              </a>
            </div>

            {/* Enhanced trust indicators */}
            <div className="flex items-center space-x-8 pt-8">
              {[
                { icon: "★★★★★", value: "5.0 Rating", color: "text-yellow-400" },
                { icon: "24/7", value: "Support", color: "text-green-400" },
                { icon: "99%", value: "Success Rate", color: "text-blue-400" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-2xl font-bold ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="text-sm text-blue-200 font-medium">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Enhanced stats with glass morphism */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {[
                { value: COMPANY_CONFIG.STATS.yearsOfExperience, label: "Years Experience" },
                { value: COMPANY_CONFIG.STATS.projectsDelivered, label: "Projects Delivered" },
                { value: COMPANY_CONFIG.STATS.clientsSatisfied, label: "Happy Clients" },
                { value: COMPANY_CONFIG.STATS.teamMembers, label: "Team Members" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            {/* Enhanced main hero image with glass morphism frame */}
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-2 border border-white/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
                  alt="Software Development Team"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              
              {/* Enhanced floating success card */}
              <div className="absolute -top-6 -right-6 bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 animate-float shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Project Delivered</div>
                    <div className="text-blue-200 text-sm">On Time & Budget</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced floating support card */}
            <div className="absolute -bottom-6 -left-6 bg-blue-600/20 backdrop-blur-lg rounded-xl p-4 border border-blue-400/30 animate-bounce-slow shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
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

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
