import type { Favorite, Memo } from '@/types';

const FAVORITES_KEY = 'philonote:favorites';
const MEMOS_KEY = 'philonote:memos';
const THEME_KEY = 'philonote:theme';

function getJSON<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function setJSON<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
}

export const storage = {
  getFavorites: () => getJSON<Favorite[]>(FAVORITES_KEY, []),
  setFavorites: (favorites: Favorite[]) => setJSON(FAVORITES_KEY, favorites),
  getMemos: () => getJSON<Memo[]>(MEMOS_KEY, []),
  setMemos: (memos: Memo[]) => setJSON(MEMOS_KEY, memos),
  getTheme: () => getJSON<'light' | 'dark' | null>(THEME_KEY, null),
  setTheme: (theme: 'light' | 'dark') => setJSON(THEME_KEY, theme),
};

export function upsertMemo(memos: Memo[], memo: Memo): Memo[] {
  const exists = memos.some((m) => m.id === memo.id);
  return exists ? memos.map((m) => (m.id === memo.id ? memo : m)) : [memo, ...memos];
}

export function deleteMemo(memos: Memo[], id: string): Memo[] {
  return memos.filter((m) => m.id !== id);
}
