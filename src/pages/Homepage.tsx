
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Homepage;
