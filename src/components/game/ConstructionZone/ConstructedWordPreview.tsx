interface ConstructedWordPreviewProps {
  word: string;
  isCorrect: boolean;
  showCheckmark: boolean;
}

export function ConstructedWordPreview({
  word,
  isCorrect,
  showCheckmark,
}: ConstructedWordPreviewProps) {
  return (
    <div className='mt-4 text-center'>
      <div
        className={`
          inline-block px-4 py-2 rounded-lg border
          ${
            isCorrect
              ? 'bg-green-100 border-green-200 text-green-800'
              : 'bg-blue-100 border-blue-200 text-blue-800'
          }
        `}
      >
        <span className='text-gray-600 text-sm'>Palavra formada: </span>
        <span className='font-bold text-lg'>{word}</span>
        {showCheckmark && <span className='ml-2 text-green-600'>✓</span>}
      </div>
    </div>
  );
}
