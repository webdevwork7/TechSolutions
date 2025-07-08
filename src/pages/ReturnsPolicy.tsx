
import React from 'react';
import { COMPANY_CONFIG } from '@/config/company';

const ReturnsPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Returns Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 1, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Service-Based Returns</h2>
              <p className="text-gray-700">
                As {COMPANY_CONFIG.COMPANY_NAME} provides custom software development services, traditional returns do not apply. However, we are committed to customer satisfaction and will work with you to resolve any issues.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Refund Eligibility</h2>
              <p className="text-gray-700 mb-4">
                Refunds may be considered under the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Service was not delivered as agreed in the contract</li>
                <li>Technical issues that cannot be resolved within reasonable timeframes</li>
                <li>Cancellation within 48 hours of project initiation</li>
                <li>Mutual agreement between both parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Refund Process</h2>
              <p className="text-gray-700 mb-4">
                To request a refund, please contact us within 30 days of service delivery:
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Send a detailed refund request to our support team</li>
                <li>Provide relevant documentation and project details</li>
                <li>Allow 5-10 business days for review and processing</li>
                <li>Approved refunds will be processed within 10-15 business days</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Non-Refundable Items</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Consultation fees</li>
                <li>Third-party licenses and tools</li>
                <li>Completed deliverables that meet contract specifications</li>
                <li>Services rendered beyond the 30-day window</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
              <p className="text-gray-700">
                For any questions regarding returns or refunds, please contact us:
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

export default ReturnsPolicy;
