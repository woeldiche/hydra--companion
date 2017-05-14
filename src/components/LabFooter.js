import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const LabFooter = ({ diff, dc, cost, onClickSave }) => (
  <div className="fill-area">
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
      <RaisedButton label="Save" primary={true} onClick={onClickSave} />
    </div>
  </div>
)

export default LabFooter;
