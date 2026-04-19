'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WinNumberCalculator() {
  const [totalVotes, setTotalVotes] = useState('');
  const [candidates, setCandidates] = useState('2');
  const [result, setResult] = useState<{ votesNeeded: number; doorKnocks: number; phoneCalls: number } | null>(null);

  function calculate() {
    const v = parseInt(totalVotes);
    const c = parseInt(candidates);
    if (!v || v < 1 || !c) return;
    const votesNeeded = Math.ceil(v / c + 1);
    setResult({ votesNeeded, doorKnocks: votesNeeded * 3, phoneCalls: votesNeeded * 5 });
  }

  return (
    <div className="bg-white border border-navy/10 rounded p-8">
      <div className="space-y-5 mb-6">
        <div>
          <label className="label-tag block mb-2">Estimated votes cast in last comparable election</label>
          <input
            type="number"
            value={totalVotes}
            onChange={(e) => setTotalVotes(e.target.value)}
            placeholder="e.g. 1500"
            min="1"
            className="w-full border border-navy/20 rounded px-4 py-3 font-sans text-sm focus:outline-none focus:border-amber bg-white"
          />
        </div>
        <div>
          <label className="label-tag block mb-2">Number of candidates in the race</label>
          <select
            value={candidates}
            onChange={(e) => setCandidates(e.target.value)}
            className="w-full border border-navy/20 rounded px-4 py-3 font-sans text-sm focus:outline-none focus:border-amber bg-white cursor-pointer"
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
        </div>
        <button
          onClick={calculate}
          className="bg-navy text-cream font-sans font-semibold px-6 py-3 rounded hover:bg-navy/90 transition-colors"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="border-t border-navy/10 pt-6 space-y-1">
          <div className="flex justify-between items-center py-3 border-b border-navy/5">
            <span className="font-sans text-text-muted text-sm">Votes needed to win</span>
            <span className="font-serif text-navy text-2xl font-bold">{result.votesNeeded.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-navy/5">
            <span className="font-sans text-text-muted text-sm">Suggested door-knocks</span>
            <span className="font-serif text-navy text-2xl font-bold">{result.doorKnocks.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="font-sans text-text-muted text-sm">Suggested phone calls</span>
            <span className="font-serif text-navy text-2xl font-bold">{result.phoneCalls.toLocaleString()}</span>
          </div>
          <p className="font-sans text-text-muted text-sm pt-3">
            Want help hitting these numbers?{' '}
            <Link href="/work-with-me" className="text-amber font-semibold hover:underline">Talk to Carol →</Link>
          </p>
        </div>
      )}
    </div>
  );
}
