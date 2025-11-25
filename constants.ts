import { 
  Dna, 
  Shuffle, 
  Wind, 
  Filter 
} from 'lucide-react';
import { Mechanism, ConceptData, Reference, QuizQuestion } from './types';

export const MECHANISMS: Mechanism[] = [
  {
    id: 'natural-selection',
    title: 'Seleção Natural',
    description: 'Indivíduos mais adaptados sobrevivem.',
    icon: Filter,
    impact: 'decrease',
    detailedText: 'Atua como um "filtro". Em novos ambientes (radiação), seleciona características divergentes. Em ambientes similares (convergência), seleciona características semelhantes, muitas vezes reduzindo a variação dentro de uma população específica ao favorecer o fenótipo ótimo.'
  },
  {
    id: 'mutation',
    title: 'Mutação',
    description: 'Alterações aleatórias no DNA.',
    icon: Dna,
    impact: 'increase',
    detailedText: 'É a fonte primária de biodiversidade. Sem mutação, não haveria variação para a seleção natural atuar. Essencial para a Radiação Adaptativa, pois fornece a "matéria-prima" para novas adaptações.'
  },
  {
    id: 'genetic-drift',
    title: 'Deriva Genética',
    description: 'Mudanças aleatórias nas frequências.',
    icon: Shuffle,
    impact: 'variable',
    detailedText: 'Pode fixar ou eliminar características por puro acaso. No efeito fundador (comum na radiação em ilhas), a deriva pode acelerar a diferenciação genética inicial de uma nova população.'
  },
  {
    id: 'gene-flow',
    title: 'Fluxo Gênico',
    description: 'Transferência genética entre populações.',
    icon: Wind,
    impact: 'increase',
    detailedText: 'A migração de indivíduos introduz novos alelos. Geralmente, o fluxo gênico homogeneíza populações, retardando a especiação (radiação), mas sua interrupção é frequentemente o gatilho para a divergência.'
  }
];

export const CONCEPTS: Record<string, ConceptData> = {
  adaptive: {
    id: 'adaptive',
    title: 'Radiação Adaptativa',
    subtitle: 'Divergência a partir de um ponto comum',
    definition: 'Processo evolutivo onde um único ancestral comum se diversifica rapidamente em várias novas formas, cada uma adaptada a um nicho ecológico específico.',
    visualMetaphor: 'diverge',
    examples: [
      {
        title: 'Tentilhões de Darwin',
        description: 'Nas Galápagos, um ancestral comum gerou espécies com bicos adaptados para sementes, insetos ou cactos.',
        imagePlaceholder: 'https://picsum.photos/400/300'
      },
      {
        title: 'Mamíferos Cenozoicos',
        description: 'Após a extinção dos dinossauros, mamíferos ocuparam nichos vagos (baleias, morcegos, felinos).',
        imagePlaceholder: 'https://picsum.photos/401/300'
      }
    ]
  },
  convergent: {
    id: 'convergent',
    title: 'Convergência Evolutiva',
    subtitle: 'Caminhos diferentes, destino semelhante',
    definition: 'Processo onde organismos não relacionados evoluem independentemente características semelhantes por estarem sujeitos a pressões seletivas ou ambientes similares.',
    visualMetaphor: 'converge',
    examples: [
      {
        title: 'Forma Hidrodinâmica',
        description: 'Golfinhos (mamíferos) e Tubarões (peixes) desenvolveram corpos fusiformes para nadar.',
        imagePlaceholder: 'https://picsum.photos/402/300'
      },
      {
        title: 'Asas e Voo',
        description: 'Pássaros e Morcegos desenvolveram asas independentemente para explorar o ambiente aéreo.',
        imagePlaceholder: 'https://picsum.photos/403/300'
      }
    ]
  }
};

export const GLOSSARY = {
  homologas: "Estruturas que possuem a mesma origem embrionária e evolutiva (mesmo ancestral), podendo ter ou não a mesma função. Ex: Braço humano e nadadeira de baleia.",
  analogas: "Estruturas que possuem a mesma função devido a adaptação a ambientes similares, mas origens evolutivas diferentes. Ex: Asa de inseto e asa de ave."
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "Qual é a principal diferença entre radiação adaptativa e convergência evolutiva?",
    options: [
      "A radiação parte de um ancestral comum; a convergência une linhagens distintas.",
      "A radiação reduz a biodiversidade; a convergência aumenta.",
      "A radiação ocorre apenas em ilhas; a convergência apenas no oceano.",
      "Não há diferença, são sinônimos."
    ],
    correctAnswer: 0,
    explanation: "A radiação adaptativa é a diversificação a partir de um ancestral comum (divergência), enquanto a convergência é o desenvolvimento de características semelhantes em linhagens não relacionadas."
  },
  {
    question: "Qual mecanismo evolutivo é a fonte primária de variabilidade genética?",
    options: ["Seleção Natural", "Deriva Genética", "Mutação", "Fluxo Gênico"],
    correctAnswer: 2,
    explanation: "A mutação é a única fonte original de novos alelos (variações genéticas) no DNA. Os outros mecanismos atuam rearranjando ou selecionando essa variação existente."
  },
  {
    question: "O que são estruturas análogas?",
    options: [
      "Estruturas herdadas de um ancestral comum recente.",
      "Estruturas com funções diferentes, mas mesma origem embrionária.",
      "Estruturas com mesma função, mas origens evolutivas diferentes.",
      "Estruturas que não possuem função."
    ],
    correctAnswer: 2,
    explanation: "Estruturas análogas (ex: asas de insetos e aves) desempenham a mesma função devido a pressões seletivas similares, mas não compartilham a mesma origem evolutiva (ancestral)."
  },
  {
    question: "Em qual situação a Deriva Genética tem maior impacto?",
    options: [
      "Em grandes populações continentais.",
      "Em populações pequenas e isoladas.",
      "Quando há muito fluxo gênico.",
      "Quando a seleção natural é muito forte."
    ],
    correctAnswer: 1,
    explanation: "Em populações pequenas, o acaso desempenha um papel maior, podendo fixar alelos prejudiciais ou eliminar benéficos puramente por sorte."
  },
  {
    question: "Qual destas afirmações sobre Radiação Adaptativa está correta?",
    options: [
      "Ocorre quando espécies diferentes se tornam semelhantes.",
      "Geralmente acontece quando surgem novos nichos ecológicos.",
      "Reduz a biodiversidade em ecossistemas insulares.",
      "É impulsionada principalmente pelo fluxo gênico."
    ],
    correctAnswer: 1,
    explanation: "A radiação adaptativa ocorre frequentemente quando novos nichos ecológicos se tornam disponíveis (como em ilhas vulcânicas recém-formadas ou após extinções em massa), permitindo a rápida diversificação."
  }
];

export const REFERENCES: Reference[] = [
  {
    title: "Só Biologia - Evolução",
    author: "Grupo Virtuous",
    link: "https://www.sobiologia.com.br/conteudos/Evolucao/",
    type: "web"
  },
  {
    title: "Khan Academy - Evolução e a árvore da vida",
    author: "Khan Academy",
    link: "https://pt.khanacademy.org/science/biology/her",
    type: "web"
  },
  {
    title: "Brasil Escola - Evolução",
    author: "UOL",
    link: "https://brasilescola.uol.com.br/biologia/evolucao.htm",
    type: "web"
  },
  {
    title: "Toda Matéria - Evolução",
    author: "7Graus",
    link: "https://www.todamateria.com.br/evolucao/",
    type: "web"
  },
  {
    title: "Understanding Evolution",
    author: "University of California Museum of Paleontology",
    link: "https://evolution.berkeley.edu/",
    type: "web"
  }
];