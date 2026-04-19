import type { Metadata } from "next";
import WinNumberCalculator from "@/components/WinNumberCalculator";
import FundraisingEstimator from "@/components/FundraisingEstimator";
import GatedResources from "@/components/GatedResources";

export const metadata: Metadata = {
  title: "Free Resources | Blueprint Political",
  description:
    "Free tools and guides for first-time Arkansas candidates: readiness checklist, campaign finance guide, fundraising scripts, win number calculator, and fundraising estimator.",
};

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
          <GatedResources />
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
                race. Get your win number (the exact votes you need to win) plus suggested door-knock and phone
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
