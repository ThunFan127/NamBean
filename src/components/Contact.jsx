import { profile } from "../data/profileData.js";

const phoneNumber = profile.phone?.replace(/\D/g, "");

const messageHints = [
  "Mục tiêu: tăng cơ / giảm mỡ / cải thiện vóc dáng",
  "Lịch rảnh trong tuần",
  "Muốn coaching 1:1 hay online",
];

const contactLinks = [
  {
    label: "Zalo / SĐT",
    value: profile.phone,
    href: `tel:${phoneNumber}`,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Instagram",
    value: "@namdau9627",
    href: profile.instagram,
  },
  {
    label: "Threads",
    value: "@namdau9627",
    href: profile.threads,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 shadow-[0_28px_100px_rgba(0,0,0,0.45)]">
          {/* Background layers */}
          <div className="pointer-events-none absolute inset-0 fitness-grid opacity-10" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-2/3 -translate-x-1/2 bg-lime-300/[0.03] blur-3xl" />

          <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.75fr] lg:items-center lg:p-12">
            {/* Left content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-lime-300/25 bg-lime-300/[0.08] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.8)]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-lime-200">
                  Liên hệ coaching
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Bắt đầu với một buổi tư vấn phù hợp với bạn.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                Gửi cho Nam mục tiêu hiện tại, lịch rảnh và hình thức coaching
                bạn quan tâm. Nam sẽ tư vấn lộ trình phù hợp với thể trạng, thời
                gian và mục tiêu của bạn.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-semibold text-zinc-300">
                  Bình Thạnh & các quận lân cận
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-semibold text-zinc-300">
                  Ngoài giờ hành chính
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-semibold text-zinc-300">
                  1:1 & Online Coaching
                </span>
              </div>
            </div>

            {/* CTA card */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-[1.7rem] bg-lime-300/10 blur-2xl" />

              <div className="relative rounded-[1.7rem] border border-white/10 bg-black/55 p-5 backdrop-blur-sm sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-lime-200">
                  Liên hệ nhanh
                </p>

                <p className="mt-3 text-2xl font-black text-white">
                  Nhắn trực tiếp cho Nam
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Phù hợp nhất nếu bạn muốn hỏi lịch trống, gói coaching hoặc
                  cần tư vấn lộ trình ban đầu.
                </p>

                <div className="mt-6 grid gap-3">
                  <a
                    href={`https://zalo.me/${phoneNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-14 items-center justify-center rounded-xl bg-lime-300 px-5 py-4 text-sm font-black uppercase tracking-wide text-zinc-950 transition hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-[0_18px_45px_rgba(190,242,100,0.22)]"
                  >
                    Nhắn Zalo
                  </a>

                  <a
                    href={profile.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:border-lime-300/60 hover:bg-lime-300/[0.08] hover:text-lime-100"
                  >
                    Nhắn Facebook
                  </a>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                    Khi nhắn tin, gửi ngắn gọn:
                  </p>

                  <div className="mt-4 space-y-3">
                    {messageHints.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-zinc-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom contact rail */}
          <div className="relative border-t border-white/10 px-6 py-5 sm:px-8 lg:px-12">
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href?.startsWith("http") ? "_blank" : undefined}
                  rel={link.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 text-sm"
                >
                  <span className="font-black uppercase tracking-[0.16em] text-zinc-600 transition group-hover:text-lime-300">
                    {link.label}
                  </span>
                  <span className="font-semibold text-zinc-200 transition group-hover:text-white">
                    {link.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
