import { DifficultyBadge } from './DifficultyBadge';

interface GameInfoProps {
  level: number;
  attempts: number;
}

export function GameInfo({ level, attempts }: GameInfoProps) {
  return (
    <div className='flex items-center gap-4 text-lg text-gray-600'>
      <div className='flex items-center gap-2'>
        <span className='text-blue-500'>📈</span>
        <p>Nível {level}</p>
      </div>

      <DifficultyBadge level={level} />

      {attempts > 0 && (
        <div className='flex items-center gap-1'>
          <span className='text-orange-500'>🎲</span>
          <span>Tentativas: {attempts}</span>
        </div>
      )}
    </div>
  );
}
