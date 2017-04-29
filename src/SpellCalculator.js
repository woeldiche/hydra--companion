import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
// import {List, ListItem} from 'material-ui/List';
// import ActionLabel from 'material-ui/svg-icons/action/label';

class SpellCalculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.returnItems = this.returnItems.bind(this);

    this.state = {
      showRange: false,
      showArea: false,
      showDamage: false
    }
  }

  // fx     range, delivery
  showField(field, controllingField) {
    let keyArray = [];
    let config = false;
    const props = this.props;


    controllingField.forEach(function(item) {
      const entry = props.spell[item];
      const value = (entry === Object(entry) && entry.hasOwnProperty('value') ? entry.value : entry);

      if (value !== "") {
        keyArray.push(value);
      }
    });

    const key = keyArray.join("/");

    if (key !== "") {
      config = this.props.data.get(controllingField.pop(), key);

      if (config === Object(config) && config.hasOwnProperty(field)) {
        return config[field];
      } else {
        return false;
      }
    } else {
      return false;
    }
    // return true;
  }

  returnEffectItems (data, school = "") {
    return school !== "" ? this.returnItems(data.get(school).children, true) : this.returnItems(data, false);
  }

  // Create Array of MenuItems for SelectFields
  returnItems (data, shallow = false) {
    let items = [];
    let groupingStyles = { fontWeight: "bold", };
    let childStyles = { paddingLeft: "2px", };

    data.forEach(function(value, key, map) {
      // Check if returned value from map is an object with child entries.
      if (value === Object(value) && shallow === false && value.hasOwnProperty('children')) {
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
  handleChange = (type, names) => (event, index, value) => {
    const props = this.props;
    let newValue = value ? value : event.target.value;
    let newSpellSettings = {};
    let dataKey = newValue;
    let name;

    if (Array.isArray(names) && names.length > 1) {
      // Get current value for parent prop.
      // We need this to look up data for effects children.
      const parentEntry = props.spell[names[0]];
      const parentValue = (parentEntry === Object(parentEntry) && parentEntry.hasOwnProperty('value') ? parentEntry.value : parentEntry);

      if (parentValue === "") {
        // If no parentValue is chosen child should contain full hierarchy.
        dataKey = newValue;
      } else {
        let values = [parentValue];
        values.push(newValue);
        dataKey = values.join('/');
      }
      name = names.pop();
    } else {
      name = names;
    }

    switch (type) {
      case "flat":
        newSpellSettings = {
          spell: {
            [name]: newValue
          }
        }
      break;

      case "deep":
        const data = this.props.data.get(name, dataKey);

        newSpellSettings = {
          spell: {
            [name]: {
              value: newValue,
              label: data.label
            },
          },
          diff: {
            [name]: data.diff,
          }
        }
      break;

      case "diff":
        newSpellSettings = {
          diff: {
            [name]: Number.isNaN(parseInt(newValue, 10)) ? "" : parseInt(newValue, 10)
          }
        }
      break;
      default:
    }

    this.props.updateState(newSpellSettings);
  }

  render() {
    return (
      <Paper className="section">
        <TextField
          name="spellName"
          value={this.props.spell.spellName}
          onChange={this.handleChange("flat", "spellName")}
          className="form-input col-main"
          floatingLabelText="Spell name"
        />
        <SelectField
          name="school"
          value={this.props.spell.school}
          onChange={this.handleChange("flat", "school")}
          className="form-input col-main"
          floatingLabelText="School of magic"
        >
          {this.returnItems(this.props.data.effect, true)}
        </SelectField>

        <Divider style={{marginTop: '25px',}} />

        <SelectField
          name="effect"
          value={this.props.spell.effect.value}
          onChange={this.handleChange("deep", ["school", "effect"])}
          className="form-select col-main"
          floatingLabelText="Base effect"
        >
          {this.returnEffectItems(this.props.data.effect, this.props.spell.school)}
        </SelectField>

        <TextField
          name="effectDiff"
          value={this.props.diff.effect}
          onChange={this.handleChange("diff", "effect")}
          className="form-input col-right"
          floatingLabelText="Diff."
        />

        <SelectField
          name="time"
          value={this.props.spell.time.value}
          onChange={this.handleChange("deep", "time")}
          className="form-select col-main"
          floatingLabelText="Casting time"
        >
          {this.returnItems(this.props.data.time)}
        </SelectField>
        <TextField
          name="timeDiff"
          value={this.props.diff.time}
          onChange={this.handleChange("diff", "time")}
          className="form-input col-right"
          floatingLabelText="Diff."
        />

        <SelectField
          name="components"
          value={this.props.spell.components.value}
          onChange={this.handleChange("deep", "components")}
          className="form-select col-main"
          floatingLabelText="Components"
        >
          {this.returnItems(this.props.data.components)}
        </SelectField>
        <TextField
          name="componentsDiff"
          value={this.props.diff.components}
          onChange={this.handleChange("diff", "components")}
          className="form-input col-right"
          floatingLabelText="Diff."
        />

        <SelectField
          name="delivery"
          value={this.props.spell.delivery.value}
          onChange={this.handleChange("deep", "delivery")}
          className="form-select col-main"
          floatingLabelText="Delivery"
        >
          {this.returnItems(this.props.data.delivery)}
        </SelectField>
        <TextField
          name="deliveryDiff"
          value={this.props.diff.delivery}
          onChange={this.handleChange("diff", "delivery")}
          className="form-input col-right"
          floatingLabelText="Diff."
        />

        {this.showField("range", ["delivery"]) &&
          <div className="form-row">
            <SelectField
              name="range"
              value={this.props.spell.range.value}
              onChange={this.handleChange("deep", "range")}
              className="form-select col-main"
              floatingLabelText="Range"
            >
              {this.returnItems(this.props.data.range)}
            </SelectField>
            <TextField
              name="rangeDiff"
              value={this.props.diff.range}
              onChange={this.handleChange("diff", "range")}
              className="form-input col-right"
              floatingLabelText="Diff."
            />
          </div>
        }

        {this.showField("area", ["delivery"]) &&
          <div className="form-row">
            <SelectField
              name="area"
              value={this.props.spell.area.value}
              onChange={this.handleChange("deep", "area")}
              className="form-select col-main"
              floatingLabelText="Area"
            >
              {this.returnItems(this.props.data.area)}
            </SelectField>
            <TextField
              name="areaDiff"
              value={this.props.diff.area}
              onChange={this.handleChange("diff", "area")}
              className="form-input col-right"
              floatingLabelText="Diff."
            />
          </div>
        }

        <SelectField
          name="addon"
          value={this.props.spell.addon.value}
          onChange={this.handleChange("deep", "addon")}
          className="form-select col-main"
          floatingLabelText="Add-on"
        >
          {this.returnItems(this.props.data.addon)}
        </SelectField>
        <TextField
          name="addonDiff"
          value={this.props.diff.addon}
          onChange={this.handleChange("diff", "addon")}
          className="form-input col-right"
          floatingLabelText="Diff."
        />

        <SelectField
          name="duration"
          value={this.props.spell.duration.value}
          onChange={this.handleChange("deep", "duration")}
          className="form-select col-main"
          floatingLabelText="Duration"
        >
          {this.returnItems(this.props.data.duration)}
        </SelectField>
        <TextField
          name="durationDiff"
          value={this.props.diff.duration}
          onChange={this.handleChange("diff", "duration")}
          className="form-input col-right"
          floatingLabelText="Diff."
        />

        <SelectField
          name="save"
          value={this.props.spell.save.value}
          onChange={this.handleChange("deep", "save")}
          className="form-select col-main"
          floatingLabelText="Save"
        >
          {this.returnItems(this.props.data.save)}
        </SelectField>

        {this.showField("damage", ["school", "effect"]) &&
          <div className="form-row">
            <SelectField
              name="damage"
              value={this.props.spell.damage.value}
              onChange={this.handleChange("deep", "damage")}
              className="form-select col-main"
              floatingLabelText="Damage"
            >
              {this.returnItems(this.props.data.damage)}
            </SelectField>
            <TextField
              name="damageDiff"
              value={this.props.diff.damage}
              onChange={this.handleChange("diff", "damage")}
              className="form-input col-right"
              floatingLabelText="Diff."
            />
          </div>
        }
      </Paper>
    );
  }
}

export default SpellCalculator;
