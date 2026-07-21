# Alpha Gym — Implementation Instructions: Fixes

Turns the CRO strategy report (`this-is-the-original-purring-aho.md`) into concrete build
steps, adjusted per the user's decisions. Work happens in the React/Vite app under
`home-new/`.

This covers **fixing what's already broken** and **existing-section copywriting**. New
sections/pages live in `IMPLEMENTATION-NEW.md`.

## Canonical links (use these exact URLs everywhere)

| Purpose | URL |
|---|---|
| Membership ("Be a Member") | `https://myaccount.clubfit.net.au/onlineoffers?code=ALPHAGYM&accountId=1&showall=true` |
| ClassPass | `https://classpass.com/studios/alpha-gym-woonona` |
| Instagram | `https://www.instagram.com/alphagym.au/` |
| Barbershop | `https://alphabarbershopwoonona.com/` |

**Do NOT create per-plan ClubFit deep links.** Every membership CTA points at the single
`showall=true` offers page above. (This overrides Part A item 1 and Part C item 3 of the
report, which suggested per-plan deep links.)

Membership prices come from `pricing.md` — treat that file as the source of truth.

---

## Part A — Fix what's already broken

1. **Wire the dead pricing CTAs.** In [Home.tsx:130-136](home-new/src/pages/Home.tsx#L130-L136),
   the pricing "Choose Plan" buttons use `href="#"`. Point every one at the ClubFit offers
   URL above (same URL for all plans — no per-plan deep links).

2. **Add Barbershop to the navbar + fix the footer URL.**
   - Navbar: add a **Barbershop** item in the nav at
     [Navbar.tsx:22-29](home-new/src/components/Navbar.tsx#L22-L29) as an external link
     (`<a href="https://alphabarbershopwoonona.com/">`, not a router `Link`) to
     `https://alphabarbershopwoonona.com/`.
   - Footer: correct the Barbershop URL at
     [Footer.tsx:26](home-new/src/components/Footer.tsx#L26) (currently the wrong
     `alphagym-barbershop.com.au`) to `https://alphabarbershopwoonona.com/`.

3. **Fix the Instagram handle.** In
   [Footer.tsx:32](home-new/src/components/Footer.tsx#L32) change the link from
   `alphagym_woonona` to `https://www.instagram.com/alphagym.au/`.

---

## Part C — Copywriting (existing sections)

- **Hero** ([Home.tsx:27-33](home-new/src/pages/Home.tsx#L27-L33)): make the CTA a dual CTA.
  - Primary: **"Be a Member"** → ClubFit offers URL.
  - Secondary: **"ClassPass"** → `https://classpass.com/studios/alpha-gym-woonona`.
- **Add urgency / specificity** where it's honest — e.g. "join today, train tonight (24/7)",
  founding-member framing, or a specific current promo. Keep claims truthful.

---

## Notes
- No per-plan ClubFit deep links anywhere — always the `showall=true` offers page.
- All prices/fees must match `pricing.md`; flag any discrepancy rather than guessing.
