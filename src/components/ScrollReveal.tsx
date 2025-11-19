'use client'
import {motion} from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps{
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fadeIn' | 'fadeOut' | 'scale' | 'slideLeft' | 'slideRight' | 'blurUp';
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
  duration?: number;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  stagger = false,
  staggerDelay = 0.3,
  duration = 1.2
}: ScrollRevealProps) {
  
  const directions = {
    up: { y: 60, x: 0, opacity: 0 },
    down: { y: -60, x: 0, opacity: 0 },
    left: { x: 60, y: 0, opacity: 0 },
    right: { x: -60, y: 0, opacity: 0 },
    fadeIn: { y: 0, x: 0, opacity: 0 },
    fadeOut: { y: 0, x: 0, opacity: 1 },
    scale: { scale: 0.85, opacity: 0 },
    slideLeft: { x: 120, opacity: 0 },
    slideRight: { x: -120, opacity: 0 },
    blurUp: { y: 40, opacity: 0, filter: 'blur(10px)' }
  };

  const endStates = {
    up: { opacity: 1, x: 0, y: 0 },
    down: { opacity: 1, x: 0, y: 0 },
    left: { opacity: 1, x: 0, y: 0 },
    right: { opacity: 1, x: 0, y: 0 },
    fadeIn: { opacity: 1, x: 0, y: 0 },
    fadeOut: { opacity: 0, x: 0, y: 0 },
    scale: { scale: 1, opacity: 1 },
    slideLeft: { x: 0, opacity: 1 },
    slideRight: { x: 0, opacity: 1 },
    blurUp: { y: 0, opacity: 1, filter: 'blur(0px)' }
  };

  // If stagger is enabled, use container/children pattern
  if (stagger) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: true,
          amount: 0.2,
          margin: "0px 0px -50px 0px"
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delay
            }
          }
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={directions[direction]}
      whileInView={endStates[direction]}
      viewport={{ 
        once: true,
        amount: 0.2,
        margin: "0px 0px -50px 0px"
      }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.45, 0, 0.55, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

// Export StaggerItem for use with stagger animations
export function StaggerItem({ 
  children, 
  className = '',
  direction = 'up',
  duration = 1
}: { 
  children: ReactNode; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fadeIn' | 'scale' | 'slideLeft' | 'slideRight' | 'blurUp';
  duration?: number;
}) {
  const directions = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
    fadeIn: { opacity: 0 },
    scale: { scale: 0.85, opacity: 0 },
    slideLeft: { x: 60, opacity: 0 },
    slideRight: { x: -60, opacity: 0 },
    blurUp: { y: 30, opacity: 0, filter: 'blur(8px)' }
  };

  const endStates = {
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
    fadeIn: { opacity: 1 },
    scale: { scale: 1, opacity: 1 },
    slideLeft: { x: 0, opacity: 1 },
    slideRight: { x: 0, opacity: 1 },
    blurUp: { y: 0, opacity: 1, filter: 'blur(0px)' }
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: directions[direction],
        visible: {
          ...endStates[direction],
          transition: {
            duration: duration,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Typewriter component
export function Typewriter({ 
  text, 
  delay = 0,
  speed = 0.08,
  className = '' 
}: { 
  text: string; 
  delay?: number;
  speed?: number;
  className?: string;
}) {
  const letters = text.split('');

  const container = {
    hidden: {},
    visible: (i = 1) => ({
      transition: { 
        staggerChildren: speed, 
        delayChildren: delay 
      }
    })
  };

  const child = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}