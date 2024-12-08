import React from 'react';
import ProjectsSection from '../components/Projects';
import { useTheme } from '../context/ThemeContext';

interface ProjectsProps {
  setCurrentPage: (page: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setCurrentPage }) => {
  const { darkMode } = useTheme();

  console.log('Projects component mounted');

  return (
    <div className={`min-h-screen w-full py-20 ${
      darkMode 
        ? 'bg-primary text-lightText' 
        : 'bg-primary-light text-lightText-dark'
    } transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <ProjectsSection setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default Projects;
