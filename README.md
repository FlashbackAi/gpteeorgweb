<div align="center">

# Teepin

**Cloud services built on an architecture that lowers AI costs while protecting privacy. The pricing finally reflects it.**

*An editorial, cinematic marketing site for Teepin - built with Next.js 16, React 19, GSAP, and Three.js.*

[![Next.js](https://img.shields.io/badge/Next.js-16.2-000?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-149ECA?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## § 00 · What this is

A single long-form landing page designed like a printed manifesto - seven sections, each with its own typographic system, hand-tuned scroll choreography, and a consistent blueprint/engineering aesthetic. Every section is a beat; every beat earns its scroll.

The argument the page makes: compute has never been cheaper, cloud bills have never been higher, and the gap is lock-in. Teepin builds the service layer on top of portable storage (Shelby) and idle data-centre compute, so enterprises get familiar cloud ergonomics without the exit toll.

## § 01 · The sections

### Hero - *"Your cloud bill isn't compute. It's the cost of being stuck."*

An editorial headline with the Teepin loop mark breathing behind it, angled CTAs, and a dotted-grid canvas. On load the mark boots cinematically: it rotates into place while its single outline path draws on, then the lens bars stagger in.

### § 02 · Manifesto - The problem

Three stanzas, scroll-scrubbed: compute got cheap, cloud bills didn't; when moving your data costs more than the compute you'd save you have a landlord, not a vendor; make data portable and compute fungible, then price it like a commodity.

### § 03 · Principles - Four rules we won't break

Four squircle bubbles in a 2x2 bento: Portable by Default, Private by Design, Priced Honestly, Familiar by Choice. Outlines stroke in on scroll; hover expands each bubble to reveal its description.

### § 04 · Infrastructure - From storage to inference

A centred isometric four-layer stack: Data (Shelby) → Compute (idle capacity in TEEs) → Intelligence (open models) → Applications. Hovering a slab reveals that layer's internal sub-system pattern and a detail panel.

### § 05 · Thesis - The portability zone

A blueprint plate locating Teepin on the vendor lock-in spectrum: `BARE METAL → PORTABLE → MANAGED → LOCKED IN`. The HUD marker scrubs to its 30% rest position in PORTABLE and then breathes in place.

### § 06 · Products - Four services, one bill

Asymmetric 60/40 layout. Teepin Inference is the flagship with a console panel, bullets, and the `Connect → Deploy → Infer → Seal` flow terminating in a cost-reduction count-up. Compute, Storage and Data & Network stack alongside.

### § 07 · Closing manifesto + Footer

Full-viewport closer with a strike-through-then-gold reveal, sign-off, and CTAs.

## § 07 · Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16.2** (Turbopack, App Router) |
| UI | **React 19.2** · **Tailwind CSS 4** |
| Motion | **GSAP 3.15** (scrub, ScrollTrigger) · **anime.js 4** · **Lenis** (smooth scroll) |
| 3D / SVG | **three.js** + **@react-three/fiber / drei** · hand-authored SVG plates |
| Language | **TypeScript 5** strict |

> ⚠️ This is **not** the Next.js you know. v16 has breaking changes in routing, fetching, and caching. See `node_modules/next/dist/docs/` before writing against it - and heed deprecation notices.

## § 08 · Run it

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run lint
```

## § 09 · Layout

```
app/                     # Next.js App Router - page.tsx composes all sections
components/
  sections/              # One file per section (Hero, Manifesto, Thesis, …)
  svg/                   # Teepin mark, wordmark + hero centerpiece (TeepinReactor)
  ui/                    # Nav + shared primitives
lib/                     # Scroll helpers, GSAP wiring
public/brand/            # Raster brand references the vector logo was traced from
public/images/products/  # Product preview placeholders
docs/superpowers/specs/  # Design specs, incl. the rebrand copy map
```

## § 10 · Brand assets

The logo is vector, reconstructed from the raster reference in `public/brand/` by
measuring it: stroke weight 13, lens corner radius 30, bars at y=36.5/59.5/82.5,
diagonals at 45° crossing at centre.

The mark is **one open path**. The figure-eight is traversed starting just past
the crossing and ending just before it, so the break in the "under" strand falls
exactly where the "over" strand passes. The over/under knot therefore needs no
mask, no clip and no z-ordering - and being a single path, it is trivially
drawable by `stroke-dashoffset`, which the reactor boot animation relies on.

- `components/svg/TeepinMark.tsx` - loop glyph, `currentColor`, draw-on capable
- `components/svg/TeepinWordmark.tsx` - T + mark + PIN, reuses the mark path
- `public/teepin-mark.svg`, `public/teepin-wordmark.svg` - favicon / OG

## § 11 · Design notes

- **Editorial, not SaaS.** Closer to a printed technical manual than a landing page.
- **Blueprint language.** Crosshair ticks, dimension lines, callouts, § section marks.
- **Motion with restraint.** Scrubbed reveals over autoplay. Every animation tied to scroll or intent.
- **Two typographic registers.** A heavy display face for headlines; a monospaced caption face for margins, indices, and metadata.

---

<div align="center">

**- Teepin -**
[contact@teepin.com](mailto:contact@teepin.com)

</div>

