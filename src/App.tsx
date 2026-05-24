import { Routes, Route, Link, useLocation } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LessonPage from "./pages/LessonPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/lessons/:slug" element={<LessonPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  return (
    <header className="border-b border-gold/40 bg-parchment/60 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <svg width="28" height="42" viewBox="0 0 120 180" aria-hidden>
            <defs>
              <linearGradient id="hg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e8c460" />
                <stop offset="50%" stopColor="#b8860b" />
                <stop offset="100%" stopColor="#8a6a23" />
              </linearGradient>
            </defs>
            <rect x="54" y="6" width="12" height="170" fill="url(#hg)" stroke="#6b1e1e" strokeWidth="1.2" />
            <rect x="38" y="22" width="44" height="8" fill="url(#hg)" stroke="#6b1e1e" strokeWidth="1.2" />
            <rect x="14" y="56" width="92" height="14" fill="url(#hg)" stroke="#6b1e1e" strokeWidth="1.2" />
            <polygon points="22,118 98,108 98,122 22,132" fill="url(#hg)" stroke="#6b1e1e" strokeWidth="1.2" />
          </svg>
          <span className="font-display text-burgundy-deep text-lg tracking-title group-hover:text-burgundy">
            Saint Mark&rsquo;s Catechism
          </span>
        </Link>
        {!onHome && (
          <Link
            to="/"
            className="text-sm font-serif text-burgundy hover:text-burgundy-deep tracking-smallcaps uppercase"
          >
            All Lessons
          </Link>
        )}
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-gold/40 py-8 text-center">
      <div className="text-gold text-lg tracking-ornament mb-2">☦ ❧ ☦</div>
      <p className="font-serif text-burgundy text-sm tracking-smallcaps">
        Glory to the Father, and to the Son, and to the Holy Spirit
      </p>
      <p className="font-serif italic text-gold-dim text-xs mt-1">
        Δόξα Πατρὶ καὶ Υἱῷ καὶ Ἁγίῳ Πνεύματι
      </p>
    </footer>
  );
}
