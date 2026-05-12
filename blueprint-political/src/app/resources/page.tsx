import type { Metadata } from "next";
import WinNumberCalculator from "@/components/WinNumberCalculator";
import FundraisingEstimator from "@/components/FundraisingEstimator";
import GatedResources from "@/components/GatedResources";

import { useState } from "react";

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-navy text-5xl md:text-6xl leading-tight mb-4">
            Free tools for candidates.
          </h1>
          <p className="font-sans text-text-muted text-xl max-w-xl leading-relaxed">
            No catch. Just an effort to help you get started and to get a feel for my practical, direct style of guidance.
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
    </>
  );
}
