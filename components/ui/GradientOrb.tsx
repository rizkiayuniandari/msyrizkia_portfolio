export default function GradientOrb({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        pointer-events-none
        absolute
        rounded-full
        bg-gradient-to-br
        from-pink-300/40
        via-purple-300/30
        to-cyan-300/40
        blur-3xl
        ${className}
      `}
    />
  );
}