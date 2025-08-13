import { Word } from '@/types/game';

type WordHintProps = {
  currentWord: Word;
};

export function WordHint({ currentWord }: WordHintProps) {
  return (
    <div className='bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-lg p-6 text-center border border-purple-200'>
      <h2 className='text-xl font-semibold text-gray-700 mb-3 flex items-center justify-center gap-2'>
        <span className='text-2xl font-bold'>🎯</span>
        Forme a palavra:
      </h2>
      <div className='flex items-center justify-center gap-3'>
        <span className='text-4xl'>{currentWord.emoji}</span>
        <p className='text-lg text-gray-600 font-medium'>{currentWord.hint}</p>
      </div>
      {/* <div className='mt-3 text-sm text-purple-600 font-medium'> */}
      {/*   {currentWord.syllables.length} sílaba */}
      {/*   {currentWord.syllables.length > 1 ? 's' : ''}:{' '} */}
      {/*   {currentWord.syllables.join(' - ')} */}
      {/* </div> */}
    </div>
  );
}
