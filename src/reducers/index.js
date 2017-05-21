import { combineReducers } from 'redux';
import spellLab from './spellLab';
import networkActions from './networkActions';
import caster from './caster';
import config from './config';
import spellBook from './spellbook';

const hydraApp = combineReducers({
  spellLab,
  networkActions,
  caster,
  config,
  spellBook
});

export default hydraApp;
