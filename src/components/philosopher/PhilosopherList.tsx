'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Philosopher } from '@/types';
import { searchPhilosophers } from '@/lib/search';

export function PhilosopherList({ philosophers }: { philosophers: Philosopher[] }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => searchPhilosophers(philosophers, query), [philosophers, query]);

  return (
    <section className="space-y-4">
      <input className="w-full rounded border p-2" placeholder="哲学者を検索" value={query} onChange={(e) => setQuery(e.target.value)} />
      {filtered.length === 0 ? <p>該当する哲学者が見つかりません。</p> : (
        <ul className="grid gap-3 md:grid-cols-2">
          {filtered.map((p) => (
            <li key={p.id} className="rounded border p-3">
              <Link href={`/philosophers/${p.id}`} className="text-lg font-medium hover:underline">{p.name}</Link>
              <p className="text-sm text-slate-600 dark:text-slate-300">{p.era} / {p.shortDescription}</p>
              <p className="mt-1 text-xs">{p.school.join(' / ')}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
