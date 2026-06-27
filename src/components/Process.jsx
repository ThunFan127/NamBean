import CTAButton from './CTAButton.jsx';
import SectionHeading from './SectionHeading.jsx';
import { processRoadmap } from '../data/profileData.js';

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden border-b border-white/10 bg-zinc-950 py-20 sm:py-24">
      <div className="absolute inset-0 fitness-grid opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/10 blur-3xl" />

      <div className="section-shell relative">
        <SectionHeading eyebrow="Quy trình" title="Quy trình coaching">
          Mỗi học viên bắt đầu với một thể trạng, mục tiêu và lịch sinh hoạt khác nhau. Vì vậy,
          lộ trình coaching sẽ được xây dựng theo từng bước: đánh giá rõ điểm xuất phát, thiết
          kế kế hoạch phù hợp, theo dõi tiến độ và điều chỉnh khi cần.
        </SectionHeading>

        <div className="relative mt-12 lg:pb-8 lg:pt-10">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-lime-300/75 to-transparent lg:block" />
          <div className="absolute left-0 right-0 top-1/2 hidden h-8 -translate-y-1/2 bg-lime-300/10 blur-2xl lg:block" />

          <div className="relative hidden h-[520px] grid-cols-5 gap-4 lg:grid">
            {processRoadmap.map((step, index) => {
              const isTop = index % 2 === 0;
              const isFeatured = step.featured;

              return (
                <article
                  key={step.title}
                  className="group relative"
                >
                  <div
                    className={`absolute left-1/2 top-1/2 z-20 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border text-sm font-black shadow-[0_0_34px_rgba(190,242,100,0.16)] transition group-hover:scale-105 ${
                      isFeatured
                        ? 'size-16 border-lime-200 bg-lime-300 text-zinc-950'
                        : 'size-12 border-lime-300/50 bg-zinc-950 text-lime-200'
                    }`}
                  >
                    0{index + 1}
                  </div>

                  {isFeatured && (
                    <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/25 blur-3xl" />
                  )}

                  <div
                    className={`absolute left-0 right-0 rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition group-hover:-translate-y-1 group-hover:border-lime-300/60 group-hover:bg-white/[0.065] ${
                      isTop ? 'bottom-[calc(50%+3.75rem)]' : 'top-[calc(50%+3.75rem)]'
                    }`}
                  >
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
                      {step.label}
                    </p>
                    <h3 className="mt-4 text-xl font-black leading-tight text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-300">{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="relative space-y-5 pl-8 lg:hidden">
            <div className="absolute bottom-6 left-4 top-4 w-px bg-gradient-to-b from-lime-300 via-lime-300/55 to-transparent" />
            {processRoadmap.map((step, index) => (
              <article
                key={step.title}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.045] p-5 transition hover:border-lime-300/60"
              >
                <div className="absolute -left-11 top-5 grid size-9 place-items-center rounded-xl border border-lime-300/55 bg-zinc-950 text-xs font-black text-lime-200 shadow-[0_0_24px_rgba(190,242,100,0.14)]">
                  0{index + 1}
                </div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
                  {step.label}
                </p>
                <h3 className="mt-3 text-xl font-black leading-tight text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-lime-300/20 bg-lime-300/10 p-6 sm:flex-row sm:items-center">
          <p className="text-xl font-black text-white">Bạn chưa biết bắt đầu từ đâu?</p>
          <CTAButton href="#contact">Book lịch tư vấn lộ trình</CTAButton>
        </div>
      </div>
    </section>
  );
}
