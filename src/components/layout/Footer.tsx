
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{COMPANY_CONFIG.COMPANY_NAME}</h3>
            <p className="text-gray-300 mb-4">
              {COMPANY_CONFIG.COMPANY_TAGLINE}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>{COMPANY_CONFIG.COMPANY_PHONE}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>{COMPANY_CONFIG.COMPANY_EMAIL}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>{COMPANY_CONFIG.COMPANY_ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Custom Software Development</span></li>
              <li><span className="text-gray-300">Web & Mobile Apps</span></li>
              <li><span className="text-gray-300">UI/UX Design</span></li>
              <li><span className="text-gray-300">Cloud Consulting</span></li>
              <li><span className="text-gray-300">AI/ML Solutions</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for latest updates</p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 {COMPANY_CONFIG.COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href={COMPANY_CONFIG.SOCIAL_LINKS.linkedin} className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={COMPANY_CONFIG.SOCIAL_LINKS.twitter} className="text-gray-300 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href={COMPANY_CONFIG.SOCIAL_LINKS.facebook} className="text-gray-300 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href={COMPANY_CONFIG.SOCIAL_LINKS.instagram} className="text-gray-300 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
