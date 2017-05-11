import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const ParamSelector = ({ name, param, onParamChange, onDiffChange }) => (
  <div className="form-row">
    <SelectField
      name={name}
      value={param.value}
      onChange={onParamChange}
      className="form-select col-main"
      floatingLabelText="Base effect"
    >
      {param.items.map(item =>
        <MenuItem
          key={item}
          value={item}
          primaryText={item}
        />
      )}
    </SelectField>

    <TextField
      name={name + 'Diff'}
      value={param.diff.toString(10)}
      onChange={onDiffChange}
      className="form-input col-right"
      floatingLabelText="Diff."
    />
  </div>
)

ParamSelector.propTypes = {
  name: PropTypes.string.isRequired,
  param: PropTypes.shape({
    value: PropTypes.string.isRequired,
    diff: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired,
  onParamChange: PropTypes.func,
  onDiffChange: PropTypes.func,
}

export default ParamSelector;
