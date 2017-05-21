import React from 'react';
import TextField from 'material-ui/TextField';
import ParamSelector from './ParamSelector';
import Section from './Section';

const NAME = 'name';
const SCHOOL = 'school';
const EFFECT = 'effect';
const TIME = 'time';
const COMPONENTS = 'components';
const DELIVERY = 'delivery';
const RANGE = 'range';
const AREA = 'area';
const ADDON = 'addon';
const DAMAGE = 'damage';
// const SAVE = 'save';
const DURATION = 'duration';

const SpellParameters = ({
  name,
  school,
  effect,
  time,
  components,
  delivery,
  range,
  area,
  addon,
  damage,
  duration,
  save,
  onParamChange,
  onDiffChange,
  onNameChange,
  paramOptions
}) => (
  <div className="section">

    <Section title="Description">
      <div className="form-row">
        <TextField
          name={NAME}
          value={name.value}
          onChange={onNameChange}
          className="form-input col-main"
          floatingLabelText="Spell name"
        />
      </div>

      <ParamSelector
        name={SCHOOL}
        param={school}
        options={paramOptions[SCHOOL]}
        onParamChange={onParamChange(SCHOOL)}
      />

    </Section>

    <Section title="Parameters">
      <ParamSelector
        name={EFFECT}
        param={effect}
        options={paramOptions[EFFECT]}
        onParamChange={onParamChange(EFFECT)}
        onDiffChange={onDiffChange(EFFECT)}
      />
      <ParamSelector
        name={COMPONENTS}
        param={components}
        options={paramOptions[COMPONENTS]}
        onParamChange={onParamChange(COMPONENTS)}
        onDiffChange={onDiffChange(COMPONENTS)}
      />
      <ParamSelector
        name={TIME}
        param={time}
        options={paramOptions[TIME]}
        onParamChange={onParamChange(TIME)}
        onDiffChange={onDiffChange(TIME)}
      />
      <ParamSelector
        name={DURATION}
        param={duration}
        options={paramOptions[DURATION]}
        onParamChange={onParamChange(DURATION)}
        onDiffChange={onDiffChange(DURATION)}
      />
      <ParamSelector
        name={DELIVERY}
        param={delivery}
        options={paramOptions[DELIVERY]}
        onParamChange={onParamChange(DELIVERY)}
        onDiffChange={onDiffChange(DELIVERY)}
      />
      <ParamSelector
        name={RANGE}
        param={range}
        options={paramOptions[RANGE]}
        onParamChange={onParamChange(RANGE)}
        onDiffChange={onDiffChange(RANGE)}
      />
      <ParamSelector
        name={AREA}
        param={area}
        options={paramOptions[AREA]}
        onParamChange={onParamChange(AREA)}
        onDiffChange={onDiffChange(AREA)}
      />
      <ParamSelector
        name={ADDON}
        param={addon}
        options={paramOptions[ADDON]}
        onParamChange={onParamChange(ADDON)}
        onDiffChange={onDiffChange(ADDON)}
      />
      <ParamSelector
        name={DAMAGE}
        param={damage}
        options={paramOptions[DAMAGE]}
        onParamChange={onParamChange(DAMAGE)}
        onDiffChange={onDiffChange(DAMAGE)}
      />
    </Section>
  </div>
);

export default SpellParameters;
