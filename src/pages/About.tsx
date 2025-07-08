
import React from 'react';
import { Users, Target, Eye, Award } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

const About = () => {
  const leadership = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years in software development and business strategy"
    },
    {
      name: "Sarah Wilson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in cloud architecture and emerging technologies"
    },
    {
      name: "David Kumar",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "UX/UI specialist with award-winning design portfolio"
    }
  ];

  const milestones = [
    { year: "2014", event: "Company Founded", description: "Started with a vision to transform businesses through technology" },
    { year: "2016", event: "50+ Projects", description: "Reached our first major milestone in project delivery" },
    { year: "2018", event: "International Expansion", description: "Expanded services to global markets" },
    { year: "2020", event: "AI/ML Division", description: "Launched specialized AI and Machine Learning services" },
    { year: "2022", event: "500+ Projects", description: "Celebrated delivering over 500 successful projects" },
    { year: "2024", event: "Industry Recognition", description: "Received multiple awards for excellence in software development" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About {COMPANY_CONFIG.COMPANY_NAME}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We are passionate about creating innovative software solutions that help businesses 
            thrive in the digital age. Our team combines technical expertise with creative thinking 
            to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses worldwide with cutting-edge software solutions that drive 
                growth, efficiency, and innovation in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in custom software development, recognized for our 
                innovation, quality, and commitment to client success across all industries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Excellence, integrity, innovation, and collaboration. We believe in transparent 
                communication, continuous learning, and delivering value that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries behind our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{COMPANY_CONFIG.STATS.yearsOfExperience}</div>
              <div className="text-blue-200">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{COMPANY_CONFIG.STATS.projectsDelivered}</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{COMPANY_CONFIG.STATS.clientsSatisfied}</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{COMPANY_CONFIG.STATS.teamMembers}</div>
              <div className="text-blue-200">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mr-8 relative">
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 w-0.5 h-16 bg-blue-200 transform -translate-x-1/2"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
