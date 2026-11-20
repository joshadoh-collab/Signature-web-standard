
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Architecture",
    description:
      "We explore the relationship between form, function, and the surrounding environment. Each concept begins with an understanding of space, light, and the people who inhabit it.",
    details: [
      "Residential concepts",
      "Spatial planning",
      "Architectural direction",
    ],
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Our interior concepts focus on natural materials, thoughtful proportions, and a sense of calm. We create visual harmony through texture, color, and carefully considered details.",
    details: [
      "Interior concepts",
      "Material and finish selection",
      "Furniture and spatial composition",
    ],
  },
  {
    number: "03",
    title: "Design Consultation",
    description:
      "From early inspiration to a cohesive creative vision, our conceptual process helps clarify possibilities and establish a meaningful design direction.",
    details: [
      "Creative direction",
      "Concept development",
      "Design strategy",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e9] text-[#242820]">
      {/* Navigation */}
      <header className="flex flex-wrap items-center justify-between gap-5 px-6 py-7 md:px-16">
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

          <Link
            href="/services"
            aria-current="page"
            className="hover:opacity-60"
          >
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

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:px-16 md:pt-32">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#77786f]">
          Our Expertise / 002
        </p>

        <h1 className="max-w-5xl text-5xl font-light leading-[1.08] tracking-tight sm:text-6xl md:text-8xl">
          Design with
          <br />
          purpose.
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#6b6d65]">
          From architecture to interiors, we explore spaces that
          balance beauty, function, and a lasting sense of place.
        </p>
      </section>

      {/* Hero photograph */}
      <section className="px-6 md:px-16">
        <div className="relative h-[380px] overflow-hidden md:h-[600px]">
          <Image
            src="/images/atelier-services.jpg"
            alt="Architectural design and contemporary interior"
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Service details */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-16">
        <p className="mb-14 text-xs uppercase tracking-[0.3em]">
          What We Explore
        </p>

        <div className="space-y-20">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-8 border-t border-[#c9c5bb] pt-10 md:grid-cols-[100px_1fr_1fr]"
            >
              <span className="text-sm text-[#77786f]">
                {service.number}
              </span>

              <h2 className="text-3xl font-light md:text-5xl">
                {service.title}
              </h2>

              <div>
                <p className="leading-8 text-[#6b6d65]">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="border-b border-[#d8d4cb] pb-3"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Design approach */}
      <section className="bg-[#eae5db] px-6 py-24 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.3em]">
              Our Approach
            </p>
            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Every detail has a reason.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="max-w-lg text-lg leading-relaxed text-[#6b6d65]">
              We approach every design concept with curiosity and
              intention, exploring how material, proportion, and
              natural light influence the experience of a space.
            </p>

            <Link
              href="/about"
              className="mt-8 w-fit border-b border-[#242820] pb-2 text-xs uppercase tracking-widest"
            >
              Learn about our studio ↗
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#242820] px-6 py-24 text-[#f5f1e9] md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.3em]">
            Begin a Conversation
          </p>

          <h2 className="max-w-4xl text-4xl font-light leading-tight md:text-6xl">
            Let's explore what your space could become.
          </h2>

          <Link
            href="/contact"
            className="mt-12 inline-block border-b border-[#f5f1e9] pb-2 text-xs uppercase tracking-widest"
          >
            Start a project ↗
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
