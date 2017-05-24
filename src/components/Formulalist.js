import React, { Component } from 'react';
//import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Loader from './Loader';
import SpellCard from './SpellCard';

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
          : <div>
              <Subheader style={{ marginTop: '16px' }}>
                Known formulae
              </Subheader>
              {items.length > 0
                ? items.map(function(item) {
                    return <SpellCard key={item._id} {...item} />;
                  })
                : <div
                    style={{
                      paddingLeft: 16,
                      paddingRight: 16
                    }}
                  >
                    <p>No spells saved yet!</p>
                  </div>}
              {/* <ListItem
                      leftAvatar={<Avatar icon={<ActionAssignment />} />}
                      rightIconButton={rightIconMenu}
                      primaryText={`Spells name is ${item.name}`}
                      secondaryText={item.school}
                      style={{ paddingRight: '12px' }}
                      key={item._id}
                    /> */}
            </div>}
      </div>
    );
  }
}

export default FormulaList;
