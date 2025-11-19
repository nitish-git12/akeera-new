"use client";

import AnimatedBadge from "./AnimatedBadge";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function HowItWorksIntro() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"]
  });

  // === Logo definitions ===
  const logos = [
    { src: "/logo_animation/logo1.svg", size: 200, startX: -300, startY: 100, flyOutX: -600, flyOutY: -200, finalX: -175, finalY: 30, rotateZ: 6, z: 1 },
    { src: "/logo_animation/logo2.svg", size: 210, startX: -250, startY: 150, flyOutX: -500, flyOutY: -150, finalX: -97, finalY: 11, rotateZ: -6, z: 2 },
    { src: "/logo_animation/logo3.svg", size: 240, startX: 0, startY: 200, flyOutX: 0, flyOutY: -250, finalX: 0, finalY: 0, rotateZ: 0, z: 5 }, // MAIN BLUE LOGO ❤️
    { src: "/logo_animation/logo4.svg", size: 210, startX: 250, startY: 150, flyOutX: 500, flyOutY: -150, finalX: 97, finalY: 11, rotateZ: 6, z: 2 },
    { src: "/logo_animation/logo5.svg", size: 200, startX: 300, startY: 100, flyOutX: 600, flyOutY: -200, finalX: 175, finalY: 30, rotateZ: 6, z: 1 },
  ];

  const steps = [1, 2, 3, 4, 5, 6];
  const slides = [
    {
      id: 1,
      chapter: "Chapter 1:",
      title: "Start Smart, Start with OPD",
      desc: `We begin by assessing your current health infrastructure. "Start with OPD" — because patient experience begins here.`,
      logo: "/logo_animation/OPD_QR.svg",
    },
    {
      id: 2,
      chapter: "Chapter 2:",
      title: "Digitize & Integrate",
      desc: "Unify all departments under one seamless workflow, reducing manual errors and delays.",
      logo: "/logo_animation/Lab_QR.svg",
    },
    {
      id: 3,
      chapter: "Chapter 3:",
      title: "Optimize Operations",
      desc: "AI insights streamline operations and enhance efficiency across the hospital.",
      logo: "/logo_animation/IPD_QR.svg",
    },
    {
      id: 4,
      chapter: "Chapter 4:",
      title: "Revenue & Billing",
      desc: "Cleaner billing, faster claims — revenue cycles improve with automation.",
      logo: "/logo_animation/Bill_QR.svg",
    },
    {
      id: 5,
      chapter: "Chapter 5:",
      title: "Audit & Compliance",
      desc: "Built-in traceability and consent flows to keep your hospital audit-ready.",
      logo: "/logo_animation/logo5.svg",
    },
    {
      id: 6,
      chapter: "Chapter 6:",
      title: "Scale & Grow",
      desc: "Roadmap and analytics to help plan expansion and capacity.",
      logo: "/logo_animation/logo6.svg",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const paginationRef = useRef(null);
  const progressPercent = (activeStep / (steps.length - 1)) * 100;

  const handleSlideChange = (swiper) => {
    const centerIdx = swiper.realIndex ?? swiper.activeIndex ?? 0;
    setActiveStep(centerIdx % slides.length);
  };

  // === Slider transition AFTER main logo enlarges ===
  const sliderOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const sliderY = useTransform(scrollYProgress, [0.55, 0.75], [120, 0]);

  return (
    <div className="relative  w-full bg-[#f8f8f8] py-[40px] sm:py-[60px] lg:py-[80px]">
      <div ref={sectionRef} className="relative">
        <div className=" flex flex-col justify-center items-center px-4">

          {/* HEADER */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
            <AnimatedBadge text="Built for Scale" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-5 sm:mt-6 lg:mt-7 mb-3 sm:mb-4 lg:mb-6 px-4">How It Works?</h2>
            <p className="text-base sm:text-lg lg:text-[20px] font-[400] text-[#000] max-w-xl mx-auto leading-relaxed px-4">
              Most systems automate. MedQR optimizes. Advises. Transforms. Each module isn't just a feature. It's a chapter in your hospital's growth story:
            </p>
          </div>

          {/* ===================== LOGO ANIMATION ==================== */}
         <div className="relative w-full"> 
  {/* Sticky area: occupies viewport while animation plays */}
  <div className="sticky top-0 z-40 h-screen pointer-events-none flex items-center justify-center">
    {/* Keep the inner motion.div height fixed (do NOT animate container height to 0) */}
    <motion.div
      className="relative flex items-center justify-center w-full overflow-visible"
      style={{
        // FIXED visible container height so it never collapses
        height: "320px", // tweak if you need bigger/smaller visual area
        // fade out when animation completes (logos themselves handle transform/scale)
        opacity: useTransform(scrollYProgress, [0, 0.55, 0.65], [1, 1, 0]),
      }}
    >
      {(() => {
        const MAIN = 2; // main blue logo index

        return logos.map((logo, i) => {
          const isMain = i === MAIN;

          // keep your existing timeline constants intact
          const mainAppearStart = 0.05;
          const mainAppearEnd = 0.15;
          const othersSlideStart = 0.1;
          const othersSlideEnd = 0.25;
          const fanSpread = 0.4;
          const fadeStart = 0.4;
          const fadeEnd = 0.5;
          const mainGrowStart = 0.45;
          const mainGrowEnd = 0.55;

          // responsive sizing logic unchanged
          let baseSize = logo.size;
          let responsiveFinalX = logo.finalX;
          let responsiveFinalY = logo.finalY;
          if (typeof window !== "undefined") {
            const width = window.innerWidth;
            if (width < 768) {
              baseSize = logo.size * 0.6;
              responsiveFinalX = logo.finalX * 0.5;
              responsiveFinalY = logo.finalY * 0.6;
            } else if (width < 1024) {
              baseSize = logo.size * 0.8;
              responsiveFinalX = logo.finalX * 0.7;
              responsiveFinalY = logo.finalY * 0.8;
            }
          }

          return (
            <motion.img
              key={i}
              src={logo.src}
              alt="logo"
              className="absolute pointer-events-none"
              style={{
                width: baseSize,
                height: baseSize,
                zIndex: logo.z,
                x: useTransform(
                  scrollYProgress,
                  isMain
                    ? [0, mainAppearStart, mainAppearEnd]
                    : [0, othersSlideStart, othersSlideEnd, fanSpread, fadeEnd],
                  isMain
                    ? [0, 0, 0]
                    : [0, 0, 0, responsiveFinalX, responsiveFinalX]
                ),
                y: useTransform(
                  scrollYProgress,
                  isMain
                    ? [0, mainAppearStart, mainAppearEnd]
                    : [0, othersSlideStart, othersSlideEnd, fanSpread, fadeEnd],
                  isMain ? [0, 0, 0] : [0, 0, 0, responsiveFinalY, responsiveFinalY]
                ),
                // MAIN: blue logo should be visible immediately — ensure opacity starts at 1
                opacity: useTransform(
                  scrollYProgress,
                  isMain
                    ? [0, mainAppearStart, mainAppearEnd, mainGrowStart, mainGrowEnd]
                    : [0, othersSlideStart, othersSlideEnd, fadeStart, fadeEnd],
                  isMain ? [1, 1, 1, 1, 0] : [0, 0, 1, 1, 0]
                ),
                scale: useTransform(
                  scrollYProgress,
                  isMain
                    ? [mainAppearStart, mainAppearEnd, mainGrowStart, mainGrowEnd]
                    : [othersSlideStart, othersSlideEnd, fanSpread],
                  isMain ? [0.9, 1, 1.15, 1.3] : [0.7, 0.9, 1]
                ),
                rotateZ: useTransform(
                  scrollYProgress,
                  isMain ? [0, 1] : [othersSlideEnd, fanSpread],
                  isMain ? [0, 0] : [0, logo.rotateZ]
                ),
              }}
            />
          );
        });
      })()}
    </motion.div>
  </div>


  
</div>



          {/* ===================== SLIDER (appears AFTER main logo enlarges) ===================== */}
          <motion.section
            style={{ opacity: sliderOpacity, y: sliderY }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col items-center bg-[#f8f8f8] py-12 sm:py-16 lg:py-24 overflow-hidden"
          >
            {/* STEP INDICATOR */}
            <div className="relative w-full flex justify-center mb-12 sm:mb-16 lg:mb-20 px-4">
              <div className="relative w-full max-w-[280px] sm:max-w-[480px] lg:max-w-[720px] flex items-center justify-center">
                <div className="absolute left-0 right-0 top-3 sm:top-4 h-[3px] sm:h-[4px] rounded-full bg-[rgba(0,0,0,0.04)]" />
                <div aria-hidden className="absolute left-0 top-3 sm:top-4 h-[3px] sm:h-[4px] rounded-full overflow-hidden" style={{ width: `${progressPercent}%` }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.45, ease: [0.22, 0.8, 0.3, 1] }} className="h-full bg-[linear-gradient(90deg,#8b5cf6,#ec4899,#f59e0b)]" />
                </div>

                <div className="relative z-10 flex justify-between w-full px-2 sm:px-4 lg:px-6">
                  {steps.map((n, i) => {
                    const isActive = i === activeStep;
                    return (
                      <div key={n} className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white shadow-[0_8px_20px_rgba(139,92,246,0.18)]"
                              : "bg-[#E5E7EB] text-[#6B7280]"
                          }`}
                        >
                          {n}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SLIDER */}
            <div className="relative w-full flex justify-center">
              <div className="relative w-full max-w-[1100px] px-4 overflow-visible">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true, el: ".custom-pagination" }}
                  slidesPerView={"auto"}
                  centeredSlides
                  loop
                  grabCursor
                  spaceBetween={30}
                  onSlideChange={handleSlideChange}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: "auto",
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: "auto",
                      spaceBetween: 30,
                    },
                  }}
                  className="pb-16 overflow-visible"
                >
                  {slides.map((slide) => (
                    <SwiperSlide
                      key={slide.id}
                      className="!w-[320px] sm:!w-[400px] lg:!w-[455px] flex justify-center items-center relative transition-all duration-500 ease-[cubic-bezier(.22,.9,.3,1)]"
                    >
                      {({ isActive }) => (
                        <motion.div
                          className={`slide-card-wrapper ${isActive ? "is-active" : "is-inactive"}`}
                          animate={{
                            opacity: isActive ? 1 : 0.6,
                            scale: isActive ? 1 : 0.92,
                            y: isActive ? 0 : 20,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 16,
                          }}
                        >
                          <div className={`card-inner ${isActive ? "card-active" : "card-side"}`}>
                            <p className={`${isActive ? "text-base sm:text-[18px]" : "text-sm sm:text-[16px]"} text-[#14b8a6] font-semibold mb-2`}>
                              {slide.chapter}
                            </p>
                            <h3 className={`${isActive ? "text-xl sm:text-2xl lg:text-[32px]" : "text-lg sm:text-xl lg:text-[26px]"} font-bold mb-3 sm:mb-4 leading-snug`}>
                              {slide.title}
                            </h3>
                            <p className={`${isActive ? "text-sm sm:text-base lg:text-[17px]" : "text-xs sm:text-sm lg:text-[15px]"} text-gray-700 leading-relaxed mb-6 sm:mb-8 line-clamp-3`}>
                              {slide.desc}
                            </p>
                            <div className="flex justify-between items-center">
                              <button
                                className={`border border-[#1E40AF] text-[#1E40AF] ${
                                  isActive ? "px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm" : "px-3 sm:px-5 py-1.5 sm:py-2 text-xs"
                                } rounded-lg hover:bg-blue-50 transition font-medium flex items-center gap-2`}
                              >
                                Learn More →
                              </button>
                              <img
                                src={slide.logo}
                                alt={`${slide.title} logo`}
                                className={`object-contain opacity-95 ${isActive ? "w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[56px] lg:h-[56px]" : "w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] lg:w-[46px] lg:h-[46px]"}`}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="custom-pagination flex items-center justify-center mt-8" ref={paginationRef} />
              </div>
            </div>

            <style jsx global>{`
              .swiper,
              .swiper-wrapper,
              .swiper-slide {
                overflow: visible !important;
              }

              .swiper {
                padding-bottom: 80px;
              }

              .swiper-slide {
                flex-shrink: 0 !important;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              @media (max-width: 640px) {
                .swiper-slide {
                  height: 240px !important;
                }
              }

              @media (min-width: 641px) and (max-width: 1023px) {
                .swiper-slide {
                  height: 260px !important;
                }
              }

              @media (min-width: 1024px) {
                .swiper-slide {
                  height: 280px !important;
                }
              }

              .slide-card-wrapper {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
              }

              .card-inner {
                background: #fff;
                border-radius: 24px;
                border: 1px solid #f0f0f0;
                overflow: hidden;
                box-sizing: border-box;
                transition: all 0.4s ease;
              }

              @media (min-width: 1024px) {
                .card-inner {
                  border-radius: 36px;
                }
              }

              .card-side {
                width: 100%;
                height: 100%;
                padding: 1.5rem;
                box-shadow: none;
                z-index: 10;
              }

              @media (min-width: 640px) {
                .card-side {
                  padding: 1.75rem;
                }
              }

              @media (min-width: 1024px) {
                .card-side {
                  padding: 2rem;
                }
              }

              .card-active {
                width: 100%;
                max-width: 90vw;
                height: auto;
                min-height: 320px;
                padding: 2rem;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                z-index: 30;
              }

              @media (min-width: 640px) {
                .card-active {
                  max-width: 520px;
                  min-height: 340px;
                  padding: 2.25rem;
                }
              }

              @media (min-width: 1024px) {
                .card-active {
                  max-width: 660px;
                  min-height: 400px;
                  padding: 2.5rem;
                  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.08);
                }
              }

              .swiper-slide-prev,
              .swiper-slide-next {
                z-index: 5;
                opacity: 0.6;
                transform: scale(0.92);
                transition: transform 0.4s ease, opacity 0.4s ease;
              }

              .swiper-slide-active {
                z-index: 20;
              }

              .custom-pagination {
                gap: 12px;
              }

              .custom-pagination .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
                background: #d1d5db;
                opacity: 1;
                border-radius: 50%;
                transition: width 0.28s ease, background 0.28s ease;
              }

              @media (min-width: 640px) {
                .custom-pagination .swiper-pagination-bullet {
                  width: 10px;
                  height: 10px;
                }
              }

              .custom-pagination .swiper-pagination-bullet-active {
                width: 24px;
                border-radius: 10px;
                background: linear-gradient(90deg, #8b5cf6, #ec4899);
              }

              @media (min-width: 640px) {
                .custom-pagination .swiper-pagination-bullet-active {
                  width: 28px;
                }
              }
            `}</style>

          </motion.section>
        </div>
      </div>
    </div>
  );
}