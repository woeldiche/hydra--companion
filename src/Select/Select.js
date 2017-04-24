import React, { Component } from 'react';

class Select extends Component {
  render() {
    // Create array of options nodes
    let options = [];
    for (var [key, value] of Object.entries(this.props.options)) {
      options.push(<option key={key} value={value}>{key}</option>);
    }

    return (
      <select id={this.props.id}>
        {options}
      </select>
    );
  }
}

export default Select;
