import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaHtml5, 
  FaCss3, 
  FaJsSquare, 
  FaGitAlt,
  FaJava,
  FaAws  
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiRedux, 
  SiNextdotjs, 
  SiGraphql, 
  SiPostgresql,
  SiFirebase  
} from 'react-icons/si';

// Define an interface for skill icons that includes React component type
interface SkillIcon {
  name: string;
  Icon: React.ComponentType<{ className?: string, style?: React.CSSProperties }>;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: SkillIcon[];
}

const Skills: React.FC = () => {
  const {  } = useTheme();

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", Icon: FaReact, color: "#61DAFB" },
        { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
        { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", Icon: FaCss3, color: "#1572B6" },
        { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38B2AC" },
        { name: "Redux", Icon: SiRedux, color: "#764ABC" }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
        { name: "Express", Icon: SiExpress, color: "#000000" },
        { name: "Python", Icon: FaPython, color: "#3776AB" },
        { name: "Java", Icon: FaJava, color: "#007396" },
        { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
        { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" }
      ]
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "Docker", Icon: FaDocker, color: "#2496ED" },
        { name: "AWS", Icon: FaAws, color: "#FF9900" },
        { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" }
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", Icon: FaGitAlt, color: "#F05032" },
        { name: "MongoDB", Icon: SiMongodb, color: "#47A248" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.section 
      id="skills"
      className="min-h-screen py-20 bg-primary-light dark:bg-primary"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-secondary dark:text-lightText"
          variants={itemVariants}
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <motion.div 
              key={category.name}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-6 text-secondary dark:text-lightText">
                {category.name}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.Icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center justify-center"
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <SkillIcon 
                        className="text-5xl mb-2" 
                        style={{ color: skill.color }}
                      />
                      <p className="text-sm text-center dark:text-gray-300">
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
