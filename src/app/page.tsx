import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">PhiloNote</h1>
      <p className="text-slate-700 dark:text-slate-200">短く理解する → 比較する → 自分の考えを書く、を支援する哲学学習アプリ。</p>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {[
          ['/philosophers', '哲学者一覧'],
          ['/terms', '用語一覧'],
          ['/compare', '比較する'],
          ['/favorites', 'お気に入り'],
          ['/memos', '学習メモ'],
        ].map(([href, label]) => (
          <Link key={href} href={href} className="rounded border p-4 hover:bg-slate-50 dark:hover:bg-slate-900">{label}</Link>
        ))}
      </div>
    </section>
  );
}
