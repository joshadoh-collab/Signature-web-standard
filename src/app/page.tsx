
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Architecture",
    description:
      "Purposeful spaces shaped by context, proportion, and the way people live.",
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Considered interiors that bring together natural materials, light, and comfort.",
  },
  {
    number: "03",
    title: "Design Consultation",
    description:
      "Collaborative guidance to turn early ideas into a clear creative direction.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1e9] text-[#242820]">
      {/* Navigation */}
      <header className="flex flex-wrap items-center justify-between gap-6 px-6 py-7 md:px-16">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-[0.18em]"
        >
          ATELIER.
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-5 text-xs uppercase tracking-wider md:gap-8"
        >
          <Link href="/about" className="hover:opacity-60">
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

      {/* Split-screen hero */}
      <section className="grid lg:min-h-[720px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-24 md:px-16">
          <p className="mb-10 text-xs uppercase tracking-[0.3em] text-[#77786f]">
            Independent Architecture & Design Studio
          </p>

          <h1 className="text-6xl font-light leading-[1.02] tracking-tight sm:text-7xl xl:text-8xl">
            Form.
            <br />
            Feeling.
            <br />
            Function.
          </h1>

          <p className="mt-10 max-w-md text-lg leading-relaxed text-[#6b6d65]">
            We create thoughtful architecture and interiors where
            simplicity, material, and everyday life come together.
          </p>

          <Link
            href="/services"
            className="mt-12 w-fit border-b border-[#242820] pb-2 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
          >
            Explore our expertise ↗
          </Link>
        </div>

        <div className="relative min-h-[450px] lg:min-h-full">
          <Image
            src="/images/atelier-hero.jpg"
            alt="Contemporary architectural building"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute bottom-6 left-6 bg-[#f5f1e9] px-4 py-3 text-xs uppercase tracking-widest">
            Architecture / 001
          </span>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2 md:px-16">
        <p className="text-xs uppercase tracking-[0.3em]">
          The Studio / Our Philosophy
        </p>

        <div>
          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Good design is felt before it is understood.
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#6b6d65]">
            We believe meaningful spaces begin with listening,
            curiosity, and a deep respect for how people live.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block border-b border-[#242820] pb-2 text-xs uppercase tracking-widest"
          >
            Discover our studio ↗
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#eae5db] px-6 py-28 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.3em]">
            What We Do
          </p>

          <h2 className="mb-16 text-5xl font-light md:text-7xl">
            Our expertise.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="border-t border-[#a9a79e] pt-7"
              >
                <span className="text-xs text-[#77786f]">
                  {service.number}
                </span>

                <h3 className="mt-8 text-3xl font-light">
                  {service.title}
                </h3>

                <p className="mt-5 leading-relaxed text-[#6b6d65]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-16 inline-block border-b border-[#242820] pb-2 text-xs uppercase tracking-widest"
          >
            View all services ↗
          </Link>
        </div>
      </section>

      {/* Architectural imagery */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-16">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em]">
              Selected Perspectives
            </p>

            <h2 className="text-4xl font-light md:text-6xl">
              Spaces that inspire.
            </h2>
          </div>

          <span className="text-xs uppercase tracking-widest text-[#77786f]">
            Visual Study / 2026
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <figure>
            <div className="relative h-[380px] overflow-hidden md:h-[500px]">
              <Image
                src="/images/atelier-about.jpg"
                alt="Architectural material and light study"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <figcaption className="mt-5 text-sm uppercase tracking-widest">
              Material & Light
            </figcaption>
          </figure>

          <figure>
            <div className="relative h-[380px] overflow-hidden md:h-[500px]">
              <Image
                src="/images/atelier-services.jpg"
                alt="Contemporary architectural design study"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <figcaption className="mt-5 text-sm uppercase tracking-widest">
              Form & Space
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#242820] px-6 py-24 text-[#f5f1e9] md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.3em]">
            Your Next Chapter
          </p>

          <h2 className="max-w-4xl text-5xl font-light leading-tight md:text-7xl">
            Every great space begins with a conversation.
          </h2>

          <Link
            href="/contact"
            className="mt-12 inline-block border-b border-[#f5f1e9] pb-2 text-xs uppercase tracking-widest"
          >
            Start a conversation ↗
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap justify-between gap-4 px-6 py-8 text-xs uppercase tracking-widest md:px-16">
        <span>ATELIER — Concept Studio</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
