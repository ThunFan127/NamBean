import CTAButton from "./CTAButton.jsx";
import HeroVisual from "./HeroVisual.jsx";
import { heroFacts } from "../data/profileData.js";

export default function Hero() {
  return (
    <section
      id="hero"
      className="fitness-grid overflow-hidden border-b border-white/10"
    >
      <div className="section-shell grid min-h-screen items-center gap-12 pb-12 pt-28 sm:pb-16 sm:pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="reveal max-w-2xl">
          <p className="mb-4 inline-flex rounded-md border border-lime-300/30 bg-lime-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-lime-200">
            Đậu Văn Nam
          </p>

          <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl">
            Nam Bean
            <span className="mt-3 block text-2xl leading-tight text-zinc-200 sm:text-3xl lg:text-4xl">
              Coaching tăng cơ &
            </span>
            <span className="block text-2xl leading-tight text-zinc-200 sm:text-3xl lg:text-4xl">
              Biến đổi vóc dáng
            </span>
          </h1>

          <p className="mt-6 text-2xl font-extrabold text-lime-200">
            Tập có định hướng. Thay đổi có lộ trình.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Coaching 1:1 và online cho người muốn cải thiện hình thể bằng lộ
            trình tập luyện, dinh dưỡng và theo dõi tiến độ rõ ràng.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroFacts.map((fact) => (
              <div
                key={fact}
                className="border-l-2 border-lime-300 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-zinc-200"
              >
                {fact}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#contact">Book lịch tư vấn</CTAButton>
            <CTAButton href="#services" variant="secondary">
              Xem dịch vụ
            </CTAButton>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
