'use-client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    img: "/team.png",
    name: "Meghna Saxena",
    role: "Founder & CEO",
    bio: `Lorem Ipsum is simply dummy text… remaining essentially unchanged.`,
  },
  {
    img: "/team.png",
    name: "Meghna Saxena",
    role: "Founder & CEO",
    bio: `Lorem Ipsum is simply dummy text… remaining essentially unchanged.`,
  },
  {
    img: "/team.png",
    name: "Meghna Saxena",
    role: "Founder & CEO",
    bio: `Lorem Ipsum is simply dummy text… remaining essentially unchanged.`,
  }
];

export default function TeamShowcase() {
  const ref = useRef(null);

  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {team.map((person, i) => (
         <motion.div
  key={i}
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: i * 0.2 }}
  viewport={{ once: true }}
  className="relative group bg-white overflow-hidden transition-all duration-300"
  style={{
    borderRadius: "50px 50px 0 50px",
  }}
  whileHover={{
    borderRadius: "50px",   // all corners rounded
  }}
>
            {/* IMAGE */}
            <div className="w-full h-[360px] overflow-hidden " style={{borderRadius:'50px 50px 0 0'}}>
              <img
                src={person.img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            {/* TEXT SECTION */}
            <div className="px-6 py-6 flex text-left items-center justify-between">
              <div>
                <h3 className="text-[24px] font-semibold">{person.name}</h3>
                <p className="text-[#757575E6] text-[16px]">{person.role}</p>
              </div>

              <div className="flex items-center gap-3">
               

              <a
  href="#"
  className="
    group 
    relative inline-flex items-center gap-5
    w-[87px]
    h-[60px]
    transition-all duration-300
    bg-[linear-gradient(135deg,#67c2bb,#3f7eed)]
    hover:shadow-md
  "
  style={{
    borderRadius:'24px 24px 0px 24px'
  }}
>
  {/* Background Layer */}
  <span
    className="
      absolute inset-0
      bg-white
      transition-all duration-300
      group-hover:bg-[#f5f5f5] 
      z-0
    "
    style={{
      top: '1.5px',
      left: '1.5px',
      right: '1.5px',
      bottom: '1.5px',
      borderRadius:'24px 24px 0px 24px'
    }}
    
  />

  {/* Content */}
  <span
    className="
      relative z-10 flex items-center gap-3
      px-6 py-3
      transition-all duration-300
      group-hover:gap-3.5
    "
  >
    <Image src="/linkedin.svg" width={20} height={20} alt="LinkedIn" />
    <Image src="/Arrow1.svg" width={17} height={15} alt="Arrow" />
  </span>
</a>


              </div>
            </div>

            {/* HOVER OVERLAY BOX */}
            <div
              className="
                absolute inset-0 
                bg-white/70 p-8
                h-[360px]
                opacity-0 pointer-events-none
                transition-all duration-300
                group-hover:opacity-100 group-hover:pointer-events-auto
              "
              style={{borderRadius:'50px 50px 0 0'}}
            >
              
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {person.bio}
              </p>
            
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
