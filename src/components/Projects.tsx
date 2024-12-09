import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaCode, 
  FaLink, 
  FaGithub 
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  image: string;
  category: string;
  icon: React.ComponentType<{ className?: string, style?: React.CSSProperties }>;
  color: string;
}

interface ProjectFilterOption {
  label: string;
  value: string;
}

interface ProjectProps {
  setCurrentPage?: (page: string) => void;
}

const Projects: React.FC<ProjectProps> = ({ setCurrentPage }) => {
  const { } = useTheme();
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and a clean design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "http://ajiboyesunday.c1.biz/",
      github: "https://github.com/sajiboye28/portfolio",
      image: "/portfolio.jpg",
      category: "frontend",
      icon: FaReact,
      color: "#61DAFB"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      link: "https://github.com/sajiboye28/ecommerce-platform",
      github: "https://github.com/sajiboye28/ecommerce-platform",
      image: "/ecommerce.jpg",
      category: "fullstack",
      icon: FaNodeJs,
      color: "#4CAF50"
    },
    {
      title: "Event Management API",
      description: "Robust backend API for event management with advanced features like user authentication, event CRUD operations, and ticket booking.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      link: "https://github.com/sajiboye28/event-management-api",
      github: "https://github.com/sajiboye28/event-management-api",
      image: "/event-api.jpg",
      category: "backend",
      icon: FaDatabase,
      color: "#FF6F61"
    },
    {
      title: "Real-Time Chat Application",
      description: "Full-stack real-time chat application with WebSocket support, user authentication, and group chat functionality.",
      technologies: ["React", "Node.js", "Socket.IO", "MongoDB", "JWT"],
      link: "https://github.com/sajiboye28/real-time-chat-app",
      github: "https://github.com/sajiboye28/real-time-chat-app",
      image: "/chat-app.jpg",
      category: "fullstack",
      icon: FaCode,
      color: "#9C27B0"
    },
    {
      title: "Social Media Dashboard",
      description: "Comprehensive social media analytics dashboard with real-time data visualization, user engagement metrics, and performance tracking.",
      technologies: ["React", "D3.js", "Node.js", "GraphQL", "Redis"],
      link: "https://github.com/sajiboye28/social-media-dashboard",
      github: "https://github.com/sajiboye28/social-media-dashboard",
      image: "/social-dashboard.jpg",
      category: "fullstack",
      icon: FaReact,
      color: "#2196F3"
    },
    {
      title: "Blockchain Voting Platform",
      description: "Decentralized voting platform using blockchain technology to ensure transparency, security, and immutability of voting records.",
      technologies: ["Solidity", "React", "Web3.js", "Ethereum", "Truffle"],
      link: "https://github.com/sajiboye28/blockchain-voting-platform",
      github: "https://github.com/sajiboye28/blockchain-voting-platform",
      image: "/blockchain-voting.jpg",
      category: "blockchain",
      icon: FaCode,
      color: "#FF9800"
    }
  ];

  const filterOptions: ProjectFilterOption[] = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Fullstack', value: 'fullstack' },
    { label: 'Backend', value: 'backend' },
    { label: 'Blockchain', value: 'blockchain' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { 
        type: "spring",
        stiffness: 300 
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  return (
    <motion.section 
      id="projects"
      className="min-h-screen py-20 bg-primary-light dark:bg-primary"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-secondary dark:text-lightText"
          variants={projectVariants}
        >
          My Projects
        </motion.h2>

        <motion.div 
          className="flex justify-center mb-12 space-x-4"
          variants={filterVariants}
        >
          {filterOptions.map((option) => (
            <motion.button
              key={option.value}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${filter === option.value 
                  ? 'bg-secondary text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }
              `}
              onClick={() => setFilter(option.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {option.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const ProjectIcon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  variants={projectVariants}
                  whileHover="hover"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute top-4 right-4 z-10 flex space-x-2"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-secondary text-white p-2 rounded-full hover:bg-secondary-dark"
                      >
                        <FaLink />
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
                      >
                        <FaGithub />
                      </a>
                    </motion.div>
                    <motion.div 
                      className="p-6"
                      style={{ 
                        backgroundColor: `${project.color}10`, 
                        boxShadow: `0 0 20px ${project.color}30` 
                      }}
                    >
                      <ProjectIcon 
                        className="text-5xl mb-4" 
                        style={{ color: project.color }} 
                      />
                      <h3 className="text-2xl font-semibold mb-3 text-secondary dark:text-lightText">
                        {project.title}
                      </h3>
                      <p className="text-darkText-light dark:text-darkText mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex} 
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: techIndex * 0.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full mx-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-secondary dark:text-lightText">
                      {selectedProject.title}
                    </h2>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-secondary dark:text-lightText">
                      Description
                    </h3>
                    <p className="text-darkText-light dark:text-darkText">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-secondary dark:text-lightText">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center bg-secondary text-white px-4 py-2 rounded-full hover:bg-secondary-dark"
                    >
                      <FaLink className="mr-2" /> Live Demo
                    </a>
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;
