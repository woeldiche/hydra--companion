import { connect } from 'react-redux';
import { updateParameter, updateDiff } from '../actions';
import SpellParameters from '../components/SpellParameters';
import HydraData from '../data/HydraData';

const mapStateToProps = state => {
  const props = {
    paramOptions: {
      school: HydraData.options('school'),
      effect: HydraData.options('effect'),
      time: HydraData.options('time'),
      components: HydraData.options('components'),
      delivery: HydraData.options('delivery'),
      range: HydraData.options('range'),
      area: HydraData.options('area'),
      addon: HydraData.options('addon'),
      duration: HydraData.options('duration'),
      save: HydraData.options('save'),
      damage: HydraData.options('damage')
    }
  };

  return Object.assign({}, state.spellLab, props);
};

const mapDispatchToProps = dispatch => {
  return {
    onParamChange: param => (event, index, value) => {
      // If value is undefined use event.target.value instead.
      // SelectFields use value, input fields use event.target.value
      dispatch(updateParameter(param, !!value ? value : event.target.value));
    },
    onDiffChange: (param, value) => event => {
      dispatch(updateDiff(param, event.target.value));
    }
  };
};

const SpellCalculator = connect(mapStateToProps, mapDispatchToProps)(
  SpellParameters
);

export default SpellCalculator;
