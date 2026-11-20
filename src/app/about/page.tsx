
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e9] text-[#242820]">
      <header className="flex flex-wrap items-center justify-between gap-5 px-6 py-7 md:px-16">
        <Link href="/" className="text-2xl font-semibold tracking-[0.18em]">
          ATELIER.
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-5 text-xs uppercase tracking-wider md:gap-8"
        >
          <Link href="/about" aria-current="page" className="hover:opacity-60">
            About
          </Link>
          <Link href="/services" className="hover:opacity-60">
            Services
          </Link>
          <Link
            href="/contact"
            className="border border-[#242820] px-5 py-3 transition-colors hover:bg-[#242820] hover:text-white"
          >
            Start a Project
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-16 md:pt-32">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#77786f]">
          The Studio / 001
        </p>

        <h1 className="max-w-5xl text-5xl font-light leading-[1.08] tracking-tight sm:text-6xl md:text-8xl">
          Design begins
          <br />
          with listening.
        </h1>

        <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#6b6d65]">
          We believe the most meaningful spaces are created through
          curiosity, collaboration, and careful attention to detail.
        </p>
      </section>

      <section className="px-6 md:px-16">
        <div className="relative h-[380px] overflow-hidden md:h-[650px]">
          <Image
            src="/images/atelier-about.jpg"
            alt="Contemporary architecture and interior design study"
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover"
          />
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#77786f]">
          A study of material, light, and space
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2 md:px-16">
        <p className="text-xs uppercase tracking-[0.3em]">
          Our Philosophy
        </p>

        <div>
          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Thoughtful spaces. Lasting impressions.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-[#6b6d65]">
            <p>
              ATELIER is a fictional architecture and design studio
              exploring the relationship between people, materials,
              and the environments they inhabit.
            </p>
            <p>
              Our conceptual approach combines simplicity, natural
              textures, and architectural clarity to create spaces
              that feel purposeful and enduring.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eae5db] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.3em]">
            Our Principles
          </p>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              ["01", "Simplicity", "Every detail serves a purpose."],
              ["02", "Materiality", "Natural textures create warmth and character."],
              ["03", "Connection", "Design responds to the people who inhabit it."],
            ].map(([number, title, description]) => (
              <article key={number} className="border-t border-[#a9a79e] pt-6">
                <span className="text-xs text-[#77786f]">{number}</span>
                <h3 className="mt-7 text-3xl font-light">{title}</h3>
                <p className="mt-4 leading-relaxed text-[#6b6d65]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#242820] px-6 py-24 text-[#f5f1e9] md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-4xl font-light leading-tight md:text-6xl">
            Explore what thoughtful design can become.
          </h2>
          <Link
            href="/services"
            className="mt-10 inline-block border-b border-[#f5f1e9] pb-2 text-xs uppercase tracking-widest"
          >
            Explore our services ↗
          </Link>
        </div>
      </section>

      <footer className="flex flex-wrap justify-between gap-4 px-6 py-8 text-xs uppercase tracking-widest md:px-16">
        <span>ATELIER — Concept Studio</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
