'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { storage } from '@/lib/storage';
import type { Favorite, Philosopher, Term } from '@/types';

export function FavoritesClient({ philosophers, terms }: { philosophers: Philosopher[]; terms: Term[] }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  useEffect(() => { setFavorites(storage.getFavorites()); }, []);
  const ph = favorites.filter((f) => f.targetType === 'philosopher');
  const tm = favorites.filter((f) => f.targetType === 'term');

  return <div className="grid gap-6 md:grid-cols-2"><section><h2 className="mb-2 font-semibold">哲学者</h2><ul className="space-y-2">{ph.map((f)=><li key={f.targetId}><Link className="underline" href={`/philosophers/${f.targetId}`}>{philosophers.find((p)=>p.id===f.targetId)?.name ?? f.targetId}</Link></li>)}{ph.length===0&&<li>なし</li>}</ul></section><section><h2 className="mb-2 font-semibold">用語</h2><ul className="space-y-2">{tm.map((f)=><li key={f.targetId}><Link className="underline" href={`/terms/${f.targetId}`}>{terms.find((t)=>t.id===f.targetId)?.name ?? f.targetId}</Link></li>)}{tm.length===0&&<li>なし</li>}</ul></section></div>;
}
