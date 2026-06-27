import { useEffect, useState } from "react";
import CTAButton from "./CTAButton.jsx";

const navItems = [
  ["Giới thiệu", "#about"],
  ["Chuyên môn", "#expertise"],
  ["Dịch vụ", "#services"],
  ["Quy trình", "#process"],
  ["Nhật Ký", "#mediaGallery"],
  ["Feedback", "#feedback"],
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ease-out ${
        isScrolled
          ? "border-transparent bg-transparent px-4 pt-3"
          : "border-b border-white/10 bg-zinc-950/95 px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between gap-4 transition-all duration-300 ease-out ${
          isScrolled
            ? "max-w-5xl rounded-full border border-white/10 bg-zinc-950/80 px-5 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "section-shell rounded-none border border-transparent py-3"
        }`}
      >
        <a href="#hero" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-md border border-lime-300/50 bg-lime-300 text-sm font-black text-zinc-950">
            NB
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-wide text-white">
              Nam Bean
            </span>
            <span className="hidden text-xs text-zinc-400 sm:block">
              PT Freelance
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              className="text-sm font-semibold text-zinc-300 transition hover:text-lime-200"
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <CTAButton href="#contact">Book lịch tư vấn</CTAButton>
        </div>
        <a
          className="text-sm font-bold text-lime-200 sm:hidden"
          href="#contact"
        >
          Tư vấn
        </a>
      </div>
    </header>
  );
}
