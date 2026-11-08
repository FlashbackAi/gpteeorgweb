"use client";

/**
 * Teepin — pricing plan cards.
 *
 * The four plans in two groups (one person, teams), with a single monthly /
 * annual switch above them. Same paper-and-hairline language as the rest of
 * the site: raised white cards, a hotrod hairline on the card that leads,
 * Nevera for names and prices, mono captions.
 */

import { useState } from "react";
import {
  MIN_SEATS,
  PERSONAL,
  TEAM,
  annualSaving,
  priceFor,
  usd,
  yearlyFor,
  type Interval,
  type Plan,
} from "@/lib/pricing";

const pad = (n: number) => String(n).padStart(2, "0");

function IntervalSwitch({ value, onChange }: { value: Interval; onChange: (i: Interval) => void }) {
  const options: { id: Interval; label: string }[] = [
    { id: "month", label: "Monthly" },
    { id: "year", label: "Annually" },
  ];
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <div
        role="radiogroup"
        aria-label="Billing"
        className="inline-flex self-start border border-hairline bg-paper-raised p-1 rounded-[4px]"
      >
        {options.map((o) => {
          const on = o.id === value;
          return (
            <button
              key={o.id}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => onChange(o.id)}
              className={`px-5 py-2 font-mono text-[11px] uppercase tracking-[0.22em] rounded-[2px] transition-colors duration-200 ${
                on ? "bg-ink text-paper-raised" : "text-steel hover:text-ink"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-steel">
        Annual billing costs up to {Math.max(...[...PERSONAL, ...TEAM].map(annualSaving))}% less
      </p>
    </div>
  );
}

function PlanCard({ plan, interval, lead }: { plan: Plan; interval: Interval; lead: boolean }) {
  const price = priceFor(plan, interval);
  const unit = plan.perSeat ? "per seat / month" : "per month";
  return (
    <article className="relative flex flex-col border border-hairline bg-paper-raised p-6 md:p-8">
      {lead && <div aria-hidden="true" className="absolute top-0 left-0 h-px w-24 bg-hotrod" />}
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-[clamp(1.5rem,2.4vw,1.9rem)] leading-none tracking-[-0.015em]">
          {plan.name}
        </h3>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-steel">
          {plan.usage} usage
        </span>
      </div>
      <p className="mt-3 text-[15px] leading-[1.6] text-ink-soft">{plan.tagline}</p>

      <div className="mt-8 flex items-end gap-3">
        <span className="font-display text-[clamp(2.6rem,5vw,3.6rem)] leading-[0.9] tracking-[-0.02em]">
          {usd(price, true)}
        </span>
        <span className="pb-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-steel">{unit}</span>
      </div>
      <p className="mt-3 font-mono text-[11px] tracking-[0.06em] text-steel min-h-[1.5em]">
        {interval === "year"
          ? `Billed ${usd(yearlyFor(plan), true)} a year${plan.perSeat ? " per seat" : ""}, ${annualSaving(plan)}% less than monthly`
          : `Or ${usd(plan.annualPerMonth, true)} a month, billed yearly`}
      </p>

      <div className="mt-8 border-t border-hairline pt-5">
        <p className="text-[14px] leading-[1.6] text-ink-soft">{plan.usageNote}</p>
      </div>
    </article>
  );
}

function Group({
  index,
  id,
  title,
  lede,
  plans,
  interval,
  facts,
}: {
  index: number;
  id: string;
  title: string;
  lede: string;
  plans: Plan[];
  interval: Interval;
  facts: string[];
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-32">
      <p className="font-mono text-[10.5px] tracking-[0.28em] text-steel">§ {pad(index)}</p>
      <div className="mt-3 md:flex md:items-end md:justify-between md:gap-10">
        <h2 id={`${id}-title`} className="text-[26px] md:text-[30px] font-semibold leading-tight tracking-tight">
          {title}
        </h2>
        <p className="mt-3 md:mt-0 max-w-md text-[15px] leading-[1.6] text-ink-soft">{lede}</p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {plans.map((p, i) => (
          <PlanCard key={p.id} plan={p} interval={interval} lead={i === 0} />
        ))}
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {facts.map((f) => (
          <li key={f} className="flex gap-3 text-[14px] leading-[1.6] text-ink-soft">
            <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-hotrod" />
            {f}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function PlanCards() {
  const [interval, setInterval] = useState<Interval>("month");
  return (
    <div className="flex flex-col gap-20">
      <IntervalSwitch value={interval} onChange={setInterval} />
      <Group
        index={1}
        id="personal"
        title="For one person"
        lede="Teepin on the web, desktop and phone, with every feature. Pick how much use you need."
        plans={PERSONAL}
        interval={interval}
        facts={[
          "Upgrade at any time: the change is immediate, and you pay the difference for the rest of the period.",
          "Move down or cancel whenever you like: it takes effect when the period you paid for ends.",
        ]}
      />
      <Group
        index={2}
        id="teams"
        title="For teams"
        lede={`One plan for the organization, a seat for each member. At least ${MIN_SEATS} seats in all, and Standard and Premium can be mixed.`}
        plans={TEAM}
        interval={interval}
        facts={[
          "Seats are bought, then given to members. Moving a seat from one person to another is free.",
          "Members without a seat stay in the organization: developers keep the cloud services, and users can see the team's Teepin work.",
          "Seats added partway through a period are charged for the rest of it. The renewal date never moves.",
          "Moving someone down to Standard never costs anything. Moving someone up costs only the difference.",
        ]}
      />
    </div>
  );
}
