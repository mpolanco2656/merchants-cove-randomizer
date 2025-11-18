import { Merchant } from '../types';

export const merchants: Merchant[] = [
  {
    id: 4,
    name: 'Alchemist',
    fullName: 'Phoenestra Orwyn',
    complexity: 2,
    mechanics: 'Bag building, marble matching',
    description: 'Mezcla ingredientes de una bolsa para hacer pociones. Aleatorio pero manejable.',
    guideText: 'Brew potions with ingredients from a bag. The alchemist is potentially the most explosive and flexible merchant in the core game.',
    expansion: 'Core',
    tips: 'Try not to brew unless activating 3+ cauldrons. Your explosiveness falls if too much Ichor ends up in Toxic Waste.'
  },
  {
    id: 5,
    name: 'Blacksmith',
    fullName: 'Olaf Thundercrack',
    complexity: 1,
    mechanics: 'Dice placement and management',
    description: 'Forja armas con dados. Directo y poderoso para nuevos jugadores.',
    guideText: 'The blacksmith is a powerful merchant especially for new players. Try not to create goods unless you have a minimum of three filled furnaces.',
    expansion: 'Core',
    tips: 'Make sure unlocking new alloy dice often. Taking corruption to preserve dice colors is often worth it.'
  },
  {
    id: 6,
    name: 'Captain',
    fullName: 'Ylva Greentail',
    complexity: 1,
    mechanics: 'Fleet management, push your luck, spinner',
    description: 'Navega aguas traicioneras con una flota de barcos. Simple y amigable para principiantes.',
    guideText: 'You should almost always take the extra spin from the Compass. Your treasures renew at the end of each round, use this to your advantage.',
    expansion: 'Core',
    tips: 'Try not to recall ships unless recalling at least three. You can easily acquire 3 small red/green goods.'
  },
  {
    id: 7,
    name: 'Chronomancer',
    fullName: 'Wiz Grey & Humpty McHalf',
    complexity: 3,
    mechanics: 'Time manipulation, temporal anomalies',
    description: 'Manipula el tiempo con dos trabajadores. Coordinación compleja requerida.',
    guideText: 'Manipulate time with two workers. Use your time advantage to react to the market.',
    expansion: 'Core',
    tips: 'Complex coordination required between your two workers.'
  },
  {
    id: 8,
    name: 'Dragon Rancher',
    fullName: 'Dwelma Draketooth',
    complexity: 2,
    mechanics: 'Mancala dragon feeding and movement',
    description: 'Cría dragones con mecánicas de bag-building y mancala. Único y desafiante.',
    guideText: 'White-colored food tokens count as any color when eating. Remember you only have 2 of each small dragon. Beware large sale multipliers on central pier.',
    expansion: 'Core',
    tips: 'Clearing trees helps with sponsorship and increases food draw chance.'
  },
  {
    id: 9,
    name: 'Innkeeper',
    fullName: 'Mr. Nasty',
    complexity: 2,
    mechanics: 'Speculation, preparation, personal scoring',
    description: 'Sirve bebidas y atrae clientes leales. Requiere predicción del mercado.',
    guideText: 'The Innkeeper massively benefits from ships with multiple tied majorities. Pay close attention to what others are producing.',
    expansion: 'Secret Stash',
    tips: 'Staff is very important - only way to manipulate beds after committing.'
  },
  {
    id: 10,
    name: 'Oracle',
    fullName: 'Haggatha Sagebrush',
    complexity: 4,
    mechanics: 'Roll and write, divination',
    description: 'Lanza encantos en un plato adivinatorio. Muy aleatorio pero flexible.',
    guideText: 'Toss charms into a divining dish. Very random but flexible. Enchantments work great with you.',
    expansion: 'Secret Stash',
    tips: 'Make goods earlier in the round to capitalize on big multipliers.'
  },
  {
    id: 11,
    name: 'Thief',
    fullName: 'D.B. Culper',
    complexity: 3,
    mechanics: 'Worker placement, opportunism, corruption',
    description: 'Mecánicas de sigilo de nivel experto. Usa corrupción a tu favor.',
    guideText: 'Efficiency is key when recalling Rogues. Gain Corruption whenever you can since it is always useful. In final round, spread Rogues to docks, halls, and especially the Lair.',
    expansion: 'Secret Stash',
    tips: 'Not fully compatible with all modules since you replace main Rogue card.'
  },
  {
    id: 12,
    name: 'Detective',
    fullName: 'Hemlock Trolmes',
    complexity: 2,
    mechanics: 'Overlapping transparent cards, deduction',
    description: 'Resuelve casos superponiendo cartas de pistas. Estratégico y temático.',
    guideText: 'Solve cases by overlaying clue cards. Strategic and thematic.',
    expansion: 'Master Craft',
    tips: 'Plan your card overlays carefully for maximum deduction.'
  },
  {
    id: 13,
    name: 'Pastry Chef',
    fullName: 'Aveline Shortcake',
    complexity: 3,
    mechanics: 'Interlocking gears, timing, threshold manipulation',
    description: 'Hornea productos usando engranajes entrelazados. El tiempo lo es todo.',
    guideText: 'The use of the Mixer with Rest action is key. Frostings provide steady sponsorship income. Staff board actions are some of the best in the game.',
    expansion: 'Master Craft',
    tips: 'Mind you only have 2 of each good. Focus on denying matching meeples to opponents.'
  },
  {
    id: 14,
    name: 'Mushroom Farmer',
    fullName: 'Amanita Moghed',
    complexity: 4,
    mechanics: 'Hex grid, insect movement, cultivation',
    description: 'Cultiva hongos con insectos en una cuadrícula hexagonal. Rompecabezas espacial complejo.',
    guideText: 'Proper insect play order is essential. If you keep large goods after growth cycle, they turn small and give 1 Corruption. When activating Snail, plan dirt tile placement.',
    expansion: 'Master Craft',
    tips: 'Try to return only 1-2 Action tiles when necessary since Corruption gets punishing.'
  },
  {
    id: 15,
    name: 'Treasure Diver',
    fullName: 'Jacques Greentail',
    complexity: 4,
    mechanics: 'Push-your-luck bag-building',
    description: 'Bucea por tesoros y arriesga tu suerte. Alto riesgo, alta recompensa.',
    guideText: 'To win you will occasionally need to take risks and push deeper. Getting Maps and Lanterns early is essential. Make the most of every hour by buying/filling/crafting multiple things at once.',
    expansion: 'Master Craft',
    tips: 'If not staying above Diving Lantern token, go as deep as possible without busting.'
  },
  {
    id: 16,
    name: 'Game Maker',
    fullName: 'Johann Pach',
    complexity: 2,
    mechanics: 'Card melding, rotating, management',
    description: 'Crea juegos mezclando y rotando cartas. Flexible y creativo.',
    guideText: 'Your Staff (Freelancers) are much more flexible than others. Build spaces early. Watch for Faction Halls filling. You are the only Shopkeeper who can naturally sell to Rogues.',
    expansion: 'Master Craft',
    tips: 'Clever use of Rotate Stall and Move cards Staff action allows fixing tough layouts.'
  },
  {
    id: 17,
    name: 'Entertainer',
    fullName: 'The Entertainer',
    complexity: 3,
    mechanics: 'Deckbuilding, tempo management, movement',
    description: 'Realiza espectáculos con mecánicas de deckbuilding. Control estratégico del tempo.',
    guideText: 'You gain significant Gold during Production Phase. Grabbing a fan early expands hand size. Timing is key - ideally sing one song mid-round and one during Market Phase.',
    expansion: 'Bardwood Grove',
    tips: 'Focus on setting up in first round by grabbing fans, creatures, and new cards.'
  }
];
