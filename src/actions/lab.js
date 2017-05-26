import HydraData from '../data/HydraData';
import DB from '../data/DBStore';

// SpellLab
export const RESET_FORMULA = 'RESET_FORMULA';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_PARAMETER = 'UPDATE_PARAMETER';
export const UPDATE_DIFF = 'UPDATE_DIFF';
export const SET_PARAMETER_VIS = 'SET_PARAMETER_VIS';
export const SAVE_FORMULA = 'SAVE_FORMULA';
export const SAVE_FORMULA_SUCCESS = 'SAVE_FORMULA_SUCCESS';
export const SAVE_FORMULA_ERROR = 'SAVE_FORMULA_ERROR';
export const SAVE_FORMULA_SUCCESS_NOTIFIED = 'SAVE_FORMULA_SUCCESS_NOTIFIED';

/**
  *  Spell Lab
  */
export function resetFormula() {
  return { type: RESET_FORMULA };
}

export function updateName(value) {
  return { type: UPDATE_NAME, value: value };
}

export function updateParameter(param, value) {
  return {
    type: UPDATE_PARAMETER,
    parameter: param,
    data: HydraData.get(param, value)
  };
}

export function updateDiff(param, value) {
  value = parseInt(value, 10);
  value = Number.isNaN(value) ? 0 : value;

  return { type: UPDATE_DIFF, parameter: param, value: value };
}

export function setParameterVis(param, visible) {
  return { type: SET_PARAMETER_VIS, param, visible };
}

export function saveFormula(id, name) {
  return { type: SAVE_FORMULA, id: id, name: name };
}

function createFormula({ spellLab, caster }) {
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
    duration: spellLab.duration.value,
    damage: spellLab.damage.value,
    caster: caster._id,
    components: spellLab.components.value
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

export function saveFormulaSuccess(response) {
  return { type: SAVE_FORMULA_SUCCESS, id: response._id };
}

export function saveFormulaError(response) {
  return { type: SAVE_FORMULA_ERROR, response: response };
}

export function saveFormulaSuccessNotified() {
  return { type: SAVE_FORMULA_SUCCESS_NOTIFIED };
}

export function saveFormulaNotify() {
  return function(dispatch) {
    dispatch(resetFormula());
    dispatch(saveFormulaSuccessNotified());
  };
}
