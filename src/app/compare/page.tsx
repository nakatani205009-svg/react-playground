import philosophers from '@/data/philosophers.json';
import type { Philosopher } from '@/types';
import { CompareClient } from '@/components/compare/CompareClient';

export default function ComparePage() {
  return <section className="space-y-4"><h1 className="text-2xl font-bold">哲学者比較</h1><CompareClient philosophers={philosophers as Philosopher[]} /></section>;
}
