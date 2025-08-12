'use client';

import React, { useEffect } from 'react';
import { useWordBuilder } from '@/hooks/useWordBuilder';
import SyllableBank from './SyllableBank';
import ConstructionZone from './ConstructionZone';
import FeedbackModal from './FeedbackModal';
import ScoreBoard from './ScoreBoard';

const WordBuilder: React.FC = () => {
  const {
    gameState,
    gameStatus,
    draggedItem,
    initializeWord,
    moveSyllableToConstruction,
    moveSyllableToBank,
    checkWord,
    resetGame,
    handleDragStart,
    handleDragEnd,
  } = useWordBuilder();

  // Inicializar o jogo na primeira renderização
  useEffect(() => {
    initializeWord();
  }, [initializeWord]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDropOnConstruction = (e: React.DragEvent) => {
    e.preventDefault();
    const syllableId = e.dataTransfer.getData('text/plain');
    if (
      syllableId &&
      gameState.availableSyllables.some(s => s.id === syllableId)
    ) {
      moveSyllableToConstruction(syllableId);
    }
    handleDragEnd();
  };

  const handleDropOnBank = (e: React.DragEvent) => {
    e.preventDefault();
    const syllableId = e.dataTransfer.getData('text/plain');
    if (
      syllableId &&
      gameState.constructedSyllables.some(s => s.id === syllableId)
    ) {
      moveSyllableToBank(syllableId);
    }
    handleDragEnd();
  };

  const canCheckWord =
    gameState.constructedSyllables.length ===
    gameState.currentWord.syllables.length;

  return (
    <div className='flex flex-col gap-4'>
      <ScoreBoard gameState={gameState} />

      <ConstructionZone
        currentWord={gameState.currentWord}
        constructedSyllables={gameState.constructedSyllables}
        draggedItem={draggedItem}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrop={handleDropOnConstruction}
        onDragOver={handleDragOver}
        onCheckWord={checkWord}
        canCheck={canCheckWord}
      />

      <SyllableBank
        syllables={gameState.availableSyllables}
        draggedItem={draggedItem}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrop={handleDropOnBank}
        onDragOver={handleDragOver}
      />

      <FeedbackModal
        status={gameStatus}
        onResetGame={resetGame}
        score={gameState.score}
        level={gameState.level}
      />
    </div>
  );
};

export default WordBuilder;
