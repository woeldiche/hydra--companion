import React from 'react';
import Header from './Header';
import SpellCalculator from '../containers/SpellCalculator';
// import LabResult from '../LabResult';
// import LabStatus from '../LabStatus';

const LabPage = () => (
  <div className="flexbox-parent">
    <Header title="Lab" />
    <div className="fill-area flexbox-item-grow">
      <SpellCalculator />
    </div>
    {/* <LabResult />
      <LabStatus /> */}
  </div>
)

export default LabPage;
