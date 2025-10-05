import Image from "next/image";
import { ArrowRight, Mail, Github, Linkedin, FileText, ExternalLink, Flame, PenTool, Wallet } from "lucide-react";
import { LinkButton } from "@/components/Button";
import { PawnIcon } from "@/components/icons/Pawn";
import headshot from "@/public/jordan-headshot.jpg";

export default function SiteLanding() {
  const SHOW_WRITING = false;
  return (
    <main className="min-h-screen text-zinc-200 antialiased">
      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "16px 16px" }}
      />

      {/* Top nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/5">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-zinc-100 text-lg">Jordan Lopez</a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-white/90">Work</a>
            {SHOW_WRITING && <a href="#writing" className="hover:text-white/90">Writing</a>}
            <a href="#about" className="hover:text-white/90">About</a>
            <LinkButton href="#contact" variant="outline" size="sm" leftIcon={<Mail size={16} aria-hidden="true" />}>Contact</LinkButton>
          </div>
        </nav>
      </header>

      {/* Hero with headshot */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" style={{ height: 520, width: 520 }} />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT: text + CTAs */}
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                <Flame size={14} aria-hidden="true" />
                <span>Constantly looking for new problems</span>
              </p>
              <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-50 leading-tight">
                Product Manager focused on fintech, data, and delightful UX.
              </h1>
              <p className="mt-4 text-lg text-zinc-300">
              Solving technical challenges. Aerospace engineering background turned into fintech PM. Previously aerospace engineer → systems engineer → fintech PM. I focus on learning the latest technologies and integrating them within my product roadmaps.              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="#work" variant="primary" rightIcon={<ArrowRight size={16} aria-hidden="true" />}>See selected work</LinkButton>
                {SHOW_WRITING && (<LinkButton href="#writing" variant="outline" rightIcon={<PenTool size={16} aria-hidden="true" />}>Read notes</LinkButton>)}
                <LinkButton href="/Jordan_Lopez_Resume.pdf" variant="outline" rightIcon={<FileText size={16} aria-hidden="true" />}>Resume</LinkButton>
              </div>
            </div>

            {/* RIGHT: headshot */}
            <div className="relative mx-auto w-64 sm:w-72 lg:w-[420px]">
              {/* soft glow */}
              <div className="absolute -inset-3 rounded-3xl bg-emerald-500/10 blur-2xl" aria-hidden />
              <Image src={headshot} alt="Portrait of Jordan Lopez" placeholder="blur" priority className="relative rounded-3xl border border-white/10 bg-white/5 object-cover shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Outcome-driven", desc: "Tie features to KPIs: lift adoption, cut costs, improve NPS." },
            { title: "Data + AI", desc: "SQL for insight and discovery; AI tools to automate and prototype." },
            { title: "Influential leader", desc: "Partners across functions to deliver seamless customer experiences." },
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
          <a className="text-sm text-zinc-300 hover:text-white/90 inline-flex items-center gap-1" href="#contact">
            <span>See more</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            {
              tag: "Capital One · Self-Serve Experience",
              title: "New title maintenance experience",
              impact: "-$800k/yr op-ex, +status transparency",
              body: "Led strategy for Capital One Auto Finance’s title maintenance experience, bringing a self-serve workflow with clear comms and agent tooling.",
            },
            {
              tag: "Data migration · QA → Prod",
              title: "Platform migration QA strategy",
              impact: "7M+ accts · 100+ attributes integrity",
              body: "Led validation and business-logic testing between legacy to next-gen platform to ensure continuity across servicing platforms.",
            },
          ].map((p, i) => (
            <article key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 hover:border-white/20 transition">
              <p className="text-xs uppercase tracking-widest text-zinc-400">{p.tag}</p>
              <h3 className="mt-2 text-lg font-medium text-zinc-100">{p.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{p.body}</p>
              <p className="mt-3 text-xs text-emerald-400/90">Impact: {p.impact}</p>
              <LinkButton href="#work" variant="ghost" size="sm" className="mt-4" rightIcon={<ArrowRight size={16} aria-hidden="true" />}>Read more</LinkButton>
            </article>
          ))}
        </div>
      </section>

      {SHOW_WRITING && (
      <section id="writing" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50">Writing</h2>
          <a className="text-sm text-zinc-300 hover:text-white/90 inline-flex items-center gap-1" href="/writing">
            <span>Browse all</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <a key={i} href="/writing/financial-basics" className="block rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
              <p className="text-xs text-zinc-400">Sept {20 + i}, 2025</p>
              <h3 className="mt-2 text-lg font-medium text-zinc-100">On financial basics: building blocks that compound</h3>
              <p className="mt-1 text-sm text-zinc-300">Short, practical notes I wish more folks learned earlier—simple beats clever.</p>
            </a>
          ))}
        </div>
      </section> 
      )}

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50">About</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              Hi there, I’m Jordan! Studied Aerospace Engineering at UCF → Systems Engineer @ Northrop Grumman → Product @ Capital One. I thrive in complex, fast-paced environments. I lead roadmaps with a partnership mindset and I’m always looking for strategies to deliver effectively.
              I’m currently learning new technologies to ship great software. I’m also a big advocate for AI/ML and push myself to use new tools in both my day-to-day work and personal projects.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm">
              <LinkButton href="mailto:jordanjlopez459@gmail.com" variant="outline" size="sm" leftIcon={<Mail size={16} aria-hidden="true" />}>Email</LinkButton>
              <LinkButton
                href="https://github.com/Jordan-Jacob-Lopez"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                leftIcon={<Github size={16} aria-hidden="true" />}>
                GitHub
              </LinkButton>
              <LinkButton
                href="https://www.linkedin.com/in/jordan-jacob-lopez/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                leftIcon={<Linkedin size={16} aria-hidden="true" />}>
                LinkedIn
              </LinkButton>
              <LinkButton
                href="https://www.chess.com/member/jordanlopezzzzzzzz"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                leftIcon={<PawnIcon width={16} height={16} />}>
                Chess.com
              </LinkButton>
              <LinkButton
                href="https://jordan-jacob-lopez.github.io/jordan-finance-site/" 
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                leftIcon={<Wallet size={16} aria-hidden="true" />}>
                Finance Page
              </LinkButton>

            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-zinc-100 font-medium">Now</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                <li>• Exploring capabilities with LLMs like GPT-5, Claude, Llama, and Gemini.</li>
                <li>• Building a finance site to blog and podcast on my financial journey and highlight intersting case studies or topics.</li>
                <li>• Training jiu-jitsu, soccer nights, chess tactics, learning spanish, and drinking a lot of coffee.</li>
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
              <h2 className="text-2xl font-semibold text-zinc-50">Want to chat?</h2>
              <p className="mt-1 text-zinc-300">I love collaborating on fintech, data, and customer problems.</p>
            </div>
            <LinkButton href="mailto:jordanjlopez459@gmail.com" variant="primary" rightIcon={<ArrowRight size={16} aria-hidden="true" />}>Let’s chat</LinkButton>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Jordan Lopez</p>
        </div>
      </footer>
    </main>
  );
}