const HydraData = {};

HydraData.school = new Map([
  ['Arcana & Divine Esoterica'],
  ['Abjuration'],
  ['Conjuration'],
  ['Conjuration (Healing)'],
  ['Divination'],
  ['Enchantment'],
  ['Evocation'],
  ['Illusion'],
  ['Necromancy'],
  ['Transmutation'],
  ['Transmutation (Body Enhancement)']
]);

HydraData.effect = new Map([
  [
    'Arcane Mark',
    {
      school: 'Arcana & Divine Esoterica',
      diff: 1,
      damage: false
    }
  ],
  [
    'Prestidigitation',
    {
      school: 'Arcana & Divine Esoterica',
      diff: 1,
      damage: false
    }
  ],
  [
    'Read Magic',
    {
      school: 'Arcana & Divine Esoterica',
      diff: 1,
      damage: false
    }
  ],
  [
    'Alarm',
    {
      school: 'Abjuration',
      diff: 1,
      damage: false
    }
  ],
  [
    'Antimagic Field',
    {
      school: 'Abjuration',
      diff: 15,
      damage: false
    }
  ],
  [
    'Armor force',
    {
      school: 'Abjuration',
      diff: 5,
      damage: false
    }
  ],
  [
    'Dimensional Anchor',
    {
      school: 'Abjuration',
      diff: 5,
      damage: false
    }
  ],
  [
    'Dispel Magic',
    {
      school: 'Abjuration',
      diff: 10,
      damage: false
    }
  ],
  [
    'Endure Elements',
    {
      school: 'Abjuration',
      diff: 1,
      damage: false
    }
  ],
  [
    'Hold Portal',
    {
      school: 'Abjuration',
      diff: 1,
      damage: false
    }
  ],
  [
    'Obscure Object',
    {
      school: 'Abjuration',
      diff: 5,
      damage: false
    }
  ],
  [
    'Shield force',
    {
      school: 'Abjuration',
      diff: 5,
      damage: false
    }
  ],
  [
    'Element Resistance',
    {
      school: 'Abjuration',
      diff: 5,
      damage: false
    }
  ],
  [
    'Repulsion',
    {
      school: 'Abjuration',
      diff: 5,
      damage: false
    }
  ],
  [
    'Resistance',
    {
      school: 'Abjuration',
      diff: 5,
      damage: false
    }
  ],
  [
    'Conjure Cold',
    {
      school: 'Conjuration',
      diff: 0,
      damage: true
    }
  ],
  [
    'Conjure Fire',
    {
      school: 'Conjuration',
      diff: 0,
      damage: true
    }
  ],
  [
    'Conjure Acid',
    {
      school: 'Conjuration',
      diff: 0,
      damage: true
    }
  ],
  [
    'Conjure Air',
    {
      school: 'Conjuration',
      diff: 0,
      damage: true
    }
  ],
  [
    'Conjure Holy or Unholy',
    {
      school: 'Conjuration',
      diff: 0,
      damage: true
    }
  ],
  [
    'Obscuring Mist',
    {
      school: 'Conjuration',
      diff: 1,
      damage: false
    }
  ],
  [
    'Unseen Servant',
    {
      school: 'Conjuration',
      diff: 1,
      damage: false
    }
  ],
  [
    'Glitterdust',
    {
      school: 'Conjuration',
      diff: 5,
      damage: false
    }
  ],
  [
    'Web',
    {
      school: 'Conjuration',
      diff: 5,
      damage: false
    }
  ],
  [
    'Phantom Steed',
    {
      school: 'Conjuration',
      diff: 5,
      damage: false
    }
  ],
  [
    'Sleet Storm',
    {
      school: 'Conjuration',
      diff: 10,
      damage: false
    }
  ],
  [
    'Wall of Stone',
    {
      school: 'Conjuration',
      diff: 10,
      damage: false
    }
  ],
  [
    'Wall of Iron',
    {
      school: 'Conjuration',
      diff: 10,
      damage: false
    }
  ],
  [
    'Phase Door',
    {
      school: 'Conjuration',
      diff: 10,
      damage: false
    }
  ],
  [
    'Trap the Soul',
    {
      school: 'Conjuration',
      diff: 10,
      damage: false
    }
  ],
  [
    'Summon Monster (arcane)',
    {
      school: 'Conjuration',
      diff: 5,
      damage: false
    }
  ],
  [
    'Summon natures ally (faith)',
    {
      school: 'Conjuration',
      diff: 5,
      damage: false
    }
  ],
  [
    'Cure Wounds, 1D6',
    {
      school: 'Conjuration (Healing)',
      diff: 3,
      damage: false
    }
  ],
  [
    'Cure Wounds, 2D6',
    {
      school: 'Conjuration (Healing)',
      diff: 6,
      damage: false
    }
  ],
  [
    'Cure Wounds, 3D6',
    {
      school: 'Conjuration (Healing)',
      diff: 12,
      damage: false
    }
  ],
  [
    'Cure Wounds, 4D6',
    {
      school: 'Conjuration (Healing)',
      diff: 18,
      damage: false
    }
  ],
  [
    'Cure Wounds, 5D6 (touch only)',
    {
      school: 'Conjuration (Healing)',
      diff: 24,
      area: false,
      damage: false
    }
  ],
  [
    'Cure Blinded',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Breath of life',
    {
      school: 'Conjuration (Healing)',
      diff: 15,
      damage: false
    }
  ],
  [
    'Confused',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Remove Curse',
    {
      school: 'Conjuration (Healing)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Cure Dazed',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Cure Dazzled',
    {
      school: 'Conjuration (Healing)',
      diff: 1,
      damage: false
    }
  ],
  [
    'Cure Deafened',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Cure Diseased',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Restoration Lesser (Ability damage)',
    {
      school: 'Conjuration (Healing)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Cure Exhausted',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Cure Fatigued',
    {
      school: 'Conjuration (Healing)',
      diff: 1,
      damage: false
    }
  ],
  [
    'Cure Feebleminded',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Cure Insanity',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Cure Nauseated',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Restoration Greater (Negativ levels)',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Cure Poisoned',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Cure Sickened',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Cure Stunned',
    {
      school: 'Conjuration (Healing)',
      diff: 5,
      damage: false
    }
  ],
  [
    'True Strike',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'See Invisibility',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Clairaudience or Clairvoyance',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Comprehend Language',
    {
      school: 'Divination',
      diff: 1,
      damage: false
    }
  ],
  [
    'Detect Alignment',
    {
      school: 'Divination',
      diff: 1,
      damage: false
    }
  ],
  [
    'Detect Poison',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Detect Disease',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Detect Magic',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Detect Undead',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Detect Secret doors',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Detect Thoughts',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Detect Scrying',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Detect Object',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Detect Creature',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Tongues',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Identify',
    {
      school: 'Divination',
      diff: 10,
      damage: false
    }
  ],
  [
    'Arcane Eye',
    {
      school: 'Divination',
      diff: 10,
      damage: false
    }
  ],
  [
    'Telepathic Bond',
    {
      school: 'Divination',
      diff: 5,
      damage: false
    }
  ],
  [
    'Legend Lore',
    {
      school: 'Divination',
      diff: 10,
      damage: false
    }
  ],
  [
    'True Seeing',
    {
      school: 'Divination',
      diff: 10,
      damage: false
    }
  ],
  [
    'Charm Person',
    {
      school: 'Enchantment Charm',
      diff: 5,
      damage: false
    }
  ],
  [
    'Hypnotism',
    {
      school: 'Enchantment Charm',
      diff: 5,
      damage: false
    }
  ],
  [
    'Sleep',
    {
      school: 'Enchantment Charm',
      diff: 5,
      damage: false
    }
  ],
  [
    'Hideous Laughter',
    {
      school: 'Enchantment Charm',
      diff: 10,
      damage: false
    }
  ],
  [
    'Touch of Idiocy',
    {
      school: 'Enchantment Charm',
      diff: 15,
      damage: false
    }
  ],
  [
    'Heroism',
    {
      school: 'Enchantment Charm',
      diff: 5,
      damage: false
    }
  ],
  [
    'Rage',
    {
      school: 'Enchantment Charm',
      diff: 5,
      damage: false
    }
  ],
  [
    'Suggestion',
    {
      school: 'Enchantment Charm',
      diff: 10,
      damage: false
    }
  ],
  [
    'Confusion',
    {
      school: 'Enchantment Charm',
      diff: 10,
      damage: false
    }
  ],
  [
    'Crushing Despair',
    {
      school: 'Enchantment Charm',
      diff: 5,
      damage: false
    }
  ],
  [
    'Feeblemind',
    {
      school: 'Enchantment Charm',
      diff: 15,
      damage: false
    }
  ],
  [
    'Mind Fog',
    {
      school: 'Enchantment Charm',
      diff: 15,
      damage: false
    }
  ],
  [
    'Symbol of Sleep',
    {
      school: 'Enchantment Charm',
      diff: 10,
      damage: false
    }
  ],
  [
    'Symbol of Persuasion',
    {
      school: 'Enchantment Charm',
      diff: 10,
      damage: false
    }
  ],
  [
    'Symbol of Stunning',
    {
      school: 'Enchantment Charm',
      diff: 10,
      damage: false
    }
  ],
  [
    'Antipathy',
    {
      school: 'Enchantment Charm',
      diff: 5,
      damage: false
    }
  ],
  [
    'Binding',
    {
      school: 'Enchantment Charm',
      diff: 5,
      damage: false
    }
  ],
  [
    'Power Word Stun',
    {
      school: 'Enchantment Charm',
      diff: 10,
      damage: false
    }
  ],
  [
    'Symbol of Insanity',
    {
      school: 'Enchantment Charm',
      diff: 15,
      damage: false
    }
  ],
  [
    'Sympathy',
    {
      school: 'Enchantment Charm',
      diff: 5,
      damage: false
    }
  ],
  [
    'Enchanment Touch: Confuse',
    {
      school: 'Enchantment Charm',
      diff: 10,
      damage: false
    }
  ],
  [
    'Enchanment Touch: Daze',
    {
      school: 'Enchantment Charm',
      diff: 5,
      damage: false
    }
  ],
  [
    'Enchanment Touch: Feeblemind',
    {
      school: 'Enchantment Charm',
      diff: 5,
      damage: false
    }
  ],
  [
    'Enchanment Touch: Insanity',
    {
      school: 'Enchantment Charm',
      diff: 5,
      damage: false
    }
  ],
  [
    'Enchanment Touch: Paralyse',
    {
      school: 'Enchantment Charm',
      diff: 10,
      damage: false
    }
  ],
  [
    'Light',
    {
      school: 'Evocation',
      diff: 1,
      damage: false
    }
  ],
  [
    'Darkness',
    {
      school: 'Evocation',
      diff: 1,
      damage: false
    }
  ],
  [
    'Daylight',
    {
      school: 'Evocation',
      diff: 10,
      damage: false
    }
  ],
  [
    'Elemental Acid',
    {
      school: 'Evocation',
      diff: 0,
      damage: true
    }
  ],
  [
    'Elemental Air',
    {
      school: 'Evocation',
      diff: 0,
      damage: true
    }
  ],
  [
    'Elemental Cold',
    {
      school: 'Evocation',
      diff: 0,
      damage: true
    }
  ],
  [
    'Elemental Electricity',
    {
      school: 'Evocation',
      diff: 0,
      damage: true
    }
  ],
  [
    'Elemental Fire',
    {
      school: 'Evocation',
      diff: 0,
      damage: true
    }
  ],
  [
    'Elemental Force',
    {
      school: 'Evocation',
      diff: 0,
      damage: true
    }
  ],
  [
    'Elemental Sonic',
    {
      school: 'Evocation',
      diff: 0,
      damage: true
    }
  ],
  [
    'Flare',
    {
      school: 'Evocation',
      diff: 1,
      damage: false
    }
  ],
  [
    'Floating Disk',
    {
      school: 'Evocation',
      diff: 1,
      damage: false
    }
  ],
  [
    'Gust of Wind',
    {
      school: 'Evocation',
      diff: 1,
      damage: false
    }
  ],
  [
    'Shatter',
    {
      school: 'Evocation',
      diff: 5,
      damage: false
    }
  ],
  [
    'Sending',
    {
      school: 'Evocation',
      diff: 5,
      damage: false
    }
  ],
  [
    'Stun',
    {
      school: 'Evocation',
      diff: 5,
      damage: false
    }
  ],
  [
    'Contingency',
    {
      school: 'Evocation',
      diff: 10,
      damage: false
    }
  ],
  [
    "Mage's Sword",
    {
      school: 'Evocation',
      diff: 15,
      damage: false
    }
  ],
  [
    'Wind Wall',
    {
      school: 'Evocation',
      diff: 5,
      damage: false
    }
  ],
  [
    'Tiny Hut',
    {
      school: 'Evocation',
      diff: 5,
      damage: false
    }
  ],
  [
    'Interposing Hand',
    {
      school: 'Evocation',
      diff: 5,
      damage: false
    }
  ],
  [
    'Light',
    {
      school: 'Illusion',
      diff: 1,
      damage: false
    }
  ],
  [
    'Ghost Sound',
    {
      school: 'Illusion',
      diff: 1,
      damage: false
    }
  ],
  [
    'Disguise Self',
    {
      school: 'Illusion',
      diff: 1,
      damage: false
    }
  ],
  [
    'Silent Image',
    {
      school: 'Illusion',
      diff: 5,
      damage: false
    }
  ],
  [
    'Ventriloquism',
    {
      school: 'Illusion',
      diff: 1,
      damage: false
    }
  ],
  [
    'Blur',
    {
      school: 'Illusion',
      diff: 5,
      damage: false
    }
  ],
  [
    'Hypnotic Pattern',
    {
      school: 'Illusion',
      diff: 5,
      damage: false
    }
  ],
  [
    'Invisibility',
    {
      school: 'Illusion',
      diff: 1,
      damage: false
    }
  ],
  [
    'Invisibility, Greater',
    {
      school: 'Illusion',
      diff: 5,
      damage: false
    }
  ],
  [
    'Misdirection',
    {
      school: 'Illusion',
      diff: 5,
      damage: false
    }
  ],
  [
    'Phantom Trap',
    {
      school: 'Illusion',
      diff: 5,
      damage: false
    }
  ],
  [
    'Phantasmal Killer',
    {
      school: 'Illusion',
      diff: 10,
      damage: false
    }
  ],
  [
    'Rainbow Pattern',
    {
      school: 'Illusion',
      diff: 5,
      damage: false
    }
  ],
  [
    'Dream',
    {
      school: 'Illusion',
      diff: 5,
      damage: false
    }
  ],
  [
    'False Vision',
    {
      school: 'Illusion',
      diff: 5,
      damage: false
    }
  ],
  [
    'Silence',
    {
      school: 'Illusion',
      diff: 5,
      damage: false
    }
  ],
  [
    'Simulacrum',
    {
      school: 'Illusion',
      diff: 75,
      damage: false
    }
  ],
  [
    'Animate Dead',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Command Undead',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Create Undead: Ghoul',
    {
      school: 'Necromancy',
      diff: 10,
      damage: false
    }
  ],
  [
    'Create Undead: Ghast',
    {
      school: 'Necromancy',
      diff: 15,
      damage: false
    }
  ],
  [
    'Create Undead: Mummy',
    {
      school: 'Necromancy',
      diff: 20,
      damage: false
    }
  ],
  [
    'Create Undead: Mohrg',
    {
      school: 'Necromancy',
      diff: 25,
      damage: false
    }
  ],
  [
    'Create Greater Undead: Shadow',
    {
      school: 'Necromancy',
      diff: 30,
      damage: false
    }
  ],
  [
    'Create Greater Undead: Wraith',
    {
      school: 'Necromancy',
      diff: 35,
      damage: false
    }
  ],
  [
    'Create Greater Undead: Spectre',
    {
      school: 'Necromancy',
      diff: 40,
      damage: false
    }
  ],
  [
    'Create Greater Undead: Devourer',
    {
      school: 'Necromancy',
      diff: 45,
      damage: false
    }
  ],
  [
    'False Life',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Gentle Repose',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Halt Undead',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Spectral Hand',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Blight',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Magic Jar',
    {
      school: 'Necromancy',
      diff: 15,
      damage: false
    }
  ],
  [
    'Symbol of Pain',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Symbol of Fear',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Control Undead',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Symbol of Weakness',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Clone',
    {
      school: 'Necromancy',
      diff: 100,
      damage: false
    }
  ],
  [
    'Symbol of Death',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Cause Wounds',
    {
      school: 'Necromancy',
      diff: 0,
      damage: true
    }
  ],
  [
    'Necro Touch: Ability damage',
    {
      school: 'Necromancy',
      diff: 10,
      damage: false
    }
  ],
  [
    'Necro Touch: Blind',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Necro Touch: Deafen',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Necro Touch: Disease',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Necro Touch: Exhauste',
    {
      school: 'Necromancy',
      diff: 10,
      damage: false
    }
  ],
  [
    'Necro Touch: Fatigue',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Necro Touch: Negativ levels',
    {
      school: 'Necromancy',
      diff: 10,
      damage: false
    }
  ],
  [
    'Necro Touch: Sicken',
    {
      school: 'Necromancy',
      diff: 5,
      damage: false
    }
  ],
  [
    'Curse: Baleful Polymorph',
    {
      school: 'Necromancy',
      diff: 10,
      damage: false
    }
  ],
  [
    'Curse: Bestow Curse Trap',
    {
      school: 'Necromancy',
      diff: 10,
      damage: false
    }
  ],
  [
    'Curse: Curse of the Ages',
    {
      school: 'Necromancy',
      diff: 10,
      damage: false
    }
  ],
  [
    'Curse: Mummy Rot',
    {
      school: 'Necromancy',
      diff: 10,
      damage: false
    }
  ],
  [
    'Curse: Unluck',
    {
      school: 'Necromancy',
      diff: 10,
      damage: false
    }
  ],
  [
    'Curse: Werewolf Lycanthropy',
    {
      school: 'Necromancy',
      diff: 10,
      damage: false
    }
  ],
  [
    'Dimension Door',
    {
      school: 'Transmutation',
      diff: 10,
      damage: false
    }
  ],
  [
    'Fly',
    {
      school: 'Transmutation',
      diff: 5,
      damage: false
    }
  ],
  [
    'Jump',
    {
      school: 'Transmutation',
      diff: 1,
      damage: false
    }
  ],
  [
    'Levitate',
    {
      school: 'Transmutation',
      diff: 1,
      damage: false
    }
  ],
  [
    'Light',
    {
      school: 'Transmutation',
      diff: 1,
      damage: false
    }
  ],
  [
    'Movement',
    {
      school: 'Transmutation',
      diff: 1,
      damage: false
    }
  ],
  [
    'Spider climb',
    {
      school: 'Transmutation',
      diff: 5,
      damage: false
    }
  ],
  [
    'Telekinese',
    {
      school: 'Transmutation',
      diff: 5,
      damage: false
    }
  ],
  [
    'Teleport',
    {
      school: 'Transmutation',
      diff: 15,
      damage: false
    }
  ],
  [
    'Temporal Stasis',
    {
      school: 'Transmutation',
      diff: 5,
      damage: false
    }
  ],
  [
    'Transmutation touch: Entangle',
    {
      school: 'Transmutation',
      diff: 5,
      damage: false
    }
  ],
  [
    'Transmutation touch: Petrify',
    {
      school: 'Transmutation',
      diff: 10,
      damage: false
    }
  ],
  [
    'Stat enhancement',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 5,
      damage: false
    }
  ],
  [
    'All-Around',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Amorphous',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Amphibious',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Bleed',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Blindsense',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Blindsight',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Blood Drain',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Blood Rage',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Breath Weapon',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Compression',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Construct Traits',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Fast healing',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 1,
      damage: false
    }
  ],
  [
    'Regeneration',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Ferocity',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Fortification',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Freeze',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Frightful Presence',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Gaze',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Grab',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Greensight',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Hold Breath',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Immunity',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Incorporeal',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Jet',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Keen Scent',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Lifesense',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Low-Light Vision',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Mistsight',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Natural Attacks',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'No Breath',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Plant Traits',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Plantbringer',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Poison',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Poisonous Blood',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Pounce',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Powerful Charge',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Push',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Rake',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Rend',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Rock Catching',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Scent',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 5,
      damage: false
    }
  ],
  [
    'See in Darkness',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Split',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Strangle',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Trample',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Transform Self: Enlarge Person',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Transform Self: Elemental Body',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Transform Self: Form of the Dragon',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 15,
      damage: false
    }
  ],
  [
    'Transform Self: Giant Form',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 20,
      damage: false
    }
  ],
  [
    'Transform Self: Beast Shape',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Transform Self: Demon Lord Traits',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 20,
      damage: false
    }
  ],
  [
    'Transform Self: Empyreal Lord Traits',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 20,
      damage: false
    }
  ],
  [
    'Transform Self: Formian Traits',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 20,
      damage: false
    }
  ],
  [
    'Tremorsense',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 10,
      damage: false
    }
  ],
  [
    'Unnatural Aura',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 5,
      damage: false
    }
  ],
  [
    'Water Breathing',
    {
      school: 'Transmutation (Body Enhancement)',
      diff: 5,
      damage: false
    }
  ]
]);

HydraData.time = new Map([
  ['Immediate action', { diff: 25 }],
  ['Swift Action', { diff: 15 }],
  ['Standard Action', { diff: 2 }],
  ['Full round Action', { diff: 0 }],
  ['Ritual 10 min', { diff: -5 }],
  ['Ritual 1 Hour', { diff: -10 }],
  ['Ritual 1 day', { diff: -15 }],
  ['Ritual Site 1 week', { diff: -25 }],
  ['Ritual Site 1 Month', { diff: -40 }],
  ['Ritual Site 3 Month', { diff: -60 }]
]);

HydraData.components = new Map([
  ['V, S, M, F', { diff: 0 }],
  ['V, S, M', { diff: 10 }],
  ['V, M, F', { diff: 5 }],
  ['M, S, F', { diff: 5 }],
  ['F, S', { diff: 10 }],
  ['F, M', { diff: 10 }],
  ['F, V', { diff: 10 }],
  ['S, M', { diff: 15 }],
  ['V, S', { diff: 15 }],
  ['V, M', { diff: 15 }],
  ['Somatic', { diff: 20 }],
  ['Verbal', { diff: 20 }],
  ['Material', { diff: 20 }],
  ['Focus', { diff: 15 }],
  ['None', { diff: 25 }],
  ['None Sorcerer', { diff: 0 }]
]);

HydraData.delivery = new Map([
  ['Personal', { diff: 0, range: false, area: false }],
  ['Melee Touch', { diff: 0, range: false, area: false }],
  ['Ranged Touch', { diff: -5, range: true, area: false }],
  ['Area', { diff: 0, range: true, area: true }]
]);

HydraData.range = new Map([
  [
    'Melee & Personal',
    {
      diff: 0,
      label: function() {
        return 0;
      }
    }
  ],
  [
    'Close 5.0 m + 2.0 m per 2 skill',
    {
      diff: 3,
      label: function(skill) {
        let range = 5 + Math.floor(skill / 2) * 2;
        return range + ' meters.';
      }
    }
  ],
  [
    'Local 25.0 m + 5.0 m per skill',
    {
      diff: 6,
      label: function(skill) {
        let range = 25 + skill * 5;
        return range + ' meters.';
      }
    }
  ],
  [
    'Remote 125.0 m + 15.0 m per skill',
    {
      diff: 12,
      label: function(skill) {
        let range = 5 + skill * 2;
        return range + ' meters.';
      }
    }
  ],
  [
    'Unlimited',
    {
      diff: 40,
      label: function(skill) {
        return 'Unlimited.';
      }
    }
  ]
]);

HydraData.area = new Map([
  ['None', 0],
  ['Cone 1.5 m, 30 grader', { diff: 3 }],
  ['Cone 2.5 m, 30 grader', { diff: 6 }],
  ['Cone 5.0 m, 30 grader', { diff: 8 }],
  ['Cone 10.0 m, 30 grader', { diff: 12 }],
  ['Cone 20.0 m, 30 grader', { diff: 18 }],
  ['Line 1.5 m', { diff: 2 }],
  ['Line 2.5 m, diameter 1.5 m', { diff: 4 }],
  ['Line 10.0 m, diameter 1.5 m', { diff: 8 }],
  ['Line 20.0 m, diameter 1.5 m', { diff: 10 }],
  ['Line 40.0 m, diameter 1.5 m', { diff: 20 }],
  [
    '0.5 m3. * skill',
    {
      diff: 3,
      label: function(skill) {
        let area = skill * 0.5;
        return area + ' m3.';
      }
    }
  ],
  [
    '3.0 m3. * skill',
    {
      diff: 6,
      label: function(skill) {
        let area = skill * 3;
        return area + ' m3.';
      }
    }
  ],
  [
    '10 m3 * skill',
    {
      diff: 12,
      label: function(skill) {
        let area = skill * 10;
        return area + ' m3.';
      }
    }
  ],
  ['Pillar 2.5 m Diameter, 13.0 m High', { diff: 4 }],
  ['Pillar 5.0 m Diameter, 13.0 m High', { diff: 8 }],
  ['Pillar 10.0 m Diameter, 13.0 m High', { diff: 12 }],
  ['Pillar 15.0 m Diameter, 13.0 m High', { diff: 20 }],
  ['Sphere 1,5 m Radius', { diff: 4 }],
  ['Sphere 2,5 m Radius', { diff: 8 }],
  ['Sphere 5.0 m Radius', { diff: 12 }],
  ['Sphere 10.0 m Radius', { diff: 16 }],
  ['Sphere 20.0 m Radius', { diff: 24 }],
  ['Wall 1.5 m high, 1.5 m Long, 0.5 m Wide', { diff: 4 }],
  ['Wall 3.0 m high, 3.0 m Long, 0.5 m Wide', { diff: 8 }],
  [
    'Wall 0.5 m high, 0.5 m long, 0.5 m wide * skill',
    {
      diff: 16,
      label: function(skill) {
        let area = skill * 0.5;
        return 'Wall 0.5 m high, 0.5 m long, ' + area + ' m wide.';
      }
    }
  ],
  [
    'Wall 1.5 m high, 1.5 m Long,1.5 m Wide * skill',
    {
      diff: 24,
      label: function(skill) {
        let area = skill * 1.5;
        return 'Wall 0.5 m high, 0.5 m long, ' + area + ' m wide.';
      }
    }
  ],
  [
    'Wall Hemisphere 0.5 m square * skill, radius up to 0.5 m * skill, 0.5 m * skill high',
    {
      diff: 12,
      label: function(skill) {
        let square = skill * 0.5;
        let radius = skill * 0.5;
        let height = skill * 0.5;
        return (
          'Wall Hemisphere ' +
          square +
          ' m square, radius up to ' +
          radius +
          ' m, ' +
          height +
          ' high'
        );
      }
    }
  ],
  [
    'Wall ring 0.5 m long * skill, radius of up to 0.5 m * skill, 0.5 m * skill high',
    {
      diff: 12,
      label: function(skill) {
        let long = skill * 0.5;
        let radius = skill * 0.5;
        let height = skill * 0.5;
        return (
          'Wall ring ' +
          long +
          ' m long, radius up to ' +
          radius +
          ' m, ' +
          height +
          ' high'
        );
      }
    }
  ]
]);

HydraData.addon = new Map([
  ['None', { diff: 0 }],
  ['Charged 1', { diff: 1 }],
  ['Charged 1pr 6 skill', { diff: 5 }],
  ['Charged 1pr 3 skill', { diff: 10 }],
  ['Charged 1pr 2 skill', { diff: 20 }],
  ['Charged 1pr 1 skill', { diff: 30 }],
  ['Chain 1pr 3 * skill max 3 m apart', { diff: 5 }],
  ['Chain 1pr 3 * skill max 6 m apart', { diff: 10 }],
  ['Chain 1pr 3 * skill max 12 m apart', { diff: 15 }],
  ['Chain 1pr 3 * skill max 15 m apart', { diff: 20 }],
  ['Chain 1pr 3 * skill max 18 m apart', { diff: 25 }],
  ['Ranged Touch 1 attack ', { diff: 1 }],
  ['Ranged Touch 1 atk * 6skil max 3 m apart', { diff: 5 }],
  ['Ranged Touch 1 atk * 3skil max 3 m apart', { diff: 10 }],
  ['Ranged Touch 1 atk * 2skil max 3 m apart', { diff: 20 }],
  ['Ranged Touch 1 atk * 1skil max 3 m apart', { diff: 30 }]
]);

HydraData.duration = new Map([
  ['Instant', { diff: 1 }],
  ['Concentration Skill * 5 rounds', { diff: 10 }],
  ['Permanent', { diff: 100 }],
  [
    '1 round per 2 skill (D)',
    {
      diff: 5,
      label: function(skill) {
        let duration = Math.floor(skill / 2);
        return duration + ' rounds.';
      }
    }
  ],
  [
    '1 min per 2 skill (D)',
    {
      diff: 10,
      label: function(skill) {
        let duration = Math.floor(skill / 2);
        return duration + ' minutes.';
      }
    }
  ],
  [
    '10 min per 2 skill (D)',
    {
      diff: 20,
      label: function(skill) {
        let duration = Math.floor(skill / 2) * 10;
        return duration + ' minutes.';
      }
    }
  ],
  [
    '1 hour per 2 skill (D)',
    {
      diff: 30,
      label: function(skill) {
        let duration = Math.floor(skill / 2);
        return duration + ' hour(s).';
      }
    }
  ],
  [
    '1 day per 2 skill (D)',
    {
      diff: 60,
      label: function(skill) {
        let duration = Math.floor(skill / 2);
        return duration + ' day(s).';
      }
    }
  ]
]);

HydraData.save = new Map([['none'], ['Reflex'], ['Will'], ['Fortitude']]);

HydraData.damage = new Map([
  ['none', { diff: 0 }],
  ['1d6', { diff: 3 }],
  ['2d6', { diff: 6 }],
  ['3d6', { diff: 12 }],
  ['4d6', { diff: 18 }],
  ['5d6', { diff: 24, area: false }]
]);

HydraData.options = function(param, filter = false) {
  let items = [];

  HydraData[param].forEach((value, key, map) => {
    items.push(Object.assign({ name: key }, value));
  });

  return items;
};

HydraData.formatted = function(param) {
  let itemsText = '[\n';

  HydraData[param].forEach((value, key, map) => {
    if (value === Object(value)) {
      if (value.hasOwnProperty('children')) {
        let parent = key;

        value.children.forEach((childValue, childKey, childMap) => {
          itemsText +=
            '  ["' + childKey + '", {\n    school: "' + parent + '",';

          if (param === 'effect' && !childValue.hasOwnProperty('damage')) {
            childValue.damage = false;
          }

          Object.getOwnPropertyNames(childValue).forEach(function(
            val,
            idx,
            array
          ) {
            itemsText += '\n    ' + val + ': ' + childValue[val] + ',';
          });

          itemsText += '\n  }],\n';
        });
      } else {
        itemsText += '  ["' + key + '"';
        itemsText += ', {';

        Object.getOwnPropertyNames(value).forEach(function(val, idx, array) {
          itemsText += val + ': ' + value[val] + ', ';
        });

        itemsText += '}]\n';
      }
    } else {
      itemsText += '  ["' + key + '"]\n';
    }
  });

  itemsText += ']';
  return itemsText;
};

// Get values from config data to update other states as needed.
HydraData.get = function(name, key) {
  // Check if hierarchy of keys exists to get the second level.
  const keyArray = key.split('/');
  const selectedKeyValue = keyArray.length > 1
    ? HydraData[name].get(keyArray[0]).children.get(keyArray[1])
    : HydraData[name].get(keyArray[0]);
  let newDiff = 0;
  let newLabel = null;
  let damage = null;
  let area = null;
  let range = null;

  // Check if object exists, otherwise fall back to defaults.
  if (selectedKeyValue === Object(selectedKeyValue)) {
    // If diff exists use it, otherwise leave as default (0)
    if (selectedKeyValue.hasOwnProperty('diff')) {
      newDiff = selectedKeyValue.diff;
    }

    // If special calculated value exists use it, other reuse key as label
    if (selectedKeyValue.hasOwnProperty('label')) {
      newLabel = selectedKeyValue.label;
    }

    if (selectedKeyValue.hasOwnProperty('area')) {
      area = selectedKeyValue.area;
    }

    if (selectedKeyValue.hasOwnProperty('damage')) {
      damage = selectedKeyValue.damage;
    }

    if (selectedKeyValue.hasOwnProperty('range')) {
      range = selectedKeyValue.range;
    }
  }

  return {
    diff: newDiff,
    label: newLabel,
    value: key,
    damage: damage,
    area: area,
    range: range
  };
};

export default HydraData;
