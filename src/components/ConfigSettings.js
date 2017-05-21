import React from 'react';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';

const SettingsForm = ({
  isConfigSaving,
  didConfigSave,
  lastConfigSaved,
  onValueToggle,
  limitEffectsByKnown
}) => (
  <div>
    <Subheader style={{ marginTop: '16px' }}>
      Other Settings
      {isConfigSaving &&
        <span style={{ paddingLeft: '48px', color: '#ccc' }}>
          Saving...
        </span>}
      {didConfigSave &&
        <span style={{ paddingLeft: '48px', color: '#ccc' }}>
          Saved {lastConfigSaved}
        </span>}
    </Subheader>

    <Paper
      rounded={false}
      style={{
        paddingBottom: '24px',
        paddingTop: '12px',
        marginBottom: '16px'
      }}
    >
      <div className="form-row">
        <Toggle
          label="Show only known spell effects in lab."
          labelPosition="right"
          style={{ paddingTop: '8px' }}
          onToggle={onValueToggle('limitEffectsByKnown')}
          toggled={limitEffectsByKnown}
        />
      </div>
    </Paper>
  </div>
);

export default SettingsForm;
