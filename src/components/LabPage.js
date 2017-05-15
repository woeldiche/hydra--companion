import React from 'react';
import Header from './Header';
import SpellCalculator from '../containers/SpellCalculator';
import LabResult from '../containers/LabResult';
import Footer from './Footer';
// import LabStatus from '../LabStatus';

const LabPage = () => (
  <div className="flexbox-parent">
    <Header title="Lab" />
    <div className="fill-area flexbox-item-grow">
      <SpellCalculator />
    </div>
    <Footer>
      <LabResult />
      {/* <LabStatus /> */}
    </Footer>
  </div>
);

export default LabPage;
