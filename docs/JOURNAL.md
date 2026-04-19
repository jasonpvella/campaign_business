# Project Journal — Campaign Business

## Executive Snapshot

**Current focus:** Nav and Pricing page polish. Home link added to nav; "Full Campaign" tier replaced with flexible "Build Your Package" option.
**Next session priorities:** Define Critical Rules in CLAUDE.md. Establish data model and begin feature work.

---

## Historical Log

### 2026-04-19
- Created `CLAUDE.md` and `docs/JOURNAL.md`.
- Removed nested git from `blueprint-political/`, initialized git at `Campaign_Business` root.
- Created public GitHub repo at github.com/jasonpvella/campaign_business and pushed.
- Added Delivery Standard to `CLAUDE.md`: mandatory `tsc --noEmit` + regression audit on every delivery, scaled to change size.
- Fixed IntakeForm error message to include Carol's email (`carolyvella@gmail.com`).
- Updated required fields: Phone and City/County now required; Office downgraded to optional. Top 5 fields (First Name, Last Name, Email, Phone, City/County) are the only mandatory fields.
- Identified root cause of submission error: Formspree legacy endpoint requires Carol to click a one-time "Confirm Form" verification link in her inbox before submissions go through.

### 2026-04-19 (session 3)
- Added "Home" as first nav link in `Nav.tsx`, pointing to `/`.
- Replaced "Full Campaign" pricing tier with "Build Your Package" — no fixed price, custom CTA ("Let's Build It →"), copy emphasizes flexibility and tailored scoping.
- Updated pricing page meta description to remove "Full Campaign from $2,000/month".

### 2026-04-19 (session 2)
- Replaced legacy Formspree endpoint (`formspree.io/carolyvella@gmail.com`) with verified form ID (`formspree.io/f/mwvaqepn`). Verification email never arrived so legacy endpoint was non-functional.
- Added Vercel deploy (`npx vercel --prod`) as step 5 of Save Project workflow in CLAUDE.md.
- IntakeForm submission now confirmed working end-to-end.
