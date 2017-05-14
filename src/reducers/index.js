import { combineReducers } from 'redux'
import { UPDATE_PARAMETER, UPDATE_DIFF } from '../actions';
import HydraData from '../data/HydraData';

const initialState = {
  spellLab: {
  }
}

function getDiff (type, key) {
  const values = HydraData.get(type, key);
  return values.diff;
}

function handleUpdateParameter (state, action) {
  let diff;

  switch (action.parameter) {
    case 'school':

      let effectStateUpdates = {
        filterBy: 'school',
        filterStr: action.value
      };

      if (state.effect.hasOwnProperty('filterStr') && state.effect.filterStr === effectStateUpdates.filterStr) {
        return Object.assign({}, state, {
          [action.parameter]: {
            value: action.value
          }
        });
      } else {
        return Object.assign({}, state, {
          [action.parameter]: {
            value: action.value
          },
          effect: {
            filterBy: effectStateUpdates.filterBy,
            filterStr: effectStateUpdates.filterStr,
            value: '',
            diff: 0
          }
        });
      }


    case 'name':
      return Object.assign({}, state, {
        [action.parameter]: {
          value: action.value
        }
      });

    default:
      diff = getDiff(action.parameter, action.value);
      return Object.assign({}, state, {
        [action.parameter]: Object.assign({}, state[action.parameter], { value: action.value, diff: diff })
      });
  }

}

function spellLab (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PARAMETER:
      return handleUpdateParameter(state, action);

    case UPDATE_DIFF:
      // If empty string set to zero.
      const value = !!action.value ? action.value : 0;
      return Object.assign({}, state, {
        [action.parameter]: Object.assign({}, state[action.parameter], { diff: parseInt(value, 10) })
      });

    default:
    break;
  }

  return state;
}

const hydraApp = combineReducers({
  spellLab
});

export default hydraApp;
