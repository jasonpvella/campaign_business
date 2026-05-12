import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Carol Vella | Blueprint Political",
  description:
    "Carol Vella is an Arkansas-based political consultant and fundraising specialist helping first-time candidates build campaigns that win.",
};

const credentials = [
  "Two-time personal candidate experience",
  "Candidate support experience from city council to U.S. Congress, partisan and non-partisan",
  "20+ years corporate experience in marketing, sales, human resources and merchandising",
  "Volunteer leader within the Democratic Party, integrated into the Arkansas support system",
];

const howIWork = [
  {
    title: "Small roster, full attention.",
    body: "We take on a limited number of candidates per cycle. Every race deserves our full focus, not a template.",
  },
  {
    title: "You get Carol, not a junior staffer.",
    body: "Every strategy call, every document, every fundraising review. That's Carol, not a team member you've never met.",
  },
  {
    title: "We're the quarterback, not the specialist.",
    body: "We coordinate your vendors (digital, mail, field, compliance) and stay the strategic owner throughout. You don't need to manage five different consultants. You need one team that owns the outcome.",
  },
  {
    title: "Structured and honest.",
    body: "If your timeline is unrealistic, we'll tell you. If your fundraising ask is too low, we'll push you. If a vendor isn't performing, we'll flag it. That's the job.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="font-serif text-navy text-5xl md:text-6xl leading-tight mb-4">
              Hi, I&apos;m Carol.
            </h1>
            <p className="font-sans text-text-muted text-xl leading-relaxed">
              Arkansas campaign consultant. Fundraising specialist. The person who keeps your campaign on plan,
              on pace, and on budget from announcement to Election Day.
            </p>
          </div>
          <div className="relative w-1/2 aspect-[480/579] rounded overflow-hidden">
            <Image
              src="/images/carol-vella.jpg"
              alt="Carol Vella"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <p className="font-sans text-text-muted text-base md:text-lg leading-relaxed">
              I&apos;ve watched a lot of first-time candidates fail because they are so overwhelmed or don&apos;t
              know what to do. Taking the first few steps is the hardest.
            </p>
            <p className="font-sans text-text-muted text-base md:text-lg leading-relaxed">
              {/* TODO: Carol to fill in with her specific background details */}
              I&apos;ve worked on Arkansas campaigns at every level, with a particular focus on fundraising and
              operations. Those are the two places where most first-time candidates are most lost and most
              vulnerable. Across five campaigns, I&apos;ve helped candidates build finance plans, run call time,
              structure events, manage vendor relationships, and stay disciplined when the pressure mounts.
            </p>
            <p className="font-sans text-text-muted text-base md:text-lg leading-relaxed">
              I&apos;m not a creative agency. I&apos;m not a pollster. I&apos;m the campaign quarterback: the one
              who builds the plan, sets the calendar, holds the team accountable, and makes sure every dollar and
              every hour is moving you toward victory. We work with a small number of candidates at a time so that
              every client gets our full attention, not a handoff to someone junior.
            </p>
            <p className="font-sans text-text-muted text-base md:text-lg leading-relaxed">
              I have been a candidate. I started Blueprint Political because I want the candidate experience to be
              easier for you so that more candidates will run and we win more of these races. I&apos;m not in it to
              fund a vacation home. I&apos;m charging enough to drive accountability that leads to results.
            </p>
          </div>

          {/* Credentials */}
          <div>
            <p className="label-tag mb-6">Credentials</p>
            <ul className="space-y-4">
              {credentials.map((c, i) => (
                <li key={i} className="font-sans text-text-muted text-sm leading-relaxed flex gap-2">
                  <span className="text-amber mt-1 shrink-0">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <p className="label-tag mb-4">How We Work</p>
          <h2 className="font-serif text-navy text-3xl md:text-4xl mb-10">
            What working with us actually looks like
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {howIWork.map((item, i) => (
              <div key={i} className="bg-white border border-navy/10 rounded p-6">
                <h3 className="font-serif text-navy text-lg mb-2">{item.title}</h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-cream text-3xl md:text-4xl mb-3">Want to work together?</h2>
          <p className="font-sans text-cream/70 text-lg mb-8">
            Inquiries are open. Let&apos;s find out if we&apos;re a fit.
          </p>
          <Link
            href="/work-with-me"
            className="bg-amber text-white font-sans font-semibold px-8 py-4 rounded text-lg hover:bg-amber/90 transition-colors inline-block"
          >
            Inquire Now →
          </Link>
        </div>
      </section>
    </>
  );
}
