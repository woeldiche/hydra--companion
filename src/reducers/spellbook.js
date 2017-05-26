import {
  FETCH_FORMULAS,
  FETCH_FORMULAS_SUCCESS,
  VIEW_FORMULA,
  TOGGLE_DRAWER
} from '../actions/spellbook';

const initialState = {
  _id: undefined,
  viewedFormula: {
    addon: {
      value: '',
      diff: 0
    },
    area: {
      value: '',
      diff: 0
    },
    caster: '',
    cost: 0,
    damage: {
      value: '',
      diff: 0
    },
    dcBase: 0,
    delivery: {
      value: '',
      diff: 0
    },
    difficulty: 0,
    duration: {
      value: '',
      diff: 0
    },
    effect: {
      value: '',
      diff: 0
    },
    name: '',
    range: {
      value: '',
      diff: 0
    },
    school: '',
    time: {
      value: '',
      diff: 0
    }
  },
  openDrawer: false,
  items: []
};

const spellBook = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORMULAS:
      return Object.assign({}, state, { _id: action.caster });

    case FETCH_FORMULAS_SUCCESS:
      return Object.assign({}, state, {
        items: action.items
      });

    case VIEW_FORMULA:
      const all = Object.assign({}, state);
      const selected = all.items.filter(function(item) {
        return item._id === action.item;
      });

      return Object.assign({}, state, {
        viewedFormula: selected[0],
        openDrawer: true
      });

    case TOGGLE_DRAWER:
      return Object.assign({}, state, { openDrawer: action.open });

    default:
      break;
  }

  return state;
};

export default spellBook;
