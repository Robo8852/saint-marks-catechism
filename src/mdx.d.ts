declare module "*.mdx" {
  import type { ComponentType } from "react";
  export const meta: {
    title: string;
    subtitle?: string;
    date: string; // ISO yyyy-mm-dd
    slug: string;
    epigraph?: { text: string; citation: string };
  };
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
