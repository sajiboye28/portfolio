"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { cn } from "../ui/magic-card"; // Using the local cn function we created earlier

interface HyperTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const HyperText: React.FC<HyperTextProps> = ({
  text,
  className,
  delay = 0,
  duration = 0.5,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const chars = text.split("");

  return (
    <div ref={ref} className="inline-block">
      {chars.map((char, index) => (
        <MagicChar 
          key={index} 
          char={char} 
          index={index} 
          className={className}
          delay={delay}
          duration={duration}
        />
      ))}
    </div>
  );
};

interface MagicCharProps {
  char: string;
  index: number;
  className?: string;
  delay?: number;
  duration?: number;
}

const MagicChar: React.FC<MagicCharProps> = ({ 
  char, 
  index, 
  className,
  delay = 0,
  duration = 0.5 
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const translateX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const translateY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  const handleMouseMove = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    if (target) {
      const { left, top } = target.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const element = document.body;
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          delay: index * 0.05 + delay,
          duration: duration
        }
      }}
      style={{
        display: 'inline-block',
        translateX,
        translateY,
      }}
      className={cn(
        "inline-block origin-center will-change-transform",
        className
      )}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export default HyperText;
