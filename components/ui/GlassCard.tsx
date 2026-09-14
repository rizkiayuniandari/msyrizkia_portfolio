import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border border-white/30
        bg-white/10
        backdrop-blur-xl
        shadow-[0_8px_40px_rgba(15,23,42,0.08)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}