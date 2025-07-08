
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "HealthCare Management System",
      category: "healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      description: "Comprehensive healthcare management platform with patient records, appointments, and telemedicine capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      problem: "Hospital needed to digitize patient records and enable remote consultations",
      solution: "Built a complete healthcare management system with real-time features",
      result: "40% reduction in administrative work, 60% increase in patient satisfaction"
    },
    {
      id: 2,
      title: "FinTech Trading Platform",
      category: "fintech",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      description: "Real-time trading platform with advanced analytics and portfolio management tools.",
      technologies: ["React", "Python", "PostgreSQL", "Redis"],
      problem: "Financial firm needed a modern trading platform with real-time data",
      solution: "Developed a high-performance trading system with advanced analytics",
      result: "25% increase in trading volume, 99.9% uptime achieved"
    },
    {
      id: 3,
      title: "E-Commerce Marketplace",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Multi-vendor e-commerce platform with advanced search, payments, and inventory management.",
      technologies: ["Next.js", "Stripe", "AWS", "Elasticsearch"],
      problem: "Client needed a scalable marketplace to connect multiple vendors",
      solution: "Built a comprehensive multi-vendor platform with advanced features",
      result: "200+ vendors onboarded, $2M+ in transactions processed"
    },
    {
      id: 4,
      title: "Real Estate CRM",
      category: "realestate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      description: "Customer relationship management system for real estate agencies with lead tracking and property management.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API"],
      problem: "Real estate agency needed better lead management and property tracking",
      solution: "Created a comprehensive CRM with property listings and lead automation",
      result: "50% improvement in lead conversion, 30% time savings in property management"
    },
    {
      id: 5,
      title: "Learning Management System",
      category: "edtech",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      description: "Online learning platform with video streaming, assignments, and progress tracking.",
      technologies: ["Angular", "Node.js", "MongoDB", "AWS S3"],
      problem: "Educational institution needed a platform for online course delivery",
      solution: "Developed a complete LMS with video streaming and assessment tools",
      result: "10,000+ students enrolled, 95% course completion rate"
    },
    {
      id: 6,
      title: "Logistics Management System",
      category: "logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      description: "Fleet management and route optimization system for logistics companies.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Google Maps"],
      problem: "Logistics company needed better fleet tracking and route optimization",
      solution: "Built a comprehensive system with real-time tracking and AI-powered routing",
      result: "20% reduction in fuel costs, 35% improvement in delivery times"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'realestate', label: 'Real Estate' },
    { id: 'edtech', label: 'EdTech' },
    { id: 'logistics', label: 'Logistics' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses across industries achieve their digital transformation goals
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-4">
                      <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                        <ExternalLink size={20} />
                      </button>
                      <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                        <Github size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Problem:</h4>
                      <p className="text-gray-600 text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Solution:</h4>
                      <p className="text-gray-600 text-sm">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Result:</h4>
                      <p className="text-green-600 text-sm font-medium">{project.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our list of satisfied clients and let us help you achieve your business goals
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
