# Project Journal — Campaign Business

## Executive Snapshot

**Current focus:** Second round of Carol's copy feedback applied site-wide. Pricing restructured, sections removed, form updated, resources simplified.
**Next session priorities:** Define Critical Rules in CLAUDE.md. Establish data model and begin feature work. Wire up email capture on homepage and resources page. Confirm git index.lock issue is resolved before next commit.

---

## Historical Log

### 2026-05-12
- Applied second round of Carol's copy feedback across all six pages. Site deployed to production via Vercel. Git commit blocked by index.lock — Jason to clear manually with `rm ~/Documents/Campaign_Business/.git/index.lock` then `git add -A && git commit && git push`.
- **Homepage:** subtitle changed to "Campaign consulting based on first-hand candidate experience. Strategy, fundraising and operations made simple."
- **Services:** hero headline → "Your campaign, built with your capacity in mind."; hero body rewritten to emphasize feasibility; "What We Coordinate" and "What's Not Included" sections removed entirely; "Add-On Packages" renamed "Quick Activation Packages."
- **About:** first bio paragraph rewritten ("so overwhelmed or don't know what to do. Taking the first few steps is the hardest."); second paragraph replaced with Carol's personal motivation statement ("I'm not in it to fund a vacation home…"); credentials list replaced with: two-time candidate, city council to U.S. Congress support experience, 20+ years corporate background, Democratic Party volunteer leader.
- **Pricing:** Launch Sprint dropped from $750 to $300, now includes call-time call + script draft; Foundation changed from $1,000 to starting at $500/month, bi-weekly → weekly calls; Optional Add-Ons section removed; five FAQ answers rewritten (school board affordability, can't afford full support, percentage question, client count, haven't decided to run).
- **Work With Me / IntakeForm:** "Do you have a campaign bank account?" question removed; new question added at bottom: "What are a few 30 minute blocks of time this week that would be convenient for you?"; submit button renamed "Submit My Inquiry."
- **Resources:** headline → "Free tools for candidates."; subtitle updated to Carol's voice; "Arkansas Campaign Finance" guide renamed "Fundraising Tips and Tricks" with new description; free calculators section removed entirely.

### 2026-04-19 (session 7)
- Removed all em dash sentence breaks site-wide (page, about, services, pricing, resources, work-with-me, IntakeForm). Replaced with periods, commas, or colons depending on context.

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
