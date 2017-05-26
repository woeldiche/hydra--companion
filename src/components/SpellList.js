import React from 'react';
import { ListItem } from 'material-ui/List';

const SpellItem = ({
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
  difficulty,
  cost,
  dcBase,
  primaryStat,
  primarySkill,
  ...props
}) => (
  <ListItem
    //leftAvatar={<Avatar src="images/ok-128.jpg" />}
    primaryText={`${name}`}
    secondaryText={
      <p>
        {effect.value} -
        {!!range && !!range.value && <span> {range.value}</span>}<br />
        Difficulty:
        {' '}
        {difficulty}
        {' '}
        /
        {' '}
        {cost}
        {' '}
        SP  /  DC
        {' '}
        {dcBase + (primaryStat !== 0 ? Math.floor((primaryStat - 10) / 2) : 0)}
        {' '}
      </p>
    }
    secondaryTextLines={2}
    {...props}
  />
);

export default SpellItem;
