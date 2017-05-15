import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import hydraApp from './reducers';
import App from './components/App';
import './styles/index.css';

const initialState = {
  spellLab: {
    name: {
      value: ''
    },
    school: {
      value: ''
    },
    effect: {
      value: '',
      diff: 0
    },
    time: {
      value: '',
      diff: 0
    },
    components: {
      value: '',
      diff: 0
    },
    delivery: {
      value: '',
      diff: 0
    },
    range: {
      value: '',
      diff: 0
    },
    area: {
      value: '',
      diff: 0
    },
    addon: {
      value: '',
      diff: 0
    },
    duration: {
      value: '',
      diff: 0
    },
    save: {
      value: '',
      diff: 0
    },
    damage: {
      value: '',
      diff: 0
    }
  }
};

let store = createStore(hydraApp, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
