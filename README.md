# Saint Mark's Catechism

A web home for the recorded catechism lessons of Saint Mark.

Built with **Vite + React + TypeScript + Tailwind CSS**, with lesson content
authored in **MDX** so each session is a single self-contained file.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run typecheck
```

## Adding a new lesson

1. Create a file under `src/content/lessons/` named `YYYY-MM-DD-topic.mdx`.
2. Export a `meta` object with `title`, `subtitle?`, `date`, `slug`,
   and optional `epigraph`.
3. Author the body in MDX, using the custom components:
   - `<SectionTitle numeral="I">…</SectionTitle>`
   - `<Scripture cite="John 3:5">…</Scripture>`
   - `<Canon source="Council of …">…</Canon>`
   - `<OrnamentDivider variant="section" />`
   - `<ThreeBarCross />`

The lesson is automatically picked up by the index page; no other wiring needed.

## Project layout

```
src/
  components/         # ThreeBarCross, Ornament, Scripture, MDX provider
  content/lessons/    # MDX lesson files (auto-discovered)
  pages/              # IndexPage, LessonPage, NotFoundPage
  App.tsx             # router + header/footer
  main.tsx            # app entrypoint
  lessons.ts          # MDX module discovery via import.meta.glob
```

## Deployment

Targeted for **Vercel**. After `gh repo create`, import the repo into Vercel —
the default Vite preset handles build (`npm run build`) and output (`dist/`)
with no extra configuration.
