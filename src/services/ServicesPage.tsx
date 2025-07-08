
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Cloud, Brain, Shield, CheckCircle, Phone } from 'lucide-react';
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
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      features: [
        "Enterprise Web Applications",
        "Desktop Software Solutions",
        "API Development & Integration",
        "Legacy System Modernization",
        "Database Design & Management",
        "Third-party Integrations"
      ],
      technologies: ["React", "Node.js", "Python", "Java", ".NET", "PHP"],
      phone: "+1 (555) 123-4567"
    },
    {
      id: 2,
      title: "Web & Mobile App Development",
      description: "Create engaging digital experiences with responsive web applications and native mobile apps.",
      icon: "Smartphone",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      features: [
        "Responsive Web Development",
        "Progressive Web Apps (PWA)",
        "Native iOS & Android Apps", 
        "Cross-platform Development",
        "E-commerce Solutions",
        "Content Management Systems"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Angular", "Vue.js"],
      phone: "+1 (555) 123-4567"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Design intuitive and engaging user experiences that delight users and drive business results.",
      icon: "Palette",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing",
        "Design System Creation",
        "Accessibility Compliance"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
      phone: "+1 (555) 123-4567"
    },
    {
      id: 4,
      title: "DevOps & Cloud Consulting",
      description: "Optimize your infrastructure with cloud solutions and DevOps best practices for scalability.",
      icon: "Cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      features: [
        "Cloud Migration Services",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Container Orchestration",
        "Monitoring & Logging",
        "Security & Compliance"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      phone: "+1 (555) 123-4567"
    },
    {
      id: 5,
      title: "AI/ML Solutions",
      description: "Harness the power of artificial intelligence and machine learning to automate and optimize your business.",
      icon: "Brain",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Chatbot Development",
        "Data Science Consulting"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face"],
      phone: "+1 (555) 123-4567"
    },
    {
      id: 6,
      title: "QA & Testing",
      description: "Ensure your software meets the highest quality standards with comprehensive testing services.",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      features: [
        "Manual Testing Services",
        "Automated Testing Solutions",
        "Performance Testing",
        "Security Testing",
        "Mobile App Testing",
        "API Testing"
      ],
      technologies: ["Selenium", "Cypress", "Jest", "Postman", "JMeter", "TestRail"],
      phone: "+1 (555) 123-4567"
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
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''} bg-white rounded-2xl shadow-lg overflow-hidden`}>
                  <div className={`p-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
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
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/contact"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                      >
                        Get Started
                        <ArrowRight className="ml-2" size={20} />
                      </Link>
                      
                      <a
                        href={`tel:${service.phone}`}
                        className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
                      >
                        <Phone className="mr-2" size={20} />
                        Call Now
                      </a>
                    </div>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="tel:+1 (555) 123-4567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              Call: +1 (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
