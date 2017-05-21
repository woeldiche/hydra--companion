import {
  SAVE_FORMULA,
  SAVE_FORMULA_SUCCESS,
  SAVE_FORMULA_SUCCESS_NOTIFIED,
  SAVE_FORMULA_ERROR,
  SAVE_CASTER,
  SAVE_CASTER_SUCCESS,
  SAVE_CASTER_SUCCESS_NOTIFIED,
  FETCH_CASTER_SUCCESS,
  FETCH_CASTER,
  FETCH_CONFIG,
  FETCH_CONFIG_SUCCESS,
  SAVE_CONFIG,
  SAVE_CONFIG_SUCCESS
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
    didFetch: false,
    isSaving: false,
    didSave: false,
    didNotify: false,
    lastSaved: 0,
    didInvalidate: true
  },
  config: {
    idFetch: true,
    isSaving: false,
    didSave: false,
    didNotify: false,
    lastSaved: 0
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

const config = (state, action) => {
  switch (action.type) {
    case FETCH_CONFIG:
      return Object.assign({}, state, { didFetch: false });

    case FETCH_CONFIG_SUCCESS:
      return Object.assign({}, state, {
        didFetch: true,
        didSave: true
      });

    case SAVE_CONFIG:
      return Object.assign({}, state, { isSaving: true });

    case SAVE_CONFIG_SUCCESS:
      return Object.assign({}, state, {
        isSaving: false,
        didSave: true,
        lastSaved: action.time
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

    case FETCH_CONFIG:
    case FETCH_CONFIG_SUCCESS:
    case SAVE_CONFIG:
    case SAVE_CONFIG_SUCCESS:
      return Object.assign({}, state, {
        config: config(state.config, action)
      });

    default:
      break;
  }

  return state;
};

export default networkActions;
