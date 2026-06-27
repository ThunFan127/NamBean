import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { studentFeedbacks } from "../data/testimonialsData.js";

export default function Testimonials() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);

    requestAnimationFrame(() => {
      setIsModalVisible(true);
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);

    setTimeout(() => {
      setSelectedItem(null);
    }, 220);
  };

  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <section id="feedback" className="section-padding border-b border-white/10">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Kết quả"
          title="Học viên đã thay đổi như thế nào?"
        >
          Mỗi hành trình có một điểm bắt đầu khác nhau. Điều quan trọng là học
          viên được tập đúng, ăn phù hợp và có người theo sát để duy trì kết
          quả.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-3">
          {studentFeedbacks.map((item) => (
            <article
              key={item.label}
              onClick={() => openModal(item)}
              className="group cursor-zoom-in overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_24px_70px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-lime-300/55 hover:bg-white/[0.06]"
            >
              <div className="relative grid grid-cols-2 gap-px bg-white/10">
                <TransformationImage label="Before" src={item.before} />
                <TransformationImage label="After" src={item.after} highlight />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                  <span className="rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                    Xem rõ thay đổi
                  </span>
                </div>
              </div>

              <div className="relative p-6">
                <span className="absolute right-5 top-4 text-7xl font-black leading-none text-lime-300/[0.08]">
                  "
                </span>

                <p className="relative text-xs font-black uppercase tracking-[0.22em] text-lime-200">
                  {item.label}
                </p>

                <h3 className="relative mt-3 text-xl font-black leading-tight text-white">
                  {item.title}
                </h3>

                <blockquote className="relative mt-4 border-l-2 border-lime-300/45 pl-4 text-[0.95rem] leading-7 text-zinc-300">
                  “{item.quote}”
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedItem && (
        <TransformationLightbox
          item={selectedItem}
          isVisible={isModalVisible}
          onClose={closeModal}
        />
      )}
    </section>
  );
}

function TransformationImage({ label, src, highlight = false }) {
  return (
    <figure className="relative bg-zinc-950">
      <div className="aspect-[3/5] overflow-hidden">
        <img
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          src={src}
          alt={`${label} transformation`}
          loading="lazy"
        />
      </div>

      <figcaption
        className={`absolute left-3 top-3 rounded-md border px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.18em] backdrop-blur ${
          highlight
            ? "border-lime-300/40 bg-lime-300/18 text-lime-100"
            : "border-white/15 bg-zinc-950/65 text-zinc-200"
        }`}
      >
        {label}
      </figcaption>
    </figure>
  );
}

function TransformationLightbox({ item, isVisible, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center px-4 py-6 transition duration-200 ${
        isVisible
          ? "bg-black/45 backdrop-blur-[2px]"
          : "bg-black/0 backdrop-blur-0"
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative w-full max-w-5xl transition duration-200 ease-out ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-3 scale-[0.97] opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-3 -top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-zinc-950/90 text-xl font-bold leading-none text-white shadow-xl backdrop-blur transition hover:border-lime-300/60 hover:bg-lime-300 hover:text-zinc-950"
          aria-label="Đóng"
        >
          ×
        </button>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/90 shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            <LightboxImage label="Before" src={item.before} />
            <LightboxImage label="After" src={item.after} highlight />
          </div>
        </div>

        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-zinc-200 drop-shadow">
          {item.title}
        </p>
      </div>
    </div>
  );
}

function LightboxImage({ label, src, highlight = false }) {
  return (
    <figure className="relative bg-black">
      <div className="aspect-[4/5] max-h-[72vh] overflow-hidden bg-zinc-950 md:aspect-[3/4]">
        <img
          src={src}
          alt={`${label} transformation enlarged`}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <figcaption
        className={`absolute left-4 top-4 rounded-md border px-3 py-1.5 text-[0.7rem] font-black uppercase tracking-[0.18em] backdrop-blur ${
          highlight
            ? "border-lime-300/40 bg-lime-300/20 text-lime-100"
            : "border-white/15 bg-zinc-950/70 text-zinc-200"
        }`}
      >
        {label}
      </figcaption>
    </figure>
  );
}
