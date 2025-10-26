import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { WORK } from "@/lib/work";

export async function generateStaticParams() {
  return WORK.map(w => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = WORK.find(w => w.slug === params.slug);
  if (!item) return {};
  return {
    title: `${item.title} · Work`,
    description: item.summary,
    openGraph: { title: item.title, description: item.summary },
  };
}

export default function WorkCase({ params }: { params: { slug: string } }) {
  const item = WORK.find(w => w.slug === params.slug);
  if (!item) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-zinc-200">
      <nav className="text-sm text-zinc-400">
        <Link href="/#work" className="hover:text-zinc-200">← Back to work</Link>
      </nav>

      <h1 className="mt-6 text-3xl font-semibold text-zinc-50">{item.title}</h1>
      <p className="mt-2 text-sm text-emerald-400/90">Impact: {item.impact}</p>

      <p className="mt-6 text-zinc-300 leading-relaxed">{item.body ?? item.summary}</p>
    </main>
  );
}

