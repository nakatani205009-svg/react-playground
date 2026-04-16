'use client';

import { useEffect, useState } from 'react';
import { storage } from '@/lib/storage';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = storage.getTheme();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ?? (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    storage.setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <button onClick={toggle} className="rounded border px-3 py-1 text-sm" aria-label="toggle-dark-mode">
      {theme === 'dark' ? 'ライトモード' : 'ダークモード'}
    </button>
  );
}
