'use client';

import React, { useEffect } from 'react';
import { useWordBuilder } from '@/hooks/useWordBuilder';
import ScoreBoard from './ScoreBoard';
import SyllableBank from './SyllableBank';
import ConstructionZone from './ConstructionZone';
import FeedbackModal from './FeedbackModal';

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
    handleDragEnd
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
    if (syllableId && gameState.availableSyllables.some(s => s.id === syllableId)) {
      moveSyllableToConstruction(syllableId);
    }
    handleDragEnd();
  };

  const handleDropOnBank = (e: React.DragEvent) => {
    e.preventDefault();
    const syllableId = e.dataTransfer.getData('text/plain');
    if (syllableId && gameState.constructedSyllables.some(s => s.id === syllableId)) {
      moveSyllableToBank(syllableId);
    }
    handleDragEnd();
  };

  const canCheckWord = gameState.constructedSyllables.length === gameState.currentWord.syllables.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Placar */}
        <ScoreBoard gameState={gameState} />

        {/* Área de Construção */}
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

        {/* Banco de Sílabas */}
        <SyllableBank
          syllables={gameState.availableSyllables}
          draggedItem={draggedItem}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDrop={handleDropOnBank}
          onDragOver={handleDragOver}
        />

        {/* Modal de Feedback */}
        <FeedbackModal
          status={gameStatus}
          onResetGame={resetGame}
          score={gameState.score}
          level={gameState.level}
        />
      </div>
    </div>
  );
};

export default WordBuilder;
