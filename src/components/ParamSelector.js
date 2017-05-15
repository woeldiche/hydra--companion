import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const capitalizeFirstChar = string => {
  return string.charAt(0).toUpperCase() + string.substring(1);
};

const filteredList = (list, param) => {
  if (param.hasOwnProperty('filterBy') && param.hasOwnProperty('filterStr')) {
    let filterBy = param.filterBy; // eg. 'school'
    let filterStr = param.filterStr; // eg. 'conjuration'

    return list.filter(item => {
      return (
        item === Object(item) &&
        item.hasOwnProperty(filterBy) &&
        item[filterBy] === filterStr
      );
    });
  } else {
    return list;
  }
};

const ParamSelector = ({
  name,
  param,
  options,
  onParamChange,
  onDiffChange
}) => (
  <div className="form-row">
    <SelectField
      name={name}
      value={param.value}
      onChange={onParamChange}
      className="form-select col-main"
      floatingLabelText={capitalizeFirstChar(name)}
    >
      {filteredList(options, param).map(item => (
        <MenuItem key={item.name} value={item.name} primaryText={item.name} />
      ))}
    </SelectField>

    {param.hasOwnProperty('diff') &&
      <TextField
        name={name + 'Diff'}
        value={param.diff.toString(10)}
        onChange={onDiffChange}
        className="form-input col-right"
        floatingLabelText="Diff."
      />}
  </div>
);

ParamSelector.propTypes = {
  name: PropTypes.string.isRequired,
  param: PropTypes.shape({
    value: PropTypes.string.isRequired,
    diff: PropTypes.number
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      diff: PropTypes.number,
      school: PropTypes.string,
      damage: PropTypes.boolean
    })
  ).isRequired,
  onParamChange: PropTypes.func,
  onDiffChange: PropTypes.func
};

export default ParamSelector;
