type ProgressBarProps = { level: number };

export function ProgressBar({ level }: ProgressBarProps) {
  return (
    <div className='mt-4'>
      <div className='flex justify-between items-center text-lg text-gray-500 mb-1'>
        <span>PROGRESSO</span>
        <span>{level}/15</span>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2'>
        <div
          className='bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out'
          style={{ width: `${(level / 15) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
