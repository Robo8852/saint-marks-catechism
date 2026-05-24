import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getLessonBySlug } from "../lessons";
import ThreeBarCross from "../components/ThreeBarCross";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${monthNames[m - 1]} ${d}, ${y}`;
}

export default function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const lesson = slug ? getLessonBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!lesson) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p className="font-serif italic text-burgundy text-lg">Lesson not found.</p>
        <Link to="/" className="inline-block mt-4 font-serif text-burgundy underline decoration-gold">
          Return to lessons
        </Link>
      </div>
    );
  }

  const { meta, Component } = lesson;

  return (
    <article className="max-w-3xl mx-auto px-6 py-10">
      {/* Lesson cover */}
      <header className="text-center pb-10 mb-2 border-b border-gold/40 relative">
        <div className="flex justify-center mb-6">
          <ThreeBarCross size={96} />
        </div>
        <p className="font-serif italic text-burgundy tracking-ornament text-sm mb-2">
          ❧ ΟΡΘΟΔΟΞΙΑ ❧
        </p>
        <h1 className="font-display text-burgundy-deep text-4xl md:text-5xl tracking-title leading-tight">
          {meta.title}
        </h1>
        {meta.subtitle && (
          <p className="mt-3 font-serif italic text-burgundy text-xl">{meta.subtitle}</p>
        )}
        <div className="text-gold tracking-ornament text-xl mt-6 select-none">☦ ❧ ☦</div>
        <p className="mt-4 font-serif text-gold-dim tracking-smallcaps text-xs uppercase">
          {formatDate(meta.date)}
        </p>
        {meta.epigraph && (
          <figure className="mt-8 mx-auto max-w-xl italic text-burgundy font-serif">
            <blockquote className="text-base leading-relaxed">
              &ldquo;{meta.epigraph.text}&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-xs tracking-smallcaps text-gold-dim uppercase not-italic">
              — {meta.epigraph.citation}
            </figcaption>
          </figure>
        )}
      </header>

      {/* Lesson body */}
      <div className="prose-orthodox">
        <Component />
      </div>

      <div className="text-center mt-16 mb-4">
        <div className="text-burgundy text-3xl tracking-ornament select-none">☦ † ☦</div>
        <p className="font-serif text-burgundy tracking-smallcaps text-sm mt-4 uppercase">
          Glory to the Father, and to the Son, and to the Holy Spirit,
          <br />
          now and ever and unto the ages of ages. Amen.
        </p>
        <p className="font-serif italic text-gold-dim text-sm mt-2">
          Δόξα Πατρὶ καὶ Υἱῷ καὶ Ἁγίῳ Πνεύματι.
        </p>
      </div>

      <div className="text-center mt-10">
        <Link
          to="/"
          className="font-serif text-burgundy hover:text-burgundy-deep tracking-smallcaps text-sm uppercase underline decoration-gold underline-offset-4"
        >
          ← All Lessons
        </Link>
      </div>
    </article>
  );
}
