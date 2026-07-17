interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export default function Marquee({
  items,
  className = "",
  speed = "normal",
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-[marquee_40s_linear_infinite]",
    normal: "animate-marquee",
    fast: "animate-[marquee_20s_linear_infinite]",
  }[speed];

  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden select-none border-y border-orange-400/40 bg-surface py-4 ${className}`}
    >
      <div className={`flex whitespace-nowrap ${speedClass}`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 mx-6 font-condensed font-bold tracking-widest uppercase text-sm text-white/60"
          >
            <span className="text-accent text-xs">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
