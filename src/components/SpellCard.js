import React from 'react';
import { Route } from 'react-router-dom';
import { Card, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';

import ActionSettings from 'material-ui/svg-icons/action/settings';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';

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

const SpellCard = ({ showSpell, primaryStat, primarySkill, editFormula }) => {
  return (
    <Card>
      <CardTitle title={showSpell.name} subtitle={showSpell.school} />
      <List>
        <ListItem primaryText={showSpell.effect.value} secondaryText="Effect" />
        {paramItems(showSpell, primaryStat, primarySkill)}
        <ListItem
          primaryText={`DC ${showSpell.dcBase + (primaryStat !== 0 ? Math.floor((primaryStat - 10) / 2) : 0)}`}
          secondaryText="Save DC"
        />
        <ListItem
          primaryText={showSpell.difficulty}
          secondaryText="Difficulty"
        />
        <ListItem primaryText={`${showSpell.cost} SP`} secondaryText="Cost" />
      </List>

      <Route
        render={({ history, location }) => (
          <div>
            <IconButton
              tooltip="Modify in lab"
              touch={true}
              tooltipPosition="top-right"
              onClick={editFormula(showSpell._id, history)}
              style={{ display: 'inline-block' }}
            >
              <ActionSettings />
            </IconButton>
            <IconButton
              tooltip="Create copy"
              touch={true}
              tooltipPosition="top-right"
              onClick={editFormula(showSpell._id, history, true)}
              style={{ display: 'inline-block' }}
            >
              <ContentCopy />
            </IconButton>
          </div>
        )}
      />
    </Card>
  );
};

export default SpellCard;
