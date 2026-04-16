'use client';

import { useEffect, useState } from 'react';
import { deleteMemo, storage, upsertMemo } from '@/lib/storage';
import type { Memo } from '@/types';

export function MemoEditor({ targetType, targetId }: { targetType: 'philosopher' | 'term'; targetId: string }) {
  const [text, setText] = useState('');
  const [existing, setExisting] = useState<Memo | undefined>(undefined);

  useEffect(() => {
    setExisting(storage.getMemos().find((m) => m.targetType === targetType && m.targetId === targetId));
  }, [targetId, targetType]);

  const save = () => {
    const memo: Memo = {
      id: existing?.id ?? `${targetType}-${targetId}`,
      targetType,
      targetId,
      content: text || existing?.content || '',
      updatedAt: new Date().toISOString(),
    };
    storage.setMemos(upsertMemo(storage.getMemos(), memo));
    setExisting(memo);
    setText('');
  };

  const remove = () => {
    if (!existing) return;
    storage.setMemos(deleteMemo(storage.getMemos(), existing.id));
    setExisting(undefined);
    setText('');
  };

  return (
    <section className="mt-4 space-y-2">
      <h3 className="font-medium">学習メモ</h3>
      <textarea className="w-full rounded border p-2 text-sm" rows={4} value={text || existing?.content || ''} onChange={(e) => setText(e.target.value)} />
      <div className="flex gap-2">
        <button onClick={save} className="rounded border px-3 py-1 text-sm">保存</button>
        <button onClick={remove} className="rounded border px-3 py-1 text-sm">削除</button>
      </div>
    </section>
  );
}
