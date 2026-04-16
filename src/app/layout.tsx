import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/layout/Nav';

export const metadata: Metadata = {
  title: 'PhiloNote',
  description: 'Beginner-friendly philosophy learning app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Nav />
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
