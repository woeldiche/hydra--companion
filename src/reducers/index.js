import { combineReducers } from 'redux';
import spellLab from './spellLab';
import networkActions from './networkActions';
import caster from './caster';

const hydraApp = combineReducers({
  spellLab,
  networkActions,
  caster
});

export default hydraApp;
