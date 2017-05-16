import React from 'react';
import FooterAddon from './FooterAddon';
import Snackbar from 'material-ui/Snackbar';
import LinearProgress from 'material-ui/LinearProgress';

const LabNetworkFeedback = ({
  isSaving,
  didSave,
  didNotify,
  handleRequestClose
}) => (
  <FooterAddon>
    {isSaving && <LinearProgress mode="indeterminate" />}
    <Snackbar
      open={didSave && !didNotify}
      message="Saved formula"
      autoHideDuration={4000}
      onRequestClose={handleRequestClose}
    />
  </FooterAddon>
);

export default LabNetworkFeedback;
