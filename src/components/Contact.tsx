import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FaPaperPlane, 
  FaEnvelope, 
  FaUser, 
  FaComment, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter 
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

interface ContactProps {
  setCurrentPage?: (page: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setCurrentPage }) => {
  const { darkMode } = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '', 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '', 
        formRef.current, 
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
    }
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/ajiboye-sunday-33058b96/",
      color: "#0077B5"
    },
    {
      icon: FaGithub,
      url: "https://github.com/sajiboye28",
      color: "#333"
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/ajiboye_sunday",
      color: "#1DA1F2"
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
      rotate: 5,
      transition: { 
        type: "spring",
        stiffness: 300 
      }
    }
  };

  const inputVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    focus: {
      scale: 1.02,
      borderColor: "#4A90E2",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      id="contact"
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
          Get in Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            variants={itemVariants}
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div 
                className="relative"
                variants={inputVariants}
                whileFocus="focus"
              >
                <motion.label 
                  htmlFor="name"
                  className="block mb-2 text-darkText-light dark:text-darkText"
                  variants={inputVariants}
                >
                  Name
                </motion.label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-darkText-light dark:text-darkText focus:outline-none focus:ring-2 focus:ring-secondary"
                    variants={inputVariants}
                  />
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                variants={inputVariants}
                whileFocus="focus"
              >
                <motion.label 
                  htmlFor="email"
                  className="block mb-2 text-darkText-light dark:text-darkText"
                  variants={inputVariants}
                >
                  Email
                </motion.label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-darkText-light dark:text-darkText focus:outline-none focus:ring-2 focus:ring-secondary"
                    variants={inputVariants}
                  />
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                variants={inputVariants}
                whileFocus="focus"
              >
                <motion.label 
                  htmlFor="message"
                  className="block mb-2 text-darkText-light dark:text-darkText"
                  variants={inputVariants}
                >
                  Message
                </motion.label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-gray-400" />
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-darkText-light dark:text-darkText focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                    variants={inputVariants}
                  />
                </div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className={`
                  w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center
                  ${status === 'sending' 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-secondary hover:bg-secondary-dark'
                  }
                `}
                variants={inputVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {status === 'sending' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" /> Send Message
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg text-center"
                >
                  Oops! Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center space-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-4 text-secondary dark:text-lightText">
                Let's Connect
              </h3>
              <p className="text-darkText-light dark:text-darkText">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            </motion.div>

            <motion.div 
              className="flex justify-center space-x-6"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full shadow-lg transition-all duration-300"
                    style={{ 
                      backgroundColor: `${social.color}20`, 
                      boxShadow: `0 0 15px ${social.color}50` 
                    }}
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <SocialIcon 
                      className="text-3xl" 
                      style={{ color: social.color }} 
                    />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div 
              className="text-center mt-8"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold mb-2 text-secondary dark:text-lightText">
                Contact Information
              </h4>
              <p className="text-darkText-light dark:text-darkText">
                Email: ajiboyesunday6@gmail.com
                <br />
                Phone: +234 8132 577 456
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
