import React from 'react';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import ParamSelector from './ParamSelector';
import Section from './Section.js';

const SettingsForm = ({
  name,
  primaryStat,
  primarySkill,
  knownEffects,
  allEffects,
  onNameChange,
  onValueChange,
  onSpellsChange,
  onSave,
  isSaving,
  didSave,
  lastSaved
}) => {
  const CasterHeader = (
    <span>
      Caster
      {isSaving &&
        <span style={{ paddingLeft: '48px', color: '#ccc' }}>
          Saving...
        </span>}
      {didSave &&
        <span style={{ paddingLeft: '48px', color: '#ccc' }}>
          Saved {lastSaved}
        </span>}
    </span>
  );

  return (
    <div>
      <Section title={CasterHeader}>
        <div className="form-row">
          <TextField
            name="name"
            value={name}
            onChange={onNameChange}
            onBlur={onSave}
            className="form-input col-main"
            floatingLabelText="Name"
          />
        </div>
        <div className="form-row">
          <TextField
            name="primaryStat"
            value={primaryStat}
            onChange={onValueChange('primaryStat')}
            onBlur={onSave}
            disabled={!name}
            className="form-input col-med"
            floatingLabelText="Primary casting stat"
          />
          <TextField
            name="primarySkill"
            value={primarySkill}
            onChange={onValueChange('primarySkill')}
            onBlur={onSave}
            disabled={!name}
            className="form-input col-med"
            floatingLabelText="Concentration skill"
          />
        </div>
      </Section>

      <Section title="Select Effects">
        <ParamSelector
          name="Select Known Effects"
          param={{ value: knownEffects }}
          options={allEffects}
          onParamChange={onSpellsChange}
          multiple={true}
          disabled={!name}
        />
      </Section>

      {knownEffects.length > 0 &&
        <Section title="Known Effects">
          <List>
            {knownEffects.map(item => {
              return <ListItem primaryText={item} key={item} />;
            })}
          </List>
        </Section>}
    </div>
  );
};

export default SettingsForm;
