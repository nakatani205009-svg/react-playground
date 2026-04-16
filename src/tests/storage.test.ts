import { beforeEach, describe, expect, it } from 'vitest';
import { deleteMemo, storage, upsertMemo } from '@/lib/storage';
import type { Memo } from '@/types';

describe('storage helpers', () => {
  beforeEach(() => localStorage.clear());

  it('saves and restores favorites', () => {
    storage.setFavorites([{ targetType: 'philosopher', targetId: 'plato' }]);
    expect(storage.getFavorites()).toHaveLength(1);
  });

  it('memo upsert and delete works', () => {
    const base: Memo[] = [];
    const memo: Memo = { id: '1', targetType: 'term', targetId: 'idea', content: 'a', updatedAt: 'x' };
    const added = upsertMemo(base, memo);
    expect(added).toHaveLength(1);
    const updated = upsertMemo(added, { ...memo, content: 'b' });
    expect(updated[0].content).toBe('b');
    expect(deleteMemo(updated, '1')).toHaveLength(0);
  });
});
