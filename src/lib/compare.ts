import type { Philosopher } from '@/types';

export const compareKeys = [
  { key: 'humanView', label: '人間観' },
  { key: 'worldView', label: '世界観' },
  { key: 'desireView', label: '欲望の捉え方' },
  { key: 'freedomView', label: '自由の捉え方' },
  { key: 'happinessView', label: '幸福の捉え方' },
] as const;

export function buildComparison(a?: Philosopher, b?: Philosopher) {
  return compareKeys.map(({ key, label }) => ({
    label,
    a: a?.[key] ?? '情報なし',
    b: b?.[key] ?? '情報なし',
  }));
}

export function summarizeDifference(a?: Philosopher, b?: Philosopher) {
  if (!a || !b) return '2人を選ぶと、ざっくりした違いを表示します。';
  return `${a.name}は「${a.freedomView ?? '情報なし'}」を強調し、${b.name}は「${b.freedomView ?? '情報なし'}」を重視します。学習では“自由をどう定義するか”に注目すると違いをつかみやすいです。`;
}
