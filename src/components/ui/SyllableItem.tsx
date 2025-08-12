import { Syllable } from '@/types/game';

interface SyllableItemProps {
  syllable: Syllable;
  isDragged: boolean;
  onDragStart: (e: React.DragEvent, syllableId: string) => void;
  onDragEnd: () => void;
  variant?: 'bank' | 'construction';
}

export const SyllableItem: React.FC<SyllableItemProps> = ({
  syllable,
  isDragged,
  onDragStart,
  onDragEnd,
  variant = 'bank',
}) => {
  // Estilos baseados na variante
  const variantStyles = {
    bank: {
      base: 'bg-blue-200 border-blue-400 text-blue-800',
      hover: 'hover:bg-blue-300 hover:shadow-lg',
      active: 'bg-blue-300 border-blue-500 text-blue-900',
    },
    construction: {
      base: 'bg-green-200 border-green-400 text-green-800',
      hover: 'hover:bg-green-300 hover:shadow-lg',
      active: 'bg-green-300 border-green-500 text-green-900',
    },
  };

  return (
    <div
      draggable
      onDragStart={e => onDragStart(e, syllable.id)}
      onDragEnd={onDragEnd}
      className={`
        select-none cursor-move px-4 py-3 rounded-lg text-xl font-bold
        border-2 shadow-md transition-all duration-200
        transform hover:scale-105 active:scale-95
        ${variantStyles[variant].base}
        ${variantStyles[variant].hover}
        ${
          isDragged
            ? `${variantStyles[variant].active} opacity-60 scale-105`
            : ''
        }
      `}
    >
      {syllable.text}
    </div>
  );
};
