import React from 'react';
import Header from './Header';
import Settings from '../containers/Settings';
// import LabStatus from '../LabStatus';

const SettingsPage = () => (
  <div className="flexbox-parent">
    <Header title="Settings" backlink="/" />
    <div className="fill-area flexbox-item-grow">
      <Settings />
    </div>
  </div>
);

export default SettingsPage;
