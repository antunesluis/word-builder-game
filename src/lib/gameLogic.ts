import { Syllable, Word } from '@/types/game';

export const shuffleSyllables = (syllables: string[]): Syllable[] => {
  return [...syllables] // Cria cópia para não mutar o original
    .sort(() => Math.random() - 0.5)
    .map((syllable, index) => ({
      id: `syllable-${Date.now()}-${index}`, // ID único mais confiável
      text: syllable,
    }));
};

export const validateWord = (
  constructedSyllables: Syllable[],
  correctWord: Word,
): boolean => {
  // Verificar quantidade de sílabas
  if (constructedSyllables.length !== correctWord.syllables.length) {
    return false;
  }

  // CORREÇÃO: Ordenar pela ordem de inserção (position)
  const orderedConstructed = [...constructedSyllables]
    .sort((a, b) => (a.position || 0) - (b.position || 0))
    .map(s => s.text.toUpperCase().trim());

  const correctSyllables = correctWord.syllables.map(s =>
    s.toUpperCase().trim(),
  );

  const isValid = orderedConstructed.every(
    (syllable, index) => syllable === correctSyllables[index],
  );

  return isValid;
};

export const calculateScore = (
  difficulty: 'facil' | 'medio' | 'dificil',
  attempts: number,
  timeBonus: boolean = false,
): number => {
  const basePoints = {
    facil: 10,
    medio: 20,
    dificil: 30,
  };

  let score = basePoints[difficulty];

  // Bonus por primeira tentativa
  if (attempts === 1) score += 10;

  // Bonus por tempo (se implementado)
  if (timeBonus) score += 5;

  // Penalidade por tentativas extras
  const penalty = Math.max(0, (attempts - 1) * 2);

  return Math.max(score - penalty, 5); // Mínimo 5 pontos
};
