const Data = {};

Data.school = new Map([
  ["Arcana & Divine Esoterica"],
  ["Abjuration"],
  ["Conjuration"],
  ["Conjuration (Healing)"],
  ["Divination"],
  ["Enchantment"],
  ["Evocation"],
  ["Illusion"],
  ["Necromancy"],
  ["Transmutation"],
  ["Transmutation (Body Enhancement)"],
]);

Data.effect = new Map([
  ["Arcana & Divine Esoterica",
    {children: new Map([
      ["Arcane Mark", {diff: 1}],
      ["Prestidigitation", {diff: 1}],
      ["Read Magic", {diff: 1}],
    ])}
  ],
  ["Abjuration",
    {children: new Map([
      ["Alarm", {diff: 1}],
      ["Antimagic Field", {diff: 15}],
      ["Armor force", {diff: 5}],
      ["Dimensional Anchor", {diff: 5}],
      ["Dispel Magic", {diff: 10}],
      ["Endure Elements", {diff: 1}],
      ["Hold Portal", {diff: 1}],
      ["Obscure Object", {diff: 5}],
      ["Shield force", {diff: 5}],
      ["Element Resistance", {diff: 5}],
      ["Repulsion", {diff: 5}],
      ["Resistance", {diff: 5}],
    ])}
  ],
  ["Conjuration",
    {children: new Map([
      ["Conjure Cold", {diff: 0}],
      ["Conjure Fire", {diff: 0}],
      ["Conjure Acid", {diff: 0}],
      ["Conjure Air", {diff: 0}],
      ["Conjure Holy/Unholy", {diff: 0}],
      ["Obscuring Mist", {diff: 1}],
      ["Unseen Servant", {diff: 1}],
      ["Glitterdust", {diff: 5}],
      ["Web", {diff: 5}],
      ["Phantom Steed", {diff: 5}],
      ["Sleet Storm", {diff: 10}],
      ["Wall of Stone", {diff: 10}],
      ["Wall of Iron", {diff: 10}],
      ["Phase Door", {diff: 10}],
      ["Trap the Soul", {diff: 10}],
      ["Summon Monster (arcane)", {diff: 5}],
      ["Summon natures ally (faith)", {diff: 5}],
    ])}
  ],
  ["Conjuration (Healing)",
    {children: new Map([
      ["Cure Wounds, 1D6", {diff: 3}],
      ["Cure Wounds, 2D6", {diff: 6}],
      ["Cure Wounds, 3D6", {diff: 12}],
      ["Cure Wounds, 4D6", {diff: 18}],
      ["Cure Wounds, 5D6 (touch only)", {diff: 24, area: false}],
      ["Cure Blinded", {diff: 5}],
      ["Breath of life", {diff: 15}],
      ["Confused", {diff: 5}],
      ["Remove Curse", {diff: 10}],
      ["Cure Dazed", {diff: 5}],
      ["Cure Dazzled", {diff: 1}],
      ["Cure Deafened", {diff: 5}],
      ["Cure Diseased", {diff: 5}],
      ["Restoration Lesser (Ability damage)", {diff: 10}],
      ["Cure Exhausted", {diff: 5}],
      ["Cure Fatigued", {diff: 1}],
      ["Cure Feebleminded", {diff: 5}],
      ["Cure Insanity", {diff: 5}],
      ["Cure Nauseated", {diff: 5}],
      ["Restoration Greater (Negativ levels)", {diff: 5}],
      ["Cure Poisoned", {diff: 5}],
      ["Cure Sickened", {diff: 5}],
      ["Cure Stunned", {diff: 5}],
    ])}
  ],
  ["Divination",
    {children: new Map([
      ["True Strike", {diff: 5}],
      ["See Invisibility", {diff: 5}],
      ["Clairaudience or Clairvoyance", {diff: 5}],
      ["Comprehend Language", {diff: 1}],
      ["Detect Alignment", {diff: 1}],
      ["Detect Poison", {diff: 5}],
      ["Detect Disease", {diff: 5}],
      ["Detect Magic", {diff: 5}],
      ["Detect Undead", {diff: 5}],
      ["Detect Secret doors", {diff: 5}],
      ["Detect Thoughts", {diff: 5}],
      ["Detect Scrying", {diff: 5}],
      ["Detect Object", {diff: 5}],
      ["Detect Creature", {diff: 5}],
      ["Tongues", {diff: 5}],
      ["Identify", {diff: 10}],
      ["Arcane Eye", {diff: 10}],
      ["Telepathic Bond", {diff: 5}],
      ["Legend Lore", {diff: 10}],
      ["True Seeing", {diff: 10}],
    ])}
  ],
  ["Enchantment Charm",
    {children: new Map([
      ["Charm Person", {diff: 5}],
      ["Hypnotism", {diff: 5}],
      ["Sleep", {diff: 5}],
      ["Hideous Laughter", {diff: 10}],
      ["Touch of Idiocy", {diff: 15}],
      ["Heroism", {diff: 5}],
      ["Rage", {diff: 5}],
      ["Suggestion", {diff: 10}],
      ["Confusion", {diff: 10}],
      ["Crushing Despair", {diff: 5}],
      ["Feeblemind", {diff: 15}],
      ["Mind Fog", {diff: 15}],
      ["Symbol of Sleep", {diff: 10}],
      ["Symbol of Persuasion", {diff: 10}],
      ["Symbol of Stunning", {diff: 10}],
      ["Antipathy", {diff: 5}],
      ["Binding", {diff: 5}],
      ["Power Word Stun", {diff: 10}],
      ["Symbol of Insanity", {diff: 15}],
      ["Sympathy", {diff: 5}],
      ["Enchanment Touch: Confuse", {diff: 10}],
      ["Enchanment Touch: Daze", {diff: 5}],
      ["Enchanment Touch: Feeblemind", {diff: 5}],
      ["Enchanment Touch: Insanity", {diff: 5}],
      ["Enchanment Touch: Paralyse", {diff: 10}],
    ])}
  ],
  ["Evocation",
    {children: new Map([
      ["Light", {diff: 1}],
      ["Darkness", {diff: 1}],
      ["Daylight", {diff: 10}],
      ["Elemental Acid", {diff: 0, damage: true}],
      ["Elemental Air", {diff: 0, damage: true}],
      ["Elemental Cold", {diff: 0, damage: true}],
      ["Elemental Electricity", {diff: 0, damage: true}],
      ["Elemental Fire", {diff: 0, damage: true}],
      ["Elemental Force", {diff: 0, damage: true}],
      ["Elemental Sonic", {diff: 0, damage: true}],
      ["Flare", {diff: 1}],
      ["Floating Disk", {diff: 1}],
      ["Gust of Wind", {diff: 1}],
      ["Shatter", {diff: 5}],
      ["Sending", {diff: 5}],
      ["Stun", {diff: 5}],
      ["Contingency", {diff: 10}],
      ["Mage's Sword", {diff: 15}],
      ["Wind Wall", {diff: 5}],
      ["Tiny Hut", {diff: 5}],
      ["Interposing Hand", {diff: 5}],
    ])}
  ],
  ["Illusion",
    {children: new Map([
      ["Light", {diff: 1}],
      ["Ghost Sound", {diff: 1}],
      ["Disguise Self", {diff: 1}],
      ["Silent Image", {diff: 5}],
      ["Ventriloquism", {diff: 1}],
      ["Blur", {diff: 5}],
      ["Hypnotic Pattern", {diff: 5}],
      ["Invisibility", {diff: 1}],
      ["Invisibility, Greater", {diff: 5}],
      ["Misdirection", {diff: 5}],
      ["Phantom Trap", {diff: 5}],
      ["Phantasmal Killer", {diff: 10}],
      ["Rainbow Pattern", {diff: 5}],
      ["Dream", {diff: 5}],
      ["False Vision", {diff: 5}],
      ["Silence", {diff: 5}],
      ["Simulacrum", {diff: 75}],
    ])}
  ],
  ["Necromancy",
    {children: new Map([
      ["Animate Dead", {diff: 5}],
      ["Command Undead", {diff: 5}],
      ["Create Undead: Ghoul", {diff: 10}],
      ["Create Undead: Ghast", {diff: 15}],
      ["Create Undead: Mummy", {diff: 20}],
      ["Create Undead: Mohrg", {diff: 25}],
      ["Create Greater Undead: Shadow", {diff: 30}],
      ["Create Greater Undead: Wraith", {diff: 35}],
      ["Create Greater Undead: Spectre", {diff: 40}],
      ["Create Greater Undead: Devourer", {diff: 45}],
      ["False Life", {diff: 5}],
      ["Gentle Repose", {diff: 5}],
      ["Halt Undead", {diff: 5}],
      ["Spectral Hand", {diff: 5}],
      ["Blight", {diff: 5}],
      ["Magic Jar", {diff: 15}],
      ["Symbol of Pain", {diff: 5}],
      ["Symbol of Fear", {diff: 5}],
      ["Control Undead", {diff: 5}],
      ["Symbol of Weakness", {diff: 5}],
      ["Clone", {diff: 100}],
      ["Symbol of Death", {diff: 5}],
      ["Cause Wounds", {diff: 0, damage: true}],
      ["Necro Touch: Ability damage", {diff: 10}],
      ["Necro Touch: Blind", {diff: 5}],
      ["Necro Touch: Deafen", {diff: 5}],
      ["Necro Touch: Disease", {diff: 5}],
      ["Necro Touch: Exhauste", {diff: 10}],
      ["Necro Touch: Fatigue", {diff: 5}],
      ["Necro Touch: Negativ levels", {diff: 10}],
      ["Necro Touch: Sicken", {diff: 5}],
      ["Curse: Baleful Polymorph", {diff: 10}],
      ["Curse: Bestow Curse Trap", {diff: 10}],
      ["Curse: Curse of the Ages", {diff: 10}],
      ["Curse: Mummy Rot", {diff: 10}],
      ["Curse: Unluck", {diff: 10}],
      ["Curse: Werewolf Lycanthropy", {diff: 10}],
    ])}
  ],
  ["Transmutation",
    {children: new Map([
      ["Dimension Door", {diff: 10}],
      ["Fly", {diff: 5}],
      ["Jump", {diff: 1}],
      ["Levitate", {diff: 1}],
      ["Light", {diff: 1}],
      ["Movement", {diff: 1}],
      ["Spider climb", {diff: 5}],
      ["Telekinese", {diff: 5}],
      ["Teleport", {diff: 15}],
      ["Temporal Stasis", {diff: 5}],
      ["Transmutation touch: Entangle", {diff: 5}],
      ["Transmutation touch: Petrify", {diff: 10}],
      /*["Web", {diff: 10}],*/
    ])
  }],
  ["Transmutation (Body Enhancement)",
    {children: new Map([
      ["Stat enhancement", {diff: 5}],
      ["All-Around", {diff: 5}],
      ["Amorphous", {diff: 10}],
      ["Amphibious", {diff: 10}],
      ["Bleed", {diff: 10}],
      ["Blindsense", {diff: 10}],
      ["Blindsight", {diff: 10}],
      ["Blood Drain", {diff: 10}],
      ["Blood Rage", {diff: 10}],
      ["Breath Weapon", {diff: 10}],
      ["Compression", {diff: 10}],
      ["Construct Traits", {diff: 10}],
      ["Fast healing", {diff: 1}],
      ["Regeneration", {diff: 10}],
      ["Ferocity", {diff: 10}],
      ["Fortification", {diff: 10}],
      ["Freeze", {diff: 10}],
      ["Frightful Presence", {diff: 10}],
      ["Gaze", {diff: 10}],
      ["Grab", {diff: 10}],
      ["Greensight", {diff: 10}],
      ["Hold Breath", {diff: 10}],
      ["Immunity", {diff: 10}],
      ["Incorporeal", {diff: 10}],
      ["Jet", {diff: 10}],
      ["Keen Scent", {diff: 10}],
      ["Lifesense", {diff: 10}],
      ["Low-Light Vision", {diff: 5}],
      ["Mistsight", {diff: 10}],
      ["Natural Attacks", {diff: 10}],
      ["No Breath", {diff: 5}],
      ["Plant Traits", {diff: 10}],
      ["Plantbringer", {diff: 10}],
      ["Poison", {diff: 10}],
      ["Poisonous Blood", {diff: 10}],
      ["Pounce", {diff: 5}],
      ["Powerful Charge", {diff: 10}],
      ["Push", {diff: 10}],
      ["Rake", {diff: 10}],
      ["Rend", {diff: 10}],
      ["Rock Catching", {diff: 10}],
      ["Scent", {diff: 5}],
      ["See in Darkness", {diff: 10}],
      ["Split", {diff: 10}],
      ["Strangle", {diff: 10}],
      ["Trample", {diff: 10}],
      ["Transform Self: Enlarge Person", {diff: 5}],
      ["Transform Self: Elemental Body", {diff: 10}],
      ["Transform Self: Form of the Dragon", {diff: 15}],
      ["Transform Self: Giant Form", {diff: 20}],
      ["Transform Self: Beast Shape", {diff: 5}],
      ["Transform Self: Demon Lord Traits", {diff: 20}],
      ["Transform Self: Empyreal Lord Traits", {diff: 20}],
      ["Transform Self: Formian Traits", {diff: 20}],
      ["Tremorsense", {diff: 10}],
      ["Unnatural Aura", {diff: 5}],
      ["Water Breathing", {diff: 5}],
    ])}
  ],

    /*
    {Poison	Name 	Necro	5
    Arsenic
    Belladonna
    Black Adder Venom
    Black Lotus Extract
    Bloodroot
    Blue Whinnis
    Burnt Othur Fumes
    Dark Reaver Powder
    Deathblade
    Dragon Bile
    Drow Poison
    Giant Wasp Poison
    Greenblood Oil
    Green Prismatic Poison
    Hemlock
    Id Moss
    Insanity Mist
    King's Sleep
    Large Scorpion Venom
    Lich Dust
    Malyass Root Paste
    Medium Spider Venom
    Nightmare Vapor
    Nitharit
    Oil of Taggit
    Purple Worm Poison
    Sassone Leaf Residue
    Shadow Essence
    Small Centipede Poison
    Striped Toadstool
    Tears of Death
    Terinav Root
    Ungol Dust
    Wolfsbane
    Wyvern Poison}
    */
]);

Data.time = new Map([
  ["Immediate action", {diff: 25}],
  ["Swift Action", {diff: 15}],
  ["Standard Action", {diff: 2}],
  ["Full round Action", {diff: 0}],
  ["Ritual 10 min", {diff: -5}],
  ["Ritual 1 Hour", {diff: -10}],
  ["Ritual 1 day", {diff: -15}],
  ["Ritual Site 1 week", {diff: -25}],
  ["Ritual Site 1 Month", {diff: -40}],
  ["Ritual Site 3 Month", {diff: -60}],
]);

Data.components = new Map([
  ["V, S, M, F", {diff: 0}],
  ["V, S, M", {diff: 10}],
  ["V, M, F", {diff: 5}],
  ["M, S, F", {diff: 5}],
  ["F, S", {diff: 10}],
  ["F, M", {diff: 10}],
  ["F, V", {diff: 10}],
  ["S, M", {diff: 15}],
  ["V, S", {diff: 15}],
  ["V, M", {diff: 15}],
  ["Somatic", {diff: 20}],
  ["Verbal", {diff: 20}],
  ["Material", {diff: 20}],
  ["Focus", {diff: 15}],
  ["None", {diff: 25}],
  ["None Sorcerer", {diff: 0}],
]);

Data.delivery = new Map([
  ["Personal", {diff: 0}],
  ["Melee Touch", {diff: 0}],
  ["Ranged Touch", {diff: -5}],
  ["Area", {diff: 0}],
]);

Data.range = new Map([
  ["Melee & Personal", {
    diff: 0,
    label: function() {
      return 0;
    }
  }],
  ["Close 5.0 m + 2.0 m per 2 skill", {
    diff: 3,
    label: function(skill) {
      let range = 5 + (Math.floor(skill/2) * 2);
      return range + ' meters.';
    }
  }],
  ["Local 25.0 m + 5.0 m per skill", {
    diff: 6,
    label: function(skill) {
      let range = 25 + (skill * 5);
      return range + ' meters.';
    }
  }],
  ["Remote 125.0 m + 15.0 m per skill", {
    diff: 12,
    label: function(skill) {
      let range = 5 + (skill * 2);
      return range + ' meters.';
    }
  }],
  ["Unlimited", {
    diff: 40,
    label: function(skill) {
      return 'Unlimited.';
    }
  }],
]);

Data.area = new Map([
  ["None", 0],
  ["Cone 1.5 m, 30 grader", {diff: 3}],
  ["Cone 2.5 m, 30 grader", {diff: 6}],
  ["Cone 5.0 m, 30 grader", {diff: 8}],
  ["Cone 10.0 m, 30 grader", {diff: 12}],
  ["Cone 20.0 m, 30 grader", {diff: 18}],
  ["Line 1.5 m", {diff: 2}],
  ["Line 2.5 m, diameter 1.5 m", {diff: 4}],
  ["Line 10.0 m, diameter 1.5 m", {diff: 8}],
  ["Line 20.0 m, diameter 1.5 m", {diff: 10}],
  ["Line 40.0 m, diameter 1.5 m", {diff: 20}],
  ["0.5 m3. * skill", {diff: 3, label: function(skill) {
      let area = (skill * 0.5);
      return area + ' m3.';
    }
  }],
  ["3.0 m3. * skill", {diff: 6, label: function(skill) {
      let area = (skill * 3);
      return area + ' m3.';
    }
  }],
  ["10 m3 * skill", {diff: 12, label: function(skill) {
      let area = (skill * 10);
      return area + ' m3.';
    }
  }],
  ["Pillar 2.5 m Diameter, 13.0 m High", {diff: 4}],
  ["Pillar 5.0 m Diameter, 13.0 m High", {diff: 8}],
  ["Pillar 10.0 m Diameter, 13.0 m High", {diff: 12}],
  ["Pillar 15.0 m Diameter, 13.0 m High", {diff: 20}],
  ["Sphere 1,5 m Radius", {diff: 4}],
  ["Sphere 2,5 m Radius", {diff: 8}],
  ["Sphere 5.0 m Radius", {diff: 12}],
  ["Sphere 10.0 m Radius", {diff: 16}],
  ["Sphere 20.0 m Radius", {diff: 24}],
  ["Wall 1.5 m high, 1.5 m Long, 0.5 m Wide", {diff: 4}],
  ["Wall 3.0 m high, 3.0 m Long, 0.5 m Wide", {diff: 8}],
  ["Wall 0.5 m high, 0.5 m long, 0.5 m wide * skill", {diff: 16, label: function(skill) {
      let area = (skill * 0.5);
      return 'Wall 0.5 m high, 0.5 m long, ' + area + ' m wide.';
    }
  }],
  ["Wall 1.5 m high, 1.5 m Long,1.5 m Wide * skill", {diff: 24, label: function(skill) {
      let area = (skill * 1.5);
      return 'Wall 0.5 m high, 0.5 m long, ' + area + ' m wide.';
    }
  }],
  ["Wall Hemisphere 0.5 m square * skill, radius up to 0.5 m * skill, 0.5 m * skill high", {diff: 12, label: function(skill) {
      let square = (skill * 0.5);
      let radius = (skill * 0.5);
      let height = (skill * 0.5);
      return "Wall Hemisphere " + square + " m square, radius up to " + radius + " m, " + height + " high";
    }
  }],
  ["Wall ring 0.5 m long * skill, radius of up to 0.5 m * skill, 0.5 m * skill high", {diff: 12, label: function(skill) {
      let long = (skill * 0.5);
      let radius = (skill * 0.5);
      let height = (skill * 0.5);
      return "Wall ring " + long + " m long, radius up to " + radius + " m, " + height + " high";
    }
  }],
]);

Data.addon = new Map([
  ["None", {diff: 0}],
  ["Charged 1", {diff: 1}],
  ["Charged 1pr 6 skill", {diff: 5}],
  ["Charged 1pr 3 skill", {diff: 10}],
  ["Charged 1pr 2 skill", {diff: 20}],
  ["Charged 1pr 1 skill", {diff: 30}],
  ["Chain 1pr 3 * skill max 3 m apart", {diff: 5}],
  ["Chain 1pr 3 * skill max 6 m apart", {diff: 10}],
  ["Chain 1pr 3 * skill max 12 m apart", {diff: 15}],
  ["Chain 1pr 3 * skill max 15 m apart", {diff: 20}],
  ["Chain 1pr 3 * skill max 18 m apart", {diff: 25}],
  ["Ranged Touch 1 attack ", {diff: 1}],
  ["Ranged Touch 1 atk * 6skil max 3 m apart", {diff: 5}],
  ["Ranged Touch 1 atk * 3skil max 3 m apart", {diff: 10}],
  ["Ranged Touch 1 atk * 2skil max 3 m apart", {diff: 20}],
  ["Ranged Touch 1 atk * 1skil max 3 m apart", {diff: 30}],
]);

Data.duration = new Map([
  ["Instant", {diff: 1}],
  ["Concentration Skill * 5 rounds", {diff: 10}],
  ["Permanent", {diff: 100}],
  ["1 round per 2 skill (D)", {diff: 5, label: function(skill) {
      let duration = (Math.floor(skill/2));
      return duration + ' rounds.';
    }
  }],
  ["1 min per 2 skill (D)", {diff: 10, label: function(skill) {
      let duration = (Math.floor(skill/2));
      return duration + ' minutes.';
    }
  }],
  ["10 min per 2 skill (D)", {diff: 20, label: function(skill) {
      let duration = (Math.floor(skill/2) * 10);
      return duration + ' minutes.';
    }
  }],
  ["1 hour per 2 skill (D)", {diff: 30, label: function(skill) {
      let duration = (Math.floor(skill/2));
      return duration + ' hour(s).';
    }
  }],
  ["1 day per 2 skill (D)", {diff: 60, label: function(skill) {
      let duration = (Math.floor(skill/2));
      return duration + ' day(s).';
    }
  }],
]);

Data.save = new Map([
  ["none"],
  ["Reflex"],
  ["Will"],
  ["Fortitude"],
]);

Data.damage = new Map([
  ["none", {diff: 0}],
  ["1d6", {diff: 3}],
  ["2d6", {diff: 6}],
  ["3d6", {diff: 12}],
  ["4d6", {diff: 18}],
  ["5d6", {diff: 24}],
]);

// Get values from config data to update other states as needed.
Data.get = function (name, key) {
  // Check if hierarchy of keys exists to get the second level.
  const keyArray = key.split("/");
  const selectedKeyValue = keyArray.length > 1 ? Data[name].get(keyArray[0]).children.get(keyArray[1]) : Data[name].get(keyArray[0]);
  let newDiff = 0;
  let newLabel = key;
  let damage = true;
  let area = true;

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
  }

  return {
    diff: newDiff,
    label: newLabel,
    key: key,
    allowDamage: damage,
    allowArea: area
  }
}
export default Data;
