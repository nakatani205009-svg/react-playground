import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const links = [
  ['/', 'Home'],
  ['/philosophers', '哲学者'],
  ['/terms', '用語'],
  ['/compare', '比較'],
  ['/favorites', 'お気に入り'],
  ['/memos', 'メモ'],
] as const;

export function Nav() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="font-semibold">PhiloNote</Link>
        <div className="flex flex-wrap gap-3 text-sm">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="hover:underline">{label}</Link>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
