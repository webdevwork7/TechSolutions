
import React from 'react';
import { COMPANY_CONFIG } from '@/config/company';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 1, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Information</h2>
              <p className="text-gray-700">
                The information on this website is provided on an "as is" basis. {COMPANY_CONFIG.COMPANY_NAME} makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Professional Advice</h2>
              <p className="text-gray-700">
                The content on this website is for informational purposes only and should not be considered as professional advice. Always consult with qualified professionals for specific business, legal, or technical advice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Limitation of Liability</h2>
              <p className="text-gray-700">
                In no event will {COMPANY_CONFIG.COMPANY_NAME} be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage arising from loss of data or profits arising out of, or in connection with, the use of this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. External Links</h2>
              <p className="text-gray-700">
                This website may contain links to external websites. {COMPANY_CONFIG.COMPANY_NAME} has no control over the content of these sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Changes to Content</h2>
              <p className="text-gray-700">
                {COMPANY_CONFIG.COMPANY_NAME} reserves the right to modify, update, or remove any content on this website at any time without prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Technical Accuracy</h2>
              <p className="text-gray-700">
                While we strive to provide accurate technical information, technology evolves rapidly. We recommend verifying current best practices and consulting with technical experts for critical implementations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about this disclaimer, please contact us:
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

export default Disclaimer;
