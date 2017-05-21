import {
  FETCH_CONFIG_SUCCESS,
  UPDATE_CONFIG,
  SAVE_CONFIG_SUCCESS
} from '../actions';
import validator from 'email-validator';

const initialState = {
  user: '',
  caster: undefined,
  limitEffectsByKnown: false,
  isUserValid: false
};

const config = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONFIG_SUCCESS:
      return Object.assign({}, state, action.data);

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

    case SAVE_CONFIG_SUCCESS:
      return Object.assign({}, state, action.data);

    default:
      break;
  }

  return state;
};

export default config;
