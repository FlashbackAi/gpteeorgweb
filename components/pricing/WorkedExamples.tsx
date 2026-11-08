/**
 * Teepin — worked pricing examples.
 *
 * Each example states the situation, shows the sum step by step in mono, and
 * ends with what is charged now and what happens next. Every number comes
 * from lib/pricing.ts, so the examples can't drift from the plan cards.
 */

import type { Example } from "@/lib/pricing";

function ExampleCard({ example, n }: { example: Example; n: string }) {
  return (
    <article className="relative flex flex-col border border-hairline bg-paper-raised">
      <div className="p-6 md:p-7">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-steel">Example {n}</p>
        <h4 className="mt-3 text-[18px] font-semibold leading-snug tracking-tight">{example.title}</h4>
        <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-soft">{example.situation}</p>
      </div>
      <ol className="mx-6 md:mx-7 flex flex-col gap-2 border-l border-hairline pl-4">
        {example.steps.map((s) => (
          <li key={s} className="font-mono text-[12px] leading-[1.6] tracking-[0.01em] text-ink">
            {s}
          </li>
        ))}
      </ol>
      <div className="mt-auto p-6 md:p-7 pt-6">
        <div className="flex items-baseline justify-between gap-4 border-t border-hairline pt-5">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-steel">{example.now.label}</span>
          <span className="font-display text-[clamp(1.4rem,2.2vw,1.8rem)] leading-none tracking-[-0.015em] text-right">
            {example.now.amount}
          </span>
        </div>
        <p className="mt-4 text-[14px] leading-[1.6] text-ink-soft">{example.then}</p>
      </div>
    </article>
  );
}

export default function WorkedExamples({
  groups,
}: {
  groups: { title: string; examples: Example[] }[];
}) {
  // Examples are numbered across the groups: each group starts after the ones before it.
  const starts = groups.map((_, i) => groups.slice(0, i).reduce((sum, g) => sum + g.examples.length, 0));
  return (
    <div className="flex flex-col gap-14">
      {groups.map((g, gi) => (
        <div key={g.title}>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.28em] text-steel">{g.title}</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {g.examples.map((e, ei) => (
              <ExampleCard key={e.id} example={e} n={String(starts[gi] + ei + 1).padStart(2, "0")} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
