import clsx from 'clsx';

interface ModalHeaderProps {
  emoji: string;
  title: string;
  bgColor: string;
}

export const ModalHeader = ({ emoji, title, bgColor }: ModalHeaderProps) => (
  <div
    className={clsx(
      'bg-gradient-to-r rounded-t-3xl p-6 text-center text-white',
      bgColor,
    )}
  >
    <div className='text-6xl mb-2'>{emoji}</div>
    <h2 className='text-2xl font-bold'>{title}</h2>
  </div>
);
