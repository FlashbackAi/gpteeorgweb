/**
 * Teepin's plans and the arithmetic behind the pricing page's examples, in
 * one place so every number on the page comes from the same prices.
 *
 * The prices are the plan catalogue's (TEEPIN-PLANS-AND-USAGE-DESIGN.md D3,
 * set in Control Center). Charges for a change are prorated by Stripe to the
 * second; the examples use whole days so the sums are easy to follow.
 */

export type Interval = "month" | "year";

export type Plan = {
  id: "pro" | "max" | "standard" | "premium";
  name: string;
  /** Who it is for, in a few words. */
  tagline: string;
  /** Price per month, billed monthly; and per month when billed yearly. */
  monthly: number;
  annualPerMonth: number;
  /** Usage against Pro's, as people read it ("1.25×"). */
  usage: string;
  usageNote: string;
  /** Per seat (teams) or per account. */
  perSeat: boolean;
};

export const PERSONAL: Plan[] = [
  {
    id: "pro",
    name: "Pro",
    tagline: "For one person, every day.",
    monthly: 20,
    annualPerMonth: 18,
    usage: "1×",
    usageNote: "The base allowance every plan is measured against.",
    perSeat: false,
  },
  {
    id: "max",
    name: "Max",
    tagline: "For heavy, all-day use.",
    monthly: 100,
    annualPerMonth: 95,
    usage: "5×",
    usageNote: "Five times Pro's usage, in every session and every week.",
    perSeat: false,
  },
];

export const TEAM: Plan[] = [
  {
    id: "standard",
    name: "Standard seat",
    tagline: "For most people on a team.",
    monthly: 25,
    annualPerMonth: 20,
    usage: "1.25×",
    usageNote: "A quarter more than Pro, for each member on it.",
    perSeat: true,
  },
  {
    id: "premium",
    name: "Premium seat",
    tagline: "For the team's heaviest users.",
    monthly: 125,
    annualPerMonth: 100,
    usage: "6.25×",
    usageNote: "Five times a Standard seat, for each member on it.",
    perSeat: true,
  },
];

/** A team plan has at least this many seats, Standard and Premium together. */
export const MIN_SEATS = 2;

export const priceFor = (p: Plan, i: Interval) => (i === "month" ? p.monthly : p.annualPerMonth);
export const yearlyFor = (p: Plan) => p.annualPerMonth * 12;

/** What annual billing saves on a plan, as a whole percentage. */
export const annualSaving = (p: Plan) => Math.round((1 - p.annualPerMonth / p.monthly) * 100);

/** Dollars as the page shows them: "$12.50", or "$20" for whole amounts when whole is set. */
export function usd(amount: number, whole = false): string {
  const cents = Math.round(amount * 100);
  if (whole && cents % 100 === 0) return `$${(cents / 100).toLocaleString("en-US")}`;
  return `$${(cents / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/** The part of a whole period's amount left after some days: Stripe's proration, by day here. */
export const prorate = (amount: number, daysLeft: number, daysInPeriod: number) =>
  Math.round(((amount * daysLeft) / daysInPeriod) * 100) / 100;

/** One worked example: the situation, each step of the sum, and what it comes to. */
export type Example = {
  id: string;
  title: string;
  situation: string;
  steps: string[];
  now: { label: string; amount: string };
  then: string;
};

const pro = PERSONAL[0];
const max = PERSONAL[1];
const standard = TEAM[0];
const premium = TEAM[1];

/** Personal plans: upgrading, switching to annual, downgrading. */
export function personalExamples(): Example[] {
  const upgrade = prorate(max.monthly - pro.monthly, 15, 30);
  const unused = prorate(pro.monthly, 20, 30);
  const switchNow = Math.round((yearlyFor(pro) - unused) * 100) / 100;
  return [
    {
      id: "upgrade",
      title: "Upgrading in the middle of a month",
      situation: "You're on Pro, billed monthly from Nov 1. On Nov 16, with 15 of 30 days left, you move to Max.",
      steps: [
        `Max costs ${usd(max.monthly - pro.monthly, true)} a month more than Pro`,
        `${usd(max.monthly - pro.monthly, true)} × 15 of 30 days = ${usd(upgrade)}`,
      ],
      now: { label: "Charged on Nov 16", amount: usd(upgrade) },
      then: `Max's usage starts at once. From Dec 1, ${usd(max.monthly, true)} a month.`,
    },
    {
      id: "annual",
      title: "Switching to annual billing",
      situation: "You're on Pro monthly from Nov 1. On Nov 11, with 20 of 30 days unused, you switch to annual.",
      steps: [
        `A year of Pro costs ${usd(yearlyFor(pro), true)} (${usd(pro.annualPerMonth, true)} a month)`,
        `The unused days are credited: ${usd(pro.monthly, true)} × 20 of 30 days = ${usd(unused)}`,
        `${usd(yearlyFor(pro), true)} − ${usd(unused)} = ${usd(switchNow)}`,
      ],
      now: { label: "Charged on Nov 11", amount: usd(switchNow) },
      then: `Your year runs from Nov 11, then ${usd(yearlyFor(pro), true)} each year.`,
    },
    {
      id: "downgrade",
      title: "Moving down, or cancelling",
      situation: "You're on Max, paid to Dec 1. On Nov 16 you move to Pro.",
      steps: ["Nothing changes until the period you paid for ends", "Moving down or cancelling is never refunded"],
      now: { label: "Charged on Nov 16", amount: usd(0) },
      then: `You keep Max until Dec 1, then pay ${usd(pro.monthly, true)} a month for Pro.`,
    },
  ];
}

/** Team seats: adding seats monthly and yearly, moving people between tiers, removing people. */
export function teamExamples(): Example[] {
  const seatStd = prorate(standard.monthly, 15, 30);
  const seatPrem = prorate(premium.monthly, 15, 30);
  const yearSeats = prorate(yearlyFor(standard) * 3, 272, 365);
  const upgrade = prorate(premium.monthly - standard.monthly, 15, 30);
  return [
    {
      id: "seat-month",
      title: "Adding a seat partway through a month",
      situation: "Your team is billed monthly from Nov 1. On Nov 16, with 15 of 30 days left, you invite someone new.",
      steps: [
        `Standard: ${usd(standard.monthly, true)} × 15 of 30 days = ${usd(seatStd)}`,
        `Premium: ${usd(premium.monthly, true)} × 15 of 30 days = ${usd(seatPrem)}`,
      ],
      now: { label: "Charged on Nov 16, Standard", amount: usd(seatStd) },
      then: `${usd(seatPrem)} for a Premium seat. The renewal date doesn't move: from Dec 1 the seat is ${usd(standard.monthly, true)} or ${usd(premium.monthly, true)} a month like the rest.`,
    },
    {
      id: "seat-year",
      title: "Adding seats partway through a year",
      situation: "Your team of 10 Standard seats is billed yearly from Oct 31. On Feb 1, with 272 of 365 days left, you add 3 more.",
      steps: [
        `A Standard seat costs ${usd(yearlyFor(standard), true)} a year`,
        `${usd(yearlyFor(standard), true)} × 3 seats × 272 of 365 days = ${usd(yearSeats)}`,
      ],
      now: { label: "Charged on Feb 1", amount: usd(yearSeats) },
      then: `No second cycle starts. On Oct 31 the renewal bills all 13 seats: ${usd(yearlyFor(standard) * 13, true)}.`,
    },
    {
      id: "move-up",
      title: "Moving someone up to Premium",
      situation: "On Nov 16, with 15 of 30 days left, you move a Standard member to Premium. No Premium seat is free.",
      steps: [
        "Their Standard seat turns into a Premium seat",
        `You pay only the difference: (${usd(premium.monthly, true)} − ${usd(standard.monthly, true)}) × 15 of 30 days = ${usd(upgrade)}`,
      ],
      now: { label: "Charged on Nov 16", amount: usd(upgrade) },
      then: "If a Premium seat is already free, the move costs nothing.",
    },
    {
      id: "move-down",
      title: "Moving someone down to Standard",
      situation: "You move a Premium member to Standard.",
      steps: [
        "A Standard seat is free: the move happens at once",
        "None is free: they keep Premium until the renewal, then move",
      ],
      now: { label: "Charged", amount: usd(0) },
      then: "Either way nothing is bought. The next renewal bills one Premium seat fewer and one Standard seat more.",
    },
    {
      id: "remove",
      title: "Removing someone, and paying for fewer seats",
      situation: "You have 10 Standard seats and two people leave.",
      steps: [
        "Their seats stay paid until the renewal, free to give to someone new",
        `To pay less, keep 8 seats at renewal: 8 × ${usd(standard.monthly, true)} = ${usd(standard.monthly * 8, true)} a month`,
      ],
      now: { label: "Refunded", amount: usd(0) },
      then: `From the renewal, ${usd(standard.monthly * 8, true)} a month instead of ${usd(standard.monthly * 10, true)}.`,
    },
  ];
}
