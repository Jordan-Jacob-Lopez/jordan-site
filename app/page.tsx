'use client';
import React, { useEffect } from "react";
import { ArrowRight, Mail, Github, Linkedin, FileText, ExternalLink, Flame, PenTool } from "lucide-react";
import { LinkButton } from "@/components/Button";

// Clean JSX + strict-compiler-safe version
// - Icons are explicit children (text then icon) so strict parsers don't misread angle brackets
// - Uses Button/LinkButton for consistent CTA styling
// - Avoids Tailwind arbitrary values; uses standard utilities or inline styles
// - Adds lightweight runtime checks ("test cases") in a useEffect to validate CTA structure

export default function SiteLanding() {
  // --- Runtime "tests" (dev sanity checks) ---
  useEffect(() => {
    try {
      const workCta = document.querySelector('a[href="#work"]');
      const pass1 =
        !!workCta &&
        !!workCta.firstElementChild &&
        !!workCta.lastElementChild &&
        workCta.firstElementChild.tagName.toLowerCase() === "span" &&
        workCta.lastElementChild.tagName.toLowerCase() === "svg";
      if (!pass1) console.error("[Test] Work CTA structure: expected text then icon");
  
      const ctas = Array.from(document.querySelectorAll("a.inline-flex"));
      const failing = ctas.filter(a => a.lastElementChild?.tagName.toLowerCase() !== "svg");
      if (failing.length !== 0) console.error(`[Test] CTA icon position: ${failing.length} failures`);
  
      const main = document.querySelector("main");
      if (!main) console.error("[Test] <main> not found");
    } catch (e) {
      console.error("[Test] runtime checks failed", e);
    }
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 text-zinc-200 antialiased">
      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}
      />

      {/* Top nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/5">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-zinc-100 text-lg">Jordan Lopez</a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-white/90">Work</a>
            <a href="#writing" className="hover:text-white/90">Writing</a>
            <a href="#about" className="hover:text-white/90">About</a>
            <LinkButton href="#contact" variant="outline" size="sm" leftIcon={<Mail size={16} aria-hidden="true" />}>Contact</LinkButton>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" style={{ height: 520, width: 520 }} />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <Flame size={14} aria-hidden="true" />
              <span>Building useful, calm software</span>
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-50 leading-tight">
              Product Manager & tinkerer focused on fintech, data, and delightful UX.
            </h1>
            <p className="mt-4 text-lg text-zinc-300">
              I ship outcomes. Former aerospace → systems → fintech PM. I explore ML-powered product loops, self-serve flows, and clear comms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="#work" variant="primary" rightIcon={<ArrowRight size={16} aria-hidden="true" />}>See selected work</LinkButton>
              <LinkButton href="#writing" variant="outline" rightIcon={<PenTool size={16} aria-hidden="true" />}>Read notes</LinkButton>
              <LinkButton href="/Jordan_Lopez_Resume.pdf" variant="outline" rightIcon={<FileText size={16} aria-hidden="true" />}>Resume</LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Outcome-driven', desc: 'Tie features to KPIs: lift adoption, cut cost, improve NPS.' },
            { title: 'Data + AI', desc: 'SQL for insight; pragmatic ML to personalize and automate.' },
            { title: 'Systems thinker', desc: 'Zoom from UX to compliance, risk, and SOR migrations.' },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-zinc-100 font-medium">{c.title}</h3>
              <p className="mt-1 text-sm text-zinc-300/90">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50">Selected Work</h2>
          <LinkButton href="#contact" variant="ghost" size="sm" rightIcon={<ExternalLink size={14} aria-hidden="true" />}>See more</LinkButton>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            {
              tag: 'Auto Finance · Self-Serve',
              title: 'Title maintenance flow: change-of-state',
              impact: '-$800k/yr op-ex, +status transparency',
              body: 'Designed and shipped a self-serve workflow with clear comms and agent tooling, spanning DMV integrations and SOR constraints.',
            },
            {
              tag: 'Data migration · QA',
              title: 'Platform migration QA strategy',
              impact: '7M+ accts · 100+ attrs integrity',
              body: 'Led risk-based validation and business-logic testing to ensure continuity across servicing platforms.',
            },
          ].map((p, i) => (
            <article key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 hover:border-white/20 transition">
              <p className="text-xs uppercase tracking-widest text-zinc-400">{p.tag}</p>
              <h3 className="mt-2 text-lg font-medium text-zinc-100">{p.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{p.body}</p>
              <p className="mt-3 text-xs text-emerald-400/90">Impact: {p.impact}</p>
              <LinkButton href="#" variant="ghost" size="sm" className="mt-4" rightIcon={<ArrowRight size={16} aria-hidden="true" />}>Read case study</LinkButton>
            </article>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50">Writing</h2>
          <LinkButton href="#" variant="ghost" size="sm" rightIcon={<ExternalLink size={14} aria-hidden="true" />}>Browse all</LinkButton>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <a key={i} href="#" className="block rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
              <p className="text-xs text-zinc-400">Sept {20 + i}, 2025</p>
              <h3 className="mt-2 text-lg font-medium text-zinc-100">On financial basics: building blocks that compound</h3>
              <p className="mt-1 text-sm text-zinc-300">Short, practical notes I wish more folks learned earlier—simple beats clever.</p>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50">About</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              I‘m Jordan—UCF Aerospace ‘21 → Systems Engineer → Product at Capital One. I like clean, dark UIs, sharp typography, and building calm, useful tools. I‘m currently learning more about ML for product loops and shipping a personal finance site to share approachable guidance.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm">
              <LinkButton href="mailto:jordan@example.com" variant="outline" size="sm" leftIcon={<Mail size={16} aria-hidden="true" />}>Email</LinkButton>
              <LinkButton href="https://github.com/" variant="outline" size="sm" leftIcon={<Github size={16} aria-hidden="true" />}>GitHub</LinkButton>
              <LinkButton href="https://linkedin.com/" variant="outline" size="sm" leftIcon={<Linkedin size={16} aria-hidden="true" />}>LinkedIn</LinkButton>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-zinc-100 font-medium">Now</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                <li>• Exploring ML for onboarding, risk, and comms.</li>
                <li>• Writing theBasics series for my finance site.</li>
                <li>• Training jiu-jitsu, soccer nights, and chess tactics.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-50">Have a project or idea?</h2>
              <p className="mt-1 text-zinc-300">I love collaborating on fintech, data, and UX problems.</p>
            </div>
            <LinkButton href="mailto:jordan@example.com" variant="primary" rightIcon={<ArrowRight size={16} aria-hidden="true" />}>Let‘s chat</LinkButton>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Jordan Lopez</p>
          <p>Set in Lora for body, system sans for UI.</p>
        </div>
      </footer>
    </main>
  );
}

