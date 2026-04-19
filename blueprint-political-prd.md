# Blueprint Political — Website PRD
**Version 1.0 | For Claude Code + Claude UI Builder**

---

## 1. Project Overview

**Business:** Blueprint Political  
**Founder:** Carol Vella  
**Tagline (recommended):** *"Your campaign. Built to win."*  
**Sub-tagline:** *Arkansas's go-to campaign quarterback for first-time candidates.*

Blueprint Political is a solo political consulting practice founded by Carol Vella, specializing in helping first-time candidates running for city council, school board, and county/local offices in Arkansas win their races. Carol's core strength is fundraising strategy and campaign operations — she acts as the campaign's general contractor, keeping candidates on plan, on pace, and on budget while coordinating specialists.

**Primary goal of this website:** Generate qualified inbound leads (consultation requests) from first-time Arkansas candidates who are serious about running and willing to invest in professional support.

**Secondary goals:**
- Establish Carol's credibility and personal brand
- Educate nervous first-time candidates on what professional campaign support looks like
- Pre-qualify leads before they ever reach Carol's inbox (via intake form)
- Capture emails for future nurture

---

## 2. Target Audience

**Primary:** First-time candidates in Arkansas running for:
- City council (any size city)
- School board
- County judge, quorum court, sheriff, assessor, clerk
- Mayor (small to mid-size cities)

**Psychographic profile:**
- Has never run before — excited but overwhelmed
- Knows they want to run but doesn't know where to start
- Worried about fundraising — doesn't know how to ask for money
- Has a job, family, and limited bandwidth
- Wants structure, accountability, and a clear plan
- May have already looked at Run for Something or Arena (free) but wants real 1:1 support
- Budget-conscious but understands that investing in expertise is how you win

**Secondary:** Non-Republican/independent candidates elsewhere in the US (out-of-state), treated as a bonus not the primary audience.

---

## 3. Brand & Visual Direction

### Brand Personality
- **Structured, disciplined, execution-focused** — not chaotic, not vague
- **Warm but direct** — approachable enough for a nervous first-timer, sharp enough to be credible
- **Arkansas-rooted** — local knowledge, not a national firm parachuting in
- **Founder-forward** — Carol IS the brand; this is not an agency, it's a person you hire

### Visual Aesthetic: "Editorial Civic Modernism"
Think: The New York Times Opinion section crossed with a sharp political campaign field office. Clean, confident, editorial. Not corporate, not patriotic-cliché, not generic agency.

**Color palette:**
- Primary: Deep slate navy `#1B2A3B`
- Accent: Warm amber/gold `#C8973A` — signals credibility and warmth without being red/blue partisan
- Light background: Off-white `#F5F2EC` — warm, not stark
- Text: Near-black `#1A1A1A`
- Secondary text: Medium gray `#6B7280`
- Success/highlight: Muted sage `#5B7B6F`

**Typography:**
- Display/Headlines: A strong serif — **Playfair Display** or **Libre Baskerville** — editorial authority
- Body: **DM Sans** or **Outfit** — clean, readable, modern
- Accent/Labels: All-caps small tracking, amber color — used sparingly for section labels and tags

**Design principles:**
- Heavy use of generous white space
- Large, confident typography — headlines should feel like they belong on a campaign sign
- One strong photo of Carol per major section (she is the product)
- Asymmetric layouts — content doesn't always sit in a centered box
- Subtle grid lines or ruled dividers as editorial texture
- No stock photography of generic politicians or capitol buildings
- Blueprint motif (subtle): thin grid lines, technical precision marks in the background of hero — a nod to the name without being literal

**What to avoid:**
- Red/white/blue patriotic clichés
- Generic "handshake" or "rally crowd" imagery
- Purple gradient on white (overused AI aesthetic)
- Clip art icons, shield logos, eagle imagery
- Looking like a government website

---

## 4. Site Architecture

### Pages

| Page | Priority | Purpose |
|------|----------|---------|
| Home | P0 | Lead conversion, brand introduction, credibility |
| Services | P0 | Explain what Carol does and what's included |
| About | P0 | Carol's story, credentials, photo, trust signals |
| Pricing | P0 | Transparent pricing — major differentiator |
| Work With Me (Intake) | P0 | Qualification + consultation request form |
| Resources | P1 | Free tools + lead magnets (see Section 7) |
| Blog/Insights | P2 | Optional, future content marketing |

### Navigation
```
Logo (Blueprint Political) | Services | About | Pricing | Resources | [Work With Me →]
```
- "Work With Me" is always a CTA button in the nav, amber/gold fill
- Mobile: hamburger menu, same CTA button pinned at bottom

---

## 5. Page-by-Page Specifications

---

### 5.1 Home Page

**Goal:** Convert a nervous first-time candidate into a consultation request within 60 seconds of arriving.

**Section 1 — Hero**
- Full-width, generous padding
- Headline (large serif, 56–72px): *"You decided to run. Now let's build a campaign that wins."*
- Sub-headline (sans-serif, 20px, secondary color): *"Arkansas's dedicated campaign consultant for first-time candidates. Strategy. Fundraising. Operations. All in one."*
- Two CTAs side by side:
  - Primary: `[Let's Talk →]` — links to Work With Me page, amber fill
  - Secondary: `[See How It Works]` — smooth scroll to services section, outlined
- Background: Off-white with subtle blueprint-grid texture (CSS, very faint `#1B2A3B` at 4% opacity lines)
- Carol's photo: positioned right side, slightly overlapping the grid — confident, approachable, professional attire

**Section 2 — The Problem (Empathy)**
- Section label: `SOUND FAMILIAR?` (small caps, amber)
- 3 short pain points in a horizontal card row:
  1. *"You know you want to run — but have no idea where to start."*
  2. *"Fundraising feels uncomfortable and you don't know how to ask."*
  3. *"You're worried about making a costly mistake that sinks the race."*
- Brief paragraph below: *"Most first-time candidates lose not because their message was wrong — but because they didn't have a plan, a fundraising engine, or anyone keeping them accountable. That's what I fix."*

**Section 3 — What I Do (Services Teaser)**
- Section label: `THE BLUEPRINT`
- Headline: *"Five things every first-time campaign needs. I build all of them."*
- 5 cards in a grid (2-3 per row), each with:
  - Icon (thin-line, not filled)
  - Service name
  - One-sentence description
  - "Your [asset]" framing (e.g., "Your Fundraising Engine," "Your Campaign Blueprint," "Your Weekly Accountability")
- CTA below: `[See Full Services →]`

**Section 4 — Social Proof / Stats**
- Section label: `THE TRACK RECORD`
- 3–4 stat callouts in large type:
  - *"5 campaigns supported"* (or however many Carol confirms)
  - *"Arkansas-based, Arkansas-focused"*
  - *"[X] raised across client campaigns"* (placeholder — fill with real number)
  - *"First-time candidate specialist"*
- 1–2 short testimonials with candidate name, race, and year (placeholder if not yet collected — note in code)

**Section 5 — How It Works**
- Section label: `THE PROCESS`
- Headline: *"From 'I think I want to run' to a fully-built campaign. In 90 days."*
- 4-step horizontal timeline:
  1. **Apply** — Fill out the intake form so I can learn about your race
  2. **Strategy Call** — Free 30-minute conversation to assess fit and build your roadmap
  3. **Campaign Blueprint** — Weeks 1–3: your full campaign plan, fundraising strategy, and path to victory
  4. **Execute Together** — Ongoing weekly accountability, coaching, and operations through Election Day
- CTA: `[Start With a Free Call →]`

**Section 6 — About Teaser**
- Left: Large photo of Carol (different from hero)
- Right: Short personal statement (3–4 sentences) — *"I'm Carol Vella, and I've spent my career helping candidates build campaigns that are structured, disciplined, and built to win. I work with a small number of Arkansas candidates at a time so every client gets my full attention..."*
- Link: `[More About Carol →]`

**Section 7 — Free Resource CTA**
- Full-width band, navy background, amber text
- Headline: *"Not sure if you're ready to run? Start here."*
- Sub: *"Download the First-Time Candidate Readiness Checklist — free."*
- Email capture: [Your email] [Get the Checklist →]

**Section 8 — Final CTA**
- Headline: *"Ready to build something that wins?"*
- Sub: *"Applications are open. I work with a limited number of candidates per cycle."*
- Single CTA: `[Apply to Work With Me →]` — amber, large

**Footer**
- Logo + tagline
- Nav links
- *"Blueprint Political is an Arkansas-based political consulting practice. Carol Vella works with Democratic, independent, and nonpartisan candidates."*
- Contact email
- © 2025 Blueprint Political

---

### 5.2 Services Page

**Goal:** Make abstract consulting tangible. Candidate should finish reading and think "this is exactly what I need."

**Hero:**
- Headline: *"Your campaign. Fully built."*
- Sub: *"I don't just advise — I build the infrastructure, own the plan, and keep you accountable every week."*

**Core offer framing:**
- Intro paragraph explaining the "campaign quarterback" concept — Carol coordinates specialists (digital, mail, field, compliance) but stays the strategic owner throughout

**5 Service Sections** (each gets its own visual block):

**1. Your Campaign Blueprint** *(Weeks 1–3)*
- What it is, what's included, what you walk away with
- Deliverable callout box: *"Written Campaign Blueprint — your roadmap to Election Day"*

**2. Your Fundraising Engine** *(Ongoing)*
- Highlight this first — it's Carol's biggest differentiator
- Call time coaching, donor targeting, event strategy, weekly tracking
- Deliverables: Weekly call time plan, Monthly fundraising goals dashboard

**3. Your Weekly Accountability** *(Candidate Coaching)*
- Strategy calls, schedule guidance, message discipline
- Deliverable: Weekly action plan

**4. Your Campaign Operations** *(Project Management)*
- Calendar management, vendor coordination, milestone tracking
- Deliverable: Master campaign tracker

**5. Your Volunteer System** *(Grassroots)*
- Recruitment plan, onboarding, role definition
- Deliverables: Volunteer playbook, Weekly activation goals

**What I Coordinate (Not Execute):**
- Short section explaining Carol stays the quarterback — media buying, digital/social, field/data vendors, compliance/treasurer are coordinated, not executed
- Framing: *"You get one person who owns the outcome — not five vendors pointing at each other."*

**What's Not Included:**
- Short, honest list — builds trust by showing Carol knows her scope
- Financial reporting/compliance, ad buying execution, daily social posting, advanced data modeling

**Add-On Packages:**
- Campaign Launch Sprint (2 weeks, flat fee)
- Fundraising Intensive (focused engagement)
- Volunteer Activation Boost

**CTA:** `[See Pricing →]` and `[Apply to Work With Me →]`

---

### 5.3 About Page

**Goal:** Make Carol real. This is where the candidate decides whether to trust her.

**Layout:** Editorial, founder-forward. Large photo leads.

**Sections:**
1. **Hero photo** — full-bleed or large crop, confident
2. **Headline:** *"Hi, I'm Carol."* (warm, direct — not "Carol Vella is a seasoned political consultant")
3. **Story:** 3–4 paragraphs in Carol's voice:
   - Why she does this work
   - Her background in Arkansas politics and fundraising
   - What she's seen work (and fail) in down-ballot races
   - Her philosophy: structured, disciplined, execution-focused
4. **Credentials block:**
   - 5 campaigns (2 direct, 3 consulting/strategy — placeholder for specifics)
   - Arkansas-based
   - Fundraising specialist
   - [Any relevant affiliations, party connections, training]
5. **"How I Work" section:**
   - Small client roster (limited seats per cycle)
   - Full attention, not handed off to junior staff
   - Direct access to Carol, not an account manager
6. **Photo gallery** — 2–3 additional photos (campaign events, headshots, etc.)
7. **CTA:** `[Work With Carol →]`

---

### 5.4 Pricing Page

**Goal:** Be the only consultant in Arkansas who publishes their rates. This builds trust and pre-qualifies leads.

**Intro:**
- Headline: *"Straightforward pricing. No surprises."*
- 2-sentence intro: *"Most political consultants won't tell you what they charge until you're already on a call. I believe you deserve to know what you're investing before we ever talk."*

**Pricing Tiers:**

| Package | Price | Best For |
|---------|-------|----------|
| Launch Sprint | $1,500 flat | Candidates exploring a run, need a blueprint fast |
| Foundation | Starting at $1,000/month | School board, small city council, 3–4 month engagement |
| Full Campaign | Starting at $2,000/month | City council, county office, 4–6 month engagement |

*(Prices are "starting at" — final scope set in strategy call. Carol can adjust on intake.)*

**Each tier gets:**
- What's included (bulleted, specific)
- Typical engagement length
- Who it's for
- `[Apply for This Package →]` CTA

**Optional Add-Ons section:**
- Win Bonus (flat amount, pre-agreed) — explain briefly
- Additional coaching hours
- Fundraising Intensive add-on

**FAQ section (6–8 questions):**
- *"When should I hire a campaign consultant?"*
- *"Is $1,000/month realistic for a school board race?"*
- *"What if I can't afford full campaign support?"*
- *"Do you take a percentage of what I raise?"* (Answer: No — explain why this matters)
- *"How many clients do you take at once?"*
- *"Do you work with candidates outside Arkansas?"*
- *"What if I haven't decided to run yet?"*
- *"What's the difference between the Launch Sprint and full campaign support?"*

**CTA:** `[Not Sure Which Is Right? Let's Talk →]`

---

### 5.5 Work With Me (Intake Form) Page

**Goal:** Pre-qualify leads and make Carol's inbox only contain serious, ready candidates.

**Intro:**
- Headline: *"Let's see if we're a fit."*
- Sub: *"Fill out the form below. I review every application personally and follow up within 2 business days."*
- Reassurance: *"There's no commitment in applying — just a conversation."*

**Form Fields:**

Section 1 — About You
- First + Last Name
- Email
- Phone (optional)
- City/County in Arkansas (or state if out-of-state)

Section 2 — About Your Race
- What office are you running for? (dropdown: City Council, School Board, County Office, Mayor, State Legislature, Other)
- What is your election date or filing deadline? (date picker or text)
- Have you officially filed to run? (Yes / Not yet / Exploring)
- Party/affiliation (Democrat, Independent, Nonpartisan, Other)

Section 3 — Where You Are Now
- Have you run for office before? (Yes / No)
- Do you have a campaign bank account open? (Yes / No / Not sure)
- Roughly how much do you need to raise to be competitive? (dropdown: Under $5K / $5K–$15K / $15K–$50K / $50K+ / Not sure)
- How did you hear about Blueprint Political? (dropdown + Other text)

Section 4 — What You Need
- What's your biggest challenge right now? (multi-select: Fundraising / Campaign strategy / Voter outreach / Volunteer management / Just getting started / Other)
- What package are you most interested in? (Launch Sprint / Foundation / Full Campaign / Not sure yet)
- Anything else you want Carol to know? (text area, optional)

**Submit button:** `[Submit My Application →]` (amber, full width on mobile)

**Post-submit confirmation:**
- Headline: *"You're in."*
- Copy: *"Carol will review your application and reach out within 2 business days. Check your inbox — and go do something good today."*

---

### 5.6 Resources Page

**Goal:** Capture emails, demonstrate expertise, create SEO footprint.

**Gated Resources (email capture required):**

1. **First-Time Candidate Readiness Checklist** *(PDF)*
   - "10 things to have in place before you announce"
   - Highest-traffic lead magnet

2. **Arkansas Campaign Finance Quick Guide** *(PDF)*
   - Filing requirements, disclosure deadlines, common mistakes
   - Unique to Carol's Arkansas focus — no competitor has this

3. **Call Time Script Starter Pack** *(PDF)*
   - How to ask donors for money — Carol's #1 coaching topic
   - High perceived value for candidates terrified of fundraising

**Free Interactive Tools (no email required — build goodwill):**

4. **Win Number Calculator**
   - Input: District name, last comparable election turnout
   - Output: Votes needed to win (50% + 1), suggested voter contact targets
   - Simple JS calculator, no backend needed

5. **Fundraising Goal Estimator**
   - Input: Race type, district size, months to election
   - Output: Suggested total raise goal, monthly targets, call time hours needed
   - Simple JS calculator

**Future blog section placeholder** (P2 — not required for launch)

---

## 6. Interactive Tools — Technical Specs

### Win Number Calculator
```
Inputs:
- Estimated total votes cast in last comparable election (number field)
- Number of candidates in the race (dropdown: 2 / 3 / 4 / 5+)

Output:
- Votes needed to win: [calc]
- Suggested door-knocks to achieve this: [calc × 3]
- Suggested phone calls: [calc × 5]

Formula: votes_needed = Math.ceil((total_votes / candidates) + 1)
```

### Fundraising Goal Estimator
```
Inputs:
- Race type (dropdown: School Board / City Council / County Office / Mayor)
- Months until election (slider: 2–12)
- Do you have a campaign manager? (Yes / No)

Output:
- Suggested raise goal: [range based on race type lookup table]
- Monthly fundraising target: [goal / months]
- Call time hours per week needed: [monthly_target / avg_ask / weeks × 2]
- "Based on this, you'd benefit most from: [package recommendation]"

Race type lookup table (starting estimates):
- School Board: $3,000–$8,000
- City Council: $8,000–$25,000
- County Office: $15,000–$50,000
- Mayor: $20,000–$75,000
```

Both calculators should end with a soft CTA:
*"Want help hitting these numbers? [Talk to Carol →]"*

---

## 7. Content Placeholders (Carol to Fill)

The following need Carol's input before launch:

- [ ] Exact number of campaigns and win record
- [ ] Dollar amounts raised across campaigns (even ranges work)
- [ ] 1–3 candidate testimonials (name, race, year, quote)
- [ ] Carol's bio text (3–4 paragraphs, first person, her voice)
- [ ] High-res photos (hero, about, campaign photos)
- [ ] Specific city/race case study details (optional but high-impact)
- [ ] Confirmed pricing tiers and what's included in each
- [ ] Contact email address
- [ ] Domain / hosting provider

---

## 8. SEO Strategy (Arkansas-Focused)

**Target keywords:**
- `political consultant Arkansas`
- `campaign consultant Arkansas`
- `run for city council Arkansas`
- `school board campaign help Arkansas`
- `first time candidate consultant`
- `Arkansas campaign fundraising consultant`
- `how to run for office Arkansas`
- `down ballot campaign consultant`

**On-page SEO requirements:**
- Each page has unique `<title>` and `<meta description>`
- H1 on every page contains primary keyword
- Homepage meta: *"Blueprint Political | Arkansas Campaign Consultant for First-Time Candidates | Carol Vella"*
- Alt text on all photos
- Structured data: LocalBusiness schema with Arkansas location

---

## 9. Technical Specifications

**Stack recommendation:**
- **Framework:** Next.js 14 (App Router) — fast, SEO-friendly, easy to deploy
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Playfair Display + DM Sans)
- **Forms:** React Hook Form + EmailJS or Formspree (no backend needed at launch)
- **Email capture:** Mailchimp embedded form or ConvertKit
- **Deployment:** Vercel (free tier sufficient)
- **CMS (optional, P2):** Contentlayer or Sanity for blog posts later

**Performance requirements:**
- Lighthouse score ≥ 90 on mobile
- All images WebP, lazy-loaded
- No external JS blocking render

**Accessibility:**
- WCAG 2.1 AA minimum
- All interactive elements keyboard-navigable
- Color contrast ratios pass on all text

---

## 10. Claude UI Builder Direction

When building this in Claude's UI builder, use the following as the design brief:

> **Build a political consulting website for "Blueprint Political" — a solo Arkansas campaign consultant named Carol Vella. The aesthetic is "Editorial Civic Modernism" — think NYT Opinion section meets campaign field office. Deep slate navy (#1B2A3B) primary, warm amber (#C8973A) accent, off-white (#F5F2EC) background. Serif headlines (Playfair Display), clean sans body (DM Sans). Generous whitespace, asymmetric layouts, editorial typography. A subtle blueprint-grid texture in backgrounds. Carol's photo is prominent — she IS the brand. The tone is warm but direct, structured but not cold. No patriotic clichés, no stock political imagery, no purple gradients. The hero headline is: "You decided to run. Now let's build a campaign that wins." Primary CTA is amber: "Let's Talk →". The site must feel like hiring this person is obviously the right decision.**

---

## 11. Launch Checklist

- [ ] Domain registered (suggestions: `blueprintpolitical.com`, `blueprintpolitical.co`, `blueprintark.com`)
- [ ] Google Analytics 4 installed
- [ ] Google Search Console verified
- [ ] Contact form tested end-to-end
- [ ] Email capture connected to Mailchimp/ConvertKit list
- [ ] All placeholder content replaced with real content
- [ ] Mobile responsive QA on iOS and Android
- [ ] Privacy policy page added (required for email capture)
- [ ] Social meta tags (og:image, Twitter card) set for all pages
- [ ] Google Business Profile created (Arkansas location)

---

## 12. Future Phases (Post-Launch)

**Phase 2 (1–3 months after launch):**
- Blog / Insights section (Arkansas campaign tips, fundraising guides)
- Video intro from Carol on homepage
- Candidate success story case studies (detailed, with real numbers)

**Phase 3 (3–6 months):**
- AI-powered campaign readiness assessment (longer quiz → personalized report → email capture)
- Arkansas election calendar integration (upcoming filing deadlines, election dates)
- Referral program for past candidates

---

*PRD Version 1.0 — Blueprint Political — Prepared for Claude Code build*
