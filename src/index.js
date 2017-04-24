import React from 'react';
import ReactDOM from 'react-dom';
import SpellCalculator from './App';
import Data from './hydraConfig';
import './index.css';

ReactDOM.render(
  <SpellCalculator data={Data} />,
  document.getElementById('root')
);
