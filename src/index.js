import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import hydraApp from './reducers'

import App from './components/App';
import './styles/index.css';

const testState =  {
  spellLab: {
    name: {
      value: '',
    },
    school: {
      value: '',
      items: [ "Option 1", "Option 2", "Option 3" ],
    },
    effect: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    time: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    components: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    delivery: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    range: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    area: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    addon: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    duration: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    save: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],

    },
    damage: {
      value: '',
      diff: 0,
      items: [ "Option 1", "Option 2", "Option 3" ],
    },
  },
}

let store = createStore(hydraApp, testState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
