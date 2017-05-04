import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SpellCalculator from './SpellCalculator';
import SpellCard from './SpellCard';
import Spellbook from './Spellbook';
import HydraData from './HydraData';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#971e25',
    //primary2Color: cyan700,
    pickerHeaderColor: '#971e25',
  },
});


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caster: {
        statBonus: 4,
        skill: 9
      },
      diff: {
        effect: 0,
        time: 0,
        components: 0,
        delivery: 0,
        range: 0,
        area: 0,
        addon: 0,
        duration: 0,
        save: 0,
        damage: 0,
      },
      spell: {
        spellName: 'Spontaneous Spell',
        school: '',
        effect: {
          value: '',
          label: function() {},
        },
        time: {
          value: '',
          label: function() {},
        },
        components: {
          value: '',
          label: function() {},
        },
        delivery: {
          value: '',
          label: function() {},
        },
        range: {
          value: '',
          label: function() {},
        },
        area: {
          value: '',
          label: function() {},
        },
        addon: {
          value: '',
          label: function() {},
        },
        duration: {
          value: '',
          label: function() {},
        },
        save: {
          value: '',
          label: function() {},
        },
        damage: {
          value: '',
          label: function() {},
        },
      },
    };

    this.handleSpellChange = this.handleSpellChange.bind(this);
  }

  handleSpellChange (newState) {
    this.setState ((prevState) => ({
      diff: Object.assign(prevState.diff, newState.diff),
      spell: Object.assign(prevState.spell, newState.spell),
    }));
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <div className="flexbox-parent">
          <AppBar
            title="Spellbook"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div className="fill-area flexbox-item-grow">
            <Route exact path="/lab/create" render={(props) => <SpellCalculator data={HydraData} spell={this.state.spell} diff={this.state.diff} updateState={this.handleSpellChange}/>}/>

            <Route exact path="/spell" render={(props) => <SpellCard spell={this.state.spell} diff={this.state.diff} caster={this.state.caster}/>}/>

            <Route path="/spellbook" component={Spellbook}/>

            {/* <FloatingActionButton secondary={true} className="button-action button-main">
              <Route exact path="/lab/create" render={(props) => <SpellCalculator data={HydraData} spell={this.state.spell} diff={this.state.diff} updateState={this.handleSpellChange}/>}/>

              <Route exact path="/spell" render={(props) => <SpellCard spell={this.state.spell} diff={this.state.diff} caster={this.state.caster}/>}/> */}

              <Route path="/spellbook"  render={(props) => <FloatingActionButton secondary={true} className="button-action button-main"><ContentAdd /></FloatingActionButton>}/>

              <Route path="/spell"  render={(props) => <FloatingActionButton secondary={true} className="button-action button-main"><ModeEdit /></FloatingActionButton>}/>

            {/* <ul>
              <li><Link to="/lab/new">Calculator</Link></li>
              <li><Link to="/spell">SpellCard</Link></li>
              <li><Link to="/spellbook">Spellbook</Link></li>
            </ul> */}
          </div>
        </div>
      </Router>
    </MuiThemeProvider>
    );
  }
}

export default App;
