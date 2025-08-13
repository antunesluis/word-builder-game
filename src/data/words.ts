import { Word } from '@/types/game';

export const WORDS_BANK: Word[] = [
  // Nível Fácil - 2 sílabas
  {
    id: '1',
    syllables: ['CA', 'SA'],
    difficulty: 'facil',
    hint: 'Lugar onde moramos',
    emoji: '🏠',
  },
  {
    id: '2',
    syllables: ['GA', 'TO'],
    difficulty: 'facil',
    hint: 'Animal de estimação que faz miau',
    emoji: '🐱',
  },
  {
    id: '3',
    syllables: ['PA', 'TO'], // CORRIGIDO: PA primeiro, TO segundo = PATO
    difficulty: 'facil',
    hint: 'Animal que nada no lago',
    emoji: '🦆',
  },
  {
    id: '4',
    syllables: ['BO', 'LA'],
    difficulty: 'facil',
    hint: 'Usada para jogar futebol',
    emoji: '⚽',
  },
  {
    id: '5',
    syllables: ['SO', 'PA'],
    difficulty: 'facil',
    hint: 'Comida líquida e quente',
    emoji: '🍲',
  },
  {
    id: '6',
    syllables: ['LUA'],
    difficulty: 'facil',
    hint: 'Brilha no céu à noite',
    emoji: '🌙',
  },
  {
    id: '7',
    syllables: ['SOL'],
    difficulty: 'facil',
    hint: 'Brilha durante o dia',
    emoji: '☀️',
  },

  // Nível Médio - 3 sílabas
  {
    id: '8',
    syllables: ['CA', 'VA', 'LO'],
    difficulty: 'medio',
    hint: 'Animal que corre e galopa',
    emoji: '🐴',
  },
  {
    id: '9',
    syllables: ['MA', 'CA', 'CO'],
    difficulty: 'medio',
    hint: 'Animal que pula nas árvores',
    emoji: '🐵',
  },
  {
    id: '10',
    syllables: ['GI', 'RAS', 'SOL'],
    difficulty: 'medio',
    hint: 'Flor amarela grande',
    emoji: '🌻',
  },
  {
    id: '11',
    syllables: ['PÁS', 'SA', 'RO'],
    difficulty: 'medio',
    hint: 'Ave que voa no céu',
    emoji: '🐦',
  },
  {
    id: '12',
    syllables: ['FOR', 'MI', 'GA'],
    difficulty: 'medio',
    hint: 'Inseto pequeno e trabalhador',
    emoji: '🐜',
  },

  // Nível Difícil - 4+ sílabas
  {
    id: '13',
    syllables: ['E', 'LE', 'FAN', 'TE'],
    difficulty: 'dificil',
    hint: 'Animal grande com tromba',
    emoji: '🐘',
  },
  {
    id: '14',
    syllables: ['HI', 'PO', 'PÓ', 'TA', 'MO'],
    difficulty: 'dificil',
    hint: 'Animal grande que vive na água',
    emoji: '🦛',
  },
  {
    id: '15',
    syllables: ['DI', 'NOS', 'SAU', 'RO'],
    difficulty: 'dificil',
    hint: 'Animal pré-histórico gigante',
    emoji: '🦕',
  },
  {
    id: '16',
    syllables: ['BOR', 'BO', 'LE', 'TA'],
    difficulty: 'dificil',
    hint: 'Inseto colorido que voa de flor em flor',
    emoji: '🦋',
  },
  {
    id: '17',
    syllables: ['ES', 'CO', 'VA', 'DEN', 'TES'],
    difficulty: 'dificil',
    hint: 'Usada para limpar os dentes',
    emoji: '🪥',
  },
];

export const getDifficultyConfig = (
  difficulty: 'facil' | 'medio' | 'dificil',
) => {
  switch (difficulty) {
    case 'facil':
      return {
        points: 10,
        color: 'success',
        label: 'Fácil',
      };
    case 'medio':
      return {
        points: 20,
        color: 'warning',
        label: 'Médio',
      };
    case 'dificil':
      return {
        points: 30,
        color: 'error',
        label: 'Difícil',
      };
  }
};

export const getWordsByDifficulty = (
  difficulty: 'facil' | 'medio' | 'dificil',
) => {
  return WORDS_BANK.filter(word => word.difficulty === difficulty);
};

export const getRandomWord = (level: number): Word => {
  let availableWords: Word[];

  if (level <= 10) {
    availableWords = getWordsByDifficulty('facil');
  } else if (level <= 20) {
    availableWords = getWordsByDifficulty('medio');
  } else {
    availableWords = getWordsByDifficulty('dificil');
  }

  const selectedWord =
    availableWords[Math.floor(Math.random() * availableWords.length)] ||
    WORDS_BANK[0];
  return selectedWord;
};
