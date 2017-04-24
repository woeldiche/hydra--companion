import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/*
const style = {
  verticalAlign: "bottom",
  marginLeft: 20,
};
*/


class SpellCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // Data expects and array of objects containing the methods text and diff. Text is unique within the array and can be used as key. Diff is not.
  returnItems (data) {
    let items = [];

    data.forEach(function(value, key, map) {
      items.push(<MenuItem key={key} value={key} primaryText={key} />);
    });
    return items;
  }

  render() {
    return (
      <MuiThemeProvider>
        <Paper className="page">
          <form action="/" method="post">

            {/* Spell name */}
            <TextField className="form-input col-main" name="spellName" defaultValue="Spontaneous Spell" floatingLabelText="Spell name" underlineShow={false} />
            <Divider />

            {/* Magic School */}
            <SelectField className="form-input col-main" underlineShow={false} /* value={this.state.value} onChange={this.handleChange} */ name="school" floatingLabelText="School of magic" >
              {this.returnItems(this.props.data.school)}
            </SelectField>
            <Divider />

            {/* Base effect */}
            <SelectField underlineShow={false}  className="form-select col-main" /* value={this.state.value} onChange={this.handleChange} */ name="effect" floatingLabelText="Base effect" >
              {this.returnItems(this.props.data.browsers)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" defaultValue="0" name="effectDiff" floatingLabelText="Diff." />
            <Divider />
            {/*<Divider />*/}

            {/* Casting time */}
            <SelectField underlineShow={false}  className="form-select col-main" /* value={this.state.value} onChange={this.handleChange} */ name="time" floatingLabelText="Casting time" >
              {this.returnItems(this.props.data.time)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" defaultValue="0" name="timeDiff" floatingLabelText="Diff." />
            <Divider />

            {/* Components */}
            <SelectField underlineShow={false}  className="form-select col-main" /* value={this.state.value} onChange={this.handleChange}*/ name="components" floatingLabelText="Components">
              {this.returnItems(this.props.data.components)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" defaultValue="0" name="componentsDiff" floatingLabelText="Diff." />
            <Divider />

            {/* Delivery */}
            <SelectField underlineShow={false}  className="form-select col-main" /* value={this.state.value} onChange={this.handleChange} */ name="delivery" floatingLabelText="Delivery" >
              {this.returnItems(this.props.data.delivery)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" defaultValue="0" name="deliveryDiff" floatingLabelText="Diff." />
            <Divider />

            {/* Range */}
            <SelectField underlineShow={false}  className="form-select col-main" name="range" floatingLabelText="Range">
              {this.returnItems(this.props.data.range)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" defaultValue="0" name="rangeDiff" floatingLabelText="Diff." />
            <Divider />

            {/* Area */}
            <SelectField underlineShow={false}  className="form-select col-main" name="area" floatingLabelText="Area" >
              {this.returnItems(this.props.data.area)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" defaultValue="0" name="areaDiff" floatingLabelText="Diff." />
            <Divider />

            {/* Add-on */}
            <SelectField underlineShow={false}  className="form-select col-main" name="addon" floatingLabelText="Add-on" >
              {this.returnItems(this.props.data.browsers)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" defaultValue="0" name="addonDiff" floatingLabelText="Diff."  />
            <Divider />

            {/* Duration */}
            <SelectField underlineShow={false}  className="form-select col-main" name="duration" floatingLabelText="Duration" >
              {this.returnItems(this.props.data.browsers)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" defaultValue="0" name="durationDiff" floatingLabelText="Diff." />
            <Divider />

            {/* Save */}
            <SelectField underlineShow={false}  className="form-select col-main" name="save" floatingLabelText="Save" >
              {this.returnItems(this.props.data.browsers)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" name="dcValue" floatingLabelText="DC." />
            <Divider />

            {/* Duration */}
            <SelectField underlineShow={false}  className="form-select col-main" name="damage" floatingLabelText="Damage" >
              {this.returnItems(this.props.data.browsers)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" defaultValue="0" name="damageDiff" floatingLabelText="Diff." />
            <Divider />

            {/* Duration */}
            <SelectField underlineShow={false}  className="form-select col-main" name="sr" floatingLabelText="Spell Resistance" >
              {this.returnItems(this.props.data.browsers)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" defaultValue="0" name="srDiff" floatingLabelText="Diff." />
            <Divider />

            <p className="col-main" >
              <span>Difficulty: </span>
              <span name="difficulty"></span>
            </p>

            <p className="col-main" >
              <span>Cost: </span>
              <span name="cost"></span>
            </p>
          </form>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default SpellCalculator;
