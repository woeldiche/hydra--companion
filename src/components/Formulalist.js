import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Section from './Section';
import { List, ListItem } from 'material-ui/List';

import Loader from './Loader';
import SpellCard from './SpellCard';
import SpellList from './SpellList';

class FormulaList extends Component {
  componentDidMount() {
    if (this.props.didInvalidate) {
      this.props.loadItems(this.props.caster, this.props.didInvalidate);
    }
  }

  render() {
    const {
      didFetch,
      isFetching,
      items,
      primaryStat,
      primarySkill,
      viewedFormula,
      openDrawer,
      onDrawerChange,
      showFormula
    } = this.props;

    return (
      <div>
        {!didFetch || isFetching
          ? <Loader />
          : <div>
              <Section title="Known formulas">
                <List>
                  {items.length > 0
                    ? items.map(function({ _id, caster, ...item }) {
                        return (
                          <div key={_id}>
                            <SpellList
                              onClick={showFormula(_id)}
                              primarySkill={primarySkill}
                              primaryStat={primaryStat}
                              {...item}
                            />
                          </div>
                        );
                      })
                    : <ListItem
                        style={{
                          paddingLeft: 16,
                          paddingRight: 16
                        }}
                      >
                        <p>No spells saved yet!</p>
                      </ListItem>}
                </List>
              </Section>
              <Drawer
                docked={false}
                width={'90%'}
                openSecondary={true}
                open={openDrawer}
                onRequestChange={onDrawerChange}
                disableSwipeToOpen={true}
              >
                <SpellCard
                  primarySkill={primarySkill}
                  primaryStat={primaryStat}
                  showSpell={viewedFormula}
                />
              </Drawer>
            </div>}
      </div>
    );
  }
}

export default FormulaList;
