import { stats } from '../data/profileData.js';

export default function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-zinc-900/55 py-7">
      <div className="section-shell">
        <div className="mb-5 flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-lime-300/70 to-transparent" />
          <p className="text-xs font-black uppercase tracking-[0.24em] text-zinc-400">
            Nền tảng coaching
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-lime-300/70 to-transparent" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.value}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/75 p-5 transition hover:-translate-y-1 hover:border-lime-300/60"
            >
              <span className="absolute right-4 top-4 text-5xl font-black text-white/[0.035]">
                0{index + 1}
              </span>
              <p className="relative text-3xl font-black text-lime-200">{item.value}</p>
              <p className="relative mt-2 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                {item.label}
              </p>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-lime-300 transition group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
