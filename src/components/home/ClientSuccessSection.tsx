
import React from 'react';
import { Star, TrendingUp, Users, Zap } from 'lucide-react';

const ClientSuccessSection = () => {
  const successStories = [
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Needed a HIPAA-compliant patient management system",
      solution: "Custom web application with advanced security features",
      results: [
        "50% increase in patient satisfaction",
        "30% reduction in administrative time",
        "100% HIPAA compliance achieved"
      ],
      image: "https://kms-healthcare.com/wp-content/uploads/2022/02/iStock-1300745916-1024x576.jpg"
    },
    {
      company: "FinanceFlow Corp",
      industry: "Fintech",
      challenge: "Required a real-time trading platform",
      solution: "High-performance mobile and web application",
      results: [
        "99.9% uptime achieved",
        "10x faster transaction processing",
        "500K+ active users acquired"
      ],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop"
    },
    {
      company: "EduLearn Platform",
      industry: "EdTech",
      challenge: "Scaling online learning platform",
      solution: "Cloud-native architecture with AI-powered features",
      results: [
        "1M+ students enrolled",
        "40% improvement in completion rates",
        "Global expansion to 50+ countries"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client <span className="text-blue-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses transform their operations and achieve remarkable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img
                src={story.image}
                alt={story.company}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
                    {story.industry}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{story.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{story.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {story.results.map((result, idx) => (
                      <li key={idx} className="text-green-600 text-sm flex items-center">
                        <Star className="mr-2 text-yellow-400" size={12} />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-green-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">300%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-purple-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50%</div>
              <div className="text-gray-600">Faster Time to Market</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Star className="text-orange-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;
