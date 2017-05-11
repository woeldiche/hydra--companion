import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';


<div className="flexbox-parent">
  <AppBar
    title="Spellbook"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  <div className="fill-area flexbox-item-grow">
    <SpellCard spell={this.state.spell} diff={this.state.diff} caster={this.state.caster}/>
    <LinkButton newpath="/lab/create" classes="button-action button-main">
      <ModeEdit />
    </LinkButton>
    <LinkButton newpath="/spellbook" classes="button-action button-main">
      <ModeEdit />
    </LinkButton>
  </div>
</div>
