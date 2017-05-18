import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconButton from 'material-ui/IconButton';
import LinkButton from './LinkButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const rightIconMenu = (
  <IconButton>
    <ModeEdit />
  </IconButton>
);

class FormulaList extends Component {
  componentDidMount() {
    // this.props.loadItems();
  }

  render() {
    let {
      btnAction,
      btnPath,
      btnClasses /*, items, didInvalidate */
    } = this.props;

    return (
      <div>
        <List style={{ width: '100%' }}>
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            rightIconButton={rightIconMenu}
            primaryText="Web"
            secondaryText="Transmutation | Level 15 | 3 SP"
            style={{ paddingRight: '12px' }}
          />
        </List>
        <LinkButton
          newPath={btnPath}
          classes={btnClasses}
          onUrlChange={btnAction}
        >
          <ContentAdd />
        </LinkButton>
      </div>
    );
  }
}

export default FormulaList;
