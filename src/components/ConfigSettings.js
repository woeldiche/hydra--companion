import React from 'react';
import Toggle from 'material-ui/Toggle';
import Section from './Section.js';

const SettingsForm = ({
  isConfigSaving,
  didConfigSave,
  lastConfigSaved,
  onValueToggle,
  limitEffectsByKnown
}) => {
  const ConfigHeader = (
    <span>
      Other Settings
      {isConfigSaving &&
        <span style={{ paddingLeft: '48px', color: '#ccc' }}>
          Saving...
        </span>}
      {didConfigSave &&
        <span style={{ paddingLeft: '48px', color: '#ccc' }}>
          Saved {lastConfigSaved}
        </span>}
    </span>
  );

  return (
    <Section title={ConfigHeader}>
      <div className="form-row">
        <Toggle
          label="Show only known spell effects in lab."
          labelPosition="right"
          style={{ paddingTop: '8px' }}
          onToggle={onValueToggle('limitEffectsByKnown')}
          toggled={limitEffectsByKnown}
        />
      </div>
    </Section>
  );
};

export default SettingsForm;
