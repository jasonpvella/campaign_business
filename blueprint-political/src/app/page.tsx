import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blueprint Political | Arkansas Campaign Consultant for First-Time Candidates",
  description:
    "Carol Vella helps first-time Arkansas candidates build campaigns that win. Strategy, fundraising, and operations — all in one.",
};

const services = [
  {
    name: "Your Campaign Blueprint",
    desc: "A full roadmap from announcement to Election Day — strategy, messaging, budget, and path to victory. All in writing. All yours.",
  },
  {
    name: "Your Fundraising Engine",
    desc: "This is where most campaigns fail. I build your finance plan, coach your call time, structure your events, and track progress every week.",
  },
  {
    name: "Your Weekly Accountability",
    desc: "Strategy calls, schedule guidance, decision support, and message coaching — every week, so you never wonder what to do next.",
  },
  {
    name: "Your Campaign Operations",
    desc: "I'm the general contractor. I manage your calendar, coordinate vendors, track milestones, and keep everything moving toward Election Day.",
  },
  {
    name: "Your Volunteer System",
    desc: "A recruitment plan, onboarding system, and grassroots activation strategy that turns supporters into a real ground game.",
  },
];

const steps = [
  {
    n: "01",
    title: "Apply",
    desc: "Fill out a short intake form so I can learn about your race, your timeline, and what you need most.",
  },
  {
    n: "02",
    title: "Strategy Call",
    desc: "A free 30-minute conversation. No pressure, no pitch — just an honest assessment of your race and whether we're a fit.",
  },
  {
    n: "03",
    title: "Campaign Blueprint",
    desc: "In the first three weeks, you'll have a complete written campaign plan: timeline, win strategy, fundraising targets, messaging framework, and budget.",
  },
  {
    n: "04",
    title: "Execute Together",
    desc: "From there, we work side by side through Election Day. Weekly calls, real accountability, and someone who owns the outcome with you.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-navy text-5xl md:text-6xl leading-tight mb-6">
              You decided to run.<br />
              Now let&apos;s build a campaign that wins.
            </h1>
            <p className="font-sans text-text-muted text-lg md:text-xl mb-8 leading-relaxed">
              Arkansas&apos;s dedicated campaign consultant for first-time candidates.
              Strategy. Fundraising. Operations. All of it — built around you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/work-with-me"
                className="bg-amber text-white font-sans font-semibold px-7 py-3 rounded hover:bg-amber/90 transition-colors"
              >
                Let&apos;s Talk →
              </Link>
              <a
                href="#how-it-works"
                className="border border-navy text-navy font-sans font-semibold px-7 py-3 rounded hover:bg-navy/5 transition-colors"
              >
                See How It Works
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="relative w-80 h-96 rounded overflow-hidden">
              <Image
                src="/images/carol-vella.jpg"
                alt="Carol Vella, Blueprint Political"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="label-tag mb-10">Sound Familiar?</p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              "You know you want to run — but you have no idea where to start.",
              "Fundraising feels awkward. You don't know how to ask, who to ask, or how much.",
              "You're terrified of making a costly mistake that sinks the whole thing.",
            ].map((text, i) => (
              <div key={i} className="border border-navy/10 rounded p-6">
                <p className="font-serif text-navy text-xl leading-snug">&ldquo;{text}&rdquo;</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            Most first-time candidates don&apos;t lose because their message was wrong. They lose because they
            didn&apos;t have a plan, a fundraising engine, or anyone keeping them accountable. That&apos;s exactly
            what I fix.
          </p>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <p className="label-tag mb-4">The Blueprint</p>
          <h2 className="font-serif text-navy text-4xl md:text-5xl mb-12 leading-tight">
            Five things every first-time<br />campaign needs. I build all of them.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-navy/10 rounded p-6">
                <h3 className="font-serif text-navy text-xl mb-2">{s.name}</h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="font-sans text-amber font-semibold hover:underline">
            See Everything That&apos;s Included →
          </Link>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-navy text-cream">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-amber text-xs font-sans font-semibold tracking-widest uppercase mb-10">The Track Record</p>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { stat: "5", label: "Arkansas campaigns supported" },
              { stat: "[X]", label: "raised across client campaigns" }, // TODO: real number
              { stat: "AR", label: "Arkansas-based. Arkansas-focused." },
              { stat: "1:1", label: "First-time candidate specialist" },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-serif text-5xl text-amber mb-2">{item.stat}</p>
                <p className="font-sans text-cream/70 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          {/* TODO: replace with real testimonials from Carol */}
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((n) => (
              <div key={n} className="border border-cream/10 rounded p-6">
                <p className="font-serif text-cream/40 italic text-base mb-4">
                  &ldquo;[Testimonial from candidate — replace with real quote.]&rdquo;
                </p>
                <p className="font-sans text-cream/30 text-sm">— Name, Race, Year</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <p className="label-tag mb-4">The Process</p>
          <h2 className="font-serif text-navy text-4xl md:text-5xl mb-12 leading-tight">
            From &ldquo;I think I want to run&rdquo; to a fully-built campaign.<br />
            Here&apos;s how we get there.
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            {steps.map((step) => (
              <div key={step.n}>
                <p className="font-sans text-amber text-sm font-semibold tracking-widest mb-3">{step.n}</p>
                <h3 className="font-serif text-navy text-xl mb-2">{step.title}</h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/work-with-me"
            className="bg-amber text-white font-sans font-semibold px-7 py-3 rounded hover:bg-amber/90 transition-colors inline-block"
          >
            Start With a Free Call →
          </Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 rounded overflow-hidden">
            <Image
              src="/images/carol-vella.jpg"
              alt="Carol Vella, Blueprint Political"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <blockquote className="font-serif text-navy text-2xl md:text-3xl leading-snug mb-6 border-l-4 border-amber pl-6">
              &ldquo;I work with a small number of candidates at a time — because this work deserves full attention,
              not a junior staffer on email.&rdquo;
            </blockquote>
            <p className="font-sans text-text-muted text-base leading-relaxed mb-4">
              I&apos;m Carol Vella. I&apos;ve spent my career in Arkansas politics, and I&apos;ve watched too many
              good candidates lose races they should have won — because they didn&apos;t have structure, didn&apos;t
              have a fundraising plan, or didn&apos;t have anyone keeping them honest.
            </p>
            <p className="font-sans text-text-muted text-base leading-relaxed mb-6">
              Blueprint Political exists to fix that.
            </p>
            <Link href="/about" className="font-sans text-amber font-semibold hover:underline">
              More About Carol →
            </Link>
          </div>
        </div>
      </section>

      {/* Free Resource Band */}
      <section className="py-16 bg-navy">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-serif text-cream text-3xl md:text-4xl mb-3">
            Not sure if you&apos;re ready to run? Start here.
          </h2>
          <p className="font-sans text-amber text-base mb-8">
            Download the First-Time Candidate Readiness Checklist — 10 things to have in place before you
            announce. Free.
          </p>
          {/* TODO: wire up to email capture service */}
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded font-sans text-sm text-navy bg-cream focus:outline-none focus:ring-2 focus:ring-amber"
            />
            <button
              type="submit"
              className="bg-amber text-white font-sans font-semibold px-6 py-3 rounded hover:bg-amber/90 transition-colors whitespace-nowrap"
            >
              Send Me the Checklist →
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-cream text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-navy text-4xl md:text-5xl mb-4">
            Ready to build something that wins?
          </h2>
          <p className="font-sans text-text-muted text-lg mb-10 max-w-xl mx-auto">
            I take on a limited number of candidates per election cycle. If you&apos;re serious about running,
            let&apos;s talk now.
          </p>
          <Link
            href="/work-with-me"
            className="bg-amber text-white font-sans font-semibold px-8 py-4 rounded text-lg hover:bg-amber/90 transition-colors inline-block"
          >
            Apply to Work With Me →
          </Link>
        </div>
      </section>
    </>
  );
}
