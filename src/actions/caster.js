import DB from '../data/DBStore';

//export const CREATE_PROFILE = 'CREATE_PROFILE';

export const UPDATE_CASTER_NAME = 'UPDATE_CASTER_NAME';
export const UPDATE_CASTER_VALUE = 'UPDATE_CASTER_VALUE';
export const UPDATE_CASTER_SPELLLIST = 'UPDATE_CASTER_SPELLLIST';

export const FETCH_CASTER = 'FETCH_CASTER';
export const FETCH_CASTER_SUCCESS = 'FETCH_CASTER_SUCCESS';

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

      DB.get('@@config').then(function(doc) {
        const configDoc = Object.assign(doc, { caster: casterDoc._id });

        return DB.bulkDocs([casterDoc, configDoc]).then(function(response) {
          if (response.ok) {
            dispatch(saveCasterSuccess(response, Date.now()));
          } else {
          }
        });
      });
    }
  };
}

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
  };
}

export function fetchCaster() {
  return { type: FETCH_CASTER };
}

export function fetchCasterSuccess(json) {
  return { type: FETCH_CASTER_SUCCESS, items: json };
}
