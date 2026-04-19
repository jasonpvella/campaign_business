# Project Journal — Campaign Business

## Executive Snapshot

**Current focus:** First round of copy feedback from Carol applied site-wide. Tone, voice, and brand language refined.
**Next session priorities:** New bio from Carol to replace about page placeholder. Define Critical Rules in CLAUDE.md. Establish data model and begin feature work.

---

## Historical Log

### 2026-04-19 (session 6)
- Increased label-tag (section subheaders like "Sound Familiar?") from 12px to 18px (text-lg) site-wide.

### 2026-04-19 (session 5)
- Removed the final "Ready to build something that wins?" CTA section from homepage — redundant after the email capture band.

### 2026-04-19 (session 4)
- Applied first round of Carol's copy feedback across the entire site.
- Homepage: fixed "Arkansas's" → "Arkansas'"; removed AI-looking em dash patterns; Sound Familiar cards flipped to first person; follow-up paragraph rewritten to "biggest hurdle is putting a plan together — that's where we come in."
- Removed Track Record section entirely; moved The Process section into the dark blue (navy) background that was freed up.
- Process steps: 01 "Apply" → "Inquire"; 02 removed "no pitch" language; 03 delivery timeline "three weeks" → "one week."
- About teaser blockquote replaced with "I have run for office twice and my goal is to make it easier for you." Bio paragraph left as placeholder — new bio coming from Carol.
- Final CTA paragraph replaced with "Let's talk. We're excited to see how we can make your campaign seamless."
- Voice shift: "I" → "we" for all business-voice copy across homepage, services, pricing, about, and work-with-me pages. Carol's personal voice ("Hi, I'm Carol", bio paragraphs) preserved as exception.
- All "Apply" CTAs replaced with "Inquire" variants site-wide (buttons, metadata, form intro copy).
- Footer: added phone number 917-363-7009; removed partisan/nonpartisan line; updated description to include "supporting candidates nation wide."; © 2025 → © 2026.

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
