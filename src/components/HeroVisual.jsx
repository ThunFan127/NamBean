const heroTags = [
  { label: 'Hypertrophy', className: 'left-4 top-5 sm:left-7 sm:top-7' },
  { label: 'Discipline', className: 'right-4 top-5 sm:right-7 sm:top-7' },
  { label: 'Form', className: 'bottom-6 left-4 sm:bottom-8 sm:left-7' },
  { label: 'Nutrition', className: 'bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8' },
  { label: 'Progress', className: 'bottom-6 right-4 sm:bottom-8 sm:right-7' },
];

const heroImage = '/images/nam-hero-portrait.png';

export default function HeroVisual() {
  return (
    <div className="reveal relative mx-auto w-full max-w-[620px] self-stretch lg:mx-0">
      <div className="relative min-h-[430px] overflow-hidden rounded-3xl border border-lime-300/20 bg-zinc-950 shadow-[0_28px_90px_rgba(0,0,0,0.5)] sm:min-h-[560px] lg:min-h-[650px]">
        <img
          className="absolute inset-0 h-full w-full object-cover object-[55%_42%]"
          src={heroImage}
          alt="Nam Bean trong anh chan dung fitness"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.36),transparent_42%,rgba(9,9,11,0.28)),linear-gradient(0deg,rgba(9,9,11,0.88),rgba(9,9,11,0.08)_46%,rgba(9,9,11,0.34))]" />
        <div className="absolute inset-0 fitness-grid opacity-20 mix-blend-screen" />
        <div className="absolute left-1/2 top-10 h-40 w-52 -translate-x-1/2 rounded-full bg-lime-200/16 blur-3xl sm:h-52 sm:w-72" />
        <div className="absolute inset-x-8 bottom-20 h-px bg-gradient-to-r from-transparent via-lime-200/55 to-transparent" />
        <div className="absolute inset-4 rounded-[1.35rem] border border-white/10 sm:inset-5 sm:rounded-[1.65rem]" />

        {heroTags.map((tag) => (
          <span
            key={tag.label}
            className={`absolute z-20 rounded-md border border-white/10 bg-zinc-950/58 px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.18em] text-zinc-200 shadow-lg backdrop-blur sm:text-xs ${tag.className}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
