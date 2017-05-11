const stateShape = {
  casterProfiles: {
    selectedProfile: 1,
    isFetching: false,
    didInvalidate: false,
    lastUpdated: 1439478405547,
    items: {
      ':name/date()': {
        _id: ':name/date()',
        name: 'Agrippa',
        casterType: 'Psion',
        primaryStat: 'WIS',
        primarySkill: 'Psionics',
        statMods: {
          DEX: 0,
          STR: 0,
          PRE: 0,
          STA: 0,
          INT: 0,
          WIS: 4
        },
        skills: {
          Concentration: 5,
          Psionics: 9
        },
        knownEffects: [],
        spellBook: ':id'
      }
    }
  },
  spellBooks: {
    ':profile/date()': {
      _id: ':profile/date()',
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1439478405547,
      items: [
        {
          _id: ':school/:effect/date()',
          name: ':name',
          school: 1,
          effect: 1,
          effectLevel: 1,
          time: 1,
          delivery: 1,
          range: false,
          area: false,
          addon: false,
          damage: '3D6',
          save: 'Fortitude',
        }
      ]
    }
  },
  spellLab: {
    name: {
      value: '',
    },
    school: {
      value: '',
      items: [ "Option 1", "Option 2", "Option 3" ],
    },
    effect: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    time: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    components: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    delivery: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    range: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    area: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    addon: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    duration: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    save: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    damage: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],
    },
  },
  hydraData: {

  },
  hydraConfig: {

  }
}

export default stateShape;
