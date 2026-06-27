import SectionHeading from "./SectionHeading.jsx";
import StudentTrainingVideos from "./StudentTrainingVideos.jsx";
import TrainingVideoCard from "./TrainingVideoCard.jsx";
import { mediaItems } from "../data/mediaData.js";

export default function MediaGallery() {
  return (
    <section
      id="mediaGallery"
      className="section-padding border-b border-white/10 bg-zinc-900/45"
    >
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <SectionHeading
            eyebrow="Nhật ký tập luyện"
            title="Những buổi tập thật phía sau một lộ trình coaching"
          >
            Không phải buổi tập nào cũng cần thật hoành tráng. Với Nam, điều
            quan trọng là học viên hiểu mình đang tập gì, vì sao tập bài đó và
            làm sao để duy trì đúng kỹ thuật qua từng buổi.
          </SectionHeading>

          <div className="hidden h-px bg-gradient-to-r from-lime-300/70 to-transparent lg:block" />
        </div>

        <div className="mt-8">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-lime-300">
            Nam tập luyện
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {mediaItems.map((item) => (
              <TrainingVideoCard key={item.label} item={item} />
            ))}
          </div>
        </div>

        <StudentTrainingVideos />
      </div>
    </section>
  );
}
