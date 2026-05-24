import type { ComponentType } from "react";

export type LessonMeta = {
  title: string;
  subtitle?: string;
  date: string;
  slug: string;
  epigraph?: { text: string; citation: string };
};

export type Lesson = {
  meta: LessonMeta;
  Component: ComponentType;
};

const modules = import.meta.glob<{ default: ComponentType; meta: LessonMeta }>(
  "./content/lessons/*.mdx",
  { eager: true }
);

export const lessons: Lesson[] = Object.values(modules)
  .map((m) => ({ meta: m.meta, Component: m.default }))
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.meta.slug === slug);
}
