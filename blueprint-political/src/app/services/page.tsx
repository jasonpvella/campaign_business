import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Blueprint Political",
  description:
    "Carol Vella builds the full campaign infrastructure for first-time Arkansas candidates: strategy, fundraising, operations, accountability, and volunteer systems.",
};

const services = [
  {
    tag: "Weeks 1–3",
    name: "Your Campaign Blueprint",
    body: "This is where we start. It's the foundation everything else is built on. In the first three weeks, you'll walk away with a complete written Campaign Blueprint that covers:",
    bullets: [
      "Timeline from today to Election Day",
      "Win strategy and path to 50% + 1",
      "Target voter definition and universe",
      "Core messaging and candidate narrative",
      "Full campaign budget and priorities",
    ],
    closing:
      "Most first-time candidates have pieces of this in their heads. The Blueprint puts it on paper, sharpens it, and turns it into something your whole team can execute from.",
    deliverable: "Written Campaign Blueprint",
  },
  {
    tag: "Ongoing",
    name: "Your Fundraising Engine",
    body: "This is the part most candidates dread, and where we can make the biggest difference. Fundraising is not about asking for money. It's about structure, math, and discipline. We build:",
    bullets: [
      "A finance plan (how much to raise and exactly where it comes from)",
      "Donor targeting and segmentation",
      "Call time structure and coaching: what to say, how to ask, and how to handle the hard conversations",
      "Event strategy (house parties, small events, digital fundraisers)",
      "Weekly tracking and accountability",
    ],
    closing: "You will never wonder whether you're on pace. You'll know. Every single week.",
    deliverable: "Weekly call time plan, monthly fundraising goals dashboard",
  },
  {
    tag: "Ongoing",
    name: "Your Weekly Accountability",
    body: "Running a campaign while living your life is hard. This service exists so you never have to figure out what to do next. Every week includes:",
    bullets: [
      "Strategy call with Carol",
      "Your next week's action plan",
      "Schedule guidance and time prioritization",
      "Decision-making support when things get complicated",
      "Message discipline coaching",
    ],
    closing: "",
    deliverable: "Weekly candidate action plan",
  },
  {
    tag: "Ongoing",
    name: "Your Campaign Operations",
    body: "Someone has to be the general contractor: tracking every moving piece and making sure they fit together. That's us.",
    bullets: [
      "Build and manage the master campaign calendar",
      "Coordinate vendors (digital, mail, field, data, etc.)",
      "Track milestones and deadlines so nothing slips",
      "Keep the full campaign aligned and moving",
    ],
    closing: "",
    deliverable: "Master campaign tracker",
  },
  {
    tag: "Ongoing",
    name: "Your Volunteer System",
    body: "Your supporters want to help. This turns that energy into an actual ground game.",
    bullets: [
      "Volunteer recruitment plan",
      "Simple onboarding process",
      "Role definition (canvassing, phone banking, events)",
      "Retention and engagement strategy",
    ],
    closing: "",
    deliverable: "Volunteer playbook, weekly activation goals",
  },
];

const addOns = [
  {
    name: "Campaign Launch Sprint",
    tag: "2 weeks · flat fee",
    desc: "For candidates still deciding whether to run, or who need to move fast. A compressed version of the Campaign Blueprint process: filing research, win number, messaging, and a 30-day action plan.",
  },
  {
    name: "Fundraising Intensive",
    tag: "4-week focused engagement",
    desc: "A focused engagement built entirely around call time, donor strategy, and event planning. Ideal for candidates already in a race but struggling with their numbers.",
  },
  {
    name: "Volunteer Activation Boost",
    tag: "Short-term",
    desc: "A short-term grassroots push: recruitment, onboarding, and a 2-week activation sprint when you need bodies on the ground fast.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-navy text-5xl md:text-6xl leading-tight mb-6">
            Your campaign. Fully built.
          </h1>
          <p className="font-sans text-text-muted text-xl mb-6 max-w-2xl leading-relaxed">
            We don&apos;t just advise. We build the infrastructure, own the plan, and keep you accountable
            from your first announcement to your final vote count.
          </p>
          <p className="font-sans text-text-muted text-base max-w-2xl leading-relaxed">
            Most political consultants hand you a strategy deck and wish you luck. That&apos;s not how we work.
            We stay in it with you: building the systems, making the calls, coordinating the pieces, and
            making sure nothing falls through the cracks. Think of us as your campaign&apos;s general contractor.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {services.map((s, i) => (
            <div key={i} className="grid md:grid-cols-3 gap-10 border-b border-navy/10 pb-16 last:border-0 last:pb-0">
              <div>
                <p className="label-tag mb-2">{s.tag}</p>
                <h2 className="font-serif text-navy text-3xl leading-tight">{s.name}</h2>
              </div>
              <div className="md:col-span-2">
                <p className="font-sans text-text-muted text-base leading-relaxed mb-4">{s.body}</p>
                <ul className="space-y-2 mb-4">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="font-sans text-text-muted text-sm flex gap-2">
                      <span className="text-amber mt-1">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {s.closing && (
                  <p className="font-sans text-text-muted text-base leading-relaxed mb-4">{s.closing}</p>
                )}
                <div className="bg-cream rounded px-4 py-3 inline-block">
                  <p className="font-sans text-xs text-text-muted uppercase tracking-widest font-semibold mb-1">Deliverable</p>
                  <p className="font-sans text-navy text-sm font-medium">{s.deliverable}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I Coordinate */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="label-tag mb-4">What We Coordinate (Not Execute)</p>
            <p className="font-sans text-text-muted text-base leading-relaxed mb-6">
              We stay the quarterback. We bring in the right specialists and make sure they&apos;re
              delivering, but we don&apos;t try to do everything ourselves. Vendors we coordinate on your behalf:
            </p>
            <ul className="space-y-2">
              {["Media buying firms", "Digital and social media consultants", "Field and data vendors (NGP VAN, voter file access)", "Compliance and treasurer"].map((v, i) => (
                <li key={i} className="font-sans text-text-muted text-sm flex gap-2">
                  <span className="text-amber">—</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-6 border-l-4 border-amber pl-4 font-serif text-navy text-lg">
              &ldquo;You get one team that owns the outcome. Not five consultants pointing fingers at each other.&rdquo;
            </blockquote>
          </div>
          <div>
            <p className="label-tag mb-4">What&apos;s Not Included</p>
            <p className="font-sans text-text-muted text-base leading-relaxed mb-6">
              We believe in being clear about scope:
            </p>
            <ul className="space-y-2">
              {[
                "Financial reporting and state compliance filing",
                "Ad buying execution",
                "Daily social media posting",
                "Advanced data modeling or voter targeting analysis",
              ].map((v, i) => (
                <li key={i} className="font-sans text-text-muted text-sm flex gap-2">
                  <span className="text-text-muted">×</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-text-muted text-sm mt-4 leading-relaxed">
              These are specialist services we can help you find and coordinate, but they&apos;re not in our lane to execute.
            </p>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="label-tag mb-4">Add-On Packages</p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {addOns.map((a, i) => (
              <div key={i} className="border border-navy/10 rounded p-6">
                <p className="font-sans text-amber text-xs font-semibold tracking-widest uppercase mb-2">{a.tag}</p>
                <h3 className="font-serif text-navy text-xl mb-3">{a.name}</h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="border border-cream text-cream font-sans font-semibold px-7 py-3 rounded hover:bg-cream/10 transition-colors"
            >
              See Pricing →
            </Link>
            <Link
              href="/work-with-me"
              className="bg-amber text-white font-sans font-semibold px-7 py-3 rounded hover:bg-amber/90 transition-colors"
            >
              Inquire Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
