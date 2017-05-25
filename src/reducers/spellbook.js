import { FETCH_FORMULAS, FETCH_FORMULAS_SUCCESS } from '../actions';

const initialState = {
  _id: undefined,
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

    default:
      break;
  }

  return state;
};

export default spellBook;
