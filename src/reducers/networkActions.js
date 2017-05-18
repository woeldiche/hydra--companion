import {
  SAVE_FORMULA,
  SAVE_FORMULA_SUCCESS,
  SAVE_FORMULA_SUCCESS_NOTIFIED,
  SAVE_FORMULA_ERROR
} from '../actions';

const initialState = {
  spellBook: {
    isSaving: false,
    isFetching: false,
    didSave: false,
    didNotify: false
  },
  caster: {
    isFetching: false,
    isSaving: false,
    didSave: false,
    didNotify: false
  },
  settings: {
    isFetching: false,
    isSaving: false,
    didSave: false,
    didNotify: false
  }
};

const spellBook = (state, action) => {
  switch (action.type) {
    case SAVE_FORMULA:
      return Object.assign({}, state, {
        isSaving: true,
        didSave: false
      });

    case SAVE_FORMULA_SUCCESS:
      return Object.assign({}, state, {
        isSaving: false,
        didSave: true
      });

    case SAVE_FORMULA_ERROR:
      return Object.assign({}, state, {
        isSaving: false,
        didSave: false
      });

    case SAVE_FORMULA_SUCCESS_NOTIFIED:
      return Object.assign({}, state, {
        didNotify: true
      });

    default:
      break;
  }

  return state;
};

const networkActions = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FORMULA:
    case SAVE_FORMULA_SUCCESS:
    case SAVE_FORMULA_ERROR:
    case SAVE_FORMULA_SUCCESS_NOTIFIED:
      return Object.assign({}, state, {
        spellBook: spellBook(state.spellBook, action)
      });

    default:
      break;
  }

  return state;
};

export default networkActions;
