import React from 'react';
import { GameStatus } from '@/types/game';
import Button from '@/components/ui/Button';

interface FeedbackModalProps {
  status: GameStatus;
  onResetGame: () => void;
  score: number;
  level: number;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  status,
  onResetGame,
  score,
  level,
}) => {
  if (status === 'playing') return null;

  const getModalContent = () => {
    switch (status) {
      case 'success':
        return {
          emoji: '🎉',
          title: 'Parabéns!',
          message: 'Palavra correta!',
          bgColor: 'from-green-400 to-green-600',
          textColor: 'text-green-600',
          animation: 'animate-bounce',
        };

      case 'error':
        return {
          emoji: '😅',
          title: 'Tente novamente!',
          message: 'A palavra não está correta.',
          bgColor: 'from-red-400 to-red-600',
          textColor: 'text-red-600',
          animation: 'animate-pulse',
        };

      case 'completed':
        return {
          emoji: '🏆',
          title: 'Fantástico!',
          message: `Você completou todos os níveis!\nPontuação final: ${score} pontos`,
          bgColor: 'from-purple-400 to-pink-600',
          textColor: 'text-purple-600',
          animation: 'animate-bounce',
          showButton: true,
        };

      default:
        return null;
    }
  };

  const content = getModalContent();
  if (!content) return null;

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div
        className={`
        bg-white rounded-3xl shadow-2xl max-w-md w-full mx-auto
        transform transition-all duration-300 scale-100
        ${content.animation}
      `}
        style={{ backgroundColor: 'white' }}
      >
        {/* Header colorido */}
        <div
          className={`
          bg-gradient-to-r ${content.bgColor}
          rounded-t-3xl p-6 text-center text-white
        `}
        >
          <div className='text-6xl mb-2'>{content.emoji}</div>
          <h2 className='text-2xl font-bold'>{content.title}</h2>
        </div>

        {/* Conteúdo */}
        <div className='p-6 text-center bg-white rounded-b-3xl'>
          <p className='text-lg text-gray-600 whitespace-pre-line'>
            {content.message}
          </p>

          {status === 'success' && (
            <div className='mt-4 p-3 bg-green-50 rounded-lg border border-green-200'>
              <div className='flex justify-around text-sm'>
                <div>
                  <div className='font-bold text-green-600'>Nível</div>
                  <div className='text-gray-600'>{level}</div>
                </div>
                <div>
                  <div className='font-bold text-green-600'>Pontos</div>
                  <div className='text-gray-600'>{score}</div>
                </div>
              </div>
            </div>
          )}

          {content.showButton && (
            <div className='mt-6'>
              <Button
                onClick={onResetGame}
                variant='primary'
                size='lg'
                className='min-w-48'
              >
                <span className='mr-2'>🎮</span>
                Jogar Novamente
              </Button>
            </div>
          )}

          {status === 'error' && (
            <div className='mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200'>
              <p className='text-sm text-blue-600 font-medium'>
                💡 Dica: Observe bem a ordem das sílabas!
              </p>
            </div>
          )}
        </div>

        {/* Footer apenas para o modal de sucesso */}
        {status === 'success' && (
          <div className='px-6 pb-6 bg-white rounded-b-3xl'>
            <div className='text-center text-xs text-gray-400'>
              Próxima palavra carregando automaticamente...
            </div>
            <div className='mt-2 w-full bg-gray-200 rounded-full h-1'>
              <div className='bg-green-500 h-1 rounded-full animate-pulse w-full'></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
