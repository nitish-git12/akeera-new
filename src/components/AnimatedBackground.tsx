"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AnimatedBackground() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  return (
    <div ref={ref} className="relative w-full flex justify-center py-20">
      <div className="relative w-full max-w-[900px]">

        {/* Background SVG */}
        <Image
          src="/ai-bg.svg"
          alt="AI Background"
          width={1000}
          height={1000}
          className="w-full h-auto"
        />

        {/* Floating Circle 1 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={
            isInView
              ? {
                  y: [0, -20, 0],
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[18%] left-[25%] w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FFD93D] blur-[2px]"
        ></motion.div>

        {/* Floating Circle 2 */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={
            isInView
              ? {
                  y: [-15, 10, -15],
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] right-[20%] w-14 h-14 rounded-full bg-gradient-to-br from-[#7A5FFF] to-[#01F1E3] blur-sm"
        ></motion.div>

        {/* Glow Pulse */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={
            isInView
              ? {
                  scale: [0.9, 1.1, 0.9],
                  opacity: 0.8,
                }
              : {}
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#814BFF] opacity-40 blur-[60px]"
        ></motion.div>

        {/* Rotating Ring */}
        <motion.div
          initial={{ rotate: 0, opacity: 0 }}
          animate={
            isInView
              ? {
                  rotate: 360,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 flex justify-center items-center"
        >
          <div className="w-[80%] h-[80%] rounded-full border border-white/20"></div>
        </motion.div>
      </div>
    </div>
  );
}
