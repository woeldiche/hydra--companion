import { combineReducers } from 'redux'
import { UPDATE_PARAMETER, UPDATE_DIFF } from '../actions';

const initialState = {
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
  }
}

function getDiff (type, key) {
  return 0;
}

function getItems (type) {
  return [
    type + ": Option 1",
    type + ": Option 2",
    type + ": Option 3",
    type + ": Option 4",
  ]
}

function handleUpdateParameter (state, action) {
  return Object.assign({}, state, {
    [action.parameter]: {
      value: action.value,
      diff: getDiff(action.parameter, action.value),
      items: getItems(action.parameter)
    }
  });
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
