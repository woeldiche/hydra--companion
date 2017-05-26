import HydraData from '../data/HydraData';
import DB from '../data/DBStore';

// SpellBook
//export const EDIT_FORMULA = 'EDIT_FORMULA';
//export const FILTER_SPELL_LIST = 'FILTER_SPELL_LIST';
export const VIEW_FORMULA = 'VIEW_FORMULA';
export const FETCH_FORMULAS = 'FETCH_FORMULAS';
export const FETCH_FORMULAS_SUCCESS = 'FETCH_FORMULAS_SUCCESS';
export const DELETE_FORMULA = 'DELETE_FORMULA';
export const DELETE_FORMULA_SUCCESS = 'DELETE_FORMULA_SUCCESS';

/**
 * Spellbook views
 */
export const viewFormula = (formula = {}) => {
  console.log('View Formula');
  return { type: VIEW_FORMULA, activeItem: formula };
};

/**
 * Helper functions
 */
const sanitizeFormulas = result => {
  return result.docs.map(function(doc) {
    const { _rev, ...props } = doc;
    console.log(...props);
    return { ...props };
  });
};

const hydrateFormulas = items => {
  const hydratedItems = items.map(function(item) {
    const ignored = ['_id', 'name', 'type', 'caster', 'school'];
    const hydratedItem = {};
    let sum = 0;

    for (let prop in item) {
      if (!ignored.includes(prop)) {
        hydratedItem[prop] = HydraData.get(prop, item[prop]);

        let diff = hydratedItem[prop].hasOwnProperty('diff')
          ? hydratedItem[prop].diff
          : 0;
        sum += diff;
      } else {
        hydratedItem[prop] = item[prop];
      }
    }

    hydratedItem.difficulty = sum;
    hydratedItem.cost = Math.round(sum / 5) >= 1 ? Math.round(sum / 5) : 1;
    hydratedItem.dcBase = Math.floor(sum / 5 + 10);

    return hydratedItem;
  });

  return hydratedItems;
};

/**
 * Load formulas
 */
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
        dispatch(
          fetchFormulasSuccess(hydrateFormulas(sanitizeFormulas(result)))
        );
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
