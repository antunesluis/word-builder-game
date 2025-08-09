import React from 'react';
import { GameState } from '@/types/game';

interface ScoreBoardProps {
  gameState: GameState;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ gameState }) => {
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
    <div className='bg-white rounded-2xl shadow-lg p-6'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
        {/* Título e informações do jogo */}
        <div className='flex-1'>
          <div className='flex items-center gap-3 mb-2'>
            <h1 className='text-2xl font-bold text-gray-800'>
              Construtor de Palavras
            </h1>
            <span className='text-3xl'>🎯</span>
          </div>

          <div className='flex items-center gap-4 text-sm text-gray-600'>
            <div className='flex items-center gap-2'>
              <span className='text-blue-500'>📈</span>
              <span>Nível {gameState.level}</span>
            </div>

            <div
              className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(gameState.level)}`}
            >
              {getDifficultyLabel(gameState.level)}
            </div>

            {gameState.attempts > 0 && (
              <div className='flex items-center gap-1'>
                <span className='text-orange-500'>🎲</span>
                <span>Tentativas: {gameState.attempts}</span>
              </div>
            )}
          </div>
        </div>

        {/* Pontuação e estatísticas */}
        <div className='flex flex-col sm:flex-row gap-4'>
          <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl px-6 py-3 text-center shadow-lg'>
            <div className='text-2xl font-bold'>{gameState.score}</div>
            <div className='text-xs opacity-90'>Pontos</div>
          </div>

          {gameState.totalWords > 0 && (
            <div className='bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl px-6 py-3 text-center shadow-lg'>
              <div className='text-2xl font-bold'>{gameState.totalWords}</div>
              <div className='text-xs opacity-90'>Palavras</div>
            </div>
          )}
        </div>
      </div>

      {/* Barra de progresso do nível */}
      <div className='mt-4'>
        <div className='flex justify-between items-center text-xs text-gray-500 mb-1'>
          <span>Progresso do Nível</span>
          <span>{gameState.level}/15</span>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-2'>
          <div
            className='bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out'
            style={{ width: `${(gameState.level / 15) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
