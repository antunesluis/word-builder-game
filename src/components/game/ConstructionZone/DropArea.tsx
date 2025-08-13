import React, { ReactNode } from 'react';

interface DropAreaProps {
  isEmpty: boolean;
  isCorrect: boolean;
  canCheck: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  children: ReactNode;
}

export function DropArea({
  isEmpty,
  isCorrect,
  canCheck,
  onDragOver,
  onDrop,
  children,
}: DropAreaProps) {
  return (
    <div
      className={`
        min-h-24 border-4 border-dashed rounded-xl p-4 transition-all duration-300
        flex flex-wrap gap-3 items-center justify-center
        ${
          isEmpty
            ? 'border-gray-300 bg-gray-50'
            : canCheck
              ? isCorrect
                ? 'border-green-400 bg-green-50'
                : 'border-yellow-400 bg-yellow-50'
              : 'border-blue-400 bg-blue-50'
        }
      `}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {children}
    </div>
  );
}
