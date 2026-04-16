import philosophers from '@/data/philosophers.json';
import terms from '@/data/terms.json';
import type { Philosopher, Term } from '@/types';
import { MemoListClient } from '@/components/memo/MemoListClient';

export default function MemosPage() {
  return <section className="space-y-4"><h1 className="text-2xl font-bold">学習メモ</h1><MemoListClient philosophers={philosophers as Philosopher[]} terms={terms as Term[]} /></section>;
}
