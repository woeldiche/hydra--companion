import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SpellCalculator from './SpellCalculator';
import SpellCard from './SpellCard';
import HydraData from './HydraData';


import './App.css';

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
      <MuiThemeProvider>
        <div className="page">
          <SpellCalculator data={HydraData} spell={this.state.spell} diff={this.state.diff} updateState={this.handleSpellChange}/>
          <SpellCard spell={this.state.spell} diff={this.state.diff} caster={this.state.caster}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
