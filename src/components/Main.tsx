'use client';
import Image from "next/image";
import {motion} from 'framer-motion';
import ScrollReveal, { Typewriter } from '../components/ScrollReveal';
import ExpandingBackgroundSection from '../components/ExpandingSection';

import AnimatedBadge from '../components/AnimatedBadge';
import HowItWorks from "./HowItWorks";
import FeaturesAccordion from "./FeaturesAccordion";
import TestimonialsSection from "./TestimonialsSection";
import BottomCard from "./BottomCard";

const Main = () => {
     const fadeUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  
  return (
    <div className=" ">
        <div className="relative w-full overflow-hidden">
    <div className="relative z-10 items-center justify-center h-full text-gray-800">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl mt-20 mb-20 px-6">
       
          {/* Left Content */}
          <div className="flex hero flex-col items-start justify-center w-full md:max-w-2xl">
           
            <h1 className="hero-typo leading-tight">
             The Intelligence Behind Smart Hospitals.
            </h1>
           
            
            <motion.p initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }} className="text-base font-20 text-gray-600 max-w-xl">
              Empower healthcare providers with cutting-edge technology that enhances patient care and streamlines operations.
            </motion.p>
            
            <ScrollReveal direction="fadeIn" delay={0.9}>
          <div style={outerWrapper}>
      <div style={backgroundLayer}></div>
      <button style={buttonStyle} onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}>Book a Demo</button>
    </div>
            
            <div className="flex items-center gap-3 sm:gap-6 pt-4 overflow-x-auto">
            
               <Image src="/ABDM 1.svg" alt="Ayushman Bharat" width={48} height={48} style={{ objectFit: 'contain' }} />
              <Image src="/divider_2.svg" alt="Divider" width={2} height={10} className="mx-0.5" />
              <Image src="/NABH 1.svg" alt="NABH" width={48} height={48} style={{ objectFit: 'contain' }} />
              <Image src="/divider_2.svg" alt="Divider" width={2} height={10} className="mx-0.5" />
              <Image src="/Amazon.svg" alt="AWS" width={48} height={48} style={{ objectFit: 'contain' }} />
              <Image src="/divider_2.svg" alt="Divider" width={2} height={10} className="mx-0.5" />
              <Image src="/Google.svg" alt="Google Cloud" width={48} height={48} style={{ objectFit: 'contain' }} />
              <Image src="/divider_2.svg" alt="Divider" width={2} height={10} className="mx-0.5" />
              <Image src="/iso.svg" alt="ISO" width={48} height={48} style={{ objectFit: 'contain' }} />
             
             
            </div>
            </ScrollReveal>
          </div>

          {/* Right Illustration */}
          
          <div className="flex-1 flex items-center justify-center w-full">
            
            
                
                  <Image
              src="/Hospital_Image.png"
              alt="Hero"
              width={432}
              height={430}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
              style={{ objectFit: 'contain' }}
            />
                
               
             
          
          </div>
        </div>
        </div>
 </div>
</div>
      {/* Hospital Logos Section */}
     <div className="relative w-full overflow-hidden">
  <div className="w-full max-w-6xl mx-auto">
    <section style={sectionStyle}>
      <p style={{ ...titleStyle, whiteSpace: "nowrap" }}>Trusted by :</p>

      <div style={{ ...logosRow, overflow: "hidden", position: "relative" }}>
        <div className="marquee-track">

          <Image src="/yash-hospital.svg" alt="Yash Hospital" width={232} height={39} />
          <Image src="/hospital-logo.svg" alt="Hospital Logo 1" width={96} height={71} />
          <Image src="/yash-hospital.svg" alt="Yash Hospital" width={232} height={39} />
          <Image src="/hospital-logo.svg" alt="Hospital Logo 1" width={96} height={71} />

          {/* Duplicate for infinite loop */}
          <Image src="/yash-hospital.svg" alt="Yash Hospital" width={232} height={39} />
          <Image src="/hospital-logo.svg" alt="Hospital Logo 1" width={96} height={71} />
          <Image src="/yash-hospital.svg" alt="Yash Hospital" width={232} height={39} />
          <Image src="/hospital-logo.svg" alt="Hospital Logo 1" width={96} height={71} />

        </div>
      </div>
    </section>
  </div>
</div>


      {/* What is MedQR Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center max-w-4xl mx-auto">
           
      
          <AnimatedBadge 
  text="HOSPITALS GROWTH MANUAL" 
  
/>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-7 mb-4 sm:mb-6">
            What Is MedQR?
          </h2>
          
          <motion.p initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }} className="text-[20px] font-[400] text-[#000] mb-6 sm:mb-8">
            MedQR is a complete hospital management system built for the realities of Indian healthcare. It's&nbsp;more than just software — it's your toolkit for smoother operations, stronger finances, and&nbsp;scalable growth. Whether you're going digital for the first time or upgrading to a smart&nbsp;hospital,&nbsp;MedQR grows with you.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 text-gray-700 font-bold text-lg sm:text-xl tracking-wider">
           <Typewriter 
  text="SECURE &nbsp; SEAMLESS &nbsp; SMART" 
  delay={0.9}
  speed={0.03}
  className="font-16 font-bold"
  
/>
           
           
          </div>
        </div>
      </div>
      <ExpandingBackgroundSection />
      <section className="w-full py-[80px] flex flex-col items-center justify-start">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 w-full max-w-6xl px-2 MuiBox-root css-ib9iq6">
                 
                 <Image
                 
                src="/Medical_OS.png"
                alt="Hero"
                width={613}
                height={372}
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
                style={{ objectFit: 'contain' }}
              />
                <div className="flex-1 flex flex-col items-start justify-center MuiBox-root css-0">
                    <AnimatedBadge 
  text="Backed by Purpose" 
  
/>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-7 mb-4 sm:mb-6">Akeera Ecosystem</h2>
                     <motion.p initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }} className="text-[20px] font-[400] text-[#000] mb-6 sm:mb-8">
            India’s healthcare is changing faster than most hospitals can keep up. We exist to make sure you don’t just keep up — but lead the way.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }} className="text-[20px] font-[400] text-[#000] mb-6 sm:mb-8 ">
            From OPD queues to digital ICUs, from billing clarity to smart inventory, Akeera builds the invisible infrastructure that powers the next era of care.
          </motion.p>
                </div>
            </div>
      </section>
      <HowItWorks />
       <section className="w-full py-[80px]  items-center justify-start">
            <div className="max-w-6xl mx-auto px-4 md:px-0">
                 
               <div className="flex flex-col items-center justify-between px-6">

                   <div className="text-center mb-12 sm:mb-16 lg:mb-10 max-w-4xl mx-auto">
                      <AnimatedBadge 
  text="Benefits" 
  
/>
<h2 className="text-[48px] leading-[120%] font-bold mt-7 mb-4 sm:mb-6">Tools that grow with your hospital.
Results you can feel.</h2>
                   </div>
                    
                    
                     <FeaturesAccordion />
                </div>
            </div>
      </section>
       <section className="w-full px-6 py-20 flex justify-center">
      <div
        className="w-full max-w-[1400px] rounded-[60px] overflow-hidden relative flex flex-col lg:flex-row items-center"
        style={{
          background: "linear-gradient(134.53deg, #143EA1 0.8%, #000000 100%)",

        }}
      >
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 p-10 lg:p-16 text-white z-10">
          
          {/* Badge */}
         <div
  className="inline-flex items-center text-[#000] px-5 py-2 rounded-[70px] mb-8 font-bold text-[16px]"
  style={{
    background: "linear-gradient(270deg, #FFFFFF 3.09%, #E9E3FF 49.27%, #DEFFEC 100%)",
    border: "2px solid #FFFFFF",
  }}
>
            <img src="/security-icon.svg" className="w-3 mr-2" />
            SECURITY & INFRASTRUCTURE
          </div>

          <h1 className="text-[48px] md:text-[52px] font-bold leading-tight mb-5">
            Trust starts with<br />data protection.
          </h1>

          <p className="text-[20px] text-[#fff] font-light leading-relaxed max-w-[450px]">
            We understand that hospitals handle some of the most sensitive data in the world. 
            That’s why MedQR is designed with airtight security and compliance from day one.
          </p>

          {/* Logos */}
          <div className="flex items-center gap-10 mt-10">
            <img src="/cert1.svg" className="h-12" />

          </div>
        </div>

        {/* RIGHT SIDE – BACKGROUND SVG */}
        <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-[650px]">
          <Image
            src="/ai-bg.svg"
            alt="Security Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
    <TestimonialsSection />
  <BottomCard 
    
    heading="Ready to grow your hospital the smart way?"
    paragraph="MedQR isn’t just software it’s your growth partner."
    paragraph2="Automate, streamline, and scale with confidence."
    CTA1="Book a Demo"
    CTA2="Get Started for Free"
    />
    </div>
  )
}
const outerWrapper = {
  position: 'relative',
  width: '216px',
  height: '84px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const backgroundLayer = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
 backgroundImage: 'url("/btn-bg.png")', // place as.png in /public folder
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 0,
};

const buttonStyle = {
  position: 'relative',
  zIndex: 1,
  background: 'linear-gradient(90deg, #FF692E 0%, #8D5CF6 100%)',
  color: 'white',
  fontWeight: 700,
  fontSize: '20px',
  border: 'none',
  borderRadius: '9999px',
  width:'188px',
  height:'56px',
  cursor: 'pointer',
  top:'-7px',
  letterSpacing: '0.5px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};
const sectionStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  padding: '37px 20px',
  backgroundColor: '#fff',
};

const titleStyle = {
  fontSize: '16px',
  fontWeight: 500,
  color: '#000',
 marginRight:'40px'
};

const logosRow = {
  display: 'flex',
  gap: '80px',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
};

const logoStyle = {
  height: '48px',
  width: 'auto',
  opacity: 0.6,
  transition: 'opacity 0.3s ease',
  filter: 'grayscale(100%)',
  cursor: 'pointer',
};
export default Main