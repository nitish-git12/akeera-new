'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimatedBadgeProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedBadge({ 
  text, 

  className = '',
  delay = 0
}: AnimatedBadgeProps) {
  


  

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        y: 20,
        filter: 'blur(10px)'
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        y: 0,
        filter: 'blur(0px)'
      }}
      viewport={{ 
        once: true,
        amount: 0.8
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
    background: "linear-gradient(270deg, #FFFFFF 3.09%, #E9E3FF 49.27%, #DEFFEC 100%)",
    border:'2px solid #fff',
    borderRadius:'70px'
  }}
      className={`inline-flex items-center gap-2 px-4 py-2 tracking-wide ${className}`}
    >
      <motion.div
        initial={{ rotate: -180, scale: 0 }}
        whileInView={{ rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: delay + 0.3,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      >
       <Image src="./arrow-icon1.svg" width={13} height={12} alt='' /> 
      </motion.div>
      <motion.span style={{fontSize:'16px', textTransform:'uppercase', fontWeight:'bold'}}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: delay + 0.4,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}