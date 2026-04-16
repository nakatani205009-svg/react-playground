'use client';

import { useMemo, useState } from 'react';
import type { Philosopher } from '@/types';
import { buildComparison, summarizeDifference } from '@/lib/compare';

export function CompareClient({ philosophers }: { philosophers: Philosopher[] }) {
  const [aId, setAId] = useState(philosophers[0]?.id ?? '');
  const [bId, setBId] = useState(philosophers[1]?.id ?? '');

  const a = philosophers.find((p) => p.id === aId);
  const b = philosophers.find((p) => p.id === bId);
  const rows = useMemo(() => buildComparison(a, b), [a, b]);

  return (
    <section className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <select className="rounded border p-2" value={aId} onChange={(e) => setAId(e.target.value)}>{philosophers.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select>
        <select className="rounded border p-2" value={bId} onChange={(e) => setBId(e.target.value)}>{philosophers.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select>
      </div>
      <table className="w-full border-collapse text-sm">
        <thead><tr><th className="border p-2">項目</th><th className="border p-2">{a?.name}</th><th className="border p-2">{b?.name}</th></tr></thead>
        <tbody>{rows.map((r) => <tr key={r.label}><th className="border p-2 text-left">{r.label}</th><td className="border p-2">{r.a}</td><td className="border p-2">{r.b}</td></tr>)}</tbody>
      </table>
      <p className="rounded border p-3 text-sm">ざっくり違い: {summarizeDifference(a, b)}</p>
    </section>
  );
}
