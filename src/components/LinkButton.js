import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
//import ContentAdd from 'material-ui/svg-icons/content/add';

class LinkButton extends Component {
  render() {
    return (
      <Route
        render={({ history }) => (
          <FloatingActionButton
            className={this.props.classes}
            onClick={() => {
              history.push(this.props.newpath);
            }}
          >
            {this.props.children}
          </FloatingActionButton>
        )}
      />
    );
  }
}

export default LinkButton;
