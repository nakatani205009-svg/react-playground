'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Term } from '@/types';
import { searchTerms } from '@/lib/search';

export function TermList({ terms }: { terms: Term[] }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => searchTerms(terms, query), [terms, query]);

  return (
    <section className="space-y-4">
      <input className="w-full rounded border p-2" placeholder="用語を検索" value={query} onChange={(e) => setQuery(e.target.value)} />
      {filtered.length === 0 ? <p>該当する用語が見つかりません。</p> : (
        <ul className="grid gap-3 md:grid-cols-2">
          {filtered.map((t) => (
            <li key={t.id} className="rounded border p-3">
              <Link href={`/terms/${t.id}`} className="text-lg font-medium hover:underline">{t.name}</Link>
              <p className="text-sm text-slate-600 dark:text-slate-300">{t.shortDescription}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
