import { connect } from 'react-redux';
import HydraData from '../data/HydraData';

import {
  updateCasterName,
  updateCasterValue,
  saveCaster,
  updateCasterSpelllist
} from '../actions';
import { withRouter } from 'react-router-dom';
import SettingsForm from '../components/SettingsForm';

const mapStateToProps = state => {
  return Object.assign({}, state.caster, {
    allEffects: HydraData.options('effect')
  });
};

const mapDispatchToProps = dispatch => {
  return {
    onNameChange: event => {
      dispatch(updateCasterName(event.target.value));
    },
    onValueChange: param => (event, index, value) => {
      // If value is undefined use event.target.value instead.
      // SelectFields use value, input fields use event.target.value
      dispatch(updateCasterValue(param, !!value ? value : event.target.value));
    },
    onSpellsChange: (event, index, values) => {
      dispatch(updateCasterSpelllist(values));
    },
    onSave: (param, value) => event => {
      dispatch(saveCaster());
    }
  };
};

const SpellCalculator = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SettingsForm)
);

export default SpellCalculator;
