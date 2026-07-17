import { config } from "@/lib/config";

export default function FeaturesStrip() {
  return (
    <div className="relative bg-base border-y border-surface2 py-0">
      {/* Yellow accent top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-accent/60" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 divide-x divide-accent/30">
          {config.features.map((f) => (
            <div
              key={f.num}
              className="flex flex-col items-center justify-center gap-1 py-6 px-4 sm:px-8 text-center group hover:bg-surface/50 transition-colors"
            >
              <span className="font-condensed text-accent font-bold text-sm italic tracking-widest">
                {f.num}
              </span>
              <span className="font-condensed font-bold tracking-[0.2em] uppercase text-white text-xs sm:text-sm">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/60" />
    </div>
  );
}
