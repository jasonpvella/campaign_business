'use client';

import { useState } from 'react';
import Link from 'next/link';

const raceGoals: Record<string, [number, number]> = {
  'School Board': [3000, 8000],
  'City Council': [8000, 25000],
  'County Office': [15000, 50000],
  'Mayor': [20000, 75000],
};

const AVG_ASK = 150;

export default function FundraisingEstimator() {
  const [raceType, setRaceType] = useState('School Board');
  const [months, setMonths] = useState(6);
  const [result, setResult] = useState<{
    lowGoal: number;
    highGoal: number;
    lowMonthly: number;
    highMonthly: number;
    hoursPerWeek: number;
    recommendation: string;
  } | null>(null);

  function calculate() {
    const [low, high] = raceGoals[raceType];
    const midGoal = (low + high) / 2;
    const lowMonthly = Math.ceil(low / months);
    const highMonthly = Math.ceil(high / months);
    const midMonthly = midGoal / months;
    const hoursPerWeek = Math.max(2, Math.ceil((midMonthly / AVG_ASK / 4) * 2));

    let recommendation = 'Foundation';
    if (raceType === 'County Office' || raceType === 'Mayor') recommendation = 'Full Campaign';
    if (months <= 3) recommendation = 'Launch Sprint';

    setResult({ lowGoal: low, highGoal: high, lowMonthly, highMonthly, hoursPerWeek, recommendation });
  }

  return (
    <div className="bg-white border border-navy/10 rounded p-8">
      <div className="space-y-5 mb-6">
        <div>
          <label className="label-tag block mb-2">Race type</label>
          <select
            value={raceType}
            onChange={(e) => setRaceType(e.target.value)}
            className="w-full border border-navy/20 rounded px-4 py-3 font-sans text-sm focus:outline-none focus:border-amber bg-white cursor-pointer"
          >
            {Object.keys(raceGoals).map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className="label-tag block mb-2">
            Months until election: <span className="text-navy font-bold normal-case tracking-normal">{months}</span>
          </label>
          <input
            type="range"
            min={2}
            max={12}
            value={months}
            onChange={(e) => setMonths(parseInt(e.target.value))}
            className="w-full accent-amber"
          />
          <div className="flex justify-between font-sans text-xs text-text-muted mt-1">
            <span>2 months</span>
            <span>12 months</span>
          </div>
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
            <span className="font-sans text-text-muted text-sm">Suggested raise goal</span>
            <span className="font-serif text-navy text-xl font-bold">${result.lowGoal.toLocaleString()}–${result.highGoal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-navy/5">
            <span className="font-sans text-text-muted text-sm">Monthly fundraising target</span>
            <span className="font-serif text-navy text-xl font-bold">${result.lowMonthly.toLocaleString()}–${result.highMonthly.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-navy/5">
            <span className="font-sans text-text-muted text-sm">Call time hours/week needed</span>
            <span className="font-serif text-navy text-xl font-bold">~{result.hoursPerWeek} hrs</span>
          </div>
          <div className="py-3">
            <span className="font-sans text-text-muted text-sm">Based on this, you&apos;d benefit most from: </span>
            <span className="font-sans text-amber font-semibold">{result.recommendation}</span>
          </div>
          <p className="font-sans text-text-muted text-sm pt-2">
            Want help hitting these numbers?{' '}
            <Link href="/work-with-me" className="text-amber font-semibold hover:underline">Talk to Carol →</Link>
          </p>
        </div>
      )}
    </div>
  );
}
