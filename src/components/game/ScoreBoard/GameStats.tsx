import { StatsCard } from '@/components/ui/StatsCard';

interface GameStatsProps {
  score: number;
  totalWords: number;
}

export function GameStats({ score, totalWords }: GameStatsProps) {
  return (
    <div className='flex flex-col sm:flex-row gap-4'>
      <StatsCard title='PONTOS' score={score} variant='blue' />

      {totalWords > 0 && (
        <StatsCard title='PALAVRAS' score={totalWords} variant='green' />
      )}
    </div>
  );
}
