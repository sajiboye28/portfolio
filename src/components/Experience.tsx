import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  FaCode, 
  FaLaptopCode, 
  FaChalkboardTeacher, 
  FaNetworkWired 
} from 'react-icons/fa';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  icon: React.ComponentType<{ className?: string, style?: React.CSSProperties }>;
  color: string;
}

interface ExperienceProps {
  setCurrentPage?: (page: string) => void;
}

const Experience: React.FC<ExperienceProps> = ({ setCurrentPage }) => {
  const { } = useTheme();

  const experiences: Experience[] = [
    {
      title: "Front-end Developer & Graphic Designer",
      company: "Benom Gold Communication Limited",
      period: "August 2021 - Present",
      description: "Spearheaded the design and development of multiple websites, ensuring seamless functionality and exceptional user experience. Created visually appealing graphics for websites and managed social media pages. Contributed to engaging YouTube video content creation",
      technologies: ['React', 'TypeScript', 'Node.js', 'Docker', 'AWS'],
      icon: FaCode,
      color: "#61DAFB"
    },
    {
      title: "Programming Instructor",
      company: "Anchor University(New Horizons Nigeria)",
      period: "November 2021 - April 2022",
      description: "Provided expert instruction in React Js, Node Js, HTML, CSS, JavaScript, Bootstrap, Java, and Blockchain. Equipped students with practical skills for success in their chosen fields. Developed and maintained comprehensive course materials",
      technologies: ['JavaScript', 'React', 'Redux', 'Tailwind CSS', 'Figma'],
      icon: FaChalkboardTeacher,
      color: "#F0DB4F"
    },
    {
      title: "ICT Infrastructure Engineer",
      company: "Masterpiece Technologies and Logistics Limited",
      period: "January 2020 - April 2020",
      description: "Installed various ICT infrastructures including CCTV cameras and access control systems. Implemented fire suppression systems, inverters, and solar panels. Provided technical support and troubleshooting services to clients",
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'WordPress'],
      icon: FaNetworkWired,
      color: "#4CAF50"
    },
    {
      title: "ICT Specialist (NYSC)",
      company: "Comfred Limited",
      period: "March 2019 - November 2019",
      description: "Led installation of cutting-edge ICT infrastructure. Implemented CCTV cameras, access control systems, and fire suppression systems. Optimized system functionality and enhanced organizational efficiency",
      technologies: ['React', 'TypeScript', 'Node.js', 'Docker', 'AWS'],
      icon: FaLaptopCode,
      color: "#FF6F61"
    },
    {
      title: "Software Developer Intern",
      company: "Calm Global Information Technologies Ltd",
      period: "September 2017 - December 2018",
      description: "Collaborated with a dynamic team to code, debug, and test software, enhancing product functionality and improving user experiences",
      technologies: ['Software Development', 'Debugging', 'Testing', 'Team Collaboration'],
      icon: FaCode,
      color: "#007bff"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
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
    }
  };

  const itemVariants = {
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
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      id="experience"
      className="min-h-screen py-20 bg-primary-light dark:bg-primary"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-secondary dark:text-lightText"
          variants={textVariants}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const ExperienceIcon = exp.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="flex items-center p-6">
                  <motion.div 
                    className="mr-6 p-4 rounded-full"
                    style={{ 
                      backgroundColor: `${exp.color}20`, 
                      boxShadow: `0 0 15px ${exp.color}50` 
                    }}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20 
                    }}
                  >
                    <ExperienceIcon 
                      className="text-4xl"
                      style={{ color: exp.color }} 
                    />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary dark:text-lightText">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="text-darkText-light dark:text-darkText mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
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
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
