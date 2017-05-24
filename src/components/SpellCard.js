import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  CardTitle
} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';

import ActionSettings from 'material-ui/svg-icons/action/settings';

const SpellCard = ({
  name,
  school,
  effect,
  time,
  components,
  delivery,
  range,
  area,
  addon,
  duration,
  damage,
  save,
  diff,
  cost,
  dc
}) => (
  <Card>
    <CardHeader
      title={`${name}`}
      subtitle={`${diff} | ${cost} SP`}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardTitle title={effect} subtitle={school} expandable={true} />
    <CardText expandable={true}>
      <ul style={{ listStyle: 'none' }}>
        <li><b>Components</b> {components}</li>
        <li><b>Time</b> {time}</li>
        <li><b>Delivery</b> {delivery}</li>
        {!!range && <li><b>Range</b> {range}</li>}
        {!!area && <li><b>Area</b> {area}</li>}
        {!!addon && <li><b>Additional targets</b> {addon}</li>}
        {!!duration && <li><b>Duration</b> {duration}</li>}
        {!!damage && <li><b>Damage</b> {damage}</li>}
        {!!save && <li><b>Save</b> {save}</li>}
        {!!dc && <li><b>DC</b> {dc}</li>}
        {!!diff && <li><b>Difficulty</b> {diff}</li>}
        {!!cost && <li><b>Cost</b> {cost} spell points</li>}
      </ul>
    </CardText>
    <CardActions expandable={true}>
      <IconButton
        tooltip="Modify in lab"
        touch={true}
        tooltipPosition="top-right"
      >
        <ActionSettings />
      </IconButton>
    </CardActions>
  </Card>
);

export default SpellCard;
