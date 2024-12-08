import React from 'react';
import AboutSection from '../components/About';

const About: React.FC = () => {
  console.log('About component mounted');
  
  return (
    <div className="min-h-screen w-full py-20 bg-primary-light dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AboutSection />
      </div>
    </div>
  );
};

export default About;
