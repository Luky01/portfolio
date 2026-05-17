type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: SectionHeadingProps) {
  return (
    <div className="section-shell max-w-2xl pt-7 sm:pt-8">
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}
