import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import MapsMyLocation from 'material-ui/svg-icons/maps/my-location';
import ActionLabel from 'material-ui/svg-icons/action/label';

import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class SpellCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spellName: 'Spontaneous Spell',
      school: '',
      difficulty: function (values) {
        let sum = 0;
        for (let prop in values) {
          sum = sum + values[prop];
        }
        return sum;
      },
      cost: function (diff) {
        return Math.round(diff / 5);
      },
      dc: function(diff, stat) {
        return Math.floor(diff/5 + stat + 10);
      },
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
        sr: 0
      },
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
      sr: {
        value: 'Yes',
        label: function() {},
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Create Array of MenuItems for SelectFields
  returnItems (data) {
    let items = [];
    let groupingStyles = { fontWeight: "bold", };
    let childStyles = { paddingLeft: "2px", };

    data.forEach(function(value, key, map) {
      // Check if returned value from map is an object with child entries.
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

  // Handle changes to state
  handleChange = (type, name) => (event, index, value) => {
    let newValue = value ? value : event.target.value;
    let newState = {};

    switch (type) {
      case "flat":
        newState = {
          [name]: newValue
        }
      break;

      case "deep":
        const data = this.getData(this.props.data, name, newValue);

        newState = {
          [name]: {
            value: data.value,
            label: data.label
          },
          diff: {
            [name]: data.diff,
          }
        }
      break;
      default:
    }

    this.setState ((prevState) => ({
      diff: Object.assign(prevState.diff, newState.diff),
      [name]: newState[name]
    }));
  }

  // Get values from config data to update other states as needed.
  getData (data, name, key) {
    const keyArray = key.split("/");
    let newDiff = 0;
    let newLabel = key;

    // Check if hierarchy of keys exists to get the deepest level.
    const relevantData = keyArray.length > 1 ? data[name].get(keyArray[0]).children.get(keyArray[1]) : data[name].get(keyArray[0]);

    // Check if object exists, otherwise fall back to defaults.
    if (relevantData === Object(relevantData)) {
      // If diff exists use it, otherwise leave as default (0)
      if (relevantData.hasOwnProperty('diff')) {
        newDiff = relevantData.diff;
      }

      // If special calculated value exists use it, other reuse key as label
      if (relevantData.hasOwnProperty('label')) {
        newLabel = relevantData.label;
      }
    }

    return {
      diff: newDiff,
      label: newLabel,
      value: key
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="page">
          <Paper className="section">
            <form action="/" method="post">

              {/* Spell name */}
              <TextField
                name="spellName"
                value={this.state.spellName}
                onChange={this.handleChange("flat", "spellName")}
                className="form-input col-main"
                floatingLabelText="Spell name"
                underlineShow={false}
              />
              <Divider />

              {/* Magic School */}
              <SelectField
                name="school"
                value={this.state.school}
                onChange={this.handleChange("flat", "school")}
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
                onChange={this.handleChange("deep", "effect")}
                underlineShow={false}
                className="form-select col-main"
                floatingLabelText="Base effect"
              >
                {this.returnItems(this.props.data.effect)}
              </SelectField>
              <TextField
                name="effectDiff"
                value={this.state.diff.effect}
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
                onChange={this.handleChange("deep", "time")}
                underlineShow={false}
                className="form-select col-main"
                floatingLabelText="Casting time"
              >
                {this.returnItems(this.props.data.time)}
              </SelectField>
              <TextField
                name="timeDiff"
                value={this.state.diff.time}
                onChange={this.handleDiffChange}
                underlineShow={false}
                className="form-input col-right"
                floatingLabelText="Diff."
              />
              <Divider />

              {/* Components */}
              <SelectField
                name="components"
                value={this.state.components.value}
                onChange={this.handleChange("deep", "components")}
                underlineShow={false}
                className="form-select col-main"
                floatingLabelText="Components"
              >
                {this.returnItems(this.props.data.components)}
              </SelectField>
              <TextField
                name="componentsDiff"
                value={this.state.diff.components}
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
                onChange={this.handleChange("deep", "delivery")}
                underlineShow={false}
                className="form-select col-main"
                floatingLabelText="Delivery"
              >
                {this.returnItems(this.props.data.delivery)}
              </SelectField>
              <TextField underlineShow={false}
                name="deliveryDiff"
                value={this.state.diff.delivery}
                onChange={this.handleDiffChange}
                className="form-input col-right"
                floatingLabelText="Diff."
              />
              <Divider />

              {/* Range */}
              <SelectField
                name="range"
                value={this.state.range.value}
                onChange={this.handleChange("deep", "range")}
                underlineShow={false}
                className="form-select col-main"
                floatingLabelText="Range"
              >
                {this.returnItems(this.props.data.range)}
              </SelectField>
              <TextField
                name="rangeDiff"
                value={this.state.diff.range}
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
                onChange={this.handleChange("deep", "area")}
                underlineShow={false}
                className="form-select col-main"
                floatingLabelText="Area"
              >
                {this.returnItems(this.props.data.area)}
              </SelectField>
              <TextField
                name="areaDiff"
                value={this.state.diff.area}
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
                onChange={this.handleChange("deep", "addon")}
                underlineShow={false}
                className="form-select col-main"
                floatingLabelText="Add-on"
              >
                {this.returnItems(this.props.data.addon)}
              </SelectField>
              <TextField
                name="addonDiff"
                value={this.state.diff.addon}
                onChange={this.handleDiffChange}
                underlineShow={false}
                className="form-input col-right"
                floatingLabelText="Diff."  />
              <Divider />

              {/* Duration */}
              <SelectField
                name="duration"
                value={this.state.duration.value}
                label={this.state.duration.label}
                onChange={this.handleChange("deep", "duration")}
                underlineShow={false}
                className="form-select col-main"
                floatingLabelText="Duration"
              >
                {this.returnItems(this.props.data.duration)}
              </SelectField>
              <TextField
                name="durationDiff"
                value={this.state.diff.duration}
                onChange={this.handleDiffChange}
                underlineShow={false}
                className="form-input col-right"
                floatingLabelText="Diff."
              />
              <Divider />

              {/* Save */}
              <SelectField
                name="save"
                value={this.state.save.value}
                onChange={this.handleChange("deep", "save")}
                underlineShow={false}
                className="form-select col-main"
                floatingLabelText="Save"
              >
                {this.returnItems(this.props.data.save)}
              </SelectField>
              <Divider />

              {/* Damage */}
              <SelectField
                name="damage"
                value={this.state.damage.value}
                onChange={this.handleChange("deep", "damage")}
                underlineShow={false}
                className="form-select col-main"
                floatingLabelText="Damage"
              >
                {this.returnItems(this.props.data.damage)}
              </SelectField>
              <TextField
                name="damageDiff"
                value={this.state.diff.damage}
                onChange={this.handleDiffChange}
                underlineShow={false}
                className="form-input col-right"
                floatingLabelText="Diff."
              />
              <Divider />

              {/* SR */}
              <SelectField
                name="sr"
                value={this.state.sr.value}
                onChange={this.handleChange("deep", "sr")}
                underlineShow={false}
                className="form-select col-main"
                floatingLabelText="Spell Resistance"
              >
                {this.returnItems(this.props.data.sr)}
              </SelectField>
              <TextField
                name="srDiff"
                value={this.state.diff.sr}
                onChange={this.handleDiffChange}
                underlineShow={false}
                className="form-input col-right"
                floatingLabelText="Diff."
              />

            </form>
          </Paper>

          <Paper className="section">
            <List>
              <ListItem primaryText={this.state.spellName} leftIcon={<ActionLabel />} />
              <ListItem primaryText={"Difficulty: " + this.state.difficulty(this.state.diff)} insetChildren={true} />
              <ListItem primaryText={"Cost: " + this.state.cost(this.state.difficulty(this.state.diff))} insetChildren={true} />
              <ListItem primaryText={"DC: " + this.state.dc(this.state.difficulty(this.state.diff), this.state.caster.statBonus)} insetChildren={true} />
            </List>

            {/*
            <p className="col-main" >
              <span>Difficulty: </span>
              <span name="difficulty">{this.state.difficulty(this.state.diff)}</span>
            </p>

            <p className="col-main" >
              <span>Cost: </span>
              <span name="cost">{this.state.cost(this.state.difficulty(this.state.diff))}</span>
            </p>

            <p className="col-main" >
              <span>DC: </span>
              <span name="dcValue">{this.state.dc(this.state.difficulty(this.state.diff), this.state.caster.statBonus)}</span>
            </p>


            <Divider />
            <List>
              <ListItem primaryText={"Area: " + this.state.area.label(this.state.caster.skill)} leftIcon={<MapsMyLocation />} />
              <ListItem primaryText={"Effect: " + this.state.effect.label(this.state.caster.skill)} leftIcon={<MapsMyLocation />} />
              <ListItem primaryText={"Time: " + this.state.area.label(this.state.caster.skill)} leftIcon={<MapsMyLocation />} />
              <ListItem primaryText={"Component: " + this.state.area.label(this.state.caster.skill)} leftIcon={<MapsMyLocation />} />
              <ListItem primaryText={"Range: " + this.state.area.label(this.state.caster.skill)} leftIcon={<MapsMyLocation />} />
              <ListItem primaryText={"Effect: " + this.state.area.label(this.state.caster.skill)} leftIcon={<MapsMyLocation />} />
              <ListItem primaryText={"Addon: " + this.state.area.label(this.state.caster.skill)} leftIcon={<MapsMyLocation />} />

            </List>
            label={this.state.range.label(this.state.caster.skill)}
            */}
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default SpellCalculator;
