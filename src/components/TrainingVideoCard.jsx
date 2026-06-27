import { useEffect, useRef } from "react";

export default function TrainingVideoCard({ item, compact = false }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay can still be blocked in some browsers; controls remain available.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <figure className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:border-lime-300/55">
      <div className="relative bg-black">
        <div
          className={`overflow-hidden bg-zinc-950 ${compact ? "aspect-[4/5]" : "aspect-[16/10]"}`}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={item.src}
            controls
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(9,9,11,0.52),transparent_28%,transparent_72%,rgba(9,9,11,0.18))]" />
      </div>

      <figcaption
        className={`flex flex-1 flex-col border-t border-white/10 bg-white/[0.035] ${compact ? "p-4" : "p-5"}`}
      >
        <h3
          className={`${compact ? "text-lg" : "text-xl"} font-black text-white`}
        >
          {item.label}
        </h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {item.description}
        </p>
      </figcaption>
    </figure>
  );
}
