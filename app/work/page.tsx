// app/work/page.tsx
import { WORK } from "@/lib/work";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Work",
  description: "Case studies and selected projects",
};

export default function WorkIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 text-zinc-200">
      <h1 className="text-3xl font-semibold text-zinc-50">All Work</h1>
      <p className="mt-2 text-zinc-300">Case studies and selected projects.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {WORK.map((p) => (
          <article key={p.slug} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 hover:border-white/20 transition">
            <p className="text-xs uppercase tracking-widest text-zinc-400">{p.tag}</p>
            <h2 className="mt-2 text-lg font-medium text-zinc-100">{p.title}</h2>
            <p className="mt-1 text-sm text-zinc-300">{p.summary}</p>
            <p className="mt-3 text-xs text-emerald-400/90">Impact: {p.impact}</p>
            <Link
              href={`/work/${p.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white/90"
            >
              <span>Read case study</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
