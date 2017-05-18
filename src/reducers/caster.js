import {
  UPDATE_CASTER_NAME,
  UPDATE_CASTER_VALUE,
  UPDATE_CASTER_SPELLLIST
} from '../actions';

const initialState = {
  _id: undefined,
  name: '',
  casterType: 'Psion',
  primaryStat: 0,
  primarySkill: 0,
  knownEffects: []
};

const caster = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CASTER_NAME:
      return Object.assign({}, state, { name: action.value });

    case UPDATE_CASTER_VALUE:
      return Object.assign({}, state, { [action.param]: action.value });

    case UPDATE_CASTER_SPELLLIST:
      return Object.assign({}, state, { knownEffects: action.items });

    default:
      break;
  }

  return state;
};

export default caster;
