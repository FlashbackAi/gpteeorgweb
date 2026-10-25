/**
 * Teepin — legal document shell (Privacy, Terms).
 *
 * Same paper/hairline language as the rest of the site: dotted-grid header,
 * § numbered sections, mono captions. A sticky contents rail sits to the left
 * on desktop; on mobile the "short version" box leads instead.
 */

import Link from "next/link";
import type { ReactNode } from "react";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/sections/Footer";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

type LegalDocumentProps = {
  label: string;
  title: string;
  /** ISO date, e.g. "2026-10-12". */
  updated: string;
  summary: string[];
  sections: LegalSection[];
  sibling: { label: string; href: string };
};

const pad = (n: number) => String(n).padStart(2, "0");

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function LegalDocument({
  label,
  title,
  updated,
  summary,
  sections,
  sibling,
}: LegalDocumentProps) {
  return (
    <main className="relative min-h-screen bg-paper text-ink">
      <Nav />

      <header className="relative border-b border-hairline">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-grid-hairline opacity-[0.4]"
        />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 pt-36 md:pt-44 pb-14 md:pb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-steel">
            Teepin / Legal / {label}
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,7vw,4.5rem)] leading-none">
            {title}
          </h1>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-steel">
            Last updated ·{" "}
            <time dateTime={updated} className="text-ink">
              {formatDate(updated)}
            </time>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 md:px-10 py-14 md:py-20 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-16">
        <nav
          aria-label="Contents"
          className="hidden md:block self-start sticky top-32"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
            Contents
          </p>
          <ol className="mt-4 flex flex-col gap-2.5 border-l border-hairline pl-4">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex gap-3 text-[13px] leading-snug text-ink-soft transition-colors duration-220 hover:text-ink"
                >
                  <span className="font-mono text-[10.5px] pt-px text-steel group-hover:text-hotrod">
                    {pad(i + 1)}
                  </span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="max-w-2xl">
          <section
            aria-labelledby="short-version"
            className="relative border border-hairline bg-paper-raised p-6 md:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 h-px w-24 bg-hotrod"
            />
            <h2
              id="short-version"
              className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-steel"
            >
              The short version
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {summary.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-[15px] leading-[1.6] text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-hotrod"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              aria-labelledby={`${s.id}-title`}
              className="mt-14 scroll-mt-32 border-t border-hairline pt-8"
            >
              <p className="font-mono text-[10.5px] tracking-[0.28em] text-steel">
                § {pad(i + 1)}
              </p>
              <h2
                id={`${s.id}-title`}
                className="mt-3 text-[22px] font-semibold leading-tight tracking-tight"
              >
                {s.title}
              </h2>
              <div className="legal-prose mt-5">{s.body}</div>
            </section>
          ))}

          <div className="mt-16 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-hairline pt-8">
            <a
              href="mailto:support@teepin.com"
              className="inline-flex items-center justify-center bg-hotrod px-7 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-paper-raised transition-colors duration-200 hover:bg-hotrod-deep"
            >
              Email Us
            </a>
            <Link
              href={sibling.href}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel transition-colors duration-200 hover:text-ink"
            >
              Read the {sibling.label}
            </Link>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
