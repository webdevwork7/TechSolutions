
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Clock, MapPin, Mail } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

const ContactCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-yellow-400">Digital Journey?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and turn your ideas into reality. Get a free consultation and project estimate today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Call Us Now</div>
                    <div className="text-blue-200">{COMPANY_CONFIG.COMPANY_PHONE}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-blue-200">{COMPANY_CONFIG.COMPANY_EMAIL}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Visit Our Office</div>
                    <div className="text-blue-200">{COMPANY_CONFIG.COMPANY_ADDRESS}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-blue-200">Mon - Fri: 9:00 AM - 6:00 PM PST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold mb-1">Free</div>
                <div className="text-blue-200 text-sm">Consultation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold mb-1">24h</div>
                <div className="text-blue-200 text-sm">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold mb-1">NDA</div>
                <div className="text-blue-200 text-sm">Protection</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold mb-1">Expert</div>
                <div className="text-blue-200 text-sm">Team</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Choose Your Next Step</h3>
              
              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_CONFIG.COMPANY_PHONE}`}
                  className="w-full bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center group"
                >
                  <Phone className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
                  Call Now for Instant Support
                </a>
                
                <Link
                  to="/contact"
                  className="w-full bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center group"
                >
                  Get Free Project Estimate
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                
                <Link
                  to="/portfolio"
                  className="w-full border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                >
                  View Our Portfolio
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="text-center">
              <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
              <div className="text-blue-200 text-sm">Rated 4.9/5 by 200+ clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
