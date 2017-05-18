import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LabPage from './LabPage';
import SettingsPage from './SettingsPage';
import SpellBookPage from './SpellBookPage';
import '../styles/App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="page">
            <Route path="/lab" component={LabPage} />
            <Route exact path="/" component={SpellBookPage} />
            <Route path="/settings" component={SettingsPage} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
