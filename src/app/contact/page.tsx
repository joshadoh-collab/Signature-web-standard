
import Link from "next/link";

export default function ContactPage() {
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

          <Link href="/services" className="hover:opacity-60">
            Services
          </Link>

          <Link
            href="/contact"
            aria-current="page"
            className="border border-[#242820] px-5 py-3"
          >
            Start a Project
          </Link>
        </nav>
      </header>

      {/* Contact introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-16 md:pt-32">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#77786f]">
          Contact / 003
        </p>

        <h1 className="max-w-5xl text-5xl font-light leading-[1.08] tracking-tight sm:text-6xl md:text-8xl">
          Let's create
          <br />
          something meaningful.
        </h1>

        <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#6b6d65]">
          Every thoughtful space begins with a conversation.
          Tell us about your vision, your inspiration, and what
          you'd like to create.
        </p>
      </section>

      {/* Contact information and form */}
      <section className="bg-[#eae5db] px-6 py-24 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.3em]">
              Begin a Conversation
            </p>

            <h2 className="max-w-lg text-4xl font-light leading-tight md:text-6xl">
              Tell us about your next idea.
            </h2>

            <p className="mt-8 max-w-md leading-8 text-[#6b6d65]">
              Whether you're exploring a new architectural concept
              or reimagining an interior, we're interested in the
              possibilities.
            </p>

            <div className="mt-16 border-t border-[#b8b4aa] pt-8">
              <p className="text-xs uppercase tracking-widest text-[#77786f]">
                Studio
              </p>
              <p className="mt-4 text-lg">
                Independent Architecture & Design
              </p>
              <p className="mt-2 text-sm text-[#6b6d65]">
                Fictional portfolio concept
              </p>
            </div>
          </div>

          <div className="border-t border-[#b8b4aa] pt-8">
            <p className="mb-10 text-xs uppercase tracking-[0.3em]">
              Project Inquiry
            </p>

            <form className="space-y-8" aria-label="Demo project inquiry">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-widest"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Full name"
                  autoComplete="name"
                  className="mt-4 w-full border-b border-[#b8b4aa] bg-transparent py-3 outline-none focus:border-[#242820]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-widest"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  className="mt-4 w-full border-b border-[#b8b4aa] bg-transparent py-3 outline-none focus:border-[#242820]"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-xs uppercase tracking-widest"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  defaultValue=""
                  className="mt-4 w-full border-b border-[#b8b4aa] bg-transparent py-3 outline-none focus:border-[#242820]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="architecture">Architecture</option>
                  <option value="interior">Interior Design</option>
                  <option value="consultation">Design Consultation</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest"
                >
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your project..."
                  className="mt-4 w-full resize-y border-b border-[#b8b4aa] bg-transparent py-3 outline-none focus:border-[#242820]"
                />
              </div>

              <button
                type="button"
                disabled
                className="cursor-not-allowed bg-[#242820] px-10 py-5 text-xs uppercase tracking-[0.2em] text-[#f5f1e9] opacity-60"
              >
                Send Inquiry ↗
              </button>

              <p className="text-sm leading-relaxed text-[#6b6d65]">
                Portfolio demonstration only. This form does not
                submit or store information.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="px-6 py-28 text-center md:px-16">
        <p className="mb-8 text-xs uppercase tracking-[0.3em]">
          ATELIER / Concept Studio
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-light leading-tight md:text-6xl">
          Great design begins with curiosity.
        </h2>

        <Link
          href="/"
          className="mt-12 inline-block border-b border-[#242820] pb-2 text-xs uppercase tracking-widest"
        >
          Return to homepage ↗
        </Link>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap justify-between gap-4 border-t border-[#d8d4cb] px-6 py-8 text-xs uppercase tracking-widest md:px-16">
        <span>ATELIER — Concept Studio</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
