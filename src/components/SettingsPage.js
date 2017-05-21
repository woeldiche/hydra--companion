import React from 'react';
import Header from './Header';
import Settings from '../containers/Settings';
// import LabStatus from '../LabStatus';

const SettingsPage = () => (
  <div className="flexbox-parent">
    <Header title="Settings" backlink="/" />
    <Settings />
  </div>
);

export default SettingsPage;
