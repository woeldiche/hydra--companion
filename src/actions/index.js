import HydraData from '../data/HydraData';
import DB from '../data/DBStore';

/**
  *  Bootstrap
  */
export const FETCH_DATA = 'FETCH_DATA';
export function fetchData() {
  return { type: FETCH_DATA };
}

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export function fetchDataSuccess(data) {
  return { type: FETCH_DATA_SUCCESS, data };
}

/**
  *  Spell Lab
  */
export const RESET_FORMULA = 'RESET_FORMULA';
export function resetFormula() {
  return { type: RESET_FORMULA };
}

export const UPDATE_NAME = 'UPDATE_NAME';
export function updateName(value) {
  return { type: UPDATE_NAME, value: value };
}

export const UPDATE_PARAMETER = 'UPDATE_PARAMETER';
export function updateParameter(param, value) {
  return {
    type: UPDATE_PARAMETER,
    parameter: param,
    data: HydraData.get(param, value)
  };
}

export const UPDATE_DIFF = 'UPDATE_DIFF';
export function updateDiff(param, value) {
  value = parseInt(value, 10);
  value = Number.isNaN(value) ? 0 : value;

  return { type: UPDATE_DIFF, parameter: param, value: value };
}

export const SET_PARAMETER_VIS = 'SET_PARAMETER_VIS';
export function setParameterVis(param, visible) {
  return { type: SET_PARAMETER_VIS, param, visible };
}

export const SAVE_FORMULA = 'SAVE_FORMULA';
export function saveFormula(id, name) {
  return { type: SAVE_FORMULA, id: id, name: name };
}

function createFormula({ spellLab }) {
  return {
    _id: spellLab.school.value +
      '/' +
      spellLab.name.value +
      '/' +
      Math.random(),
    type: 'formula',
    name: spellLab.name.value,
    school: spellLab.school.value,
    effect: spellLab.effect.value,
    //effectLevel,
    time: spellLab.time.value,
    delivery: spellLab.delivery.value,
    range: spellLab.range.value,
    area: spellLab.area.value,
    addon: spellLab.addon.value,
    damage: spellLab.damage.value
    //save,
  };
}

export function storeToDB() {
  return function(dispatch, getState) {
    const formula = createFormula(getState());
    dispatch(saveFormula(formula._id, formula.name));

    return DB.put(formula).then(function(doc) {
      if (doc.ok) {
        dispatch(saveFormulaSuccess(doc));
      } else {
        dispatch(saveFormulaError(doc));
      }
    });
  };
}

export const SAVE_FORMULA_SUCCESS = 'SAVE_FORMULA_SUCCESS';
export function saveFormulaSuccess(response) {
  return { type: SAVE_FORMULA_SUCCESS, id: response._id };
}

export const SAVE_FORMULA_ERROR = 'SAVE_FORMULA_ERROR';
export function saveFormulaError(response) {
  return { type: SAVE_FORMULA_ERROR, response: response };
}

export const SAVE_FORMULA_SUCCESS_NOTIFIED = 'SAVE_FORMULA_SUCCESS_NOTIFIED';
export function saveFormulaSuccessNotified() {
  return { type: SAVE_FORMULA_SUCCESS_NOTIFIED };
}

export function saveFormulaNotify() {
  return function(dispatch) {
    dispatch(resetFormula());
    dispatch(saveFormulaSuccessNotified());
  };
}

// Spell List
export const FETCH_FORMULAS = 'FETCH_FORMULAS';
export const FETCH_FORMULAS_SUCCESS = 'FETCH_FORMULAS_SUCCESS';
export const EDIT_FORMULA = 'EDIT_FORMULA';
export const DELETE_FORMULA = 'DELETE_FORMULA';
export const DELETE_FORMULA_SUCCESS = 'DELETE_FORMULA_SUCCESS';
export const FILTER_SPELL_LIST = 'FILTER_SPELL_LIST';

// Caster profile
export const CREATE_PROFILE = 'CREATE_PROFILE';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const UPDATE_PROFILE = 'SAVE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';

/**
  * Action Creators
  */
