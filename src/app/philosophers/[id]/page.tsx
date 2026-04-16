import { notFound } from 'next/navigation';
import philosophers from '@/data/philosophers.json';
import terms from '@/data/terms.json';
import type { Philosopher, Term } from '@/types';
import Link from 'next/link';
import { FavoriteButton } from '@/components/ui/FavoriteButton';
import { MemoEditor } from '@/components/memo/MemoEditor';

export default function PhilosopherDetail({ params }: { params: { id: string } }) {
  const philosopher = (philosophers as Philosopher[]).find((p) => p.id === params.id);
  if (!philosopher) notFound();
  const relatedTerms = (terms as Term[]).filter((t) => philosopher.relatedTermIds.includes(t.id));

  return <article className="space-y-4"><h1 className="text-3xl font-bold">{philosopher.name}</h1><p>{philosopher.birthYear} - {philosopher.deathYear} / {philosopher.era}</p><p>{philosopher.shortDescription}</p><p className="leading-7">{philosopher.simpleSummary}</p><div><h2 className="font-semibold">主要概念</h2><ul className="list-disc pl-5">{philosopher.keyIdeas.map((v)=><li key={v}>{v}</li>)}</ul></div><div><h2 className="font-semibold">代表著作</h2><ul className="list-disc pl-5">{philosopher.majorWorks.map((v)=><li key={v}>{v}</li>)}</ul></div><div><h2 className="font-semibold">関連用語</h2><ul className="list-disc pl-5">{relatedTerms.map((t)=><li key={t.id}><Link className="underline" href={`/terms/${t.id}`}>{t.name}</Link></li>)}</ul></div><FavoriteButton targetType="philosopher" targetId={philosopher.id} /><MemoEditor targetType="philosopher" targetId={philosopher.id} /></article>;
}
