import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/sections/Footer";
import PlanCards from "@/components/pricing/PlanCards";
import WorkedExamples from "@/components/pricing/WorkedExamples";
import { personalExamples, teamExamples } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Teepin plans for one person and for teams, and the cloud services on prepaid credit. What each costs, and what changing your plan costs, worked out with examples.",
  alternates: { canonical: "/pricing" },
};

const INCLUDED = [
  {
    title: "Teepin, everywhere",
    body: "Your assistant on the web, on your desktop and on your phone, with every feature.",
  },
  {
    title: "One allowance across all of it",
    body: "Usage is counted per person in a five-hour session and a weekly allowance, shared by every device. You see it as a percentage, never in dollars.",
  },
  {
    title: "Paid in advance",
    body: "Each period is paid at its start by card. Nothing is billed after the fact, and you always know the next amount.",
  },
];

const CLOUD = [
  {
    service: "Inference",
    billed: "Input and output tokens, at each model's price per million tokens. A request refused with an error is not billed.",
  },
  {
    service: "Storage, kept",
    billed: "Gigabytes stored, per GB-month, measured every hour. One gigabyte kept for a day costs a thirtieth of the monthly rate.",
  },
  {
    service: "Storage, downloaded",
    billed: "Gigabytes downloaded, per GB. Uploads are free.",
  },
  {
    service: "Compute",
    billed: "The time an instance runs, at its instance type's hourly rate, shown before you start it.",
  },
  {
    service: "Teepin Build",
    billed: "What each build uses, shown live while it works, drawn from the same credit.",
  },
];

const RULES = [
  {
    title: "Upgrades are immediate",
    body: "A bigger plan or more seats: the change happens at once and you pay the difference for the rest of the period. Charges are prorated to the second; the examples use whole days.",
  },
  {
    title: "Downgrades wait for the renewal",
    body: "A smaller plan, cancelling, or fewer seats takes effect when the period you paid for ends. Nothing is refunded, and nothing is lost before then.",
  },
  {
    title: "A seat belongs to the team",
    body: "Removing someone frees their seat at once, free for someone else and still paid until the renewal. Lower the seats kept at renewal to pay less.",
  },
  {
    title: "If a renewal payment fails",
    body: "Teepin pauses an hour after the failed charge, until the renewal is paid. Nothing is deleted, and cloud services keep running on credit.",
  },
];

function SectionHead({ n, id, title, lede }: { n: string; id: string; title: string; lede: string }) {
  return (
    <>
      <p className="font-mono text-[10.5px] tracking-[0.28em] text-steel">§ {n}</p>
      <div className="mt-3 md:flex md:items-end md:justify-between md:gap-10">
        <h2 id={id} className="text-[26px] md:text-[30px] font-semibold leading-tight tracking-tight">
          {title}
        </h2>
        <p className="mt-3 md:mt-0 max-w-md text-[15px] leading-[1.6] text-ink-soft">{lede}</p>
      </div>
    </>
  );
}

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-paper text-ink">
      <Nav />

      <header className="relative border-b border-hairline">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-grid-hairline opacity-[0.4]" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 pt-36 md:pt-44 pb-14 md:pb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-steel">Teepin / Pricing</p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[0.98] tracking-[-0.015em]">
            A plan for Teepin. Credit for the cloud.
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-ink-soft">
            Teepin, your assistant, is a plan you pay for each month or each year. The cloud services
            (inference, storage, compute and Teepin Build) draw down prepaid credit as you use them. Here is
            what each costs, and what any change costs, worked out.
          </p>
          <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {[
              ["Plans", "#personal"],
              ["Teams", "#teams"],
              ["Cloud credit", "#cloud"],
              ["Examples", "#examples"],
              ["The rules", "#rules"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel transition-colors duration-200 hover:text-ink"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24 flex flex-col gap-24 md:gap-28">
        <PlanCards />

        <section aria-labelledby="included-title">
          <SectionHead
            n="03"
            id="included-title"
            title="Every plan includes"
            lede="What changes between plans is how much you can use. What you get doesn't."
          />
          <div className="mt-8 grid gap-px bg-hairline border border-hairline md:grid-cols-3">
            {INCLUDED.map((item) => (
              <div key={item.title} className="bg-paper-raised p-6 md:p-7">
                <h3 className="text-[16px] font-semibold leading-snug">{item.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cloud" aria-labelledby="cloud-title" className="scroll-mt-32">
          <SectionHead
            n="04"
            id="cloud-title"
            title="Cloud services, on prepaid credit"
            lede="Add credit by card, bank transfer (ACH) or Link, and usage draws it down. Credit never expires, and a team can use the cloud services without any plan."
          />
          <div className="mt-8 border border-hairline bg-paper-raised">
            {CLOUD.map((row, i) => (
              <div
                key={row.service}
                className={`grid gap-2 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10 px-6 md:px-8 py-5 ${
                  i > 0 ? "border-t border-hairline" : ""
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink pt-0.5">{row.service}</p>
                <p className="text-[14.5px] leading-[1.65] text-ink-soft">{row.billed}</p>
              </div>
            ))}
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Current rates are listed in the console, next to each model, bucket and instance type.",
              "Automatic top-up is optional: it adds a set amount when credit runs low, up to a monthly limit you choose.",
            ].map((f) => (
              <li key={f} className="flex gap-3 text-[14px] leading-[1.6] text-ink-soft">
                <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-hotrod" />
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section id="examples" aria-labelledby="examples-title" className="scroll-mt-32">
          <SectionHead
            n="05"
            id="examples-title"
            title="Worked examples"
            lede="What a change costs on the day you make it, and what you pay after. All with monthly prices unless the example says otherwise."
          />
          <div className="mt-10">
            <WorkedExamples
              groups={[
                { title: "Plans for one person", examples: personalExamples() },
                { title: "Team seats", examples: teamExamples() },
              ]}
            />
          </div>
        </section>

        <section id="rules" aria-labelledby="rules-title" className="scroll-mt-32">
          <SectionHead
            n="06"
            id="rules-title"
            title="The rules, in short"
            lede="The same four rules sit behind every example above."
          />
          <div className="mt-8 grid gap-px bg-hairline border border-hairline md:grid-cols-2">
            {RULES.map((r, i) => (
              <div key={r.title} className="relative bg-paper-raised p-6 md:p-8">
                {i === 0 && <div aria-hidden="true" className="absolute top-0 left-0 h-px w-24 bg-hotrod" />}
                <h3 className="text-[16px] font-semibold leading-snug">{r.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-soft">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] tracking-[0.06em] text-steel">
            Prices in US dollars. Plans and credit are bought on the web.
          </p>
        </section>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-t border-hairline pt-10">
          <a
            href="https://console.teepin.com"
            className="inline-flex items-center justify-center bg-hotrod px-7 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-paper-raised transition-colors duration-200 hover:bg-hotrod-deep"
          >
            Open the Console
          </a>
          <Link
            href="/docs/reference/billing"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel transition-colors duration-200 hover:text-ink"
          >
            Read how billing works
          </Link>
          <a
            href="mailto:support@teepin.com"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel transition-colors duration-200 hover:text-ink"
          >
            Email us
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
