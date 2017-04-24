import React, { Component } from 'react';
import Select from './Select';

// Example
// <FormItemSelect id="form-browsers" label="This is a label" options={this.props.options.browsers}/>

class FormItemSelect extends Component {
  render() {
    return (
      <div className="form-item">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <Select id={this.props.id} options={this.props.options}/>
      </div>
    );
  }
}

export default FormItemSelect;
