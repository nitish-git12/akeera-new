import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AnimatedValuesSection() {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          },
          { threshold: 0.3 }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const items = [
    {
      icon: '/human.svg',
      iconSize: { width: 50, height: 52 },
      title: 'Human First',
      gradient: 'linear-gradient(90deg, #2DB9B1 0%, #006FFF 100%)',
      description: 'Behind every lab report or hospital visit is a life. We never forget that.',
    },
    {
      icon: '/innovation.svg',
      iconSize: { width: 50, height: 48 },
      title: 'Innovation with Purpose',
      gradient: 'linear-gradient(90deg, #E54500 0%, #FFAE00 100%)',
      description: 'We create solutions that solve real-world problems, not just add features.',
    },
    {
      icon: '/trust.svg',
      iconSize: { width: 50, height: 63 },
      title: 'Trust & Security',
      gradient: 'linear-gradient(90deg, #006FFF 0%, #8D5CF6 100%)',
      description: 'Data is sacred — we protect it with the highest standards.',
    },
    {
      icon: '/rentless.svg',
      iconSize: { width: 50, height: 50 },
      title: 'Relentless Simplicity',
      gradient: 'linear-gradient(90deg, #C5B5FD 0%, #73E2A3 100%)',
      description: "If it's not easy, it's not Akeera.",
    },
  ];

  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          className={`flex gap-6 items-center pb-6 px-4 border-b border-[#7283AA] transition-all duration-[1400ms] ${
            visibleItems.includes(index)
              ? 'opacity-100 translate-x-0 scale-100 blur-0'
              : 'opacity-0 -translate-x-20 scale-90 blur-sm'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Icon with rotation and scale animation */}
          <div className="flex-shrink-0">
            <div
              className={`w-12 h-12 flex items-center justify-center transition-all duration-[1200ms] ${
                visibleItems.includes(index)
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-180 scale-0'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                transitionDelay: '200ms',
              }}
            >
              <Image
                src={item.icon}
                width={item.iconSize.width}
                height={item.iconSize.height}
                alt=""
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? 'drop-shadow-lg' : ''
                }`}
              />
            </div>
          </div>

          {/* Content with slide and fade */}
          <div className="flex-1">
            <h3
              className={`text-[24px] font-bold mb-2 bg-clip-text text-transparent transition-all duration-1000 ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{
                backgroundImage: item.gradient,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: '300ms',
              }}
            >
              {item.title}
            </h3>
            <p 
              className={`text-[16px] text-white transition-all duration-1000 ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: '400ms',
              }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}