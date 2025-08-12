import React from 'react';
import { GameStatus } from '@/types/game';
import { MODAL_CONFIGS, getModalMessage } from './constants';
import { ModalLayout } from './ModalLayout';
import { ModalContent } from './ModalContent';
import { ModalHeader } from './ModalHeader';

interface FeedbackModalProps {
  status: GameStatus;
  onResetGame: () => void;
  score: number;
  level: number;
}

export const FeedbackModal = ({
  status,
  onResetGame,
  score,
  level,
}: FeedbackModalProps) => {
  const config = MODAL_CONFIGS[status];
  if (!config) return null;

  return (
    <ModalLayout bgGradient={config.bgGradient} animation={config.animation}>
      <ModalHeader
        emoji={config.emoji}
        title={config.title}
        bgColor={config.bgGradient}
      />
      <ModalContent
        message={getModalMessage(status, score)}
        level={level}
        score={score}
        showStats={config.showStats}
        showHint={config.showHint}
        showButton={config.showButton}
        onResetGame={onResetGame}
      />
    </ModalLayout>
  );
};
