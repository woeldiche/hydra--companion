import React from 'react';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import ParamSelector from './ParamSelector';

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
}) => (
  <div>
    <Subheader style={{ marginTop: '16px' }}>
      Caster
      {isSaving &&
        <span style={{ paddingLeft: '48px', color: '#ccc' }}>
          Saving...
        </span>}
      {didSave &&
        <span style={{ paddingLeft: '48px', color: '#ccc' }}>
          Saved {lastSaved}
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
    </Paper>

    {/* <Divider style={{ marginTop: '24px', marginBottom: '24px' }} /> */}

    <Subheader>Select Effects</Subheader>
    <Paper
      rounded={false}
      style={{
        paddingBottom: '24px',
        paddingTop: '12px',
        marginBottom: '16px'
      }}
    >
      <ParamSelector
        name="Select Known Effects"
        param={{ value: knownEffects }}
        options={allEffects}
        onParamChange={onSpellsChange}
        multiple={true}
        disabled={!name}
      />
    </Paper>

    {knownEffects.length > 0 &&
      <div>
        {/* <Divider style={{ marginTop: '24px', marginBottom: '24px' }} /> */}

        <Subheader>Known Effects</Subheader>
        <Paper
          rounded={false}
          style={{ paddingBottom: '24px', paddingTop: '12px' }}
        >
          <List>
            {knownEffects.map(item => {
              return <ListItem primaryText={item} key={item} />;
            })}
          </List>
        </Paper>
      </div>}
  </div>
);

export default SettingsForm;
