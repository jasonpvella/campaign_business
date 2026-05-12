import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Blueprint Political",
  description:
    "Transparent campaign consulting pricing from Blueprint Political. Launch Sprint at $300 flat. Foundation from $500/month. Custom packages built around your race.",
};

const packages = [
  {
    name: "Launch Sprint",
    price: "$300 flat",
    duration: "2-week engagement",
    bestFor: "Candidates still deciding whether to run, need a blueprint fast, or want a plan before committing to full support.",
    includes: [
      "Candidate readiness assessment",
      "Filing research (deadlines, requirements, district)",
      "Win number calculation",
      "Core messaging framework",
      "30-day action plan",
      "One strategy call",
      "One call-time call",
      "Call-time script draft",
    ],
    note: "No ongoing commitment. Flat fee, delivered in 2 weeks.",
    cta: "Inquire About This Package →",
  },
  {
    name: "Foundation",
    price: "Starting at $500/month",
    duration: "Typically 3–5 months",
    bestFor: "School board, small city council, and county races where you need real support but are working with a lean budget.",
    includes: [
      "Full Campaign Blueprint (weeks 1–3)",
      "Fundraising plan and weekly call time coaching",
      "Weekly strategy calls",
      "Campaign calendar management",
      "Vendor coordination",
    ],
    note: "Final scope and rate set in your strategy call based on race size and timeline.",
    cta: "Inquire About This Package →",
  },
  {
    name: "Build Your Package",
    price: "Custom. Built around your race.",
    duration: "Scope and timeline tailored to you",
    bestFor: "Candidates who don't fit a standard tier: larger races, unique timelines, or specific gaps where you need targeted support, not a pre-packaged plan.",
    includes: [
      "Choose the services your race actually needs",
      "Mix strategy, fundraising, operations, or all three",
      "Flexible engagement length",
      "Priced after a free strategy call. No guessing.",
    ],
    note: "No two campaigns are the same. We'll scope exactly what you need and nothing you don't.",
    cta: "Let's Build It →",
  },
];

const faqs = [
  {
    q: "When should I hire a campaign consultant?",
    a: "As early as possible, ideally 4–6 months before your election. The sooner you have a plan and a fundraising engine, the better your odds. That said, if your election is 8 weeks away and you're behind, we'd rather help you now than not at all. Reach out and let's assess the situation.",
  },
  {
    q: "Is $1,000/month realistic for a school board race?",
    a: "Yes, even $500/month can give you the structure you need to run a campaign. We'll provide clear opportunities for volunteers to step in to help cover the work.",
  },
  {
    q: "What if I can't afford full campaign support?",
    a: "No problem. We can customize the plan to focus on your biggest needs.",
  },
  {
    q: "Do you take a percentage of what I raise?",
    a: "No. Our goal is to help you raise what your campaign needs to run a successful race, not to maximize our fees.",
  },
  {
    q: "How many clients do you take at once?",
    a: "A small number, intentionally. We don't run a high-volume operation. When you're a Blueprint Political client, you get our full attention, not a junior staffer on email. With a limited number of clients, Carol can be readily accessed via text, phone and email.",
  },
  {
    q: "Do you work with candidates outside Arkansas?",
    a: "Arkansas is our primary focus, but yes, we work with candidates from other states on a case-by-case basis, particularly for fundraising strategy and campaign planning. Reach out and let's talk.",
  },
  {
    q: "What if I haven't decided to run yet?",
    a: "No problem. We're happy to have a conversation and help you think through your decision. No cost.",
  },
  {
    q: "What's the difference between the Launch Sprint and full campaign support?",
    a: "The Launch Sprint is a one-time, flat-fee deliverable: a blueprint and a plan, delivered in two weeks, with no ongoing commitment. Full campaign support is a monthly engagement where we stay in it with you, building systems, coaching fundraising, and managing operations all the way to Election Day.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-navy text-5xl md:text-6xl leading-tight mb-6">
            Straightforward pricing.<br />No surprises.
          </h1>
          <p className="font-sans text-text-muted text-xl max-w-xl leading-relaxed">
            Most political consultants won&apos;t tell you what they charge until you&apos;re already on a call.
            We believe you deserve to know what you&apos;re investing before we ever talk.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`rounded border p-8 flex flex-col ${
                i === 1 ? "border-amber bg-cream" : "border-navy/10 bg-white"
              }`}
            >
              <div className="mb-6 flex-1">
                <h2 className="font-serif text-navy text-2xl mb-1">{pkg.name}</h2>
                <p className="font-sans text-amber font-semibold text-lg mb-1">{pkg.price}</p>
                <p className="font-sans text-text-muted text-sm mb-4">{pkg.duration}</p>
                <p className="font-sans text-xs text-text-muted uppercase tracking-widest font-semibold mb-1">Best for</p>
                <p className="font-sans text-text-muted text-sm leading-relaxed mb-5">{pkg.bestFor}</p>
                <p className="font-sans text-xs text-text-muted uppercase tracking-widest font-semibold mb-3">What&apos;s included</p>
                <ul className="space-y-2">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="font-sans text-text-muted text-sm flex gap-2">
                      <span className="text-amber shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-xs text-text-muted italic mb-4">{pkg.note}</p>
                <Link
                  href="/work-with-me"
                  className="block text-center bg-amber text-white font-sans font-semibold px-5 py-3 rounded hover:bg-amber/90 transition-colors"
                >
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="label-tag mb-6">FAQ</p>
          <div className="divide-y divide-navy/10">
            {faqs.map((faq, i) => (
              <details key={i} className="group py-5">
                <summary className="font-serif text-navy text-lg cursor-pointer list-none flex justify-between items-start gap-4">
                  <span>{faq.q}</span>
                  <span className="text-amber shrink-0 mt-1 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="font-sans text-text-muted text-sm leading-relaxed mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-cream text-3xl mb-3">Not sure which is right for you?</h2>
          <p className="font-sans text-cream/70 text-base mb-8">
            Let&apos;s figure it out together. The strategy call is free. No commitment.
          </p>
          <Link
            href="/work-with-me"
            className="bg-amber text-white font-sans font-semibold px-8 py-4 rounded text-lg hover:bg-amber/90 transition-colors inline-block"
          >
            Talk to Carol →
          </Link>
        </div>
      </section>
    </>
  );
}
