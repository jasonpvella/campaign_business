"use client";

import { useState } from "react";

const gatedResources = [
  {
    title: "First-Time Candidate Readiness Checklist",
    desc: "10 things every candidate should have in place before they announce. Most first-timers skip half of these and feel it later. Download it free.",
    cta: "Send Me the Checklist →",
    name: "checklist",
  },
  {
    title: "Fundraising Tips and Tricks",
    desc: "The basics of campaign fundraising, fundraising events, call-time and guidelines.",
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

type CardState = "idle" | "submitting" | "success" | "error";

function ResourceCard({ resource }: { resource: typeof gatedResources[0] }) {
  const [state, setState] = useState<CardState>("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");

    try {
      const res = await fetch("https://formspree.io/f/mwvaqepn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          resource: resource.name,
          resource_title: resource.title,
          _subject: `Resource Request: ${resource.title}`,
        }),
      });

      if (res.ok) {
        setState("success");
        setEmail("");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <div className="border border-navy/10 rounded p-6 flex flex-col">
      <h2 className="font-serif text-navy text-lg leading-snug mb-3">{resource.title}</h2>
      <p className="font-sans text-text-muted text-sm leading-relaxed mb-6 flex-1">{resource.desc}</p>

      {state === "success" ? (
        <div className="bg-amber/10 border border-amber/30 rounded px-4 py-4 text-sm font-sans text-navy text-center">
          Got it! Check your inbox — we'll send it shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="hidden" name="resource" value={resource.name} />
          <input
            type="email"
            placeholder="Your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-navy/20 rounded px-4 py-3 font-sans text-sm focus:outline-none focus:border-amber bg-white"
          />
          <button
            type="submit"
            disabled={state === "submitting"}
            className="w-full bg-amber text-white font-sans font-semibold px-5 py-3 rounded hover:bg-amber/90 transition-colors text-sm disabled:opacity-60"
          >
            {state === "submitting" ? "Sending…" : resource.cta}
          </button>
          {state === "error" && (
            <p className="font-sans text-red-500 text-xs text-center">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

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
          <div className="grid md:grid-cols-3 gap-6">
            {gatedResources.map((r, i) => (
              <ResourceCard key={i} resource={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
