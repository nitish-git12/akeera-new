'use-client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    hospitals: 0,
    patients: 0,
    operations: 0,
    satisfaction: 0
  });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const targets = {
      hospitals: 200,
      patients: 50000,
      operations: 40,
      satisfaction: 98
    };

    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing function (ease-out-expo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        hospitals: Math.floor(targets.hospitals * easeOutExpo),
        patients: Math.floor(targets.patients * easeOutExpo),
        operations: Math.floor(targets.operations * easeOutExpo),
        satisfaction: Math.floor(targets.satisfaction * easeOutExpo)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(targets);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      
      className="pt-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-0 relative">
          {/* Hospitals and Labs */}
          <div 
            className={`text-center py-8 px-8 transition-all duration-[1200ms] ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="text-[70px] font-medium text-white mb-3 transition-all duration-700" style={{ letterSpacing: '-0.02em' }}>
              {counts.hospitals}+
            </div>
            <div className="text-white text-[18px] font-bold" style={{ letterSpacing: '0.06em' }}>
              Hospitals and Labs
            </div>
          </div>

         
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 ">
                <Image src="/border.svg"
                alt=''
                width={2}
                height={121}
                />
          </div>

          {/* Patients helped */}
          <div 
            className={`text-center py-8 px-8 transition-all duration-[1200ms] ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="text-[70px] font-medium text-white mb-3 transition-all duration-700" style={{ letterSpacing: '-0.02em' }}>
              {counts.patients >= 1000 ? `${Math.floor(counts.patients / 1000)}K` : counts.patients}
            </div>
            <div className="text-white text-[18px] font-bold" style={{ letterSpacing: '0.06em' }}>
              Patients helped
            </div>
          </div>

         
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-px">
             <Image src="/border.svg"
                alt=''
                width={2}
                height={121}
                />
          </div>

          {/* Faster Operations */}
          <div 
            className={`text-center py-8 px-8 transition-all duration-[1200ms] ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="text-[70px] font-medium text-white mb-3 transition-all duration-700" style={{ letterSpacing: '-0.02em' }}>
              {counts.operations}%
            </div>
            <div className="text-white text-[18px] font-bold" style={{ letterSpacing: '0.06em' }}>
              Faster Operations
            </div>
          </div>

          {/* Divider 3 */}
          <div className="absolute left-3/4 top-1/2 -translate-y-1/2">
             <Image src="/border.svg"
                alt=''
                width={2}
                height={121}
                />
          </div>

          {/* Customer satisfaction */}
          <div 
            className={`text-center py-8 px-8 transition-all duration-[1200ms] ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '550ms' }}
          >
            <div className="text-[70px] font-medium text-white mb-3 transition-all duration-700" style={{ letterSpacing: '-0.02em' }}>
              {counts.satisfaction}%
            </div>
            <div className="text-white text-[18px] font-bold" style={{ letterSpacing: '0.06em' }}>
              Customer satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}