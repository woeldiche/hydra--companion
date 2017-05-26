import {
  SAVE_FORMULA,
  SAVE_FORMULA_SUCCESS,
  SAVE_FORMULA_SUCCESS_NOTIFIED,
  SAVE_FORMULA_ERROR
} from '../actions/lab';
import {
  SAVE_CASTER,
  SAVE_CASTER_SUCCESS,
  SAVE_CASTER_SUCCESS_NOTIFIED,
  FETCH_CASTER_SUCCESS,
  FETCH_CASTER
} from '../actions/caster';
import { FETCH_FORMULAS, FETCH_FORMULAS_SUCCESS } from '../actions/spellbook';

const initialState = {
  spellBook: {
    isSaving: false,
    isFetching: false,
    didFetch: false,
    didSave: false,
    didNotify: false,
    didInvalidate: true
  },
  caster: {
    isFetching: false,
    didFetch: false,
    isSaving: false,
    didSave: false,
    didNotify: false,
    lastSaved: 0,
    didInvalidate: true
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
        didSave: true,
        didInvalidate: true
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

    case FETCH_FORMULAS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case FETCH_FORMULAS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didFetch: true
      });

    default:
      break;
  }

  return state;
};

const caster = (state, action) => {
  switch (action.type) {
    case SAVE_CASTER:
      return Object.assign({}, state, {
        isSaving: true,
        didSave: false
      });

    case SAVE_CASTER_SUCCESS:
      return Object.assign({}, state, {
        isSaving: false,
        didSave: true,
        lastSaved: action.time
      });

    case SAVE_CASTER_SUCCESS_NOTIFIED:
      return Object.assign({}, state, {
        didNotify: true
      });

    case FETCH_CASTER:
      return Object.assign({}, state, {
        isFetching: true
      });

    case FETCH_CASTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didFetch: true
      });

    default:
      break;
  }
};

const networkActions = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FORMULA:
    case SAVE_FORMULA_SUCCESS:
    case SAVE_FORMULA_ERROR:
    case SAVE_FORMULA_SUCCESS_NOTIFIED:
    case FETCH_FORMULAS:
    case FETCH_FORMULAS_SUCCESS:
      return Object.assign({}, state, {
        spellBook: spellBook(state.spellBook, action)
      });

    case SAVE_CASTER:
    case SAVE_CASTER_SUCCESS:
    case SAVE_CASTER_SUCCESS_NOTIFIED:
    case FETCH_CASTER:
    case FETCH_CASTER_SUCCESS:
      return Object.assign({}, state, {
        caster: caster(state.caster, action)
      });

    default:
      break;
  }

  return state;
};

export default networkActions;
