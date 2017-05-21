import React, { Component } from 'react';
import { connect } from 'react-redux';
import HydraData from '../data/HydraData';
import Loader from '../components/Loader';

import {
  updateCasterName,
  updateCasterValue,
  saveCasterToDB,
  updateCasterSpelllist,
  loadCaster,
  putConfig,
  updateConfig
} from '../actions';
import { withRouter } from 'react-router-dom';
import CasterSettings from '../components/CasterSettings';
import ConfigSettings from '../components/ConfigSettings';

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function printTime(dateString) {
  const date = new Date(dateString);

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);

  return h + ':' + m + ':' + s;
}

const mapStateToProps = state => {
  return Object.assign({}, state.caster, state.config, {
    allEffects: HydraData.options('effect'),
    isFetching: state.networkActions.caster.isFetching,
    didFetch: state.networkActions.caster.didFetch,
    isSaving: state.networkActions.caster.isSaving,
    didSave: state.networkActions.caster.didSave,
    lastSaved: printTime(state.networkActions.caster.lastSaved),
    isConfigSaving: state.networkActions.config.isSaving,
    didConfigSave: state.networkActions.config.didSave,
    lastConfigSaved: printTime(state.networkActions.config.lastSaved)
  });
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => {
      dispatch(loadCaster());
    },
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
      dispatch(saveCasterToDB());
    },
    onSave: event => {
      dispatch(saveCasterToDB());
    },
    onValueToggle: param => (event, isChecked) => {
      dispatch(updateConfig(param, isChecked));
      dispatch(putConfig());
    }
  };
};

class SettingsWrapper extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { isFetching, didFetch, ...props } = this.props;

    return (
      <div className="fill-area flexbox-item-grow">
        {!didFetch || isFetching
          ? <Loader />
          : <div>
              <CasterSettings {...props} />
              <ConfigSettings {...props} />
            </div>}
      </div>
    );
  }
}

const SpellCalculator = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SettingsWrapper)
);

export default SpellCalculator;
