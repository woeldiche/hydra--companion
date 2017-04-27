import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SpellCalculator from './SpellCalculator';
// import SpellCard from './SpellCard';
import HydraData from './hydraConfig';


import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="page">
          <SpellCalculator data={HydraData} />
          {/*<SpellCard />*/}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
