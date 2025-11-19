"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  // Update measured width whenever email or font/size changes
  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    // Use the typed text for measurement; when empty we measure placeholder length 0
    el.textContent = email || "";
    // Add a small extra padding to account for caret & padding in input
    const rect = el.getBoundingClientRect();
    const paddingExtra = 6; // tweak if you want slightly longer/shorter line
    setUnderlineWidth(Math.ceil(rect.width) + paddingExtra);
  }, [email]);

  // Keep underline in bounds of input
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    const maxWidth = input.getBoundingClientRect().width - 8; // keep small margin
    if (underlineWidth > maxWidth) setUnderlineWidth(maxWidth);
  }, [underlineWidth]);

  // On submit rely on HTML5 validation; do nothing custom
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    // Let browser show validation UI if invalid
    if (!form.checkValidity()) {
      // trigger native validation UI
      (form.querySelector("input") as HTMLInputElement)?.reportValidity();
      return;
    }
    // do subscribe action...
    console.log("subscribe:", email);
    // simple reset for demo
    setEmail("");
  };

  return (
    <footer
      className="w-full pt-20 pb-12"
      style={{
        background: "linear-gradient(134.68deg, #0A0D14 6.43%, #3D4F7A 96.33%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT COLUMN */}
        <div>
          <Image src="/akeera.svg" alt="Akeera" width={130} height={28} />

          <p className="mt-4 text-[20px] text-white tracking-[0.6px] font-light leading-relaxed max-w-[420px]">
            Smart tools to help hospitals grow with care,
            clarity, and confidence.
          </p>

          <div className="mt-12 grid grid-cols-4 gap-10 text-[16px]">
            <div>
              <p className="font-medium mb-4 text-white">Home</p>
            </div>

            <div>
              <p className="font-medium mb-4 text-white">Products</p>
              <Link href="#" className="block mb-2 text-[#AFAFAF] text-[14px] font-normal transition hover:text-white">
                MedQR
              </Link>
              <Link href="#" className="block mb-2 text-[#AFAFAF] text-[14px] font-normal transition hover:text-white">
                TeleMedQR
              </Link>
              <Link href="#" className="block mb-2 text-[#AFAFAF] text-[14px] font-normal transition hover:text-white">
                BillMedQR
              </Link>
              <Link href="#" className="block mb-2 text-[#AFAFAF] text-[14px] font-normal transition hover:text-white">
                LabMedQR
              </Link>
              <Link href="#" className="block mb-2 text-[#AFAFAF] text-[14px] font-normal transition hover:text-white">
                MedicQR
              </Link>
            </div>

            <div>
              <p className="font-medium mb-4 text-white">About</p>
              <Link href="#" className="block mb-2 text-[#AFAFAF] text-[14px] font-normal transition hover:text-white">Contact us</Link>
              <Link href="#" className="block mb-2 text-[#AFAFAF] text-[14px] font-normal transition hover:text-white">Blog</Link>
              <Link href="#" className="block mb-2 text-[#AFAFAF] text-[14px] font-normal transition hover:text-white">Customers</Link>
              <Link href="#" className="block mb-2 text-[#AFAFAF] text-[14px] font-normal transition hover:text-white">Our Story</Link>
              <Link href="#" className="block mb-2 text-[#AFAFAF] text-[14px] font-normal transition hover:text-white">Media</Link>
            </div>

            <div>
              <p className="font-medium mb-4 text-white">Supports</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <h2 className="text-[40px] font-semibold text-white leading-[1.05] mb-6">
            Join our newsletter to stay up to date
          </h2>

          {/* Email Input Area */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <div className="relative flex-1 min-w-0">
                {/* Real input */}
                <input
                  ref={inputRef}
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent py-3 text-[18px] outline-none placeholder:text-[#AFAFAF] placeholder:opacity-50"
                  style={{
                    borderBottom: "2px solid rgba(114,131,170,0.5)", // #7283AA 50%
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "20px",
                    color: email ? "#FFFFFF" : "#FFFFFF", // text white on focus/typing
                  }}
                  onFocus={() => {
                    // when focusing we'll ensure underline shows by triggering width update
                    const el = measureRef.current;
                    if (el) el.textContent = email || "";
                    const rect = el?.getBoundingClientRect();
                    if (rect) setUnderlineWidth(Math.ceil(rect.width) + 6);
                  }}
                />

                {/* Measuring span (invisible) to compute text width */}
                <span
                  ref={measureRef}
                  className="invisible absolute left-0 top-0 whitespace-pre"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    whiteSpace: "pre",
                    letterSpacing: "0", // keeps measurement accurate
                    padding: 0,
                    margin: 0,
                    lineHeight: "1",
                  }}
                >
                  {email}
                </span>

                {/* Animated gradient underline overlay */}
                <div
                  ref={underlineRef}
                  aria-hidden
                  className="absolute left-0 bottom-0 h-0.5 overflow-hidden"
                  style={{
                    width: underlineWidth ? `${underlineWidth}px` : "0px",
                    transition: "width 300ms cubic-bezier(.22,.9,.35,1)",
                    // gradient as requested:
                    background: "linear-gradient(90deg, #E54500 0%, #8D5CF6 100%)",
                    transformOrigin: "left center",
                    pointerEvents: "none",
                  }}
                />
              </div>

<button className="subscribe-btn">
  Subscribe
</button>
            </div>

            <p className="mt-3 text-white text-[16px]">
              By subscribing, you agree to our{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
          </form>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            <img src="/fb.svg" className="w-8" />
            <img src="/ig.svg" className="w-8 " />
            <img src="/li.svg" className="w-8" />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-[1320px] mx-auto px-6 mt-20 border-t border-white/20 pt-6 flex flex-col lg:flex-row justify-between text-gray-300 text-[15px] gap-4">
        <div className="flex gap-8">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Data Security</p>
        </div>

        <p>© 2025 Akeera. All rights reserved. | Website by Akeera</p>
      </div>
    </footer>
  );
}
