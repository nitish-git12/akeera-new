'use client';
import Image from "next/image";
import {motion} from 'framer-motion';
import ScrollReveal, { Typewriter } from '../../components/ScrollReveal';
import AnimatedBadge from '../../components/AnimatedBadge';
import StatsSection from '../../components/about-us/StatsSection';
import AnimatedValuesSection from '../../components/about-us/AnimatedValuesSection';
import { useState, useEffect, useRef } from 'react';
import TeamSection from '../../components/about-us/TeamShowcase';
import BottomCard from '../../components/BottomCard';

export default function AboutPage() {
   const [hasRevealed, setHasRevealed] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Start the reveal animation
          setTimeout(() => {
            setHasRevealed(true);
          }, 300);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
    return (
        <div className="">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="text-center w-full">
             <div className="text-center max-w-4xl mx-auto pt-20 pb-5">
              <AnimatedBadge 
              text="About us" 
              
            />
                      <h2 className="text-[54px] leading-[120%] font-bold mt-7 mb-4 sm:mb-6">
                        Transforming Healthcare, <br />One Hospital at a Time.
                      </h2>
                       <motion.p initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }} className="text-[16px] font-[400] text-[#000] mb-6 sm:mb-8">
           At Akeera, we believe healthcare should be faster, safer, and more human. We’re building smart digital solutions that help hospitals, labs, and caregivers save time, reduce errors, and focus on what matters most — People.
          </motion.p>
          </div>
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.2 }}
>
  <Image
    src="/about1.svg"
    alt="About us"
    width={0}
    height={500}
   
    className="w-full h-auto"
  />
</motion.div>

<div className="text-center max-w-4xl mx-auto pt-30 pb-5">
              <AnimatedBadge 
              text="Our story" 
              
            />
                      <h2 className="text-[54px] leading-[120%] font-bold mt-7 mb-4 sm:mb-6">
                       Journey to Humanize Healthcare
                      </h2>
                       <motion.p initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }} className="text-[16px] font-[400] text-[#000] mb-6 sm:mb-8">
          Healthcare is advancing rapidly, but the systems supporting it often lag behind. Patients wait too long. Labs struggle with inefficiencies. Doctors juggle endless paperwork instead of spending time with patients.
          </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }} className="text-[16px] font-[400] text-[#000] mb-6 sm:mb-8">
          We saw this gap firsthand and knew there had to be a better way.That’s why we created Akeera — to design simple, secure, and intuitive solutions that take the complexity out of healthcare and give time back to people.
          </motion.p>
          </div>
          <div className="flex flex-col md:flex-row  gap-12 mt-20 mb-30">
  {/* Left: Circles Card */}
  <div className="flex-1 flex justify-center items-center w-full md:w-1/2">
   <div
  className="p-12 w-full flex justify-center items-center"
  style={{
    background:
      "linear-gradient(134.68deg, #0A0D14 6.43%, #3D4F7A 96.33%)",
    borderRadius: "50px 50px 0px 50px",
  }}
>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* People Circle - Faded bottom */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="49" 
                  fill="none" 
                  stroke="url(#gradient1)" 
                  strokeWidth="0.4"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="1" />
                    <stop offset="70%" stopColor="rgb(255,255,255)" stopOpacity="1" />
                    <stop offset="90%" stopColor="rgb(255,255,255)" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <h2 className="text-[20px] font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent relative z-10">
                People
              </h2>
            </div>
          </div>

          {/* Products Circle - Faded top */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="49" 
                  fill="none" 
                  stroke="url(#gradient2)" 
                  strokeWidth="0.5"
                />
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="10%" stopColor="rgb(255,255,255)" stopOpacity="0" />
                    <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="1" />
                    <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
              <h2 className="text-[20px] font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent relative z-10">
                Products
              </h2>
            </div>
          </div>

          {/* Performance Circle - Faded bottom */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="49" 
                  fill="none" 
                  stroke="url(#gradient3)" 
                  strokeWidth="0.4"
                />
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="1" />
                    <stop offset="70%" stopColor="rgb(255,255,255)" stopOpacity="1" />
                    <stop offset="90%" stopColor="rgb(255,255,255)" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <h2 className="text-[20px] font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent relative z-10">
                Performance
              </h2>
            </div>
          </div>
        </div>
</div>

  </div>
  {/* Right: Mission & Vision */}
  <div className="flex-1  w-full md:w-1/2 text-left">
    
     <AnimatedBadge 
              text="Our Mission & Vision" 
              
            />
                      <h2 className="text-[48px] leading-[120%] font-bold mt-8 mb-5 sm:mb-6">
                       Today & Tomorrow
                      </h2>
     <motion.p initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }} className="text-[20px]">
      <span className="font-bold">Mission:</span> To simplify healthcare operations with technology that puts people first.
    </motion.p>
    <motion.p initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}  className="text-[20px] mt-10">
      <span className="font-bold">Vision:</span> A world where every patient receives fast, safe care, every provider works seamlessly, and every life benefits from humanized healthcare.
    </motion.p>
  </div>
</div>
        </div>
        </div>
        <div className="w-full " style={{
            background:'linear-gradient(134.68deg, #0A0D14 6.43%, #3D4F7A 96.33%)'
        }}>
        <div className="max-w-6xl mx-auto px-4 md:px-0 py-20">
        <div className="text-center w-full">
             <div className="text-center max-w-4xl mx-auto pt-5 pb-5">
                     <AnimatedBadge 
              text="differentiator" 
              
            />
                <h2 className="text-[48px] leading-[120%] text-white font-bold mt-8 mb-5 sm:mb-6">
                      What We Stand For
                      </h2>
                </div>

                </div>
                 <section className="w-full">
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Values List */}
         <AnimatedValuesSection />

          {/* Right Side - Image with Floating Cards */}
       <div ref={sectionRef} className="relative hidden lg:block">
      <div className="relative">
        {/* Main Image Container - Hidden initially, revealed when boxes move */}
        <div 
          className={`rounded-2xl overflow-hidden transition-all duration-1000 ${
            hasRevealed 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
          style={{
            transitionDelay: '400ms',
          }}
        >
          <Image 
            src="/about-us.svg" 
            alt="Healthcare professional" 
            width={0}
            height={350}
            className="w-full object-cover"
          />
        </div>

        {/* Covering Box that splits into 4 parts */}
        
        {/* Top Right Box */}
        <div 
          className={`absolute bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 rounded-2xl shadow-2xl backdrop-blur-sm transition-all duration-[1800ms] ease-out ${
            hasRevealed ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            top: hasRevealed ? '-100px' : '0',
            right: hasRevealed ? '-100px' : '0',
            width: hasRevealed ? '192px' : '50%',
            height: hasRevealed ? '128px' : '50%',
            transitionDelay: '0ms',
            animation: hasRevealed ? 'floatTopRight 8s ease-in-out infinite' : 'none',
            animationDelay: '1.8s',
          }}
        ></div>

        {/* Top Left Box */}
        <div 
          className={`absolute bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-100 rounded-2xl shadow-2xl backdrop-blur-sm transition-all duration-[1800ms] ease-out ${
            hasRevealed ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            top: hasRevealed ? '64px' : '0',
            left: hasRevealed ? '-120px' : '0',
            width: hasRevealed ? '176px' : '50%',
            height: hasRevealed ? '112px' : '50%',
            transitionDelay: '200ms',
            animation: hasRevealed ? 'floatTopLeft 9s ease-in-out infinite' : 'none',
            animationDelay: '2s',
          }}
        ></div>

        {/* Bottom Left Box */}
        <div 
          className={`absolute bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100 rounded-2xl shadow-2xl backdrop-blur-sm transition-all duration-[1800ms] ease-out ${
            hasRevealed ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            bottom: hasRevealed ? '-32px' : '0',
            left: hasRevealed ? '32px' : '0',
            width: hasRevealed ? '208px' : '50%',
            height: hasRevealed ? '144px' : '50%',
            transitionDelay: '400ms',
            animation: hasRevealed ? 'floatBottomLeft 10s ease-in-out infinite' : 'none',
            animationDelay: '2.2s',
          }}
        ></div>

        {/* Bottom Right Box */}
        <div 
          className={`absolute bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 rounded-2xl shadow-2xl backdrop-blur-sm transition-all duration-[1800ms] ease-out ${
            hasRevealed ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            bottom: hasRevealed ? '-48px' : '0',
            right: hasRevealed ? '-48px' : '0',
            width: hasRevealed ? '224px' : '50%',
            height: hasRevealed ? '160px' : '50%',
            transitionDelay: '600ms',
            animation: hasRevealed ? 'floatBottomRight 8.5s ease-in-out infinite' : 'none',
            animationDelay: '2.4s',
          }}
        ></div>

        {/* After reveal, show the actual floating cards */}
        {hasRevealed && (
          <>
            {/* Floating Card - Top Right */}
            <div 
              className="absolute -top-8 -right-8 w-48 h-32 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 rounded-2xl shadow-2xl backdrop-blur-sm opacity-0"
              style={{
                animation: 'fadeInFloat 1s ease-out forwards, floatTopRight 8s ease-in-out infinite',
                animationDelay: '1.8s, 3s',
              }}
            ></div>

            {/* Floating Card - Top Left */}
            <div 
              className="absolute top-16 -left-16 w-44 h-28 bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-100 rounded-2xl shadow-2xl backdrop-blur-sm opacity-0"
              style={{
                animation: 'fadeInFloat 1s ease-out forwards, floatTopLeft 9s ease-in-out infinite',
                animationDelay: '2s, 3.2s',
              }}
            ></div>

            {/* Floating Card - Bottom Left */}
            <div 
              className="absolute -bottom-8 left-8 w-52 h-36 bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100 rounded-2xl shadow-2xl backdrop-blur-sm opacity-0"
              style={{
                animation: 'fadeInFloat 1s ease-out forwards, floatBottomLeft 10s ease-in-out infinite',
                animationDelay: '2.2s, 3.4s',
              }}
            ></div>

            {/* Floating Card - Bottom Right */}
            <div 
              className="absolute -bottom-12 -right-12 w-56 h-40 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 rounded-2xl shadow-2xl backdrop-blur-sm opacity-0"
              style={{
                animation: 'fadeInFloat 1s ease-out forwards, floatBottomRight 8.5s ease-in-out infinite',
                animationDelay: '2.4s, 3.6s',
              }}
            ></div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInFloat {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.9;
          }
        }

        @keyframes floatTopRight {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          15% {
            transform: translate(15px, -20px) rotate(5deg) scale(1.08);
          }
          30% {
            transform: translate(-8px, -35px) rotate(-3deg) scale(1.05);
          }
          45% {
            transform: translate(20px, -15px) rotate(6deg) scale(1.12);
          }
          60% {
            transform: translate(-5px, -30px) rotate(-2deg) scale(1.06);
          }
          75% {
            transform: translate(18px, -25px) rotate(4deg) scale(1.10);
          }
        }

        @keyframes floatTopLeft {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          20% {
            transform: translate(-18px, 25px) rotate(-6deg) scale(1.10);
          }
          35% {
            transform: translate(-30px, 12px) rotate(4deg) scale(1.07);
          }
          50% {
            transform: translate(-12px, 32px) rotate(-5deg) scale(1.12);
          }
          70% {
            transform: translate(-25px, 18px) rotate(3deg) scale(1.08);
          }
          85% {
            transform: translate(-15px, 28px) rotate(-4deg) scale(1.11);
          }
        }

        @keyframes floatBottomLeft {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          18% {
            transform: translate(-20px, -15px) rotate(4deg) scale(1.09);
          }
          35% {
            transform: translate(12px, -28px) rotate(-5deg) scale(1.13);
          }
          52% {
            transform: translate(-15px, -22px) rotate(6deg) scale(1.08);
          }
          68% {
            transform: translate(8px, -32px) rotate(-3deg) scale(1.11);
          }
          85% {
            transform: translate(-18px, -18px) rotate(5deg) scale(1.10);
          }
        }

        @keyframes floatBottomRight {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          22% {
            transform: translate(18px, 28px) rotate(-7deg) scale(1.12);
          }
          40% {
            transform: translate(32px, 12px) rotate(5deg) scale(1.08);
          }
          58% {
            transform: translate(12px, 35px) rotate(-4deg) scale(1.14);
          }
          72% {
            transform: translate(28px, 18px) rotate(6deg) scale(1.09);
          }
          88% {
            transform: translate(15px, 30px) rotate(-3deg) scale(1.13);
          }
        }
      `}</style>
    </div>

          {/* Mobile/Tablet Image */}
          <div className="relative lg:hidden">
            <div className="rounded-2xl overflow-hidden max-w-md mx-auto">
              <Image 
            src="/about-us.svg" 
            alt="Healthcare professional" 
            width={0}
            height={350}
            className="w-full object-cover"
          />
            </div>
          </div>
        </div>
      <StatsSection />
    </section>
        </div>
          
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-0 py-20">
        <div className="text-center w-full">
             <div className="text-center max-w-4xl mx-auto pt-5 pb-5">
                     <AnimatedBadge 
              text="Meet the team" 
              
            />
                <h2 className="text-[48px] leading-[120%] font-bold mt-8 mb-5 sm:mb-6">
                     Minds Driving Healthcare Forward
                      </h2>
                      <motion.p initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }} className="text-[16px] tracking-[0.7px]"> A team of healthcare experts, technologists, and dreamers who believe that <br />innovation can save lives.</motion.p>
                </div>
                <TeamSection />
                </div>
                </div>
                 <BottomCard 
                    subhead="Be part of it."
                    heading="The future of healthcare is being written today."
                    paragraph={
                        <>
                        MedQR isn’t just software it’s your growth partner. Automate,<br /> streamline, and scale with confidence.
                        </>
                    }
                    
                   
                    CTA1="Book a Demo"
                    CTA2="Contact Us"
                    />
        </div>
    );
    }