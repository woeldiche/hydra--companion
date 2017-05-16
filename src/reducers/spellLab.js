import {
  UPDATE_PARAMETER,
  UPDATE_DIFF,
  UPDATE_NAME,
  RESET_FORMULA
} from '../actions';

const initialState = {
  name: {
    value: ''
  },
  school: {
    value: ''
  },
  effect: {
    value: '',
    diff: 0
  },
  time: {
    value: '',
    diff: 0
  },
  components: {
    value: '',
    diff: 0
  },
  delivery: {
    value: '',
    diff: 0
  },
  range: {
    value: '',
    diff: 0
  },
  area: {
    value: '',
    diff: 0
  },
  addon: {
    value: '',
    diff: 0
  },
  duration: {
    value: '',
    diff: 0
  },
  save: {
    value: '',
    diff: 0
  },
  damage: {
    value: '',
    diff: 0
  },
  allowSave: true
};

const allowSave = ({
  area,
  components,
  damage,
  delivery,
  duration,
  effect,
  name,
  range,
  school,
  time
}) => {
  if (
    // Check for a name, longer than 3 chars
    name.hasOwnProperty('value') &&
    name.value.length > 5 &&
    // Check for a school, effect, delivery, time, duration
    school.hasOwnProperty('value') &&
    school.value.length > 1 &&
    effect.hasOwnProperty('value') &&
    effect.value.length > 1 &&
    delivery.hasOwnProperty('value') &&
    delivery.value.length > 1 &&
    time.hasOwnProperty('value') &&
    time.value.length > 1 &&
    duration.hasOwnProperty('value') &&
    duration.value.length > 1
  ) {
    // if delivery allows range, check for range
    if (delivery.hasOwnProperty('range') && delivery.range) {
      if (range.hasOwnProperty('value') && range.value.length > 1) {
      } else {
        return false;
      }
    }

    // if delivery allows area, check for area
    if (delivery.hasOwnProperty('area') && delivery.area) {
      if (
        area.hasOwnProperty('value') &&
        area.value.length > 1 &&
        area.value !== 'None'
      ) {
      } else {
        return false;
      }
    }

    // if effect allows damage, check for damage
    if (effect.hasOwnProperty('damage') && effect.damage) {
      if (damage.hasOwnProperty('value') && damage.value.length > 1) {
      } else {
        return false;
      }
    }

    return true;
  }

  return false;
};

const handleUpdateParameter = (state, { parameter, data }) => {
  switch (parameter) {
    // School is a special case. Sets filter on effect.
    case 'school':
      return Object.assign({}, state, {
        [parameter]: {
          value: data.value
        },
        effect: {
          filterBy: 'school',
          filterStr: data.value,
          value: '',
          diff: 0
        },
        allowSave: allowSave(state)
      });

    default:
      return Object.assign({}, state, {
        [parameter]: Object.assign({}, state[parameter], data),
        allowSave: allowSave(state)
      });
  }
};

const spellLab = (state = initialState, action) => {
  switch (action.type) {
    case RESET_FORMULA:
      return initialState;

    case UPDATE_NAME:
      return Object.assign({}, state, {
        name: {
          value: action.value
        },
        allowSave: allowSave(state)
      });

    case UPDATE_PARAMETER:
      return handleUpdateParameter(state, action);

    case UPDATE_DIFF:
      return Object.assign({}, state, {
        [action.parameter]: Object.assign({}, state[action.parameter], {
          diff: action.value
        })
      });

    default:
      break;
  }

  return state;
};

export default spellLab;
