import React from 'react';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
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
  onSpellsChange
}) => (
  <div className="section section--gray">

    <Subheader style={{ marginTop: '16px' }}>Caster</Subheader>
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
          className="form-input col-main"
          floatingLabelText="Name"
        />
      </div>
      <div className="form-row">
        <TextField
          name="primaryStat"
          value={primaryStat}
          onChange={onValueChange('primaryStat')}
          className="form-input col-med"
          floatingLabelText="Primary casting stat"
        />
        <TextField
          name="primarySkill"
          value={primarySkill}
          onChange={onValueChange('primarySkill')}
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
          <div className="form-row">
            <Toggle
              label="Show only known spell effects in lab."
              labelPosition="right"
              style={{ paddingTop: '8px' }}
            />
          </div>
          <List>
            {knownEffects.map(item => {
              return <ListItem primaryText={item} key={item} />;
            })}
          </List>
        </Paper>
      </div>}
  </div>
);

/*
_id: undefined,
name: '',
casterType: 'Psion',
primaryStat: 0,
primarySkill: 0,
knownEffects: []
*/

export default SettingsForm;
