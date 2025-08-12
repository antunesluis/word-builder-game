import clsx from 'clsx';

type GameState = {
  title: string;
  score: number;
  variant: 'blue' | 'green';
};

export function StatsCard({ score, title, variant }: GameState) {
  const variantClasses = {
    green: 'bg-gradient-to-r from-green-500 to-teal-600',
    blue: 'bg-gradient-to-r from-blue-500 to-purple-600',
  };

  return (
    <div
      className={clsx(
        variantClasses[variant],
        'text-white rounded-xl px-4 py-3 text-center shadow-lg',
      )}
    >
      <div className='text-2xl font-bold'>{score}</div>
      <div className='text-sm font-bold opacity-90'>{title}</div>
    </div>
  );
}
