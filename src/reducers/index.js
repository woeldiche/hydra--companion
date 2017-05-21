import { combineReducers } from 'redux';
import spellLab from './spellLab';
import networkActions from './networkActions';
import caster from './caster';
import config from './config';

const hydraApp = combineReducers({
  spellLab,
  networkActions,
  caster,
  config
});

export default hydraApp;
