import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaRocket, 
  FaBrain, 
  FaGraduationCap, 
  FaHeart 
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

interface AboutSkill {
  icon: React.ComponentType<{ className?: string, style?: React.CSSProperties }>;
  title: string;
  description: string;
  color: string;
}

interface AboutProps {
  setCurrentPage?: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  const { } = useTheme();

  const aboutSkills: AboutSkill[] = [
    {
      icon: FaCode,
      title: "Full-Stack Development",
      description: "Passionate about creating robust, scalable web applications using modern technologies. Expertise in React, Node.js, and cloud infrastructure.",
      color: "#61DAFB"
    },
    {
      icon: FaBrain,
      title: "Problem Solving",
      description: "Analytical thinker with a knack for breaking down complex problems and developing innovative solutions through systematic approach.",
      color: "#9C27B0"
    },
    {
      icon: FaRocket,
      title: "Continuous Learning",
      description: "Committed to staying ahead of technological trends, constantly expanding my skill set and exploring emerging technologies.",
      color: "#FF5722"
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

  const skillVariants = {
    hidden: { 
      x: -50, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: { 
        type: "spring",
        stiffness: 300 
      }
    }
  };

  return (
    <motion.section 
      id="about"
      className="min-h-screen py-20 bg-primary-light dark:bg-primary"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={textVariants}
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 text-secondary dark:text-lightText"
            variants={textVariants}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-lg text-darkText-light dark:text-darkText"
            variants={textVariants}
          >
            I'm a passionate Full-Stack Developer with a strong background in creating innovative web solutions. 
            My journey in technology is driven by curiosity, creativity, and a commitment to continuous learning. 
            I thrive on transforming complex challenges into elegant, user-friendly digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {aboutSkills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
                variants={skillVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="mx-auto mb-4 w-24 h-24 flex items-center justify-center rounded-full"
                  style={{ 
                    backgroundColor: `${skill.color}20`, 
                    boxShadow: `0 0 20px ${skill.color}50` 
                  }}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                >
                  <SkillIcon 
                    className="text-5xl"
                    style={{ color: skill.color }} 
                  />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3 text-secondary dark:text-lightText">
                  {skill.title}
                </h3>
                <p className="text-darkText-light dark:text-darkText">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-4 text-center"
          variants={textVariants}
        >
          <motion.h3 
            className="text-3xl font-bold mb-6 text-secondary dark:text-lightText"
            variants={textVariants}
          >
            My Professional Journey
          </motion.h3>
          <motion.div 
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              variants={skillVariants}
            >
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-4xl mr-4 text-blue-500" />
                <h4 className="text-xl font-semibold text-secondary dark:text-lightText">
                  Education
                </h4>
              </div>
              <p className="text-darkText-light dark:text-darkText">
                Bachelor of Engineering - BE, Mechanical Engineering
                <br />
                Kwara State University, Malete
                <br />
                Graduated: 2022
              </p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              variants={skillVariants}
            >
              <div className="flex items-center mb-4">
                <FaHeart className="text-4xl mr-4 text-red-500" />
                <h4 className="text-xl font-semibold text-secondary dark:text-lightText">
                  Passion & Interests
                </h4>
              </div>
              <p className="text-darkText-light dark:text-darkText">
                Web Development, Open Source Contribution
                <br />
                Machine Learning, Blockchain Technology
                <br />
                Tech Innovation, Continuous Learning
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
