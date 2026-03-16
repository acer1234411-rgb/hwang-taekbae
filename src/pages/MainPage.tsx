import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Proof from '../components/Proof';
import CTA from '../components/CTA';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <Hero />
      <Features />
      <Services />
      <Proof />
      <CTA />
    </div>
  );
};

export default MainPage;
