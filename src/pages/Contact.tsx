import React from 'react';
import ContactSection from '../components/Contact';
import { useTheme } from '../context/ThemeContext';

interface ContactProps {
  setCurrentPage: (page: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setCurrentPage }) => {
  const { darkMode } = useTheme();

  console.log('Contact component mounted');

  return (
    <div className={`min-h-screen w-full py-20 ${
      darkMode 
        ? 'bg-primary text-lightText' 
        : 'bg-primary-light text-lightText-dark'
    } transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <ContactSection setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default Contact;
