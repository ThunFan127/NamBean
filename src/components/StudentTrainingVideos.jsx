import TrainingVideoCard from './TrainingVideoCard.jsx';
import { studentTrainingVideos } from '../data/mediaData.js';

export default function StudentTrainingVideos() {
  return (
    <div className="mt-12">
      <div className="mb-6 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-lime-300">
            Coaching học viên
          </p>
          <h3 className="mt-3 text-2xl font-black text-white">Theo dõi từng buổi tập thật</h3>
        </div>
        <p className="max-w-xl text-sm leading-6 text-zinc-400">
          Những khoảnh khắc này cho thấy cách Nam quan sát kỹ thuật, điều chỉnh bài tập và theo
          dõi tiến độ của học viên trong quá trình coaching.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {studentTrainingVideos.map((item) => (
          <TrainingVideoCard key={item.label} item={item} compact />
        ))}
      </div>
    </div>
  );
}
