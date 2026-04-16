import type { Philosopher, Term } from '@/types';

const normalize = (text: string) => text.toLowerCase();

export function searchPhilosophers(items: Philosopher[], query: string): Philosopher[] {
  const q = normalize(query.trim());
  if (!q) return items;
  return items.filter((p) =>
    [p.name, p.shortDescription, p.simpleSummary, p.school.join(' ')].some((v) => normalize(v).includes(q)),
  );
}

export function searchTerms(items: Term[], query: string): Term[] {
  const q = normalize(query.trim());
  if (!q) return items;
  return items.filter((t) =>
    [t.name, t.shortDescription, t.simpleExplanation, t.detailedExplanation].some((v) => normalize(v).includes(q)),
  );
}
