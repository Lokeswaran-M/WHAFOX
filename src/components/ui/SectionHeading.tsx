interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={`${isCentered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 mb-3 ${
            isCentered ? 'justify-center' : ''
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6002]" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF6002]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-[#17191D] leading-[1.18]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#6B7280] leading-[1.65]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
