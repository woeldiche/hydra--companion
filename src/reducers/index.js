import { combineReducers } from 'redux';
import { UPDATE_PARAMETER, UPDATE_DIFF, SAVE_FORMULA } from '../actions';
import HydraData from '../data/HydraData';

const initialState = {
  spellLab: {}
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

    if (effect.hasOwnProperty('damage') && effect.damage) {
      if (damage.hasOwnProperty('value') && damage.value.length > 1) {
      } else {
        return false;
      }
    }

    return true;
  }

  // if effect allows damage, check for damage

  return false;
};

function handleUpdateParameter(state, { parameter, value }) {
  switch (parameter) {
    // School is a special case. Sets filter on effect.
    case 'school':
      // Update state.effect with chosen values to use as filter.
      let effectStateUpdates = {
        filterBy: 'school',
        filterStr: value
      };

      if (
        // If filter is already set and unchanged don't invalidate effect state.
        state.effect.hasOwnProperty('filterStr') &&
        state.effect.filterStr === effectStateUpdates.filterStr
      ) {
        return Object.assign({}, state, {
          [parameter]: {
            value: value
          },
          allowSave: allowSave(state)
        });
      } else {
        // If filter is changing or being added for the first time, invalidate
        // state.effect.value and .diff.
        return Object.assign({}, state, {
          [parameter]: {
            value: value
          },
          effect: {
            filterBy: effectStateUpdates.filterBy,
            filterStr: effectStateUpdates.filterStr,
            value: '',
            diff: 0
          },
          allowSave: allowSave(state)
        });
      }
    // Name doesn't have a map in HydraData, so shouldn't lookup diff.
    case 'name':
      return Object.assign({}, state, {
        [parameter]: {
          value: value
        },
        allowSave: allowSave(state)
      });

    default:
      //diff = getDiff(action.parameter, action.value);

      return Object.assign({}, state, {
        [parameter]: Object.assign(
          {},
          state[parameter],
          HydraData.get(parameter, value)
        ),
        allowSave: allowSave(state)
      });
  }
}

function spellLab(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PARAMETER:
      return handleUpdateParameter(state, action);

    case UPDATE_DIFF:
      // If empty string set to zero.
      const value = !!action.value ? action.value : 0;
      return Object.assign({}, state, {
        [action.parameter]: Object.assign({}, state[action.parameter], {
          diff: parseInt(value, 10)
        })
      });

    case SAVE_FORMULA:
      return state;

    default:
      break;
  }

  return state;
}

const hydraApp = combineReducers({
  spellLab
});

export default hydraApp;
