/**
  *  Bootstrap
  */
export const FETCH_DATA = 'FETCH_DATA';
export function fetchData() {
  return { type: FETCH_DATA }
}

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export function fetchDataSuccess(data) {
  return { type: FETCH_DATA_SUCCESS, data }
}

/**
  *  Spell Lab
  */
export const RESET_FORMULA = 'RESET_FORMULA';
export function resetFormula() {
  return { type: RESET_FORMULA }
}

export const UPDATE_PARAMETER = 'UPDATE_PARAMETER';
export function updateParameter(param, value) {
  return { type: UPDATE_PARAMETER, parameter: param, value: value}
}

export const UPDATE_DIFF = 'UPDATE_DIFF';
export function updateDiff(param, value) {
  return { type: UPDATE_DIFF, parameter: param, value: value}
}

export const SET_PARAMETER_VIS = 'SET_PARAMETER_VIS';
export function setParameterVis(param, visible) {
  return { type: SET_PARAMETER_VIS, param, visible }
}

export const SAVE_FORMULA = 'SAVE_FORMULA';
export function saveFormula() {
  return { type: SAVE_FORMULA }
}

export const SAVE_FORMULA_SUCCESS = 'SAVE_FORMULA_SUCCESS';
export function saveFormulaSuccess (json) {
  return { type: SAVE_FORMULA_SUCCESS, data: json }
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
