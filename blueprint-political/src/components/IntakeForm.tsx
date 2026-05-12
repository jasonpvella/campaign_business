'use client';

import { useState } from 'react';

// Formspree legacy endpoint — first submission will send a verification email to Carol.
// Once she clicks "Confirm Form" in that email, all submissions arrive at carolyvella@gmail.com.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwvaqepn';

export default function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const body = await res.json().catch(() => ({}));
        const detail = body?.error || body?.message || `HTTP ${res.status}`;
        setError(`Something went wrong (${detail}). Please try again or email Carol directly at carolyvella@gmail.com.`);
      }
    } catch (err) {
      const detail = err instanceof Error ? err.message : 'network error';
      setError(`Something went wrong (${detail}). Please try again or email Carol directly at carolyvella@gmail.com.`);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h2 className="font-serif text-navy text-4xl mb-4">You&apos;re in.</h2>
        <p className="font-sans text-text-muted text-lg max-w-md mx-auto leading-relaxed">
          We&apos;ll review your inquiry and reach out within 2 business days. Keep an eye on your inbox. In the meantime, go talk to someone you trust about why you want to run. That clarity will make our first conversation a lot better.
        </p>
      </div>
    );
  }

  const inputClass = 'w-full border border-navy/20 rounded px-4 py-3 font-sans text-sm focus:outline-none focus:border-amber bg-white';
  const selectClass = `${inputClass} cursor-pointer`;

  return (
    <form onSubmit={handleSubmit} className="space-y-10">

      {/* Section 1 — About You */}
      <div>
        <h3 className="font-serif text-navy text-xl mb-6 pb-3 border-b border-navy/10">About You</h3>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="label-tag block mb-2">First Name *</label>
            <input name="first_name" required className={inputClass} />
          </div>
          <div>
            <label className="label-tag block mb-2">Last Name *</label>
            <input name="last_name" required className={inputClass} />
          </div>
          <div>
            <label className="label-tag block mb-2">Email *</label>
            <input name="email" type="email" required className={inputClass} />
          </div>
          <div>
            <label className="label-tag block mb-2">Phone *</label>
            <input name="phone" type="tel" required className={inputClass} />
          </div>
          <div className="md:col-span-2">
            <label className="label-tag block mb-2">City / County *</label>
            <input name="location" placeholder="e.g. Little Rock, Pulaski County" required className={inputClass} />
          </div>
        </div>
      </div>

      {/* Section 2 — About Your Race */}
      <div>
        <h3 className="font-serif text-navy text-xl mb-6 pb-3 border-b border-navy/10">About Your Race</h3>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="label-tag block mb-2">Office you&apos;re running for</label>
            <select name="office" className={selectClass}>
              <option value="">Select one</option>
              <option>City Council</option>
              <option>School Board</option>
              <option>County Office</option>
              <option>Mayor</option>
              <option>State Legislature</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="label-tag block mb-2">Party / Affiliation</label>
            <select name="party" className={selectClass}>
              <option value="">Select one</option>
              <option>Democrat</option>
              <option>Independent</option>
              <option>Nonpartisan</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="label-tag block mb-2">Election date or filing deadline</label>
            <input name="election_date" type="text" placeholder="e.g. November 2026" className={inputClass} />
          </div>
          <div>
            <label className="label-tag block mb-2">Have you officially filed to run?</label>
            <select name="filed" className={selectClass}>
              <option value="">Select one</option>
              <option>Yes</option>
              <option>Not yet</option>
              <option>Exploring</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 3 — Where You Are Now */}
      <div>
        <h3 className="font-serif text-navy text-xl mb-6 pb-3 border-b border-navy/10">Where You Are Now</h3>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="label-tag block mb-2">Have you run for office before?</label>
            <select name="run_before" className={selectClass}>
              <option value="">Select one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="label-tag block mb-2">Roughly how much do you need to raise?</label>
            <select name="raise_goal" className={selectClass}>
              <option value="">Select one</option>
              <option>Under $5K</option>
              <option>$5K–$15K</option>
              <option>$15K–$50K</option>
              <option>$50K+</option>
              <option>Not sure</option>
            </select>
          </div>
          <div>
            <label className="label-tag block mb-2">How did you hear about Blueprint Political?</label>
            <select name="referral" className={selectClass}>
              <option value="">Select one</option>
              <option>Google search</option>
              <option>Word of mouth</option>
              <option>Social media</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 4 — What You Need */}
      <div>
        <h3 className="font-serif text-navy text-xl mb-6 pb-3 border-b border-navy/10">What You Need</h3>
        <div className="space-y-5">
          <div>
            <label className="label-tag block mb-3">Biggest challenge right now (select all that apply)</label>
            <div className="grid md:grid-cols-2 gap-2">
              {['Fundraising', 'Campaign strategy', 'Voter outreach', 'Volunteer management', 'Just getting started', 'Other'].map((opt) => (
                <label key={opt} className="flex items-center gap-3 font-sans text-sm text-navy cursor-pointer">
                  <input type="checkbox" name="challenges" value={opt} className="accent-amber w-4 h-4" />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="label-tag block mb-2">Which package are you most interested in?</label>
            <select name="package" className={selectClass}>
              <option value="">Select one</option>
              <option>Launch Sprint</option>
              <option>Foundation</option>
              <option>Full Campaign</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div>
            <label className="label-tag block mb-2">Anything else you want Carol to know? (optional)</label>
            <textarea name="notes" rows={4} className={`${inputClass} resize-none`} />
          </div>
          <div>
            <label className="label-tag block mb-2">What are a few 30 minute blocks of time this week that would be convenient for you?</label>
            <textarea name="availability" rows={3} placeholder="e.g. Tuesday 10–11am, Thursday after 3pm" className={`${inputClass} resize-none`} />
          </div>
        </div>
      </div>

      {error && (
        <p className="font-sans text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber text-white font-sans font-semibold py-4 rounded text-base hover:bg-amber/90 transition-colors disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Submit My Inquiry →'}
      </button>
    </form>
  );
}
