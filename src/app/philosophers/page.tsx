import philosophers from '@/data/philosophers.json';
import type { Philosopher } from '@/types';
import { PhilosopherList } from '@/components/philosopher/PhilosopherList';

export default function PhilosophersPage() {
  return <section className="space-y-4"><h1 className="text-2xl font-bold">哲学者一覧</h1><PhilosopherList philosophers={philosophers as Philosopher[]} /></section>;
}
