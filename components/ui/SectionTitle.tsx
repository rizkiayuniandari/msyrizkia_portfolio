interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12">
      <span className="mb-4 inline-block rounded-full bg-pink-200/70 px-5 py-2 text-sm font-semibold text-pink-700">
        {eyebrow}
      </span>

      <h2 className="font-serif text-5xl font-medium tracking-tight text-slate-800 md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}