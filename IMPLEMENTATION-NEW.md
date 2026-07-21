# Alpha Gym — Implementation Instructions: New Sections & Pages

Turns the CRO strategy report (`this-is-the-original-purring-aho.md`) into concrete build
steps, adjusted per the user's decisions. Work happens in the React/Vite app under
`home-new/`.

This covers **new sections and new pages**. Fixes to existing broken links/copy live in
`IMPLEMENTATION-FIXES.md`.

## Canonical links (use these exact URLs everywhere)

| Purpose | URL |
|---|---|
| Membership ("Be a Member") | `https://myaccount.clubfit.net.au/onlineoffers?code=ALPHAGYM&accountId=1&showall=true` |
| ClassPass | `https://classpass.com/studios/alpha-gym-woonona` |
| Instagram | `https://www.instagram.com/alphagym.au/` |
| Barbershop | `https://alphabarbershopwoonona.com/` |

**Do NOT create per-plan ClubFit deep links.** Every membership CTA points at the single
`showall=true` offers page above. (This overrides Part C item 3 of the report, which
suggested per-plan deep links.)

Membership prices come from `pricing.md` — treat that file as the source of truth.

---

## Part B — New sections & pages

### 1. Sticky / persistent membership CTA (mobile especially)
Add a persistent bottom bar (or persistent nav button) that always shows the join CTA →
ClubFit offers URL. Lead with the price: **"Join from $20.95/wk · No lock-in"** → *Get
Started*. Ensure it stays visible on scroll and on mobile.

### 2. Day pass only — remove free trial
**Do NOT build a free trial or `/free-trial` landing page.** (This overrides Part B item 2
of the report.) Instead surface the **1 Day Pass ($15)** from `pricing.md` as the
low-commitment entry point:
- A day-pass mention/section on the home page.
- CTA points at the ClubFit offers URL (no separate landing page, no lead-capture form).
- Copy should reflect reality: **staffed-hours access, $15 per visit, $0 joining fee, $0
  access tag fee.**

### 3. Testimonials — placeholder only
No real reviews needed right now. Keep the testimonials block as a **placeholder** — just
make sure it doesn't read as an unfinished dev note to visitors. Replace the literal
"Placeholder — replace with a real review" text at
[Home.tsx:178](home-new/src/pages/Home.tsx#L178) with neutral placeholder attribution
(e.g. a generic member name / "Alpha Gym Member") so nothing looks broken. Real Google
reviews can be swapped in later.

### 4. Remove membership comparison section → add Instagram social block
- **Remove** the membership-comparison work proposed in the report (do not build the
  aligned 3-plan comparison / differentiated feature lists). Leave the existing pricing on
  the home page as-is aside from the CTA fix in `IMPLEMENTATION-FIXES.md` Part A.1 — the
  full detail lives on the new Pricing page (see below).
- **Add an Instagram social block** near the footer. It should:
  - Link to `https://www.instagram.com/alphagym.au/`.
  - Mention that Instagram is where **promos, events, and community announcements** are
    posted — i.e. a reason to follow, not just a logo.
  - Copy angle: "Follow @alphagym.au for promos, events & community announcements."

### 5. Trust & friction-reducers woven into existing sections
Small copy additions (no new pages):
- **"No lock-in / cancel anytime"** badge on the pricing cards (not just in the FAQ).
- **Staffed hours + "open 24/7"** near the join CTA.
- **Parking + easy access** — promote the FAQ point at
  [Home.tsx:199](home-new/src/pages/Home.tsx#L199).
- **"What happens after you join"** — one line: "sign up online in 2 minutes, get your
  tag, start today."

---

## Separate Contact page

Split the contact section out of the home page into its own route.
- New page `home-new/src/pages/Contact.tsx` containing the contact section currently at
  [Home.tsx:213-256](home-new/src/pages/Home.tsx#L213-L256) (form + phone/email/address
  panel).
- Register the route in [App.tsx:13-19](home-new/src/App.tsx#L13-L19) as `/contact` inside
  the `<Layout />` route.
- Update nav/footer links that point to `/#contact`
  ([Navbar.tsx:28](home-new/src/components/Navbar.tsx#L28),
  [Footer.tsx:25](home-new/src/components/Footer.tsx#L25)) to `/contact`.
- Decide whether to keep a short contact CTA on the home page linking to `/contact`, or
  remove the inline section entirely — confirm with the user if unsure.

## Separate Pricing page

Split pricing out of the home page into its own route, using `pricing.md` as the source of
truth for the plans and fine print.
- New page `home-new/src/pages/Pricing.tsx`. Include the real memberships from `pricing.md`:
  - **1 Day Pass** — $15/visit, staffed hours, $0 join, $0 tag.
  - **Fortnightly 24/7 Gym Access** — $20.95/wk ($41.90/fortnight), $49 join, $0 tag, no
    lock-in. (Most Popular.)
  - **Fortnightly Youth (13–15)** — $17.95/wk ($35.90/fortnight), restricted/staffed-hours
    access, $49 join.
  - **Alpha Annual** — $750 upfront (12 months), $0 join, $0 tag.
  - **Recovery Membership** — $25/wk ($50/fortnight), $0 join, $0 tag.
  - Note the **Argo Elevate** complimentary access and **Fitness Passport** options if
    space allows.
  - State join fees / tag fees / no-lock-in up front on each card.
  - Every plan CTA → the single ClubFit offers URL (no per-plan deep links).
- Register the route in [App.tsx:13-19](home-new/src/App.tsx#L13-L19) as `/pricing`.
- Update nav/footer links currently pointing at `/#pricing`
  ([Navbar.tsx:27](home-new/src/components/Navbar.tsx#L27),
  [Footer.tsx:24](home-new/src/components/Footer.tsx#L24)) to `/pricing`.
- The home page keeps its lightweight pricing teaser (Part B.4) that links through to
  `/pricing`.

---

## Sequence (suggested)

1. Fixes (`IMPLEMENTATION-FIXES.md` Part A, all three) — tiny, highest ROI.
2. Contact page + Pricing page routes.
3. Hero dual CTA (`IMPLEMENTATION-FIXES.md` Part C) + day-pass section (Part B.2).
4. Sticky mobile CTA (Part B.1) + Instagram social block (Part B.4).
5. Trust badges / copy tightening (Part B.5).

## Notes
- No per-plan ClubFit deep links anywhere — always the `showall=true` offers page.
- No free trial and no lead-capture form — day pass is the only low-commitment entry.
- Testimonials stay a clean placeholder for now.
- All prices/fees must match `pricing.md`; flag any discrepancy rather than guessing.
