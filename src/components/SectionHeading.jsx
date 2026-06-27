export default function SectionHeading({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={`mb-10 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-lime-300">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-zinc-300 sm:text-lg">{children}</p>}
    </div>
  );
}
