import { Townsfolk } from '../types';

export const townsfolk: Townsfolk[] = [
  {
    name: 'Locals',
    expansion: 'Core',
    description: 'Ayudan a descartar corrupción. Ideales para principiantes.',
    guideText: 'The Locals are a great inclusion choice for both beginners and experienced merchants. They help smooth the corruption curve and offer a good amount of Faction Icons for end game scoring.',
    interactivity: 'Low',
    complexity: 'Beginner',
    requires: null
  },
  {
    name: 'Mercenaries',
    expansion: 'Core',
    description: 'Proporcionan bienes e iconos de facción. Buenos para merchants menos flexibles.',
    guideText: 'The Mercenaries help round out many characters by providing access to both Goods and Faction icons, allowing Merchants, especially less-flexible ones, to potentially capitalize on big sales they would have otherwise missed out on.',
    interactivity: 'Low',
    complexity: 'Beginner',
    requires: null
  },
  {
    name: 'Sailors',
    expansion: 'Core',
    description: 'Manipulan adventurers en los barcos. MUY interactivos y pueden ser agresivos.',
    guideText: 'The Sailors can have a massive impact on the game. Being able to slow a round by placing an Adventurer back in the bag, or accelerating a round by placing a new Adventurer, or creating the perfect sale opportunity. Depending on your group, these can lead to cutthroat gameplay.',
    interactivity: 'Very High',
    complexity: 'Intermediate',
    requires: null
  },
  {
    name: 'Artisans',
    expansion: 'Secret Stash',
    description: 'Versión "segura" de Mercenaries. Sin iconos de Rogue faction.',
    guideText: 'The Artisans are the "safer" version of the Mercenaries. They don\'t give Rogue Faction icons, they don\'t have any Faction Icons at all. Instead, they let you both remove corruption and produce goods.',
    interactivity: 'Low',
    complexity: 'Beginner',
    requires: null
  },
  {
    name: 'Officials',
    expansion: 'Secret Stash',
    description: 'Acceso temprano a habilidades de Staff.',
    guideText: 'The Officials allow players to access their Staff abilities much sooner than usual, and lead to a very interesting game. These Townsfolk help round out any set you decide to use.',
    interactivity: 'Medium',
    complexity: 'Intermediate',
    requires: null
  },
  {
    name: 'Underworld',
    expansion: 'Secret Stash',
    description: 'Habilidades fuertes con pocos iconos de facción. Pueden crear "Rogue Goods" de 10 oro.',
    guideText: 'The Underworld Townsfolk have very strong abilities at the cost of little to poor Faction Icons. They allow you to Recruit another staff immediately, or gain a rare "Rogue Good" worth 10 Gold that can be sold to Rogues on any dock.',
    interactivity: 'Medium',
    complexity: 'Advanced',
    requires: null
  },
  {
    name: 'Legends',
    expansion: 'Secret Stash',
    description: 'Basados en scoring de iconos de facción.',
    guideText: 'The Legends townsfolk are based on the idea of having a lot of Faction Icon scoring. They provide a nice alternative to purely goods-based strategies.',
    interactivity: 'Low',
    complexity: 'Intermediate',
    requires: null
  },
  {
    name: 'Insiders',
    expansion: 'Master Craft',
    description: 'Dan sponsorship cada Market Phase en lugar de solo al final.',
    guideText: 'You may notice some familiar faces here, as these Insiders have the inside drop on Faction activities. Uniquely, these Townsfolk give sponsorship each Market Phase, instead of only at the end of the game.',
    interactivity: 'Medium',
    complexity: 'Advanced',
    requires: 'Faction Festival'
  },
  {
    name: 'Lawyers',
    expansion: 'Master Craft',
    description: 'Ayudan a eliminar corrupción pasándola a otros jugadores. Interactivo.',
    guideText: 'These Townsfolk really help players shed their Corruption. Instead of simply dumping it, they can pin the crimes on their fellow merchants. A good alternative for players who want Corruption removal and interaction.',
    interactivity: 'High',
    complexity: 'Intermediate',
    requires: null
  },
  {
    name: 'Apprentices',
    expansion: 'Master Craft',
    description: 'Otorgan movimientos extra a Assistants.',
    guideText: 'The Apprentices will really help you get the most out of your Assistants when using the Faction Festival by granting them extra movements. This is a well rounded set that combines well with most others.',
    interactivity: 'Medium',
    complexity: 'Advanced',
    requires: 'Faction Festival'
  },
  {
    name: 'Exemplars',
    expansion: 'Master Craft',
    description: 'Enfocados en manejar corrupción con Honor tokens.',
    guideText: 'Another set focused on dealing with Corruption. These Townsfolk provide a great replacement for the Locals whenever you play with Honor tokens. Be careful about providing too much access to Corruption removal.',
    interactivity: 'Low',
    complexity: 'Intermediate',
    requires: 'Paladins'
  },
  {
    name: 'Inventors',
    expansion: 'Loot Pack',
    description: 'Traen invenciones que ahorran tiempo en momentos críticos.',
    guideText: 'These clever Townsfolk are clearly fans of the Chronomancer. They bring their Inventions with them when hired, and can use their contraptions a single time to help you save time at a critical moment. These well-rounded townsfolk are always a safe inclusion for expert players.',
    interactivity: 'Low',
    complexity: 'Advanced',
    requires: null
  },
  {
    name: 'Pets',
    expansion: 'Loot Pack',
    description: 'Costo de contratación reducido o gratis. Buenos para grupos que no usan mucho Staff.',
    guideText: 'There\'s an adoption drive and many of these pets need a new home. Enjoy a subsidized hiring cost, allowing you to get somewhat competent employees for very cheap (or even free in some cases). Great for groups who underutilize their Staff boards.',
    interactivity: 'Low',
    complexity: 'Beginner',
    requires: null
  }
];
