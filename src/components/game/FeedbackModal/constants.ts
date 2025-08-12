import { GameStatus } from '@/types/game';

type ModalConfig = {
  emoji: string;
  title: string;
  bgGradient: string;
  animation: string;
  showStats?: boolean;
  showButton?: boolean;
  showHint?: boolean;
};

export const MODAL_CONFIGS: Record<GameStatus, ModalConfig | null> = {
  playing: null,
  success: {
    emoji: '🎉',
    title: 'Parabéns!',
    bgGradient: 'from-green-400 to-green-600',
    animation: 'animate-bounce',
    showStats: true,
  },
  error: {
    emoji: '😅',
    title: 'Tente novamente!',
    bgGradient: 'from-red-400 to-red-600',
    animation: 'animate-pulse',
    showHint: true,
  },
  completed: {
    emoji: '🏆',
    title: 'Fantástico!',
    bgGradient: 'from-purple-400 to-pink-600',
    animation: 'animate-bounce',
    showButton: true,
  },
  paused: null,
};

export const getModalMessage = (status: GameStatus, score?: number): string => {
  switch (status) {
    case 'success':
      return 'Palavra correta!';
    case 'error':
      return 'A palavra não está correta.';
    case 'completed':
      return `Você completou todos os níveis!\nPontuação final: ${score} pontos`;
    default:
      return '';
  }
};
