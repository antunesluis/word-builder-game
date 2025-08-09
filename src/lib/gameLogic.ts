import { Syllable, Word } from '@/types/game';

/**
 * Embaralha as sílabas de uma palavra
 */
export const shuffleSyllables = (syllables: string[]): Syllable[] => {
  return [...syllables] // Cria cópia para não mutar o original
    .sort(() => Math.random() - 0.5)
    .map((syllable, index) => ({
      id: `syllable-${Date.now()}-${index}`, // ID único mais confiável
      text: syllable,
    }));
};

/**
 * Valida se a palavra construída está correta
 * CORREÇÃO: Ordena pela posição de inserção, não pela posição numérica
 */
export const validateWord = (
  constructedSyllables: Syllable[],
  correctWord: Word,
): boolean => {
  // Verificar quantidade de sílabas
  if (constructedSyllables.length !== correctWord.syllables.length) {
    console.log(
      `❌ Quantidade incorreta: ${constructedSyllables.length} vs ${correctWord.syllables.length}`,
    );
    return false;
  }

  // CORREÇÃO: Ordenar pela ordem de inserção (position)
  const orderedConstructed = [...constructedSyllables]
    .sort((a, b) => (a.position || 0) - (b.position || 0))
    .map(s => s.text.toUpperCase().trim());

  const correctSyllables = correctWord.syllables.map(s =>
    s.toUpperCase().trim(),
  );

  console.log('🔍 Validação:', {
    construida: orderedConstructed,
    correta: correctSyllables,
    palavraFormada: orderedConstructed.join(''),
    palavraCorreta: correctSyllables.join(''),
  });

  const isValid = orderedConstructed.every(
    (syllable, index) => syllable === correctSyllables[index],
  );

  console.log(isValid ? '✅ Palavra correta!' : '❌ Palavra incorreta');
  return isValid;
};

/**
 * Sistema de pontuação melhorado
 */
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

/**
 * Utilitários para gamificação
 */
export const getSuccessAnimation = (level: number, attempts: number) => {
  if (attempts === 1 && level > 5) return 'celebration'; // Confetes
  if (attempts === 1) return 'bounce';
  return 'pulse';
};

export const getEncouragementMessage = (
  attempts: number,
  level: number,
): string => {
  if (attempts === 1) {
    return level <= 3
      ? '🌟 Perfeito! Você é incrível!'
      : '🏆 Fantástico! Acertou de primeira!';
  }

  if (attempts === 2) return '👏 Muito bem! Continue assim!';
  if (attempts === 3) return '💪 Boa! Não desista!';
  return '🌈 Você está aprendendo! Tente mais uma vez!';
};

/**
 * Sistema de conquistas simples
 */
export const checkAchievements = (gameState: any) => {
  const achievements = [];

  if (gameState.totalWords === 1) {
    achievements.push({
      id: 'first_word',
      title: 'Primeira Palavra!',
      emoji: '🎯',
    });
  }

  if (gameState.totalWords === 5) {
    achievements.push({
      id: 'five_words',
      title: 'Construtor Iniciante!',
      emoji: '📚',
    });
  }

  if (gameState.level === 5) {
    achievements.push({
      id: 'level_five',
      title: 'Nível 5 Alcançado!',
      emoji: '🚀',
    });
  }

  if (gameState.score >= 100) {
    achievements.push({ id: 'century', title: '100 Pontos!', emoji: '💯' });
  }

  return achievements;
};

/**
 * Validação de acessibilidade
 */
export const validateAccessibility = (word: Word): boolean => {
  // Verificar se a palavra tem dica e emoji
  return !!(word.hint && word.emoji && word.syllables.length > 0);
};
