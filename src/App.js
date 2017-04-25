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


class SpellCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spellnName: 'Spontaneous Spell',
      school: '',
      effect: {
        value: '',
        label: '',
        diff: 0,
      },
      time: {
        value: '',
        label: '',
        diff: 0,
      },
      components: {
        value: '',
        label: '',
        diff: 0,
      },
      delivery: {
        value: '',
        label: '',
        diff: 0,
      },
      range: {
        value: '',
        label: '',
        diff: 0,
      },
      area: {
        value: '',
        label: '',
        diff: 0,
      },
      addon: {
        value: '',
        label: '',
        diff: 0,
      },
      duration: {
        value: '',
        label: '',
        diff: 0,
      },
      save: {
        value: '',
        label: '',
        diff: 0,
      },
      damage: {
        value: '',
        label: '',
        diff: 0,
      },
      sr: {
        value: 'Yes',
        label: 'Yes',
        diff: 0,
      },
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
    let groupingStyles = { fontWeight: "bold", };
    let childStyles = { paddingLeft: "2px", };

    data.forEach(function(value, key, map) {

      if (value === Object(value) && value.hasOwnProperty('children')) {
        let parent = key;

        items.push(<MenuItem key={key} style={groupingStyles} value={key} primaryText={key} />);
        value.children.forEach(function(value, key, map) {
          items.push(<MenuItem key={parent + '/' + key} style={childStyles} value={parent + '/' + key} primaryText={'-- ' + key} label={key} />);
        });
      }

      else {
        items.push(<MenuItem key={key} value={key} primaryText={key} />);
      }

    });

    return items;
  }

  render() {
    return (
      <MuiThemeProvider>
        <Paper className="page">
          <form action="/" method="post">

            {/* Spell name */}
            <TextField
              name="spellName"
              value={this.state.spellName}
              className="form-input col-main"
              defaultValue="Spontaneous Spell"
              floatingLabelText="Spell name"
              underlineShow={false}
            />
            <Divider />

            {/* Magic School */}
            <SelectField
              name="school"
              value={this.state.school.value}
              onChange={this.handleChange}
              className="form-input col-main"
              underlineShow={false}
              floatingLabelText="School of magic"
            >
              {this.returnItems(this.props.data.school)}
            </SelectField>
            <Divider />

            {/* Base effect */}
            <SelectField
              name="effect"
              value={this.state.effect.value}
              label={this.state.effect.label}
              onChange={this.handleChange}
              underlineShow={false}
              className="form-select col-main"
              floatingLabelText="Base effect"
            >
              {this.returnItems(this.props.data.effect)}
            </SelectField>
            <TextField
              name="effectDiff"
              value={this.state.effect.diff}
              onChange={this.handleDiffChange}
              underlineShow={false}
              className="form-input col-right"
              floatingLabelText="Diff."
            />
            <Divider />
            {/*<Divider />*/}

            {/* Casting time */}
            <SelectField
              name="time"
              value={this.state.time.value}
              onChange={this.handleChange}
              underlineShow={false}
              className="form-select col-main"
              floatingLabelText="Casting time"
            >
              {this.returnItems(this.props.data.time)}
            </SelectField>
            <TextField
              name="timeDiff"
              value={this.state.time.diff}
              onChange={this.handleDiffChange}
              underlineShow={false}
              className="form-input col-right"
              floatingLabelText="Diff."
            />
            <Divider />

            {/* Components */}
            <SelectField underlineShow={false}  className="form-select col-main" value={this.state.components.value} onChange={this.handleChange} name="components" floatingLabelText="Components">
              {this.returnItems(this.props.data.components)}
            </SelectField>
            <TextField
              name="componentsDiff"
              value={this.state.components.diff}
              onChange={this.handleDiffChange}
              underlineShow={false}
              className="form-input col-right"
              floatingLabelText="Diff."
            />
            <Divider />

            {/* Delivery */}
            <SelectField
              name="delivery"
              value={this.state.delivery.value}
              onChange={this.handleChange}
              underlineShow={false}
              className="form-select col-main"
              floatingLabelText="Delivery"
            >
              {this.returnItems(this.props.data.delivery)}
            </SelectField>
            <TextField underlineShow={false}
              name="deliveryDiff"
              value={this.state.delivery.diff}
              onChange={this.handleDiffChange}
              className="form-input col-right"
              floatingLabelText="Diff."
            />
            <Divider />

            {/* Range */}
            <SelectField
              name="range"
              value={this.state.range.value}
              label={this.state.range.label}
              onChange={this.handleChange}
              underlineShow={false}
              className="form-select col-main"
              floatingLabelText="Range"
            >
              {this.returnItems(this.props.data.range)}
            </SelectField>
            <TextField
              name="rangeDiff"
              value={this.state.range.diff}
              onChange={this.handleDiffChange}
              underlineShow={false}
              className="form-input col-right"
              floatingLabelText="Diff."
            />
            <Divider />

            {/* Area */}
            <SelectField
              name="area"
              value={this.state.area.value}
              label={this.state.area.label}
              onChange={this.handleChange}
              underlineShow={false}
              className="form-select col-main"
              floatingLabelText="Area"
            >
              {this.returnItems(this.props.data.area)}
            </SelectField>
            <TextField
              name="areaDiff"
              value={this.state.area.diff}
              onChange={this.handleDiffChange}
              underlineShow={false}
              className="form-input col-right"
              floatingLabelText="Diff."
            />
            <Divider />

            {/* Add-on */}
            <SelectField
              name="addon"
              value={this.state.addon.value}
              onChange={this.handleChange}
              underlineShow={false}
              className="form-select col-main"
              floatingLabelText="Add-on"
            >
              {this.returnItems(this.props.data.addon)}
            </SelectField>
            <TextField
              name="addonDiff"
              value={this.state.addon.diff}
              onChange={this.handleDiffChange}
              underlineShow={false}
              className="form-input col-right"
              floatingLabelText="Diff."  />
            <Divider />

            {/* Duration */}
            <SelectField underlineShow={false}  className="form-select col-main" name="duration" floatingLabelText="Duration" >
              {this.returnItems(this.props.data.duration)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" defaultValue="0" name="durationDiff" floatingLabelText="Diff." />
            <Divider />

            {/* Save */}
            <SelectField underlineShow={false}  className="form-select col-main" name="save" floatingLabelText="Save" >
              {this.returnItems(this.props.data.save)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" name="dcValue" floatingLabelText="DC." />
            <Divider />

            {/* Damage */}
            <SelectField underlineShow={false}  className="form-select col-main" name="damage" floatingLabelText="Damage" >
              {this.returnItems(this.props.data.damage)}
            </SelectField>
            <TextField underlineShow={false}  className="form-input col-right" defaultValue="0" name="damageDiff" floatingLabelText="Diff." />
            <Divider />

            {/* SR */}
            <SelectField underlineShow={false}  className="form-select col-main" name="sr" floatingLabelText="Spell Resistance" >
              {this.returnItems(this.props.data.sr)}
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
