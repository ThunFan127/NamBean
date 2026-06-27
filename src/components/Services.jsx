import CTAButton from "./CTAButton.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { services } from "../data/servicesData.js";

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding border-b border-white/10 bg-zinc-900/45"
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="DỊCH VỤ"
          title="Chọn hình thức coaching phù hợp với bạn"
        >
          Mỗi người có mục tiêu, lịch sinh hoạt và điểm bắt đầu khác nhau. Nam
          sẽ tư vấn hình thức coaching phù hợp để bạn tập đúng, ăn đủ và theo
          dõi tiến độ rõ ràng hơn.
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.26)] transition duration-200 hover:-translate-y-0.5 hover:border-lime-300/70 ${
                service.highlight
                  ? "border-lime-300/35 bg-zinc-950/95 shadow-[0_26px_70px_rgba(124,240,111,0.14)]"
                  : ""
              } md:even:mt-8`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-200">
                  {service.label}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                  {service.title}
                </h3>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                    Phù hợp với
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-200">
                    {service.bestFor}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  Bạn nhận được
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-lime-300" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.packages.map((pack) => (
                  <span
                    key={pack}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-zinc-200"
                  >
                    {pack}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                <CTAButton
                  href="#contact"
                  variant="secondary"
                  className="px-4 py-2 text-xs"
                >
                  {service.cta}
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
