import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';
// import MenuItem from 'material-ui/MenuItem';
// import SelectField from 'material-ui/SelectField';
// import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ActionLabel from 'material-ui/svg-icons/action/label';

class SpellCard extends Component {
  render() {
    return (
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
    );
  }
}

export default SpellCard;
