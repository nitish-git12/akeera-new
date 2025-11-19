    "use client";

    import { Swiper, SwiperSlide } from "swiper/react";
    import { Navigation } from "swiper/modules";
    import "swiper/css";
    import "swiper/css/navigation";

    const testimonials = [
    {
        img: "/meera.png",
        name: "Meera Rao",
        role: "Hospital Administrator, Lotus Care Centre",
        quote:
        "We were drowning in paperwork and silos. Akeera helped us digitize every corner of the hospital — without overwhelming our staff.",
        sign: "Meera Rao",
    },
    {
        img: "/prashant.png",
        name: "Prashant Kulkarni",
        role: "CTO, Svastha Health Systems",
        quote:
        "From a tech perspective, MedQR was easy to integrate, secure, and scalable. We’ve reduced manual errors by almost 70%.",
        sign: "Prashant Kulkarni",
    },
    {
        img: "/u3.png",
        name: "Dr. Nidhi Verma",
        role: "Founder, Verma Children’s Hospital",
        quote:
        "I didn’t just buy software. I found a partner who understands what small hospitals like ours dream of becoming.",
        sign: "Nidhi Verma",
    },
    {
        img: "/u4.png",
        name: "Dr. Arvind Sinha",
        role: "Sunrise Multispecialty Hospital",
        quote:
        "With MedQR, we finally feel in control. From OPD scheduling to billing — everything just flows. We’ve moved from chaos to clarity.",
        sign: "Arvind Sinha",
    },
    {
        img: "/u1.png",
        name: "Meera Rao",
        role: "Hospital Administrator",
        quote: "Repeating for loop continuity.",
        sign: "Meera Rao",
    },
    ];

    export default function TestimonialsSection() {
    return (
        <section className="w-full py-15 mb-25 overflow-hidden">
        
        {/* HEADER */}
        <div className="text-center">
            <div
            className="inline-flex items-center text-[#000] px-5 py-2 rounded-[70px] mb-4 font-bold text-[16px]"
            style={{
                background:
                "linear-gradient(270deg, #FFFFFF 3.09%, #E9E3FF 49.27%, #DEFFEC 100%)",
                border: "2px solid #FFFFFF",
            }}
            >
            <img src="/security-icon.svg" className="w-3 mr-2" />
            Testimonials
            </div>

            <h2 className="text-center text-[48px] font-bold mb-25">
            People building better care with Akeera.
            </h2>
        </div>

        {/* SLIDER */}
        <div className="w-full overflow-visible relative -mx-10">
        <Swiper
    modules={[Navigation]}
    slidesPerView={4.5}     // <-- shows 4 full + right peek
    spaceBetween={30}       // spacing like design
    loop={true}
    centeredSlides={false}
    navigation={false}
    className="overflow-visible px-[60px]"  // <-- VERY IMPORTANT
    breakpoints={{
    300: { slidesPerView: 1.1 },
    640: { slidesPerView: 2.1},
    1024: { slidesPerView: 3.1 },
    1280: { slidesPerView: 4.7 },
    }}
    >
            {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                {/* CARD — NO SHADOW ✔️ */}
                <div className="bg-white rounded-[10px] p-8 h-[420px] w-[380px] flex flex-col justify-between">
                    
                    {/* Profile */}
                    <div className="flex gap-4 items-center">
                    <img
                        src={t.img}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold text-[16px]">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                    </div>

                    {/* Quote */}
                    <p className="mt-6 text-[15px] text-gray-700 leading-relaxed">
                    “{t.quote}”
                    </p>

                    {/* Sign */}
                    <p className="mt-6 italic font-medium text-gray-900">
                    {t.sign}
                    </p>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </section>
    );
    }
