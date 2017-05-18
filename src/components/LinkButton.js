import React from 'react';
import { Route } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
//import ContentAdd from 'material-ui/svg-icons/content/add';

const LinkButton = ({ classes, newPath, onUrlChange, children }) => (
  <Route
    render={({ history, location }) => (
      <FloatingActionButton
        className={classes}
        onClick={() => {
          console.log(history, location);
          onUrlChange(newPath, location.pathname);
          history.push(newPath);
        }}
      >
        {children}
      </FloatingActionButton>
    )}
  />
);

export default LinkButton;
