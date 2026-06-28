import { useEffect, useState } from "react";
import CTAButton from "./CTAButton.jsx";

const logoImage = "/images/nam-bean-logo.png";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setIsMobileMenuOpen(false);
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
          <img
            className="size-11 rounded-md border border-lime-300/35 bg-zinc-950 object-contain p-1 shadow-[0_0_24px_rgba(190,242,100,0.12)]"
            src={logoImage}
            alt="Nam Bean logo"
          />
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
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Tư vấn
        </a>
        <button
          className="grid size-11 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-lime-200 transition hover:border-lime-300/50 hover:bg-lime-300/10 lg:hidden"
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span className="grid gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mx-auto mt-2 w-[calc(100%-32px)] overflow-hidden rounded-xl border border-white/10 bg-zinc-950/95 shadow-[0_20px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "max-h-96 translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="grid gap-1 p-2">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              className="rounded-lg px-4 py-3 text-sm font-bold text-zinc-200 transition hover:bg-lime-300/10 hover:text-lime-200"
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
