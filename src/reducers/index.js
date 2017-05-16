import { combineReducers } from 'redux';
import spellLab from './spellLab';
import networkActions from './networkActions';

const hydraApp = combineReducers({
  spellLab,
  networkActions
});

export default hydraApp;
