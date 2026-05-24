export function OrnamentDivider({ variant = "simple" }: { variant?: "simple" | "section" }) {
  if (variant === "section") {
    return (
      <div className="text-center text-gold text-2xl tracking-ornament my-8 select-none">
        ☦ ☦ ☦
      </div>
    );
  }
  return (
    <div className="text-center text-gold text-xl tracking-ornament my-6 select-none">
      ☦ ❧ ☦
    </div>
  );
}

export function SectionTitle({ children, numeral }: { children: React.ReactNode; numeral?: string }) {
  return (
    <header className="text-center mt-12 mb-2">
      <h1 className="font-display text-burgundy-deep text-3xl tracking-title">
        {numeral && <span className="text-gold mr-2">{numeral} ·</span>}
        {children}
      </h1>
      <div className="text-gold text-lg tracking-ornament mt-2 select-none">☦ ❧ ☦</div>
    </header>
  );
}
