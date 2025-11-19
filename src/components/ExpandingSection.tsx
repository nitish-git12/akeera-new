"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import AnimatedBadge from "../components/AnimatedBadge";
import Card from "../components/Card";
import PlaceholderChart from "../components/PlaceholderChart";

export default function ExpandingBackgroundSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Track scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: ref,
    // tighter offsets help localize the animation to a small scroll window
    // tweak these to control when the animation starts/ends
    offset: ["start end", "center center"],
  });

  // Map the scroll progress to a normalized "progress" (0 -> 1) for our animation.
  // Using a narrower input range prevents abrupt jumps.
  const rawProgress = useTransform(scrollYProgress, [0.12, 0.48], [0, 1]);

  // Smooth that raw progress using a spring for buttery motion
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.6,
  });

  // scaleX will represent container expansion: from 0.78 -> 1
  // using scaleX with origin center avoids layout reflow and is GPU friendly
  const scaleX = useTransform(smoothProgress, (v) => 0.78 + v * (1 - 0.78));

  // border radius easing (rounded -> flat)
  const borderRadius = useTransform(smoothProgress, (v) =>
    `${24 - v * 24}px`
  );

  // gradient interpolation (we keep it simple: pick three stops)
  const background = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [
      // start: solid-ish
      "linear-gradient(135deg, #0A0D14 0%, #0A0D14 100%)",
      // mid: soft hint
      "linear-gradient(135deg, #0A0D14 6%, #2E3D63 70%)",
      // end: full gradient
      "linear-gradient(135deg, #0A0D14 13.19%, #3D4F7A 185.79%)",
    ]
  );

  // content reveal (fade + translateY) — also smoothed with spring
  const contentOpacityRaw = useTransform(smoothProgress, [0.25, 0.7], [0, 1]);
  const contentYRaw = useTransform(smoothProgress, [0.25, 0.7], [28, 0]);

  const contentOpacity = useSpring(contentOpacityRaw, {
    stiffness: 80,
    damping: 18,
  });
  const contentY = useSpring(contentYRaw, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div className="w-full flex justify-center">
      <motion.div
        ref={ref}
        // use transform scaleX for expansion; origin center to expand symmetrically
        style={{
          scaleX,
          borderRadius,
          background,
          transformOrigin: "center",
          // a small translateZ keeps it on its own composite layer (helps smoothness)
          // and will-change hints to the browser too
          willChange: "transform, border-radius, background",
        }}
        className="flex flex-col items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.08)] w-full"
      >
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center"
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedBadge text="BUILT FOR SCALE" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-6 mb-4">
             To grow your hospital
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
             Akeera unites every department, every patient touchpoint, and every decision into one intelligent system.
No&nbsp;silos. No guesswork. Just a clear path to the hospital you’ve always imagined.

And because care doesn’t end&nbsp;at discharge, Akeera extends into the patient’s world too — consultations, real-time health tracking, and&nbsp;seamless continuity of care.
            </p>
           <main className="grid gap-8 max-w-7xl mx-auto">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Large left card spans 2 columns */}
        <div className="md:col-span-2">
           <div className="relative rounded-[40px] p-[4px] bg-gradient-to-r from-[#2DB9B1] to-[#0048FF]">
          <div style={{height:'500px', boxShadow: "inset 30px 0px 124px  rgba(47, 255, 243, 0.2)",}} className="rounded-[36px] p-8 backdrop-blur-xl text-white bg-[#101620]">
asfafasf
         </div>
         </div>
        </div>
        {/* Smaller right card */}
        <Card
          title="IPD"
          accent="QR"
          variant="solid"
          gradient="from-[#7f00ff]/40 via-[#6a00f4]/30 to-[#4f46e5]/20"
        >
          <PlaceholderChart label="IPD Summary" />
        </Card>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          title="Bill"
          accent="QR"
          variant="frosted"
          gradient="from-[#ff4d00]/30 via-[#ff6a00]/20 to-[#ff9800]/10"
        >
          <PlaceholderChart label="Billing Insights" />
        </Card>
        <Card
          title="Lab"
          accent="QR"
          variant="solid"
          gradient="from-[#8b5cf6]/30 via-[#6d28d9]/20 to-[#4c1d95]/10"
        >
          <PlaceholderChart label="Lab Reports" />
        </Card>
      </div>

      {/* Row 3 */}
      <Card
        title="Medic"
        accent="QR"
        variant="glow"
        gradient="from-[#fbc02d]/30 via-[#fdd835]/20 to-[#fff176]/10"
      >
        <PlaceholderChart label="Pharmacy Overview" />
      </Card>
    </main>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
