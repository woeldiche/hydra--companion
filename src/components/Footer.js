import React from 'react';
import Paper from 'material-ui/Paper';

const Footer = ({ children }) => (
  <Paper zDepth={2}>
    <div className="footer">
      {children}
    </div>
  </Paper>
);

export default Footer;
