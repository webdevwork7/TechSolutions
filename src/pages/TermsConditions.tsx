
import React from 'react';
import { COMPANY_CONFIG } from '@/config/company';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 1, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using {COMPANY_CONFIG.COMPANY_NAME}'s services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700">
                {COMPANY_CONFIG.COMPANY_NAME} provides custom software development, web application development, and related technology services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You must provide accurate and complete information when using our services</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You must not use our services for any illegal or unauthorized purpose</li>
                <li>You must not violate any laws in your jurisdiction</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700">
                The service and its original content, features, and functionality are owned by {COMPANY_CONFIG.COMPANY_NAME} and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700">
                In no event shall {COMPANY_CONFIG.COMPANY_NAME} be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">Email: {COMPANY_CONFIG.COMPANY_EMAIL}</p>
                <p className="text-gray-700">Phone: {COMPANY_CONFIG.COMPANY_PHONE}</p>
                <p className="text-gray-700">Address: {COMPANY_CONFIG.COMPANY_ADDRESS}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
