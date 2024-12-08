import React, { useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ScrollProgress from './components/ui/ScrollProgress';
import SkipLink from './components/ui/SkipLink';
import BackToTop from './components/ui/BackToTop';

// Import all sections
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  // Create refs for each section to enable smooth scrolling
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a specific section
  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="app-container min-h-screen dark:bg-gray-900 transition-colors duration-300">
        <SkipLink href="#home">Skip to main content</SkipLink>
        <ScrollProgress />
        
        {/* Pass refs and scroll function to Navigation */}
        <Navigation 
          scrollToSection={scrollToSection}
          refs={{
            home: homeRef,
            about: aboutRef,
            experience: experienceRef,
            projects: projectsRef,
            skills: skillsRef,
            contact: contactRef
          }}
        />
        <ThemeToggle />
        
        {/* Single scrollable page with all sections */}
        <main className="scroll-smooth">
          <div ref={homeRef} id="home">
            <Hero setCurrentPage={() => {}} />
          </div>
          
          <div ref={aboutRef} id="about">
            <About />
          </div>
          
          <div ref={experienceRef} id="experience">
            <Experience />
          </div>
          
          <div ref={projectsRef} id="projects">
            <Projects setCurrentPage={() => {}} />
          </div>
          
          <div ref={skillsRef} id="skills">
            <Skills />
          </div>
          
          <div ref={contactRef} id="contact">
            <Contact setCurrentPage={() => {}} />
          </div>
        </main>
        
        <BackToTop />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
