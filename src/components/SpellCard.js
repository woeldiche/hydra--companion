import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  CardTitle
} from 'material-ui/Card';
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
    <CardHeader
      title={`${name}`}
      subtitle={`D: ${difficulty}  /  ${cost} SP  /  DC ${dcBase + (primaryStat !== 0 ? Math.floor((primaryStat - 10) / 2) : 0)}`}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardTitle title={effect.value} subtitle={school} expandable={true} />
    <CardText
      style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 0 }}
      expandable={true}
      rel="cardText"
    >

      <List>
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
      </List>

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
