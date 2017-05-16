import {
  SAVE_FORMULA,
  SAVE_FORMULA_SUCCESS,
  SAVE_FORMULA_SUCCESS_NOTIFIED,
  SAVE_FORMULA_ERROR
} from '../actions';

const initialState = {
  isSaving: false,
  didSave: false,
  didNotify: false
};

const networkActions = (state = initialState, action) => {
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

export default networkActions;
