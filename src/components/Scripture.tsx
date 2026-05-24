type ScriptureProps = {
  cite: string;
  children: React.ReactNode;
};

export function Scripture({ cite, children }: ScriptureProps) {
  return (
    <figure className="my-6 mx-2 md:mx-8 px-6 py-4 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border-y border-gold/60">
      <figcaption className="text-center font-serif text-burgundy tracking-smallcaps text-sm mb-2 uppercase">
        {cite}
      </figcaption>
      <blockquote className="text-center italic text-burgundy-deep text-lg leading-relaxed">
        {children}
      </blockquote>
    </figure>
  );
}

export function Canon({ source, children }: { source?: string; children: React.ReactNode }) {
  return (
    <figure className="my-6 mx-4 md:mx-8 px-5 py-3 border-l-4 border-gold bg-gold-pale/30">
      <blockquote className="italic text-ink/90 text-[1.0625rem] leading-relaxed">
        {children}
      </blockquote>
      {source && (
        <figcaption className="mt-2 text-right font-serif text-burgundy tracking-smallcaps text-xs uppercase">
          — {source}
        </figcaption>
      )}
    </figure>
  );
}
