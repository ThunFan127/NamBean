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
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let isTicking = false;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (isTicking) return;

      isTicking = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;
        const shouldBeScrolled = currentScrollY > 56;
        const isMobileViewport = window.innerWidth < 1024;

        setIsScrolled((currentValue) =>
          currentValue === shouldBeScrolled ? currentValue : shouldBeScrolled,
        );

        setIsHeaderHidden((currentValue) => {
          const shouldHide =
            isMobileViewport && currentScrollY > 96 && scrollDelta > 8;
          const shouldShow =
            !isMobileViewport || currentScrollY < 48 || scrollDelta < -6;

          if (shouldHide) return true;
          if (shouldShow) return false;
          return currentValue;
        });

        if (shouldBeScrolled) {
          setIsMobileMenuOpen((isOpen) => (isOpen ? false : isOpen));
        }

        lastScrollY = currentScrollY;
        isTicking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:translate-y-0 ${
        isHeaderHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-[72px] border-b border-white/10 bg-zinc-950/95 backdrop-blur-sm transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? "-translate-y-3 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      />
      <div
        className={`relative mx-auto flex w-[calc(100%-32px)] items-center justify-between gap-4 border py-3 transition-[max-width,margin-top,border-radius,background-color,border-color,box-shadow,backdrop-filter,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? "mt-3 max-w-5xl translate-y-0 rounded-full border-white/10 bg-zinc-950/80 px-5 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl"
            : "mt-0 max-w-[1120px] translate-y-0 rounded-none border-transparent bg-transparent px-0 shadow-none backdrop-blur-0"
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
          onClick={() => {
            setIsHeaderHidden(false);
            setIsMobileMenuOpen((isOpen) => !isOpen);
          }}
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
