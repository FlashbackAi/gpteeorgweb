import Link from "next/link";

export default function PressPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-steel">
          Teepin / Press
        </p>
        <h1 className="mt-6 font-display text-[clamp(2.4rem,8vw,5rem)] leading-none">
          Coming soon.
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-[1.7] text-ink-soft">
          Press materials are on the way. Email us in the meantime.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:contact@teepin.com"
            className="inline-flex items-center justify-center bg-hotrod px-7 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-paper-raised transition-colors duration-200 hover:bg-hotrod-deep"
          >
            Request Early Access
          </a>
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel transition-colors duration-200 hover:text-ink"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
