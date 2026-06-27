import SectionHeading from './SectionHeading.jsx';
import { coachingPillars } from '../data/profileData.js';

const methodImage = '/images/nam-coaching-method.png';

export default function Expertise() {
  return (
    <section id="expertise" className="relative overflow-hidden border-b border-white/10 bg-zinc-950 py-20 sm:py-24">
      <div className="absolute inset-0 fitness-grid opacity-20" />
      <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />

      <div className="section-shell relative">
        <SectionHeading eyebrow="Phương pháp coaching" title="3 trụ cột giúp bạn thay đổi vóc dáng bền vững">
          Không chỉ đơn giản là tập nhiều hơn. Một lộ trình hiệu quả cần kết hợp giữa kỹ thuật
          tập luyện đúng, dinh dưỡng phù hợp và quá trình theo dõi sát sao để điều chỉnh kịp thời.
        </SectionHeading>

        <div className="grid gap-8 lg:grid-cols-[0.88fr_0.92fr] lg:items-stretch">
          <div className="grid gap-4">
            {coachingPillars.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-lime-300/60 hover:bg-white/[0.06] sm:p-6"
              >
                <span className="absolute right-5 top-4 text-5xl font-black leading-none text-white/[0.035]">
                  0{index + 1}
                </span>

                <div className="relative flex gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-lime-300/30 bg-zinc-950 text-xs font-black text-lime-200 shadow-[0_0_30px_rgba(190,242,100,0.12)]">
                    0{index + 1}
                  </div>

                  <div>
                    <p className="mb-3 inline-flex rounded-md border border-orange-400/25 bg-orange-400/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-orange-300">
                      {item.label}
                    </p>
                    <h3 className="text-lg font-black leading-tight text-white sm:text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-lime-300/20 bg-zinc-950/75 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(190,242,100,0.11),transparent_34%)]" />
            <div className="relative flex min-h-[520px] items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/60 sm:min-h-[620px] lg:min-h-full">
              <img
                className="max-h-[500px] w-full object-contain object-center sm:max-h-[600px] lg:max-h-[720px]"
                src={methodImage}
                alt="Nam Bean trong phòng gym"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
