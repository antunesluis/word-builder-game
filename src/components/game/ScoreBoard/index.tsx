import { GameState } from '@/types/game';
import { GameInfo } from './GameInfo';
import { GameStats } from './GameStats';
import { ProgressBar } from './ProgressBar';

interface ScoreBoardProps {
  gameState: GameState;
}

export function ScoreBoard({ gameState }: ScoreBoardProps) {
  return (
    <div className='bg-white rounded-2xl shadow-lg p-6'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
        <GameInfo level={gameState.level} attempts={gameState.attempts} />
        <GameStats score={gameState.score} totalWords={gameState.totalWords} />
      </div>

      <ProgressBar level={gameState.level} />
    </div>
  );
}
