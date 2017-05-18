import React from 'react';
import Header from './Header';
import SpellBook from '../containers/SpellBook';

const SpellBookPage = () => (
  <div className="flexbox-parent">
    <Header title="Spellbook" />
    <div className="fill-area flexbox-item-grow">
      <SpellBook />
    </div>
  </div>
);

export default SpellBookPage;
