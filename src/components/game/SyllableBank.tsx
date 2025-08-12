import React from 'react';
import { Syllable } from '@/types/game';

interface SyllableBankProps {
  syllables: Syllable[];
  draggedItem: string | null;
  onDragStart: (syllableId: string) => void;
  onDragEnd: () => void;
  onDrop: () => void;
  onDragOver: (e: React.DragEvent) => void;
}

const SyllableBank: React.FC<SyllableBankProps> = ({
  syllables,
  draggedItem,
  onDragStart,
  onDragEnd,
  onDrop,
  onDragOver,
}) => {
  const handleDragStart = (e: React.DragEvent, syllableId: string) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', syllableId);
    onDragStart(syllableId);
  };

  return (
    <div className='bg-white rounded-2xl shadow-lg p-6'>
      <h3 className='text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2'>
        <span className='text-blue-500'>📚</span>
        Sílabas disponíveis
      </h3>

      <div
        className={`
          flex flex-wrap gap-3 min-h-20 p-4 rounded-xl border-2 transition-colors
          ${syllables.length === 0 ? 'border-gray-200 bg-gray-50' : 'border-blue-200 bg-blue-50'}
        `}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        {syllables.length === 0 ? (
          <div className='flex items-center justify-center w-full text-gray-400 text-lg'>
            <span className='text-center'>
              <div className='text-3xl mb-2'>✨</div>
              <div>Todas as sílabas foram usadas!</div>
            </span>
          </div>
        ) : (
          syllables.map(syllable => (
            <div
              key={syllable.id}
              draggable
              onDragStart={e => handleDragStart(e, syllable.id)}
              onDragEnd={onDragEnd}
              className={`
                select-none cursor-move px-4 py-3 rounded-lg text-xl font-bold
                border-2 shadow-md transition-all duration-200
                transform hover:scale-105 active:scale-95
                ${
                  draggedItem === syllable.id
                    ? 'bg-blue-300 border-blue-500 text-blue-900 opacity-60 scale-105'
                    : 'bg-blue-200 border-blue-400 text-blue-800 hover:bg-blue-300 hover:shadow-lg'
                }
              `}
            >
              {syllable.text}
            </div>
          ))
        )}
      </div>

      {syllables.length > 0 && (
        <p className='text-sm text-gray-500 mt-3 text-center'>
          💡 Arraste as sílabas para formar a palavra
        </p>
      )}
    </div>
  );
};

export default SyllableBank;
