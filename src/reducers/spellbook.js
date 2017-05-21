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
      let items = action.items.docs.map(function(doc) {
        const { _rev, ...props } = doc;
        return { ...props };
      });

      return Object.assign({}, state, {
        items: items
      });

    default:
      break;
  }

  return state;
};

export default spellBook;
