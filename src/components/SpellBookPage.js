import React from 'react';
import Header from './Header';
import SpellBook from '../containers/SpellBook';

const SpellBookPage = () => (
  <div className="flexbox-parent">
    <Header title="Spellbook" />
    <SpellBook />
  </div>
);

export default SpellBookPage;
