import type { Metadata } from "next";
import WinNumberCalculator from "@/components/WinNumberCalculator";
import FundraisingEstimator from "@/components/FundraisingEstimator";

export const metadata: Metadata = {
  title: "Free Resources | Blueprint Political",
  description:
    "Free tools and guides for first-time Arkansas candidates — readiness checklist, campaign finance guide, fundraising scripts, win number calculator, and fundraising estimator.",
};

const gatedResources = [
  {
    title: "First-Time Candidate Readiness Checklist",
    desc: "10 things every candidate should have in place before they announce. Most first-timers skip half of these — and feel it later. Download it free.",
    cta: "Send Me the Checklist →",
    name: "checklist",
  },
  {
    title: "Arkansas Campaign Finance: What You Need to Know Before You File",
    desc: "Filing deadlines, disclosure requirements, common mistakes that trip up first-timers, and what to do before you open your campaign account. Arkansas-specific, plain English.",
    cta: "Send Me the Guide →",
    name: "finance_guide",
  },
  {
    title: "Call Time Script Starter Pack: How to Ask for Money Without Feeling Weird About It",
    desc: "The exact scripts, language, and frameworks I use to coach candidates on their first donor calls. Including what to say when someone asks \"what's the money for?\" and how to handle a soft no.",
    cta: "Send Me the Scripts →",
    name: "scripts",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-navy text-5xl md:text-6xl leading-tight mb-4">
            Free tools for first-time Arkansas candidates.
          </h1>
          <p className="font-sans text-text-muted text-xl max-w-xl leading-relaxed">
            No fluff. No email walls on the calculators. Just things that actually help.
          </p>
        </div>
      </section>

      {/* Gated Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="label-tag mb-8">Free Guides (email required)</p>
          <div className="grid md:grid-cols-3 gap-6">
            {gatedResources.map((r, i) => (
              <div key={i} className="border border-navy/10 rounded p-6 flex flex-col">
                <h2 className="font-serif text-navy text-lg leading-snug mb-3">{r.title}</h2>
                <p className="font-sans text-text-muted text-sm leading-relaxed mb-6 flex-1">{r.desc}</p>
                {/* TODO: wire up to email capture service — send PDF to submitted email */}
                <form className="space-y-3">
                  <input
                    type="hidden"
                    name="resource"
                    value={r.name}
                  />
                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                    className="w-full border border-navy/20 rounded px-4 py-3 font-sans text-sm focus:outline-none focus:border-amber bg-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-amber text-white font-sans font-semibold px-5 py-3 rounded hover:bg-amber/90 transition-colors text-sm"
                  >
                    {r.cta}
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculators */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <p className="label-tag mb-2">Free Calculators</p>
          <p className="font-sans text-text-muted text-sm mb-10">No email required. Bring your honest numbers.</p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Win Number Calculator */}
            <div>
              <h2 className="font-serif text-navy text-2xl mb-2">Win Number Calculator</h2>
              <p className="font-sans text-text-muted text-sm leading-relaxed mb-6">
                Enter your district&apos;s last comparable election turnout and the number of candidates in your
                race. Get your win number — the exact votes you need to win — plus suggested door-knock and phone
                call targets.
              </p>
              <WinNumberCalculator />
            </div>

            {/* Fundraising Estimator */}
            <div>
              <h2 className="font-serif text-navy text-2xl mb-2">Fundraising Goal Estimator</h2>
              <p className="font-sans text-text-muted text-sm leading-relaxed mb-6">
                Pick your race type and how many months you have until the election. Get a realistic raise goal,
                monthly targets, and an estimate of how many call time hours per week it takes to hit them.
              </p>
              <FundraisingEstimator />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
