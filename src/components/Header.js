import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Route } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';

import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const Header = ({ title, backlink }) => (
  <div>
    {!backlink
      ? <AppBar
          title={title}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      : <Route
          render={({ history, location }) => (
            <AppBar
              title={title}
              onLeftIconButtonTouchTap={() => {
                history.push(backlink);
              }}
              iconElementLeft={<IconButton><ArrowBack /></IconButton>}
            />
          )}
        />}
  </div>
);

export default Header;
