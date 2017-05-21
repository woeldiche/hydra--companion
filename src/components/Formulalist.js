import React, { Component } from 'react';
//import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconButton from 'material-ui/IconButton';
import Section from './Section.js';
import Loader from './Loader';

const rightIconMenu = (
  <IconButton>
    <ModeEdit />
  </IconButton>
);

class FormulaList extends Component {
  componentDidMount() {
    if (this.props.didInvalidate) {
      this.props.loadItems(this.props.caster, this.props.didInvalidate);
    }
  }

  render() {
    const { didFetch, isFetching, items } = this.props;

    return (
      <div>
        {!didFetch || isFetching
          ? <Loader />
          : <Section title="Known Formulae">
              <List style={{ width: '100%' }}>
                {items.map(function(item) {
                  return (
                    <ListItem
                      leftAvatar={<Avatar icon={<ActionAssignment />} />}
                      rightIconButton={rightIconMenu}
                      primaryText={item.name}
                      secondaryText={item.school}
                      style={{ paddingRight: '12px' }}
                      key={item._id}
                    />
                  );
                })}
              </List>
            </Section>}
      </div>
    );
  }
}

export default FormulaList;
