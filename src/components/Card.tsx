import React from "react";

interface CardProps {
  title: string;
  accent: string;
  gradient?: string;
  children?: React.ReactNode;
  variant?: "glass" | "solid" | "frosted" | "glow";
}

export default function Card({
  title,
  accent,
  gradient,
  children,
  variant = "solid",
}: CardProps) {
  const variantStyles = {
    glass:
      "bg-gradient-to-br backdrop-blur-xl border border-white/10 shadow-[inset_0_0_25px_rgba(255,255,255,0.1),_0_0_40px_rgba(0,224,255,0.2)]",
    solid:
      "bg-gradient-to-br backdrop-blur-md border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.05)]",
    frosted:
      "bg-white/[0.06] backdrop-blur-lg border border-white/10 shadow-[0_0_35px_rgba(255,255,255,0.1)]",
    glow:
      "bg-gradient-to-br backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(255,223,0,0.25)]",
  }[variant];

  return (
    <div
      className={`relative rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-300 ${variantStyles} ${
        gradient ? `bg-gradient-to-br ${gradient}` : ""
      }`}
    >
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white to-transparent pointer-events-none rounded-3xl" />

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-2">
          <span>{title}</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            {accent}
          </span>
        </h3>

        <p className="text-sm text-white/70 leading-relaxed mb-4">
          Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing.
        </p>

        {children}

        <button className="mt-6 px-5 py-2 rounded-full border border-white/20 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
          Learn more →
        </button>
      </div>
    </div>
  );
}
