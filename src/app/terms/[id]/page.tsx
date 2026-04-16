import { notFound } from 'next/navigation';
import Link from 'next/link';
import terms from '@/data/terms.json';
import philosophers from '@/data/philosophers.json';
import type { Philosopher, Term } from '@/types';
import { MemoEditor } from '@/components/memo/MemoEditor';
import { FavoriteButton } from '@/components/ui/FavoriteButton';

export default function TermDetail({ params }: { params: { id: string } }) {
  const term = (terms as Term[]).find((t) => t.id === params.id);
  if (!term) notFound();
  const relatedPhilosophers = (philosophers as Philosopher[]).filter((p) => term.relatedPhilosopherIds.includes(p.id));
  const relatedTerms = (terms as Term[]).filter((t) => term.relatedTermIds.includes(t.id));

  return <article className="space-y-4"><h1 className="text-3xl font-bold">{term.name}</h1><p>{term.shortDescription}</p><p>{term.simpleExplanation}</p><p className="leading-7">{term.detailedExplanation}</p><div><h2 className="font-semibold">関連哲学者</h2><ul className="list-disc pl-5">{relatedPhilosophers.map((p)=><li key={p.id}><Link className="underline" href={`/philosophers/${p.id}`}>{p.name}</Link></li>)}</ul></div><div><h2 className="font-semibold">関連用語</h2><ul className="list-disc pl-5">{relatedTerms.map((t)=><li key={t.id}><Link className="underline" href={`/terms/${t.id}`}>{t.name}</Link></li>)}</ul></div><FavoriteButton targetType="term" targetId={term.id} /><MemoEditor targetType="term" targetId={term.id} /></article>;
}
