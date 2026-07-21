# Alpha Gym — Marketing Implementation Plan (Gaps 1, 3, 6, 7)

Scope: turns critique gaps **1 (differentiation), 3 (CTAs), 6 (pricing anchoring), 7 (underused assets)** from `~/.claude/plans/how-could-this-website-cryptic-aurora.md` into concrete build tasks. Grounded in `home-new/src/pages/Home.tsx` and `Pricing.tsx`. All copy/prices reuse values already in the code — no new claims invented.

Not in scope: gaps 2 (testimonials), 4 (Contact form), 5 (SEO). Deferred.

---

## 1. Differentiation — lead with the all-in-one wellness ecosystem

The moat is **gym + recovery + supplements + barbershop + classes under one roof, premium recovery in the Northern Illawarra** — competitors have squat racks, they don't have this. Right now it's a comma-list buried in the hero subhead (`Home.tsx:29`); features dominate positioning.

- [ ] **Hero subhead** (`Home.tsx:28-30`): rewrite from a feature list to a positioning statement. Lead with the ecosystem claim, e.g. _"The Illawarra's only train-recover-and-reset facility — gym, ice bath & sauna, supplements and a barbershop under one roof in Woonona."_ Keep the 650m²/24-7 details but subordinate them.
- [ ] **Consider hero H1** (`Home.tsx:25-27`): "Train. Recover. Repeat." is fine and on-message — keep unless the subhead rewrite makes it redundant. Decide, don't auto-change.
- [ ] **Add a "Why Alpha" strip** between the Stats section (ends `Home.tsx:82`) and Classes section (`Home.tsx:85`). A 4–5 item row: Train (650m² floor) · Recover (ice bath, sauna, Normatec) · Fuel (supplements) · Look sharp (barbershop) · Level up (classes/PT). Reuse the existing bordered-grid pattern from Stats (`Home.tsx:68-80`) so it's visually consistent, no new component needed.
- [ ] Verify each of the five pillars maps to a real page (Recovery, Supplements, Classes, Facility exist per `pages/*.tsx`) and link the strip items to those routes.

## 3. CTAs — reframe around the offer, put risk-reversal at the button

Current CTAs are flat: "Be a Member" (`Home.tsx:37`), "Get a Day Pass" (`Home.tsx:131`), "Choose Plan" (`Home.tsx:180`, `Pricing.tsx:102`), "Get in Touch" (`Home.tsx:284`). The day-pass risk-reversal ($0 fees, no lock-in) currently lives only in body copy and chips, not on the buttons.

- [ ] **Primary hero CTA** (`Home.tsx:32-38`): reframe "Be a Member" → **"Start today — train tonight"** (the "join today, train tonight" promise already sits at `Home.tsx:47`, so this is consistent, not a new claim).
- [ ] **Day-pass CTA** (`Home.tsx:126-132`): reframe "Get a Day Pass" → **"Claim your $15 day pass."** Price already stated at `Home.tsx:120`.
- [ ] **Risk-reversal at the button, not just in a chip:** add a small sub-line directly under the primary buttons reading **"No lock-in · cancel anytime"** (hero and pricing CTAs). This text already exists as a chip at `Home.tsx:172` and in FAQ — move/duplicate it to the point of decision. Style as muted caption (`text-[color:var(--cream-64)] text-xs`) sitting under the `<a>`.
- [ ] **Pricing "Choose Plan"** (`Home.tsx:180`, `Pricing.tsx:102`): keep label but ensure the no-lock-in reassurance renders beneath each CTA button, not only inside the includes list.
- [ ] Do **not** touch the ClassPass secondary CTA (`Home.tsx:39-44`) — it's a partner link, different intent.

## 6. Pricing — anchoring + annual savings framing

`Pricing.tsx` (`plans` array, lines 8-54) and the Home teaser (`Home.tsx:150-153`) list plans flatly. Only one plan is `popular: true`. No annual-vs-weekly savings math surfaced; day pass isn't framed as a stepping stone.

- [ ] **Surface annual savings** on the Alpha Annual plan (`Pricing.tsx:37-44`): $750/yr vs. $20.95/wk (= ~$1,089/yr) → add a **"Save ~$339/yr vs. weekly"** badge. Verify the arithmetic against the fortnightly billing ($41.90/fortnight × 26 = $1,089.40) before shipping the number.
- [ ] **Visual anchor:** the `popular` plan currently only gets a darker background (`Pricing.tsx:75`). Strengthen the "Most Popular" plan visually — accent border or slight scale — so the eye lands on it as the anchor. Keep it subtle (matches the restrained theme).
- [ ] **Home pricing teaser** (`Home.tsx:150-153`): mirror the annual-savings framing on the Alpha Annual entry so the teaser and full page agree.

## 7. Underused assets & channels

- [ ] **Instagram** (`Home.tsx:300-305`): currently a single link-out. Add a light social-proof signal without a heavy embed — static 3–6 recent-post thumbnail grid, keep the link, add a "fresh promos & events weekly" freshness cue.static curated thumbnails (simple, but manual refresh).
- [ ] **Directions CTA:** the Contact page embeds a Google Map (verify in `Contact.tsx`). Add an explicit **"Get directions →"** link opening `https://www.google.com/maps/dir/?api=1&destination=1/417-421+Princes+Hwy+Woonona+NSW+2517`. Address already in `Home.tsx:276`.
- [ ] **Barbershop & Supplements cross-sell:** these are real differentiators but thin on Home. Covered structurally by the "Why Alpha" strip (task 1) — ensure both get a pillar there and link to their pages (`Supplements.tsx` exists; confirm a barbershop page/route or link).

---

## Sequencing

1 → 3 → 6 → 7. Do the hero/differentiation copy (1) first since the "Why Alpha" strip built there also delivers the task-7 cross-sell, and the CTA reframes (3) touch the same hero block — batch those edits. Pricing (6) is self-contained. Assets (7) last.

## Verification

Run `home-new` (`npm run dev`); check hero reads as positioning not features; click each "Why Alpha" pillar reaches its page; confirm CTA labels + risk-reversal sub-lines render on hero/pricing; verify annual-savings math and "Most Popular" visual anchor
