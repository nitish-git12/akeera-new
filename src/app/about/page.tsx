'use client';
import Image from "next/image";
import {motion} from 'framer-motion';
import ScrollReveal, { Typewriter } from '../../components/ScrollReveal';
import AnimatedBadge from '../../components/AnimatedBadge';


export default function AboutPage() {
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
          <div className="space-y-8">
            {/* Human First */}
            <div className="flex gap-6 items-start pb-8 border-b border-gray-700">
              <div className="flex-shrink-0">
                <div className="w-12 h-12  flex items-center justify-center">
                  <Image src='/human.svg' width={50} height={52} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-[24px] font-bold mb-3 bg-clip-text text-transparent" style={{
  backgroundImage: "linear-gradient(90deg, #2DB9B1 0%, #006FFF 100% 100%)",
}}>
                  Human First
                </h3>
                <p className="text-[16px] text-white">
                  Behind every lab report or hospital visit is a life. We never forget that.
                </p>
              </div>
            </div>

            {/* Innovation with Purpose */}
            <div className="flex gap-6 items-start pb-8 border-b border-gray-700">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                   <Image src='/innovation.svg' width={50} height={48} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-[24px] font-bold text-orange-500 mb-3">
                  Innovation with Purpose
                </h3>
                <p className="text-[16px] text-white md:text-lg">
                  We create solutions that solve real-world problems, not just add features.
                </p>
              </div>
            </div>

            {/* Trust & Security */}
            <div className="flex gap-6 items-start pb-8 border-b border-gray-700">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image src='/trust.svg' width={50} height={63} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-3">
                  Trust & Security
                </h3>
                <p className="text-gray-300 text-base md:text-lg">
                  Data is sacred — we protect it with the highest standards.
                </p>
              </div>
            </div>

            {/* Relentless Simplicity */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image src='/rentless.svg' width={50} height={50} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-3">
                  Relentless Simplicity
                </h3>
                <p className="text-gray-300 text-base md:text-lg">
                  If it's not easy, it's not Akeera.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image with Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image Container */}
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop" 
                  alt="Healthcare professional" 
                  className="w-full h-[600px] object-cover"
                />
              </div>

              {/* Floating Card - Top Right */}
              <div className="absolute -top-8 -right-8 w-48 h-32 bg-gray-200 rounded-2xl shadow-xl"></div>

              {/* Floating Card - Top Left (partially visible) */}
              <div className="absolute top-16 -left-16 w-44 h-28 bg-gray-300 rounded-2xl shadow-xl"></div>

              {/* Floating Card - Bottom Left */}
              <div className="absolute -bottom-8 left-8 w-52 h-36 bg-gray-200 rounded-2xl shadow-xl"></div>

              {/* Floating Card - Bottom Right */}
              <div className="absolute -bottom-12 -right-12 w-56 h-40 bg-gray-300 rounded-2xl shadow-xl"></div>
            </div>
          </div>

          {/* Mobile/Tablet Image */}
          <div className="relative lg:hidden">
            <div className="rounded-2xl overflow-hidden max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop" 
                alt="Healthcare professional" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      
    </section>
        </div>
        </div>
        </div>
    );
    }