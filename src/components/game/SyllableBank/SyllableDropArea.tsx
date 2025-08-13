import React, { ReactNode } from 'react';

interface SyllableDropAreaProps {
  isEmpty: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  children: ReactNode;
}

export function SyllableDropArea({
  isEmpty,
  onDragOver,
  onDrop,
  children,
}: SyllableDropAreaProps) {
  return (
    <div
      className={`
        flex flex-wrap gap-3 min-h-20 p-4 rounded-xl border-2 transition-colors
        ${isEmpty ? 'border-gray-200 bg-gray-50' : 'border-blue-200 bg-blue-50'}
      `}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {children}
    </div>
  );
}
