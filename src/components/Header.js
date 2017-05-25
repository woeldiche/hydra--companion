import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Route } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';

import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionSettings from 'material-ui/svg-icons/action/settings';

const Header = ({ title, backlink }) => (
  <div>
    <Route
      render={({ history, location }) =>
        !backlink
          ? <AppBar
              title={title}
              iconElementRight={<IconButton><ActionSettings /></IconButton>}
              onRightIconButtonTouchTap={() => {
                history.push('/settings');
              }}
            />
          : <AppBar
              title={title}
              onLeftIconButtonTouchTap={() => {
                history.push(backlink);
              }}
              onRightIconButtonTouchTap={() => {
                history.push('/settings');
              }}
              iconElementRight={<IconButton><ActionSettings /></IconButton>}
              iconElementLeft={<IconButton><ArrowBack /></IconButton>}
            />}
    />
  </div>
);

export default Header;
