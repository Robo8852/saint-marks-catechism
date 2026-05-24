import { Link } from "react-router-dom";
import { lessons } from "../lessons";
import ThreeBarCross from "../components/ThreeBarCross";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${monthNames[m - 1]} ${d}, ${y}`;
}

export default function IndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-8">
      <section className="text-center pb-8 border-b border-gold/40 mb-10">
        <div className="flex justify-center mb-4">
          <ThreeBarCross size={88} />
        </div>
        <p className="font-serif italic text-burgundy tracking-ornament text-sm mb-2">
          ❧ ΟΡΘΟΔΟΞΙΑ ❧
        </p>
        <h1 className="font-display text-burgundy-deep text-5xl tracking-title leading-tight">
          Saint Mark&rsquo;s
          <br />
          Catechism
        </h1>
        <p className="mt-4 font-serif italic text-burgundy text-lg">
          Lessons on the Faith of the Holy Orthodox Church
        </p>
      </section>

      <h2 className="font-serif text-burgundy tracking-smallcaps text-xl uppercase mb-6 text-center">
        Lessons
      </h2>

      {lessons.length === 0 ? (
        <p className="text-center italic text-burgundy">No lessons yet.</p>
      ) : (
        <ul className="space-y-4">
          {lessons.map(({ meta }) => (
            <li key={meta.slug}>
              <Link
                to={`/lessons/${meta.slug}`}
                className="block group border border-gold/40 bg-parchment/50 hover:bg-gold-pale/40 transition px-6 py-5 rounded-sm"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-display text-burgundy-deep text-2xl tracking-title group-hover:text-burgundy">
                      {meta.title}
                    </h3>
                    {meta.subtitle && (
                      <p className="font-serif italic text-burgundy text-base mt-1">
                        {meta.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif text-gold-dim tracking-smallcaps text-xs uppercase">
                      {formatDate(meta.date)}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
