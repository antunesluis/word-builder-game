'use client';

import { useState, useCallback } from 'react';
import { GameState, GameStatus } from '@/types/game';
import { getRandomWord } from '@/data/words';
import {
  shuffleSyllables,
  validateWord,
  calculateScore,
} from '@/lib/gameLogic';

const ERROR_MODAL_DURATION = 3000;

export const useWordBuilder = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentWord: getRandomWord(1),
    availableSyllables: [],
    constructedSyllables: [],
    score: 0,
    level: 1,
    attempts: 0,
    totalWords: 0,
  });

  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const initializeWord = useCallback(() => {
    setGameState(prev => {
      const word = getRandomWord(prev.level);
      const shuffledSyllables = shuffleSyllables(word.syllables);

      return {
        ...prev,
        currentWord: word,
        availableSyllables: shuffledSyllables,
        constructedSyllables: [],
        attempts: 0,
      };
    });
    setGameStatus('playing');
  }, []);

  const moveSyllableToConstruction = useCallback((syllableId: string) => {
    setGameState(prev => {
      const syllable = prev.availableSyllables.find(s => s.id === syllableId);
      if (!syllable) return prev;

      return {
        ...prev,
        availableSyllables: prev.availableSyllables.filter(
          s => s.id !== syllableId,
        ),
        constructedSyllables: [
          ...prev.constructedSyllables,
          { ...syllable, position: prev.constructedSyllables.length },
        ],
      };
    });
  }, []);

  const moveSyllableToBank = useCallback((syllableId: string) => {
    setGameState(prev => {
      const syllable = prev.constructedSyllables.find(s => s.id === syllableId);
      if (!syllable) return prev;

      return {
        ...prev,
        constructedSyllables: prev.constructedSyllables.filter(
          s => s.id !== syllableId,
        ),
        availableSyllables: [
          ...prev.availableSyllables,
          { id: syllable.id, text: syllable.text },
        ],
      };
    });
  }, []);

  const checkWord = useCallback(() => {
    setGameState(prev => {
      const isCorrect = validateWord(
        prev.constructedSyllables,
        prev.currentWord,
      );
      const newAttempts = prev.attempts + 1;

      if (isCorrect) {
        const points = calculateScore(prev.currentWord.difficulty, newAttempts);
        const newLevel = prev.level + 1; // CORREÇÃO: Calcular o novo nível aqui
        const newScore = prev.score + points;
        const newTotalWords = prev.totalWords + 1;

        setGameStatus('success');

        // Auto avançar após 2 segundos
        setTimeout(() => {
          if (newLevel > 30) {
            setGameStatus('completed');
          } else {
            // CORREÇÃO: Usar os valores já calculados
            const nextWord = getRandomWord(newLevel);
            setGameState(current => ({
              ...current,
              currentWord: nextWord,
              availableSyllables: shuffleSyllables(nextWord.syllables),
              constructedSyllables: [],
              attempts: 0,
              level: newLevel,
              score: newScore,
              totalWords: newTotalWords,
            }));
            setGameStatus('playing');
          }
        }, 2000);

        // CORREÇÃO: Retornar o estado atualizado imediatamente
        return {
          ...prev,
          score: newScore,
          totalWords: newTotalWords,
          attempts: newAttempts,
          level: newLevel, // IMPORTANTE: Atualizar o nível aqui também
        };
      } else {
        setGameStatus('error');
        setTimeout(() => setGameStatus('playing'), ERROR_MODAL_DURATION);

        return {
          ...prev,
          attempts: newAttempts,
        };
      }
    });
  }, []);

  const resetGame = useCallback(() => {
    const newWord = getRandomWord(1);
    const shuffledSyllables = shuffleSyllables(newWord.syllables);

    setGameState({
      currentWord: newWord,
      availableSyllables: shuffledSyllables,
      constructedSyllables: [],
      score: 0,
      level: 1,
      attempts: 0,
      totalWords: 0,
    });
    setGameStatus('playing');
    setDraggedItem(null);
  }, []);

  const handleDragStart = useCallback((syllableId: string) => {
    setDraggedItem(syllableId);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggedItem(null);
  }, []);

  return {
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
  };
};
