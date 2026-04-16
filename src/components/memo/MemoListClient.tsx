'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { storage } from '@/lib/storage';
import type { Memo, Philosopher, Term } from '@/types';

export function MemoListClient({ philosophers, terms }: { philosophers: Philosopher[]; terms: Term[] }) {
  const [memos, setMemos] = useState<Memo[]>([]);
  useEffect(() => { setMemos(storage.getMemos()); }, []);
  const getTitle = (m: Memo) => m.targetType === 'philosopher' ? philosophers.find((p) => p.id === m.targetId)?.name : terms.find((t) => t.id === m.targetId)?.name;

  return <ul className="space-y-2">{memos.map((m) => <li key={m.id} className="rounded border p-3"><p className="text-xs">{new Date(m.updatedAt).toLocaleString()}</p><p className="font-medium">{getTitle(m) ?? m.targetId}</p><p className="text-sm">{m.content}</p><Link className="text-sm underline" href={`/${m.targetType === 'philosopher' ? 'philosophers' : 'terms'}/${m.targetId}`}>編集へ</Link></li>)}{memos.length===0 && <li>メモはまだありません。</li>}</ul>;
}
