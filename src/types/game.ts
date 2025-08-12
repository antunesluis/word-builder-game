// Tipos básicos
export interface Syllable {
  id: string;
  text: string;
  position?: number;
}

export interface Word {
  id: string;
  syllables: string[];
  difficulty: DifficultyLevel;
  hint: string;
  emoji: string;
  category?: string; // Nova: categoria da palavra
  audioUrl?: string; // Nova: para pronúncia
}

export interface GameState {
  currentWord: Word;
  availableSyllables: Syllable[];
  constructedSyllables: Syllable[];
  score: number;
  level: number;
  attempts: number;
  totalWords: number;
  startTime?: number;
  bestScore?: number;
}

// Enums e tipos de união
export type DifficultyLevel = 'facil' | 'medio' | 'dificil';
export type GameStatus =
  | 'playing'
  | 'success'
  | 'error'
  | 'completed'
  | 'paused';
export type AnimationType = 'bounce' | 'pulse' | 'celebration' | 'shake';

// Ações do reducer
export type GameAction =
  | { type: 'INITIALIZE_WORD'; word: Word; syllables: Syllable[] }
  | { type: 'MOVE_TO_CONSTRUCTION'; syllableId: string }
  | { type: 'MOVE_TO_BANK'; syllableId: string }
  | { type: 'INCREMENT_ATTEMPTS' }
  | { type: 'SUCCESS'; points: number; nextLevel?: number }
  | {
      type: 'RESET_GAME';
      initialState: GameState;
      word: Word;
      syllables: Syllable[];
    }
  | { type: 'PAUSE_GAME' }
  | { type: 'RESUME_GAME' };

// Conquistas
export interface Achievement {
  id: string;
  title: string;
  description: string;
  emoji: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

// Estatísticas
export interface GameStats {
  totalWordsCompleted: number;
  totalAttempts: number;
  accuracy: number;
  averageTime: number;
  currentStreak: number;
  longestStreak: number;
  achievementsUnlocked: number;
}

// Configurações
export interface GameSettings {
  soundEnabled: boolean;
  animationsEnabled: boolean;
  showHints: boolean;
  difficulty: 'auto' | DifficultyLevel;
  theme: 'default' | 'dark' | 'colorful';
}

// Props dos componentes
export interface ComponentProps {
  className?: string;
  'data-testid'?: string;
}

export interface SyllableBankProps extends ComponentProps {
  syllables: Syllable[];
  draggedItem: string | null;
  onDragStart: (syllableId: string) => void;
  onDragEnd: () => void;
  onDrop: () => void;
  onDragOver: (e: React.DragEvent) => void;
}

export interface ConstructionZoneProps extends ComponentProps {
  currentWord: Word;
  constructedSyllables: Syllable[];
  draggedItem: string | null;
  onDragStart: (syllableId: string) => void;
  onDragEnd: () => void;
  onDrop: () => void;
  onDragOver: (e: React.DragEvent) => void;
  onCheckWord: () => void;
  canCheck: boolean;
}

export interface FeedbackModalProps extends ComponentProps {
  status: GameStatus;
  onResetGame: () => void;
  onContinue?: () => void;
  score: number;
  level: number;
  achievements?: Achievement[];
}

export interface ScoreBoardProps extends ComponentProps {
  gameState: GameState;
  progress: number;
  onPause?: () => void;
  onSettings?: () => void;
}

// Utilitários de validação
export const isValidWord = (word: Word): boolean => {
  return !!(
    word.id &&
    word.syllables.length > 0 &&
    word.hint &&
    word.emoji &&
    ['facil', 'medio', 'dificil'].includes(word.difficulty)
  );
};

export const isValidGameState = (state: GameState): boolean => {
  return !!(
    state.currentWord &&
    Array.isArray(state.availableSyllables) &&
    Array.isArray(state.constructedSyllables) &&
    typeof state.score === 'number' &&
    typeof state.level === 'number'
  );
};
