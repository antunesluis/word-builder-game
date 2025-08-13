import React from 'react';

interface DifficultyBadgeProps {
  level: number;
}

export function DifficultyBadge({ level }: DifficultyBadgeProps) {
  const getDifficultyColor = (level: number) => {
    if (level <= 3) return 'text-green-600 bg-green-100';
    if (level <= 7) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getDifficultyLabel = (level: number) => {
    if (level <= 3) return 'Fácil';
    if (level <= 7) return 'Médio';
    return 'Difícil';
  };

  return (
    <div
      className={`px-4 py-1 rounded-full text-sm font-medium ${getDifficultyColor(level)}`}
    >
      {getDifficultyLabel(level)}
    </div>
  );
}
