import { describe, expect, it } from 'vitest';
import { searchPhilosophers, searchTerms } from '@/lib/search';
import philosophers from '@/data/philosophers.json';
import terms from '@/data/terms.json';

describe('search', () => {
  it('philosopher partial and case-insensitive match', () => {
    const result = searchPhilosophers(philosophers, 'ニー');
    expect(result.some((r) => r.id === 'nietzsche')).toBe(true);
  });

  it('term description match', () => {
    const result = searchTerms(terms, '言語');
    expect(result.some((r) => r.id === 'unconscious')).toBe(true);
  });
});
