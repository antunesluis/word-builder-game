import React from 'react';
import Button from '@/components/ui/Button';

interface ModalContentProps {
  message: string;
  level?: number;
  score?: number;
  showStats?: boolean;
  showHint?: boolean;
  showButton?: boolean;
  onResetGame?: () => void;
}

export const ModalContent = ({
  message,
  level,
  score,
  showStats,
  showHint,
  showButton,
  onResetGame,
}: ModalContentProps) => (
  <div className='p-6 text-center'>
    <p className='text-xl text-gray-600 whitespace-pre-line'>{message}</p>

    {showStats && level && score && (
      <div className='mt-4 p-3 bg-green-50 rounded-lg border border-green-200'>
        <div className='flex justify-around text-md'>
          <div>
            <div className='font-bold text-green-600'>NÍVEL</div>
            <div className='text-gray-600'>{level}</div>
          </div>
          <div>
            <div className='font-bold text-green-600'>PONTOS</div>
            <div className='text-gray-600'>{score}</div>
          </div>
        </div>
      </div>
    )}

    {showHint && (
      <div className='mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200'>
        <p className='text-md text-blue-600 font-medium'>
          💡 DICA: OBSERVE BEM A ORDEM DAS SÍLABAS!
        </p>
      </div>
    )}

    {showButton && onResetGame && (
      <div className='mt-6'>
        <Button
          onClick={onResetGame}
          variant='primary'
          size='lg'
          className='min-w-48'
        >
          <span className='mr-2'>🎮</span>
          JOGAR NOVAMENTE
        </Button>
      </div>
    )}
  </div>
);
