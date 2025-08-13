import React from 'react';
import { Syllable } from '@/types/game';
import { EmptyBankPlaceholder } from './EmptyBankPlaceholder';
import { BankInstructions } from './BankInstructions';
import { SyllableDropArea } from './SyllableDropArea';
import { SyllableItem } from '@/components/ui/SyllableItem';

interface SyllableBankProps {
  syllables: Syllable[];
  draggedItem: string | null;
  onDragStart: (syllableId: string) => void;
  onDragEnd: () => void;
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
}

export default function SyllableBank({
  syllables,
  draggedItem,
  onDragStart,
  onDragEnd,
  onDrop,
  onDragOver,
}: SyllableBankProps) {
  const handleDragStart = (e: React.DragEvent, syllableId: string) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', syllableId);
    onDragStart(syllableId);
  };

  return (
    <div className='bg-white rounded-2xl shadow-lg p-6'>
      <h3 className='text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2'>
        <span className='text-blue-500'>📚</span>
        SÍLABAS DISPONÍVEIS
      </h3>

      <SyllableDropArea
        isEmpty={syllables.length === 0}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        {syllables.length === 0 ? (
          <EmptyBankPlaceholder />
        ) : (
          syllables.map(syllable => (
            <SyllableItem
              key={syllable.id}
              syllable={syllable}
              isDragged={draggedItem === syllable.id}
              onDragStart={handleDragStart}
              onDragEnd={onDragEnd}
              variant='bank'
            />
          ))
        )}
      </SyllableDropArea>

      <BankInstructions show={syllables.length > 0} />
    </div>
  );
}
