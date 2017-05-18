import HydraData from '../data/HydraData';
import DB from '../data/DBStore';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const CHANGE_URL = 'CHANGE_URL';

// SpellLab
export const RESET_FORMULA = 'RESET_FORMULA';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_PARAMETER = 'UPDATE_PARAMETER';
export const UPDATE_DIFF = 'UPDATE_DIFF';
export const SET_PARAMETER_VIS = 'SET_PARAMETER_VIS';

// SpellBook
export const EDIT_FORMULA = 'EDIT_FORMULA';
export const FILTER_SPELL_LIST = 'FILTER_SPELL_LIST';

// Caster profile

// Network actions
export const SAVE_FORMULA = 'SAVE_FORMULA';
export const SAVE_FORMULA_SUCCESS = 'SAVE_FORMULA_SUCCESS';
export const SAVE_FORMULA_ERROR = 'SAVE_FORMULA_ERROR';
export const SAVE_FORMULA_SUCCESS_NOTIFIED = 'SAVE_FORMULA_SUCCESS_NOTIFIED';

export const FETCH_FORMULAS = 'FETCH_FORMULAS';
export const FETCH_FORMULAS_SUCCESS = 'FETCH_FORMULAS_SUCCESS';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';

export const DELETE_FORMULA = 'DELETE_FORMULA';
export const DELETE_FORMULA_SUCCESS = 'DELETE_FORMULA_SUCCESS';

export const UPDATE_PROFILE = 'SAVE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';

/**
  *  Bootstrap
  */
export function fetchData() {
  return { type: FETCH_DATA };
}

export function fetchDataSuccess(data) {
  return { type: FETCH_DATA_SUCCESS, data };
}

export function changeUrl(path, location) {
  return { type: CHANGE_URL, path: path, existingPath: location };
}

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

/**
 * Settings
 */
export const CREATE_PROFILE = 'CREATE_PROFILE';

export const UPDATE_CASTER_NAME = 'UPDATE_CASTER_NAME';
export const UPDATE_CASTER_VALUE = 'UPDATE_CASTER_VALUE';
export const UPDATE_CASTER_SPELLLIST = 'UPDATE_CASTER_SPELLLIST';

export const SAVE_CASTER = 'SAVE_CASTER';
export const SAVE_CASTER_SUCCESS = 'SAVE_CASTER_SUCCESS';
export const SAVE_CASTER_SUCCESS_NOTIFIED = 'SAVE_CASTER_SUCCESS_NOTIFIED';

export function updateCasterName(value) {
  return { type: UPDATE_CASTER_NAME, value: value };
}

export function updateCasterValue(param, value) {
  value = parseInt(value, 10);
  value = Number.isNaN(value) ? 0 : value;

  return { type: UPDATE_CASTER_VALUE, param: param, value: value };
}

export function updateCasterSpelllist(items) {
  return { type: UPDATE_CASTER_SPELLLIST, items: items };
}

export function saveCaster() {}
/**
 * Network actions
 */
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

// Spell List
export function loadFormulasIfNeeded() {
  return function(dispatch, getState) {
    const state = getState().spellBooks;

    const { _id, isFetching, didInvalidate, items } = state[
      Object.keys(state)[0]
    ];

    if (!isFetching && !didInvalidate && items.length > 0) {
      return dispatch(fetchFormulasSuccess(items));
    } else {
      return dispatch(loadFormulas(_id));
    }
  };
}

export function loadFormulas(casterId) {
  return function(dispatch) {
    dispatch(fetchFormulas());

    // Get all spells with linked to the caster with id.
    DB.find({
      selector: { type: 'formula', caster: casterId }
    })
      .then(function(result) {
        dispatch(fetchFormulasSuccess(result));
      })
      .catch(function(err) {
        console.log(err);
      });
  };
}

export function fetchFormulas() {
  return { type: FETCH_FORMULAS };
}

export function fetchFormulasSuccess(json) {
  console.log(json);
  return { type: FETCH_FORMULAS_SUCCESS, items: json };
}

/**
  * Action Creators
  */
