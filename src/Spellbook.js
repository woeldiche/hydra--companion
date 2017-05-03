import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';
// import MenuItem from 'material-ui/MenuItem';
// import SelectField from 'material-ui/SelectField';
// import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
// import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
// import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
// import ActionLabel from 'material-ui/svg-icons/action/label';

class Spellbook extends Component {
  render() {
    return (
      <div className="page">
        <AppBar
          title="Spellbook"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <List >
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIcon={<ModeEdit />}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
          />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIcon={<ModeEdit />}
            primaryText="Telekinesis"
            secondaryText="Transmutation | Level 12 | 2 SP"
          />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIcon={<ModeEdit />}
            primaryText="Fast Healing 2"
            secondaryText="Transmutation | Level 22 | 4 SP"
          />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIcon={<ModeEdit />}
            primaryText="Wall of Force"
            secondaryText="Evocation | Level 24 | 6 SP"
          />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIcon={<ModeEdit />}
            primaryText="Ball of Force"
            secondaryText="Evocation | Level 15 | 3 SP"
          />
        </List>
      </div>
    )
  }
}

export default Spellbook;
