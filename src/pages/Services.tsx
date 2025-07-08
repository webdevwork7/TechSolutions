
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Cloud, Brain, Shield, CheckCircle } from 'lucide-react';
import { SERVICES } from '@/config/company';

const iconMap = {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  Shield
};

const Services = () => {
  const serviceDetails = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "We build tailored software solutions that perfectly align with your business needs and objectives.",
      icon: "Code",
      features: [
        "Enterprise Web Applications",
        "Desktop Software Solutions",
        "API Development & Integration",
        "Legacy System Modernization",
        "Database Design & Management",
        "Third-party Integrations"
      ],
      technologies: ["React", "Node.js", "Python", "Java", ".NET", "PHP"]
    },
    {
      id: 2,
      title: "Web & Mobile App Development",
      description: "Create engaging digital experiences with responsive web applications and native mobile apps.",
      icon: "Smartphone",
      features: [
        "Responsive Web Development",
        "Progressive Web Apps (PWA)",
        "Native iOS & Android Apps", 
        "Cross-platform Development",
        "E-commerce Solutions",
        "Content Management Systems"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Angular", "Vue.js"]
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Design intuitive and engaging user experiences that delight users and drive business results.",
      icon: "Palette",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing",
        "Design System Creation",
        "Accessibility Compliance"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"]
    },
    {
      id: 4,
      title: "DevOps & Cloud Consulting",
      description: "Optimize your infrastructure with cloud solutions and DevOps best practices for scalability.",
      icon: "Cloud",
      features: [
        "Cloud Migration Services",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Container Orchestration",
        "Monitoring & Logging",
        "Security & Compliance"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
    },
    {
      id: 5,
      title: "AI/ML Solutions",
      description: "Harness the power of artificial intelligence and machine learning to automate and optimize your business.",
      icon: "Brain",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Chatbot Development",
        "Data Science Consulting"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face"]
    },
    {
      id: 6,
      title: "QA & Testing",
      description: "Ensure your software meets the highest quality standards with comprehensive testing services.",
      icon: "Shield",
      features: [
        "Manual Testing Services",
        "Automated Testing Solutions",
        "Performance Testing",
        "Security Testing",
        "Mobile App Testing",
        "API Testing"
      ],
      technologies: ["Selenium", "Cypress", "Jest", "Postman", "JMeter", "TestRail"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {serviceDetails.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="text-blue-600" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 text-lg mb-8">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                    >
                      Get Started
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="text-gray-400 text-sm">Service Preview</div>
                        </div>
                        <div className="space-y-4">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                          <div className="h-20 bg-blue-50 rounded-lg flex items-center justify-center">
                            <IconComponent className="text-blue-400" size={40} />
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="h-8 bg-blue-500 rounded w-24"></div>
                            <div className="h-8 bg-gray-200 rounded w-20"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals and drive growth
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

export default Services;
