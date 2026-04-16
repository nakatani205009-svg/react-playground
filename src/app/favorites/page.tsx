import philosophers from '@/data/philosophers.json';
import terms from '@/data/terms.json';
import type { Philosopher, Term } from '@/types';
import { FavoritesClient } from '@/components/ui/FavoritesClient';

export default function FavoritesPage() {
  return <section className="space-y-4"><h1 className="text-2xl font-bold">お気に入り</h1><FavoritesClient philosophers={philosophers as Philosopher[]} terms={terms as Term[]} /></section>;
}
