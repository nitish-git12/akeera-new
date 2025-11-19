"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

const features = [
  { title: "Faster Operations, Fewer Errors", content: "Automate repetitive tasks, reduce human error, and keep operations running seamlessly across all departments." },
  { title: "Everything in One Platform", content: "Centralized patient management, billing, labs, and reports — all in one connected system." },
  { title: "Better Team Coordination", content: "Keep doctors, nurses, and admin staff aligned through connected workflows and instant updates." },
  { title: "Smarter Financial Control", content: "Gain real-time visibility into billing, revenue, and expenses with powerful analytics." },
  { title: "Easy to Use, Easy to Scale", content: "Simple UI that grows with your hospital — from one clinic to a chain of branches." },
  { title: "Future-Ready Infrastructure", content: "Cloud-first, AI-assisted platform built to evolve with your needs and regulatory updates." },
];

export default function FeaturesAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <motion.section
  ref={ref}
  initial={{ opacity: 0, y: 80 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, ease: [0.22, 0.8, 0.3, 1] }}
  className="relative w-full flex flex-col lg:flex-row items-start justify-between gap-16 overflow-hidden"
>
  {/* Left Column */}
  <div className="w-full lg:w-[50%] max-w-[600px]">
    {features.map((item, index) => {
      const isOpen = activeIndex === index;
      return (
        <motion.div
  key={index}
  className="border-b border-gray-300 py-5 cursor-pointer group"
onMouseEnter={() => setHoverIndex(index)}
onMouseLeave={() => setHoverIndex(null)}
  onClick={() => setActiveIndex(isOpen ? null : index)}
>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {/* STAR – now also animates on hover without opening */}
            <motion.img
  src="/Star.svg"
  alt="Star Icon"
  className="w-5 h-5"
  animate={
    hoverIndex === index
      ? { scale: [1, 1.3, 1], rotate: [0, 12, 0] }
      : { scale: 1, rotate: 0 }
  }
  transition={{
    duration: 0.4,
    ease: "easeInOut",
  }}
/>

              <span
                className={`text-[#000] tracking-[0.6px] text-[22px]  transition-colors duration-300 ${
                  isOpen ? "font-bold" : "group-hover:text-[#000]"
                }`}
              >
                {item.title}
              </span>
            </div>

            {/* ARROW */}
            <motion.img
              src="/down-arow.svg"
              alt="Arrow Icon"
              className="w-5 h-5"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          {/* CONTENT */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
               <p className="mt-3 text-gray-600 leading-relaxed text-[16px] pl-8">
                  {item.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    })}
  </div>

  {/* 🔥 Right Column — FIXED HEIGHT + FIXED POSITION */}
  <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 0.8, 0.3, 1] }}
  className="relative w-full lg:w-[50%] flex justify-center"
>
  <div className="sticky top-24 w-full max-w-[620px]">
    <Image
      src="/Doctor.png"
      alt="Doctor AI Illustration"
      width={613}
      height={467}
      className="w-full h-auto object-cover"
      priority
    />
  </div>
</motion.div>
</motion.section>

  );
}
