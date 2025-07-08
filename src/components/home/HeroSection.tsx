
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              {COMPANY_CONFIG.COMPANY_TAGLINE}
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We are a leading IT company specializing in custom software development, 
              web & mobile applications, and digital transformation solutions for businesses worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center">
                <Play className="mr-2" size={20} />
                Watch Demo
              </button>
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

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <div className="h-4 bg-white/60 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-white/40 rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-white/60 rounded w-full"></div>
                  <div className="h-3 bg-white/40 rounded w-3/4"></div>
                  <div className="h-3 bg-white/40 rounded w-1/2"></div>
                </div>
                <div className="flex space-x-2 pt-4">
                  <div className="h-8 bg-blue-500 rounded w-20"></div>
                  <div className="h-8 bg-white/20 rounded w-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
