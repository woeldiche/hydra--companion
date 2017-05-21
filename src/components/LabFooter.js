import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionInfo from 'material-ui/svg-icons/action/info';

const LabFooter = ({ diff, dc, cost, allowSave, onClickSave, casterSet }) => (
  <div className="flex-parent--row footer--content">
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
      {casterSet &&
        allowSave &&
        <RaisedButton label="Save" primary={true} onClick={onClickSave} />}

      {casterSet &&
        !allowSave &&
        <RaisedButton label="Save" primary={true} disabled={true} />}

      {!casterSet &&
        <IconButton
          tooltip="Create a caster to enable save"
          tooltipPosition="top-left"
          touch={true}
          style={{
            width: 48,
            height: 48,
            padding: 6
          }}
          iconStyle={{
            width: 36,
            height: 36
          }}
        >
          <ActionInfo />
        </IconButton>}

    </div>
  </div>
);

export default LabFooter;
