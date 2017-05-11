import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LabPage from './LabPage';
import '../styles/App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <LabPage />
      </MuiThemeProvider>
    );
  }
}

export default App;
