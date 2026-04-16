import { describe, expect, it } from 'vitest';
import { buildComparison, summarizeDifference } from '@/lib/compare';
import philosophers from '@/data/philosophers.json';

describe('compare', () => {
  it('builds rows and fallback', () => {
    const rows = buildComparison(philosophers[0], undefined);
    expect(rows[0].b).toBe('情報なし');
  });

  it('creates summary text', () => {
    const text = summarizeDifference(philosophers[0], philosophers[1]);
    expect(text).toContain('自由');
  });
});
