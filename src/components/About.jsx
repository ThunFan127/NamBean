const journeyPoints = [
  {
    number: "01",
    label: "BẮT ĐẦU",
    title: "Từng tự ti về vóc dáng",
    text: "Hiểu cảm giác lúng túng khi chưa biết bắt đầu từ đâu.",
  },
  {
    number: "02",
    label: "THAY ĐỔI",
    title: "Xây dựng kỷ luật",
    text: "Từng bước cải thiện kỹ thuật, dinh dưỡng và thói quen tập luyện.",
  },
  {
    number: "03",
    label: "ĐỒNG HÀNH",
    title: "Coaching cá nhân hóa",
    text: "Giúp học viên có lộ trình phù hợp với mục tiêu và lịch sinh hoạt.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 py-20 sm:py-24"
    >
      <div className="absolute inset-0 fitness-grid opacity-20" />
      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-300/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-lime-300/[0.05] blur-3xl" />

      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left */}
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-lime-300">
              Giới thiệu
            </p>

            <h2 className="max-w-xl text-4xl font-black leading-[1.03] text-white sm:text-5xl lg:text-5xl">
              Không bắt đầu từ hoàn hảo. Bắt đầu từ mong muốn thay đổi.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300">
              Nam từng bắt đầu từ cảm giác tự ti về vóc dáng. Chính hành trình
              tự thay đổi đã giúp Nam hiểu rằng tập luyện không chỉ là ngoại
              hình, mà còn là sự tự tin, kỷ luật và cách mỗi người nhìn lại
              chính mình.
            </p>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-lime-300/[0.08] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.35)] sm:p-8">
              <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-lime-300/10 blur-3xl" />

              <div className="relative">
                <p className="text-7xl font-black leading-none text-lime-300/20">
                  “
                </p>

                <p className="-mt-6 max-w-2xl text-2xl font-black leading-snug text-white sm:text-3xl">
                  Nam hiểu cảm giác bắt đầu từ con số 0, nên coaching không chỉ
                  là đưa bài tập, mà là đồng hành để học viên đi đúng hướng.
                </p>

                <div className="mt-5 text-sm leading-7 text-zinc-300">
                  <p>
                    Từ trải nghiệm cá nhân, Nam muốn giúp học viên có lộ trình
                    rõ ràng hơn: tập đúng, ăn phù hợp và được theo dõi sát tiến
                    độ thực tế.
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-lime-300/20 bg-lime-300/[0.06] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-200">
                    Triết lý coaching
                  </p>
                  <p className="mt-2 text-sm font-black leading-6 text-white">
                    Tập đúng trước. Ăn đủ để duy trì. Theo dõi sát để điều chỉnh
                    kịp thời.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey */}
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {journeyPoints.map((point, index) => (
            <article
              key={point.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-lime-300/50 hover:bg-white/[0.055]"
            >
              {index < journeyPoints.length - 1 && (
                <span className="absolute left-[calc(100%-0.5rem)] top-10 hidden h-px w-7 bg-lime-300/40 md:block" />
              )}

              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-lime-300">
                  {point.label}
                </span>
                <span className="text-4xl font-black leading-none text-white/[0.08] transition group-hover:text-lime-300/25">
                  {point.number}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-black leading-snug text-white">
                {point.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {point.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
