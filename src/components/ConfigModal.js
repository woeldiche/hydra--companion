import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class ConfigModal extends Component {
  render() {
    const { showModal, allowClose, handleClose, children } = this.props;
    const actions = [
      <RaisedButton
        label="Save"
        primary={true}
        disabled={!allowClose}
        onTouchTap={handleClose}
      />
    ];

    return (
      <Dialog
        title="Dialog With Actions"
        actions={actions}
        modal={true}
        open={showModal}
      >
        {children}
      </Dialog>
    );
  }
}

export default ConfigModal;
