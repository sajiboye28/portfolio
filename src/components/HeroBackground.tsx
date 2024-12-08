import React from 'react';
import { BackgroundBeamsWithCollision as BeamsBackground } from "./ui/background-beams-with-collision";

interface HeroBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  children, 
  className = '' 
}) => {
  return (
    <BeamsBackground className={className}>
      {children}
    </BeamsBackground>
  );
};

export default HeroBackground;
