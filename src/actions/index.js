import HydraData from '../data/HydraData';
import DB from '../data/DBStore';

export const UPDATE_CONFIG = 'UPDATE_CONFIG';
export const FETCH_CONFIG = 'FETCH_CONFIG';
export const FETCH_CONFIG_SUCCESS = 'FETCH_CONFIG_SUCCESS';
export const SAVE_CONFIG = 'SAVE_CONFIG';
export const SAVE_CONFIG_SUCCESS = 'SAVE_CONFIG_SUCCESS';
export const FETCH_CONFIG_ERROR = 'FETCH_CONFIG_ERROR';
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

export const FETCH_CASTER = 'FETCH_CASTER';
export const FETCH_CASTER_SUCCESS = 'FETCH_CASTER_SUCCESS';

export const DELETE_FORMULA = 'DELETE_FORMULA';
export const DELETE_FORMULA_SUCCESS = 'DELETE_FORMULA_SUCCESS';

export const UPDATE_PROFILE = 'SAVE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';

/**
  *  Bootstrap
  */
export function updateConfig(param, value) {
  return { type: UPDATE_CONFIG, param: param, value: value };
}

export function getConfig() {
  return function(dispatch, getState) {
    const { caster } = getState().config;
    dispatch(fetchConfig());

    DB.get('@@config')
      .then(function(doc) {
        dispatch(fetchConfigSuccess(doc));

        if (caster === undefined && doc.hasOwnProperty('caster')) {
          DB.get(doc.caster).then(function(doc) {
            dispatch(fetchCasterSuccess(doc));
          });
        }
      })
      .catch(function(err) {
        if (err.status === 404) {
          return DB.put({ _id: '@@config', type: 'config' }).then(function(
            doc
          ) {
            dispatch(fetchConfigSuccess({}));
          });
        } else {
          dispatch(fetchConfigError(err));
        }
      });
  };
}

export function putConfig() {
  return function(dispatch, getState) {
    const {
      limitEffectsByKnown,
      user,
      caster,
      userCreated
    } = getState().config;

    const config = {
      _id: '@@config',
      type: 'config',
      limitEffectsByKnown: limitEffectsByKnown,
      user: user,
      caster: caster,
      userCreated: userCreated
    };

    dispatch(saveConfig);

    DB.get('@@config')
      .then(function(doc) {
        return DB.put(Object.assign(doc, config));
      })
      .then(function(doc) {
        dispatch(saveConfigSuccess(doc, Date.now()));
      })
      .catch(function(err) {
        console.log(err);
      });
  };
}

export function fetchConfig() {
  return { type: FETCH_CONFIG };
}

export function saveConfig() {
  return { type: SAVE_CONFIG };
}

export function saveConfigSuccess(json, time) {
  return { type: SAVE_CONFIG_SUCCESS, response: json, time: time };
}

export function fetchConfigSuccess(data) {
  return { type: FETCH_CONFIG_SUCCESS, data };
}

export function fetchConfigError(data) {
  return { type: FETCH_CONFIG_ERROR, data: data };
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

export function saveCaster() {
  return { type: SAVE_CASTER };
}

export function saveCasterSuccess(json, time) {
  return { type: SAVE_CASTER_SUCCESS, response: json, time: time };
}

export function saveCasterToDB() {
  return function(dispatch, getState) {
    const { caster, config } = getState();
    dispatch(saveCaster());

    if (!!caster._id) {
      return DB.get(caster._id).then(function(doc) {
        Object.assign(doc, {
          name: caster.name,
          casterType: caster.casterType,
          primaryStat: caster.primaryStat,
          primarySkill: caster.primarySkill,
          concentrationSkill: caster.concentrationSkill,
          knownEffects: caster.knownEffects
        });
        DB.put(doc).then(function(response) {
          if (response.ok) {
            dispatch(saveCasterSuccess(response, Date.now()));
          }
        });
      });
    } else {
      const casterDoc = Object.assign(caster, {
        _id: caster.name + Math.random(),
        type: 'caster',
        user: config.user
      });

      const configDoc = Object.assign(config, { caster: casterDoc._id });

      const docs = [casterDoc, configDoc];

      return DB.bulkDocs(docs).then(function(response) {
        if (response.ok) {
          dispatch(saveCasterSuccess(response, Date.now()));
        }
      });
    }
  };
}

// Spell List
export function loadCasterIfNeeded() {
  return function(dispatch, getState) {
    const state = getState();

    const { isFetching, didInvalidate } = state.networkActions.caster;

    if (didInvalidate && !isFetching) {
      return dispatch(loadCaster());
    } else {
      return dispatch(fetchCasterSuccess(state.caster));
    }
  };
}

export function loadCaster(casterId) {
  return function(dispatch, getState) {
    dispatch(fetchCaster());

    if (casterId === undefined) {
      DB.find({ selector: { type: 'caster' } }).then(function(result) {
        dispatch(fetchCasterSuccess(result.docs));
      });
    } else if (typeof casterId === 'string') {
      return DB.get(casterId)
        .then(function(result) {
          dispatch(fetchCasterSuccess(result));
        })
        .catch(function(err) {
          console.log(err);
        });
    } else {
      const LoadException = {
        message: 'loadCaster() expects a string with ID or undefined'
      };
      throw LoadException;
    }

    // Get all spells with linked to the caster with id.
  };
}

export function fetchCaster() {
  return { type: FETCH_CASTER };
}

export function fetchCasterSuccess(json) {
  return { type: FETCH_CASTER_SUCCESS, items: json };
}

/**
 * Network actions
 */
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
    damage: spellLab.damage.value,
    caster: caster._id,
    components: spellLab.components.value
    //save,
  };
}

export function storeToDB() {
  return function(dispatch, getState) {
    const formula = createFormula(getState());
    console.log(formula);
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
export function loadFormulasIfNeeded(caster) {
  return function(dispatch, getState) {
    const { spellBook, networkActions, caster } = getState();
    const { isFetching, didInvalidate } = networkActions.spellBook;
    const items = !!spellBook ? spellBook.items : [];
    const _id = caster._id;

    if (!isFetching && !didInvalidate) {
      return dispatch(fetchFormulasSuccess(items));
    } else if (!isFetching) {
      return dispatch(loadFormulas(_id));
    }
  };
}

export function loadFormulas(casterId) {
  return function(dispatch) {
    dispatch(fetchFormulas(casterId));

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

export function fetchFormulas(id) {
  return { type: FETCH_FORMULAS, caster: id };
}

export function fetchFormulasSuccess(json) {
  return { type: FETCH_FORMULAS_SUCCESS, items: json };
}

/**
  * Action Creators
  */
