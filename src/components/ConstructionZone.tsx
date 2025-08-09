import React from 'react';
import { Syllable, Word } from '@/types/game';
import Button from '@/components/Button';

interface ConstructionZoneProps {
  currentWord: Word;
  constructedSyllables: Syllable[];
  draggedItem: string | null;
  onDragStart: (syllableId: string) => void;
  onDragEnd: () => void;
  onDrop: () => void;
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

  const formedWord = sortedSyllables
    .map(s => s.text)
    .join('')
    .toLowerCase();
  const targetWord = currentWord.syllables.join('').toLowerCase();

  return (
    <div className='space-y-6'>
      {/* Dica da palavra */}
      <div className='bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-lg p-6 text-center border border-purple-200'>
        <h2 className='text-xl font-semibold text-gray-700 mb-3 flex items-center justify-center gap-2'>
          <span className='text-2xl'>🎯</span>
          Forme a palavra:
        </h2>
        <div className='flex items-center justify-center gap-3'>
          <span className='text-4xl'>{currentWord.emoji}</span>
          <p className='text-lg text-gray-600 font-medium'>
            {currentWord.hint}
          </p>
        </div>
        <div className='mt-3 text-sm text-purple-600 font-medium'>
          {currentWord.syllables.length} sílaba
          {currentWord.syllables.length > 1 ? 's' : ''}:{' '}
          {currentWord.syllables.join(' - ')}
        </div>
      </div>

      {/* Área de Construção */}
      <div className='bg-white rounded-2xl shadow-lg p-6'>
        <h3 className='text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2'>
          <span className='text-green-500'>🔨</span>
          Monte a palavra aqui
        </h3>

        <div
          className={`
            min-h-24 border-4 border-dashed rounded-xl p-4 transition-all duration-300
            flex flex-wrap gap-3 items-center justify-center
            ${
              constructedSyllables.length === 0
                ? 'border-gray-300 bg-gray-50'
                : canCheck
                  ? formedWord === targetWord
                    ? 'border-green-400 bg-green-50'
                    : 'border-yellow-400 bg-yellow-50'
                  : 'border-blue-400 bg-blue-50'
            }
          `}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          {constructedSyllables.length === 0 ? (
            <div className='text-center text-gray-400'>
              <div className='text-4xl mb-2'>👆</div>
              <p className='text-lg'>Arraste as sílabas aqui</p>
              <p className='text-sm mt-1'>para formar a palavra</p>
            </div>
          ) : (
            <div className='flex flex-wrap gap-2 items-center justify-center'>
              {sortedSyllables.map((syllable, index) => (
                <div key={syllable.id} className='flex items-center'>
                  <div
                    draggable
                    onDragStart={e => handleDragStart(e, syllable.id)}
                    onDragEnd={onDragEnd}
                    className={`
                      select-none cursor-move px-4 py-3 rounded-lg text-xl font-bold
                      border-2 shadow-md transition-all duration-200
                      transform hover:scale-105 active:scale-95
                      ${
                        draggedItem === syllable.id
                          ? 'bg-green-300 border-green-500 text-green-900 opacity-60 scale-105'
                          : 'bg-green-200 border-green-400 text-green-800 hover:bg-green-300 hover:shadow-lg'
                      }
                    `}
                  >
                    {syllable.text}
                  </div>
                  {index < sortedSyllables.length - 1 && (
                    <span className='text-gray-400 mx-1 text-lg'>-</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Palavra formada preview */}
        {constructedSyllables.length > 0 && (
          <div className='mt-4 text-center'>
            <div
              className={`
              inline-block px-4 py-2 rounded-lg border
              ${
                formedWord === targetWord && canCheck
                  ? 'bg-green-100 border-green-200 text-green-800'
                  : 'bg-blue-100 border-blue-200 text-blue-800'
              }
            `}
            >
              <span className='text-gray-600 text-sm'>Palavra formada: </span>
              <span className='font-bold text-lg'>
                {sortedSyllables.map(s => s.text).join('')}
              </span>
              {formedWord === targetWord && canCheck && (
                <span className='ml-2 text-green-600'>✓</span>
              )}
            </div>
          </div>
        )}

        {/* Botão de verificação */}
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
          <p className='text-sm text-gray-500 mt-3 text-center'>
            💡 Continue arrastando sílabas para completar a palavra (
            {constructedSyllables.length}/{currentWord.syllables.length})
          </p>
        )}
      </div>
    </div>
  );
};

export default ConstructionZone;
