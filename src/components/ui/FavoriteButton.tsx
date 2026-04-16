'use client';

import { useEffect, useState } from 'react';
import { storage } from '@/lib/storage';
import type { Favorite } from '@/types';

export function FavoriteButton({ targetType, targetId }: Favorite) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const list = storage.getFavorites();
    setActive(list.some((v) => v.targetType === targetType && v.targetId === targetId));
  }, [targetId, targetType]);

  const toggle = () => {
    const list = storage.getFavorites();
    const exists = list.some((v) => v.targetType === targetType && v.targetId === targetId);
    const next = exists ? list.filter((v) => !(v.targetType === targetType && v.targetId === targetId)) : [...list, { targetType, targetId }];
    storage.setFavorites(next);
    setActive(!exists);
  };

  return <button onClick={toggle} className="rounded border px-3 py-1">{active ? '★ お気に入り済み' : '☆ お気に入り'}</button>;
}
