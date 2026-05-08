export type Locale = 'es' | 'en';

export const translations = {
  es: {
    languageLabel: 'Idioma',
    languageName: 'Español',
    header: {
      kicker: '⚓ Final Frontier Games',
      divider: '⚜ Setup',
      subtitle: 'Selector y randomizador de setup'
    },
    filters: {
      players: 'Jugadores',
      playerOptions: ['1 - Solo', '2 Jugadores', '3 Jugadores', '4 Jugadores', '5 Jugadores'],
      complexity: 'Complejidad Máxima',
      complexityHint: 'Muy Fácil - Experto',
      complexityLabels: ['Muy Fácil', 'Fácil', 'Intermedio', 'Avanzado', 'Experto'],
      modules: 'Módulos / Expansiones',
      variants: 'Variantes',
      factionFestival: '⚔ Faction Festival',
      paladins: '🛡 Paladins',
      multipleRogues: '🗡 Multiple Rogues (x3)',
      manyTownsfolk: '👥 Many Townsfolk',
      sets: 'Sets:',
      decreaseTownsfolk: 'Reducir townsfolk',
      increaseTownsfolk: 'Aumentar townsfolk'
    },
    info: {
      recommendedTitle: 'Setup Recomendado',
      merchants: (count: number) =>
        `Se seleccionarán ${count} según la complejidad elegida.`,
      townsfolk:
        '2 sets por defecto; Locals + Mercenaries para la primera partida.',
      rogues: '1 carta por defecto; Multiple Rogues usa 3 cartas barajadas.',
      multipleRoguesTitle: '⚠ Variante Multiple Rogues Activada',
      multipleRoguesBody:
        'Baraja 3 Rogue cards y colócalas en el área de Rogue. Durante Cleanup de cada ronda, retira la carta superior. Kraken, The Fence, Vigilantes y Revolutionaries se excluyen del randomizer.',
      townsfolkSetup: (count: number, showFirstGameTip: boolean) =>
        `Mezcla estos ${count} sets en un solo mazo.${
          showFirstGameTip ? ' Primera partida: Locals + Mercenaries recomendado.' : ''
        }`,
      noMulti:
        'Rogues marcados con "No Multi" se excluyen del randomizer cuando Multiple Rogues está activo.'
    },
    actions: {
      generate: '🎲 Generar Setup Aleatorio',
      showAll: '📋 Ver Todas las Opciones',
      hideAll: '✕ Ocultar Opciones'
    },
    summary: {
      merchants: 'Merchants',
      townsfolk: 'Townsfolk Sets',
      rogue: 'Rogue',
      rogues: 'Rogues',
      players: 'Jugadores',
      merchantsTab: '⚒ Merchants',
      townsfolkTab: '👥 Townsfolk',
      roguesTab: '🗡 Rogues'
    },
    empty: {
      merchants: 'No hay merchants disponibles con estos filtros',
      townsfolk: 'No hay townsfolk disponibles',
      rogues: 'No hay rogues disponibles'
    },
    cards: {
      complexity: 'Complejidad',
      interactivity: 'Interactividad',
      difficulty: 'Dificultad',
      impact: 'Impacto',
      noMulti: 'No Multi',
      stars: (count: number, max: number) => `${count} de ${max}`
    },
    alertNoMerchants: 'No hay merchants disponibles con estos filtros',
    values: {
      Beginner: 'Principiante',
      Intermediate: 'Intermedio',
      Advanced: 'Avanzado',
      Expert: 'Experto',
      Low: 'Baja',
      Medium: 'Media',
      High: 'Alta',
      'Very High': 'Muy Alta',
      None: 'Ninguna',
      Chaotic: 'Caótico'
    }
  },
  en: {
    languageLabel: 'Language',
    languageName: 'English',
    header: {
      kicker: '⚓ Final Frontier Games',
      divider: '⚜ Setup',
      subtitle: 'Setup Selector & Randomizer'
    },
    filters: {
      players: 'Players',
      playerOptions: ['1 - Solo', '2 Players', '3 Players', '4 Players', '5 Players'],
      complexity: 'Max Complexity',
      complexityHint: 'Very Easy - Expert',
      complexityLabels: ['Very Easy', 'Easy', 'Intermediate', 'Advanced', 'Expert'],
      modules: 'Modules / Expansions',
      variants: 'Variants',
      factionFestival: '⚔ Faction Festival',
      paladins: '🛡 Paladins',
      multipleRogues: '🗡 Multiple Rogues (x3)',
      manyTownsfolk: '👥 Many Townsfolk',
      sets: 'Sets:',
      decreaseTownsfolk: 'Decrease townsfolk',
      increaseTownsfolk: 'Increase townsfolk'
    },
    info: {
      recommendedTitle: 'Recommended Setup',
      merchants: (count: number) =>
        `${count} merchants will be selected based on the chosen complexity.`,
      townsfolk: '2 sets by default; Locals + Mercenaries for a first game.',
      rogues: '1 card by default; Multiple Rogues uses 3 shuffled cards.',
      multipleRoguesTitle: '⚠ Multiple Rogues Variant Enabled',
      multipleRoguesBody:
        'Shuffle 3 Rogue cards and place them in the Rogue area. During Cleanup each round, remove the top card. Kraken, The Fence, Vigilantes, and Revolutionaries are excluded from the randomizer.',
      townsfolkSetup: (count: number, showFirstGameTip: boolean) =>
        `Mix these ${count} sets into one deck.${
          showFirstGameTip ? ' First game: Locals + Mercenaries recommended.' : ''
        }`,
      noMulti:
        'Rogues marked "No Multi" are excluded from the randomizer while Multiple Rogues is enabled.'
    },
    actions: {
      generate: '🎲 Generate Random Setup',
      showAll: '📋 View All Options',
      hideAll: '✕ Hide Options'
    },
    summary: {
      merchants: 'Merchants',
      townsfolk: 'Townsfolk Sets',
      rogue: 'Rogue',
      rogues: 'Rogues',
      players: 'Players',
      merchantsTab: '⚒ Merchants',
      townsfolkTab: '👥 Townsfolk',
      roguesTab: '🗡 Rogues'
    },
    empty: {
      merchants: 'No merchants are available with these filters',
      townsfolk: 'No townsfolk are available',
      rogues: 'No rogues are available'
    },
    cards: {
      complexity: 'Complexity',
      interactivity: 'Interactivity',
      difficulty: 'Difficulty',
      impact: 'Impact',
      noMulti: 'No Multi',
      stars: (count: number, max: number) => `${count} of ${max}`
    },
    alertNoMerchants: 'No merchants are available with these filters',
    values: {
      Beginner: 'Beginner',
      Intermediate: 'Intermediate',
      Advanced: 'Advanced',
      Expert: 'Expert',
      Low: 'Low',
      Medium: 'Medium',
      High: 'High',
      'Very High': 'Very High',
      None: 'None',
      Chaotic: 'Chaotic'
    }
  }
};

export type Translation = (typeof translations)['es'];

export const translateValue = (locale: Locale, value: string) => {
  return translations[locale].values[value as keyof (typeof translations)[Locale]['values']] ?? value;
};
