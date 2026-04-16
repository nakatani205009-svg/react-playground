import React from "react";
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import PhilosophersPage from '@/app/philosophers/page';

describe('page render', () => {
  it('renders home', () => {
    render(<HomePage />);
    expect(screen.getByText('PhiloNote')).toBeInTheDocument();
  });

  it('renders philosopher page title', () => {
    render(<PhilosophersPage />);
    expect(screen.getByText('哲学者一覧')).toBeInTheDocument();
  });
});
