import {
  UPDATE_CONFIG,
  FETCH_CONFIG,
  FETCH_CONFIG_SUCCESS,
  FETCH_CONFIG_ERROR,
  SAVE_CONFIG,
  SAVE_CONFIG_SUCCESS,
  FETCH_CASTER_SUCCESS
} from '../actions';
import validator from 'email-validator';

const initialState = {
  limitEffectsByKnown: false,
  user: undefined,
  caster: undefined,
  userCreated: undefined,
  isFetching: false,
  didFetch: false,
  isSaving: false,
  didSave: false,
  casterCreated: undefined,
  isUserValid: false,
  lastSaved: 0
};

const config = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONFIG:
      if (action.param === 'user') {
        const isValid = validator.validate(action.value);

        return Object.assign({}, state, {
          [action.param]: action.value,
          isUserValid: isValid
        });
      } else {
        return Object.assign({}, state, {
          [action.param]: action.value
        });
      }

    case FETCH_CONFIG:
      return Object.assign({}, state, { didFetch: false });

    case FETCH_CONFIG_SUCCESS:
      if (action.data.hasOwnProperty('user')) {
        // we successfully retrieved config and a user exists
        const isValid = validator.validate(action.data.user);

        return Object.assign({}, state, action.data, {
          didFetch: true,
          isFetching: false,
          userCreated: isValid ? true : false,
          isUserValid: isValid
        });
      } else {
        // We either just created an empty config or a just doesn't exist
        return Object.assign({}, state, action.data, {
          didFetch: true,
          isFetching: false,
          userCreated: false,
          isUserValid: false
        });
      }

    case FETCH_CONFIG_ERROR:
      console.log(action);

      return Object.assign({}, state, {
        didFetch: false,
        isFetching: false
      });

    case SAVE_CONFIG:
      return Object.assign({}, state, { isSaving: true });

    case SAVE_CONFIG_SUCCESS:
      return Object.assign({}, state, action.data, {
        isSaving: false,
        didSave: true,
        userCreated: true,
        lastSaved: action.time
      });

    case FETCH_CASTER_SUCCESS:
      return { ...state, caster: action.items._id };

    default:
      break;
  }

  return state;
};

export default config;
