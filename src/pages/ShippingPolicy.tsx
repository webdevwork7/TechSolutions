
import React from 'react';
import { COMPANY_CONFIG } from '@/config/company';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 1, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Digital Service Delivery</h2>
              <p className="text-gray-700">
                {COMPANY_CONFIG.COMPANY_NAME} primarily provides digital services and software solutions. As such, traditional shipping does not apply to most of our offerings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Delivery Methods</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Software deliverables are provided via secure digital platforms</li>
                <li>Documentation and reports are delivered electronically</li>
                <li>Access credentials and login details are sent via encrypted email</li>
                <li>Project files are shared through secure cloud storage</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Delivery Timeframes</h2>
              <p className="text-gray-700 mb-4">
                Delivery times vary based on project scope and complexity:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Simple applications: 2-4 weeks</li>
                <li>Medium complexity projects: 4-8 weeks</li>
                <li>Enterprise solutions: 8-16 weeks</li>
                <li>Custom timelines are established during project planning</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Physical Materials</h2>
              <p className="text-gray-700 mb-4">
                In rare cases where physical materials are required:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Hardware components are shipped via standard carriers</li>
                <li>Shipping costs are discussed and agreed upon in advance</li>
                <li>Delivery times depend on location and shipping method</li>
                <li>Tracking information is provided for all shipments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. International Delivery</h2>
              <p className="text-gray-700">
                Our digital services are available globally. Any customs duties or taxes for international clients are the responsibility of the client.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="text-gray-700">
                For questions about delivery or shipping, please contact us:
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

export default ShippingPolicy;
