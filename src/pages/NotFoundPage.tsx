import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-burgundy-deep text-5xl tracking-title">404</h1>
      <p className="font-serif italic text-burgundy text-lg mt-4">
        The page you seek is not here.
      </p>
      <Link
        to="/"
        className="inline-block mt-8 font-serif text-burgundy underline decoration-gold tracking-smallcaps text-sm uppercase"
      >
        Return to the lessons
      </Link>
    </div>
  );
}
