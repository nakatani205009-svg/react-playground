import terms from '@/data/terms.json';
import type { Term } from '@/types';
import { TermList } from '@/components/term/TermList';

export default function TermsPage() {
  return <section className="space-y-4"><h1 className="text-2xl font-bold">用語一覧</h1><TermList terms={terms as Term[]} /></section>;
}
