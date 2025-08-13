import React from 'react';
import { Syllable, Word } from '@/types/game';
import Button from '@/components/ui/Button';
import { WordHint } from './WordHint';
import { DropArea } from './DropArea';
import { EmptyDropArea } from './EmptyDropArea';
import { ConstructedWordPreview } from './ConstructedWordPreview';
import { SyllableItem } from '@/components/ui/SyllableItem';

interface ConstructionZoneProps {
  currentWord: Word;
  constructedSyllables: Syllable[];
  draggedItem: string | null;
  onDragStart: (syllableId: string) => void;
  onDragEnd: () => void;
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onCheckWord: () => void;
  canCheck: boolean;
}

const ConstructionZone: React.FC<ConstructionZoneProps> = ({
  currentWord,
  constructedSyllables,
  draggedItem,
  onDragStart,
  onDragEnd,
  onDrop,
  onDragOver,
  onCheckWord,
  canCheck,
}) => {
  const handleDragStart = (e: React.DragEvent, syllableId: string) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', syllableId);
    onDragStart(syllableId);
  };

  const sortedSyllables = constructedSyllables.sort(
    (a, b) => (a.position || 0) - (b.position || 0),
  );

  const formedWord = sortedSyllables.map(s => s.text).join('');
  const targetWord = currentWord.syllables.join('');
  const isCorrect = formedWord === targetWord;

  return (
    <div>
      <WordHint currentWord={currentWord} />

      <div className='bg-white rounded-2xl shadow-lg p-6'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2'>
          <span className='text-green-500'>🔨</span>
          Monte a palavra aqui
        </h3>

        <DropArea
          isEmpty={constructedSyllables.length === 0}
          isCorrect={isCorrect}
          canCheck={canCheck}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          {constructedSyllables.length === 0 ? (
            <EmptyDropArea />
          ) : (
            <div className='flex flex-wrap gap-2 items-center justify-center'>
              {sortedSyllables.map((syllable, index) => (
                <div key={syllable.id} className='flex items-center'>
                  <SyllableItem
                    key={syllable.id}
                    syllable={syllable}
                    isDragged={draggedItem === syllable.id}
                    onDragStart={handleDragStart}
                    onDragEnd={onDragEnd}
                    variant='construction'
                  />
                  {index < sortedSyllables.length - 1 && (
                    <span className='text-gray-400 mx-1 text-lg'>-</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </DropArea>

        {constructedSyllables.length > 0 && (
          <ConstructedWordPreview
            word={formedWord}
            isCorrect={isCorrect && canCheck}
            showCheckmark={isCorrect && canCheck}
          />
        )}

        {canCheck && (
          <div className='mt-6 text-center'>
            <Button
              onClick={onCheckWord}
              size='lg'
              className='min-w-48'
              variant={formedWord === targetWord ? 'success' : 'primary'}
            >
              <span className='mr-2'>✨</span>
              Verificar Palavra
            </Button>
          </div>
        )}

        {constructedSyllables.length > 0 && !canCheck && (
          <p className='text-md text-gray-500 mt-3 text-center'>
            💡 Continue arrastando sílabas para completar a palavra (
            {constructedSyllables.length}/{currentWord.syllables.length})
          </p>
        )}
      </div>
    </div>
  );
};

export default ConstructionZone;
