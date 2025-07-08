
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TechnologiesSection from '@/components/home/TechnologiesSection';
import ProcessSection from '@/components/home/ProcessSection';
import ClientSuccessSection from '@/components/home/ClientSuccessSection';
import Testimonials from '@/components/home/Testimonials';
import ContactCTASection from '@/components/home/ContactCTASection';

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <TechnologiesSection />
      <ProcessSection />
      <ClientSuccessSection />
      <Testimonials />
      <ContactCTASection />
    </div>
  );
};

export default Homepage;
