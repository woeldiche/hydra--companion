import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';

import ActionSettings from 'material-ui/svg-icons/action/settings';

const paramItems = (params, stat, skill) => {
  let items = [];
  for (let prop in params) {
    if (
      params[prop] !== undefined &&
      params[prop].hasOwnProperty('value') &&
      params[prop].value !== ''
    ) {
      items.push(
        <ListItem
          key={prop}
          primaryText={params[prop].value}
          secondaryText={prop}
        />
      );
    }
  }

  return items;
};

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
  difficulty,
  cost,
  dcBase,
  primaryStat,
  primarySkill
}) => (
  <Card>
    <CardTitle title={name} subtitle={school} />
    <List>
      <ListItem primaryText={effect.value} secondaryText="Effect" />
      {paramItems(
        {
          time,
          components,
          delivery,
          range,
          area,
          addon,
          duration,
          damage,
          save
        },
        primaryStat,
        primarySkill
      )}
      <ListItem
        primaryText={`DC ${dcBase + (primaryStat !== 0 ? Math.floor((primaryStat - 10) / 2) : 0)}`}
        secondaryText="Save DC"
      />
      <ListItem primaryText={difficulty} secondaryText="Difficulty" />
      <ListItem primaryText={`${cost} SP`} secondaryText="Cost" />
    </List>
    <IconButton
      tooltip="Modify in lab"
      touch={true}
      tooltipPosition="top-right"
    >
      <ActionSettings />
    </IconButton>
  </Card>
);

export default SpellCard;
