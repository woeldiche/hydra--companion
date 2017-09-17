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
export const EDIT_FORMULA = 'EDIT_FORMULA';

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
  const update =
    typeof spellLab._id === 'undefined' ? false : !!spellLab._id.value;
  const id =
    spellLab.school.value + '/' + spellLab.name.value + '/' + Math.random();

  return {
    _id: update ? spellLab._id.value : id,
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
    components: spellLab.components.value,
    update: update
    //save,
  };
}

export function storeToDB() {
  return function(dispatch, getState) {
    const formula = createFormula(getState());
    dispatch(saveFormula(formula._id, formula.name));

    if (formula.update) {
      DB.get(formula._id).then(function(doc) {
        return DB.put(Object.assign(formula, { _rev: doc._rev })).then(function(
          doc
        ) {
          if (doc.ok) {
            dispatch(saveFormulaSuccess(doc));
          } else {
            dispatch(saveFormulaError(doc));
          }
        });
      });
    } else {
      return DB.put(formula).then(function(doc) {
        if (doc.ok) {
          dispatch(saveFormulaSuccess(doc));
        } else {
          dispatch(saveFormulaError(doc));
        }
      });
    }
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

/**
 * Edit formula
 */
export function editFormula(id, history, fork = false) {
  return function(dispatch, getState) {
    const { spellBook } = getState();
    let filteredArray = spellBook.items.filter(function(item) {
      return item._id === id;
    });

    let formula = {};

    for (let prop in filteredArray[0]) {
      if (
        typeof filteredArray[0][prop] === 'string' ||
        typeof filteredArray[0][prop] === 'number'
      ) {
        formula[prop] = {
          value: filteredArray[0][prop]
        };
      } else {
        formula[prop] = filteredArray[0][prop];
      }
    }

    if (fork) {
      formula._id = '';
      formula.name.value = '';
    }

    history.push('/lab');
    return dispatch(openFormula(formula));
  };
}

export function openFormula(item) {
  return { type: EDIT_FORMULA, item: item };
}
