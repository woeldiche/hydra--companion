import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const LabFooter = ({ diff, dc, cost, allowSave, onClickSave }) => (
  <div className="fill-area footer--content">
    <div className="flex-item-column">
      <span className="subheader">Difficulty</span>
      <span>{diff}</span>
    </div>
    <div className="flex-item-column">
      <span className="subheader">DC</span>
      <span>{dc}</span>
    </div>
    <div className="flex-item-column">
      <span className="subheader">Cost</span>
      <span>{cost}</span>
    </div>
    <div className="flex-item-column">
      {allowSave
        ? <RaisedButton label="Save" primary={true} onClick={onClickSave} />
        : <RaisedButton label="Save" primary={true} disabled={true} />}
    </div>
  </div>
);

export default LabFooter;
