import DB from '../data/DBStore';
import { fetchCasterSuccess } from './caster';

export const UPDATE_CONFIG = 'UPDATE_CONFIG';
export const FETCH_CONFIG = 'FETCH_CONFIG';
export const FETCH_CONFIG_SUCCESS = 'FETCH_CONFIG_SUCCESS';
export const SAVE_CONFIG = 'SAVE_CONFIG';
export const SAVE_CONFIG_SUCCESS = 'SAVE_CONFIG_SUCCESS';
export const FETCH_CONFIG_ERROR = 'FETCH_CONFIG_ERROR';

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
      userCreated,
      version,
      data
    } = getState().config;

    const config = {
      _id: '@@config',
      type: 'config',
      limitEffectsByKnown: limitEffectsByKnown,
      user: user,
      caster: caster,
      userCreated: userCreated,
      version: version,
      data: data
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
