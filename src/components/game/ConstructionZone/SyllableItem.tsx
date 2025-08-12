import { Syllable } from '@/types/game';

interface SyllableItemProps {
  syllable: Syllable;
  isDragged: boolean;
  onDragStart: (e: React.DragEvent, syllableId: string) => void;
  onDragEnd: () => void;
}

export function SyllableItem({
  syllable,
  isDragged,
  onDragStart,
  onDragEnd,
}: SyllableItemProps) {
  return (
    <div
      draggable
      onDragStart={e => onDragStart(e, syllable.id)}
      onDragEnd={onDragEnd}
      className={`
        select-none cursor-move px-4 py-3 rounded-lg text-xl font-bold
        border-2 shadow-md transition-all duration-200
        transform hover:scale-105 active:scale-95
        ${
          isDragged
            ? 'bg-green-300 border-green-500 text-green-900 opacity-60 scale-105'
            : 'bg-green-200 border-green-400 text-green-800 hover:bg-green-300 hover:shadow-lg'
        }
      `}
    >
      {syllable.text}
    </div>
  );
}
