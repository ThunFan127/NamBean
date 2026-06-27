export default function CTAButton({
  href = "#contact",
  variant = "primary",
  children,
  className = "",
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-bold uppercase tracking-wide transition duration-200 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-zinc-950";
  const variants = {
    primary:
      "bg-lime-300 text-zinc-950 hover:bg-lime-200 hover:shadow-[0_0_28px_rgba(190,242,100,0.25)]",
    secondary:
      "border border-zinc-700 bg-zinc-900/60 text-white hover:border-lime-300 hover:text-lime-200",
    orange: "bg-orange-500 text-white hover:bg-orange-400",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} href={href}>
      {children}
    </a>
  );
}
