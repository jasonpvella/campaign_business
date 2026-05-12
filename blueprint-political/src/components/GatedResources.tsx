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
    title: "Arkansas Campaign Finance: What You Need to Know Before You File",
    desc: "Filing deadlines, disclosure requirements, common mistakes that trip up first-timers, and what to do before you open your campaign account. Arkansas-specific, plain English.",
    cta: "Send Me the Guide →",
    name: "finance_guide",
  },
  {
    title: "Call Time Script Starter Pack: How to Ask for Money Without Feeling Weird About It",
    desc: 'The exact scripts, language, and frameworks I use to coach candidates on their first donor calls. Including what to say when someone asks "what\'s the money for?" and how to handle a soft no.',
    cta: "Send Me the Scripts →",
    name: "scripts",
  },
];

type CardState = "idle" | "loading" | "success" | "error";

export default function GatedResources() {
  const [states, setStates] = useState<CardState[]>(gatedResources.map(() => "idle"));
  const [emails, setEmails] = useState<string[]>(gatedResources.map(() => ""));

  function setCardState(i: number, state: CardState) {
    setStates((prev) => prev.map((s, idx) => (idx === i ? state : s)));
  }

  function setEmail(i: number, val: string) {
    setEmails((prev) => prev.map((e, idx) => (idx === i ? val : e)));
  }

  async function handleSubmit(i: number, resource: string) {
    setCardState(i, "loading");
    try {
      const res = await fetch("/api/resource-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emails[i], resource }),
      });
      if (!res.ok) throw new Error();
      setCardState(i, "success");
    } catch {
      setCardState(i, "error");
    }
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {gatedResources.map((r, i) => (
        <div key={i} className="border border-navy/10 rounded p-6 flex flex-col">
          <h2 className="font-serif text-navy text-lg leading-snug mb-3">{r.title}</h2>
          <p className="font-sans text-text-muted text-sm leading-relaxed mb-6 flex-1">{r.desc}</p>

          {states[i] === "success" ? (
            <div className="border border-green-200 bg-green-50 rounded px-4 py-3 text-sm font-sans text-green-800">
              Got it — you&apos;ll hear from us soon.
            </div>
          ) : (
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(i, r.name);
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                value={emails[i]}
                onChange={(e) => setEmail(i, e.target.value)}
                className="w-full border border-navy/20 rounded px-4 py-3 font-sans text-sm focus:outline-none focus:border-amber bg-white"
              />
              <button
                type="submit"
                disabled={states[i] === "loading"}
                className="w-full bg-amber text-white font-sans font-semibold px-5 py-3 rounded hover:bg-amber/90 transition-colors text-sm disabled:opacity-60"
              >
                {states[i] === "loading" ? "Sending…" : r.cta}
              </button>
              {states[i] === "error" && (
                <p className="text-red-600 font-sans text-xs">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      ))}
    </div>
  );
}
